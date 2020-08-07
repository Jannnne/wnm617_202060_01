
const ListPage = async(d=0) => {
	if(!d) d = await query({type:"artworks_by_location_id",params:[sessionStorage.userId]})

	$("#list-page .Locationlist").html(
		d.result.length ?
			makeLocationList(d.result) :
			"You need to add some Locations, jack."
	);

	$("#list-page .list-filters").html(listFilters(d.result));

	$("#list-add-form .inputs").html(makeLocationProfileInputs({
		name:'',
		type:'',
		breed:'',
		description:''
	}))
}






const RecentPage = async(d=0) => {
	if(!d) d = await query({type:"recent_locations",params:[sessionStorage.userId]});

	let map_el = await makeMap("#recent-page .map");

	let valid_Locations = d.result.reduce((r,o)=>{
		o.icon = o.img;
		if(o.lat && o.lng) r.push(o);
		return r;
	},[]);

	makeMarkers(map_el,valid_Locations);

	map_el.data("markers").forEach((o,i)=>{
		o.addListener("click",function(){
			// INFOWINDOW EXAMPLE
			map_el.data("infoWindow").open(map_el.data("map"),o);
			map_el.data("infoWindow").setContent(makeRecentProfile(valid_Locations[i]))

			// SIMPLE NAVIGATION
			// sessionStorage.locationId = valid_Locations[i].Location_id;
			// $.mobile.navigate("#location-profile-page");

			// DRAWER EXAMPLE
			// $("#recent-profile-drawer")
			// 	.toggleClass("active")
			// 	.find(".modal-body").html(makeRecentProfile(valid_Locations[i]))
		})
	});
}






const ProfilePage = async() => {
	let d = await query({type:"user_by_id",params:[sessionStorage.userId]});

	$("#profile-page .profile")
		.html(makeUserProfile(d.result[0]));
}

const LocationProfilePage = async() => {
	if(sessionStorage.locationId===undefined) throw("No Location ID in Storage");

	query({type:"Location_by_id",params:[sessionStorage.locationId]})
	.then(d=>{
		$("#location-profile-page .profile-head")
			.html(makeLocationProfile(d.result[0]));
	});

	query({type:"locations_by_Location_id",params:[sessionStorage.locationId]})
	.then(async (d)=>{
		let map_el = await makeMap("#location-profile-page .map");

		makeMarkers(map_el,d.result);
	});
}




const SettingsProfilePage = async() => {
	let d = await query({type:"user_by_id",params:[sessionStorage.userId]});

	$("#settings-profile-id").val(sessionStorage.userId);
	$("#settings-profile-page .inputs")
		.html(makeSettingsProfileInputs(d.result[0]));
}
const SettingsLocationProfilePage = async() => {
	let d = await query({type:"Location_by_id",params:[sessionStorage.locationId]});

	$("#settings-location-profile-id").val(sessionStorage.locationId);
	$("#settings-location-profile-page .inputs")
		.html(makeLocationProfileInputs(d.result[0],'settings-location-profile'));
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
