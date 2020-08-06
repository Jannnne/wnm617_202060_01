
const ListPage = async(d=0) => {
	if(!d) d = await query({type:"animals_by_user_id",params:[sessionStorage.userId]})

	$("#list-page .animallist").html(
		d.result.length ?
			makeAnimalList(d.result) :
			"You need to add some animals, jack."
	);

	$("#list-page .list-filters").html(listFilters(d.result));

	$("#list-add-form .inputs").html(makeAnimalProfileInputs({
		name:'',
		type:'',
		breed:'',
		description:''
	}))
}






const RecentPage = async(d=0) => {
	if(!d) d = await query({type:"recent_locations",params:[sessionStorage.userId]});

	let map_el = await makeMap("#recent-page .map");

	let valid_animals = d.result.reduce((r,o)=>{
		o.icon = o.img;
		if(o.lat && o.lng) r.push(o);
		return r;
	},[]);

	makeMarkers(map_el,valid_animals);

	map_el.data("markers").forEach((o,i)=>{
		o.addListener("click",function(){
			// INFOWINDOW EXAMPLE
			map_el.data("infoWindow").open(map_el.data("map"),o);
			map_el.data("infoWindow").setContent(makeRecentProfile(valid_animals[i]))

			// SIMPLE NAVIGATION
			// sessionStorage.animalId = valid_animals[i].animal_id;
			// $.mobile.navigate("#animal-profile-page");

			// DRAWER EXAMPLE
			// $("#recent-profile-drawer")
			// 	.toggleClass("active")
			// 	.find(".modal-body").html(makeRecentProfile(valid_animals[i]))
		})
	});
}






const ProfilePage = async() => {
	let d = await query({type:"user_by_id",params:[sessionStorage.userId]});

	$("#profile-page .profile")
		.html(makeUserProfile(d.result[0]));
}

const AnimalProfilePage = async() => {
	if(sessionStorage.animalId===undefined) throw("No animal ID in Storage");

	query({type:"animal_by_id",params:[sessionStorage.animalId]})
	.then(d=>{
		$("#animal-profile-page .profile-head")
			.html(makeAnimalProfile(d.result[0]));
	});

	query({type:"locations_by_animal_id",params:[sessionStorage.animalId]})
	.then(async (d)=>{
		let map_el = await makeMap("#animal-profile-page .map");

		makeMarkers(map_el,d.result);
	});
}




const SettingsProfilePage = async() => {
	let d = await query({type:"user_by_id",params:[sessionStorage.userId]});

	$("#settings-profile-id").val(sessionStorage.userId);
	$("#settings-profile-page .inputs")
		.html(makeSettingsProfileInputs(d.result[0]));
}
const SettingsAnimalProfilePage = async() => {
	let d = await query({type:"animal_by_id",params:[sessionStorage.animalId]});

	$("#settings-animal-profile-id").val(sessionStorage.animalId);
	$("#settings-animal-profile-page .inputs")
		.html(makeAnimalProfileInputs(d.result[0],'settings-animal-profile'));
}



const AddLocationPage = async() => {
	let map_el = await makeMap("#add-location-page .map");

	map_el.data("map").addListener("click",function(e) {
		$("#add-location-lat").val(e.latLng.lat())
		$("#add-location-lng").val(e.latLng.lng())
		makeMarkers(map_el,[{lat:e.latLng.lat(),lng:e.latLng.lng(),icon:'https://via.placeholder.com/40?text=PIN'}])
	})
}

const SettingsProfileUploadPage = async() => {
	let d = await query({type:"user_by_id",params:[sessionStorage.userId]});

	$("#settings-profile-upload-form .image-uploader")
		.css('background-image',`url('${d.result[0].img}')`);
}
