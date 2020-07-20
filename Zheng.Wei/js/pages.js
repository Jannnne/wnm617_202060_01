
const ListPage = async() => {

	let d = await query({type:"animals_by_user_id",params:[sessionStorage.userId]})

	console.log(d)

	$("#list-page .animallist")
		.html(makeAnimalList(d.result))
}

const RecentPage = async() => {}

const ProfilePage = async() => {
	let d = await query({type:"user_by_id",params:[sessionStorage.userId]});

	console.log(d)

	$("#profile-page .profile")
		.html(makeUserProfile(d.result))
}

const AnimalProfilePage = async() => {
	if(sessionStorage.animalId===undefined) throw("No animal ID in Storage");

	let d = await query({type:"animal_by_id",params:[sessionStorage.animalId]});

	console.log(d)

	$("#animal-profile-page .profile-body")
		.html(makeAnimalProfile(d.result))
}