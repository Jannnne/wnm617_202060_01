
const ListPage = async(d=0) => {
	if(!d) d = await query({type:"places_by_user_id",params:[sessionStorage.userId]})

	$("#list-page .placelist").html(
		d.result.length ?
			makeplaceList(d.result) :
			"You need to add some places, jack."
	);

	$("#list-page .list-filters").html(listFilters(d.result));

	$("#list-add-form .inputs").html(makeplaceProfileInputs({
		name:'',
		type:'',
		breed:'',
		description:''
	}))
}






const RecentPage = async(d=0) => {
	if(!d) d = await query({type:"recent_artworks",params:[sessionStorage.userId]});

	let map_el = await makeMap("#recent-page .map");

	let valid_places = d.result.reduce((r,o)=>{
		o.icon = o.img;
		if(o.lat && o.lng) r.push(o);
		return r;
	},[]);

	makeMarkers(map_el,valid_places);

	map_el.data("markers").forEach((o,i)=>{
		o.addListener("click",function(){
			// INFOWINDOW EXAMPLE
			map_el.data("infoWindow").open(map_el.data("map"),o);
			map_el.data("infoWindow").setContent(makeRecentProfile(valid_places[i]))

			// SIMPLE NAVIGATION
			// sessionStorage.placeId = valid_places[i].place_id;
			// $.mobile.navigate("#place-profile-page");

			// DRAWER EXAMPLE
			// $("#recent-profile-drawer")
			// 	.toggleClass("active")
			// 	.find(".modal-body").html(makeRecentProfile(valid_places[i]))
		})
	});
}






const ProfilePage = async() => {
	let user = await query({type:"user_by_id",params:[sessionStorage.userId]});
	let places = await query({type:"places_by_user_id",params:[sessionStorage.userId]});
	let artworks = await query({type:"artworks_by_user_id",params:[sessionStorage.userId]});

	$("#profile-page .profile")
		.html(makeUserProfile(user.result[0],places.result,artworks.result));
}

const placeProfilePage = async() => {
	if(sessionStorage.placeId===undefined) throw("No place ID in Storage");

	let place = await query({type:"place_by_id",params:[sessionStorage.placeId]})
	let artworks = await query({type:"artworks_by_place_id",params:[sessionStorage.placeId]})
	
	$("#place-profile-page h1").html(place.result[0].name)

	$("#place-profile-page .profile-head").removeClass("active")
		.html(makeplaceProfile(place.result[0],artworks.result));

	let map_el = await makeMap("#place-profile-page .map");

	makeMarkers(map_el,artworks.result);
}




const SettingsProfilePage = async() => {
	let d = await query({type:"user_by_id",params:[sessionStorage.userId]});

	$("#settings-profile-id").val(sessionStorage.userId);
	$("#settings-profile-page .inputs")
		.html(makeSettingsProfileInputs(d.result[0]));
}
const SettingsplaceProfilePage = async() => {
	let d = await query({type:"place_by_id",params:[sessionStorage.placeId]});

	$("#settings-place-profile-id").val(sessionStorage.placeId);
	$("#settings-place-profile-page .inputs")
		.html(makeplaceProfileInputs(d.result[0],'settings-place-profile'));
}



const AddartworkPage = async() => {
	let map_el = await makeMap("#add-artwork-page .map");

	map_el.data("map").addListener("click",function(e) {
		$("#add-artwork-lat").val(e.latLng.lat())
		$("#add-artwork-lng").val(e.latLng.lng())
		makeMarkers(map_el,[{lat:e.latLng.lat(),lng:e.latLng.lng(),icon:'https://via.placeholder.com/40?text=PIN'}])
	})
}

const SettingsProfileUploadPage = async() => {
	let d = await query({type:"user_by_id",params:[sessionStorage.userId]});

	$("#settings-profile-upload-form .image-uploader")
		.css('background-image',`url('${d.result[0].img}')`);
}







const ChooseplacePage = async () => {
	let places = await query({type:'places_by_user_id',params:[sessionStorage.userId]});

	$("#add-artwork-place-id").html(makeSelectOptions(places.result.map(o=>([o.id,o.name]))));
}

const AddplacePage = async(d=0) => {
	$("#add-place-form .inputs").html(makeplaceProfileInputs({
		name:'',
		type:'',
		breed:'',
		description:''
	},'add-place'))
}