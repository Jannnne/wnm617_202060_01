const ListPage = async() => {

	let d = await query({type:"animals_by_user_id",params:[sessionStorage.userId]})

	console.log(d)

	$("#list-page .animallist")
		.html(makeAnimalList(d.result))
}

const RecentPage = async() => {
	let d = await query({type:"recent_locations",params:[sessionStorage.userId]});

	let map_el = await makeMap("#recent-page .map");

	let valid_animals = d.result.reduce((r,o)=>{
		o.icon = o.img;
		if(o.lat && o.lng) r.push(o);
		return r;
	},[]);

	makeMarkers(map_el,valid_animals);
}

const ProfilePage = async() => {
	let d = await query({type:"user_by_id",params:[sessionStorage.userId]});

	console.log(d)

	$("#profile-page .profile")
		.html(makeUserProfile(d.result))
}

const AnimalProfilePage = async() => {
	if(sessionStorage.animalId===undefined) throw("No animal ID in Storage");

	query({type:"animal_by_id",params:[sessionStorage.animalId]})
	.then(d=>{
		$("#animal-profile-page .profile-head")
			.html(makeAnimalProfile(d.result));
	});

	query({type:"locations_by_animal_id",params:[sessionStorage.animalId]})
	.then(async (d)=>{
		let map_el = await makeMap("#animal-profile-page .map");

		makeMarkers(map_el,d.result)
	});
}