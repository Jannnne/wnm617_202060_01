

const checkListAddForm = () => {
	let name = $("#list-add-name").val();
	let type = $("#list-add-type").val();
	let breed = $("#list-add-breed").val();
	let description = $("#list-add-description").val();

	query({
		type:'insert_animal',
		params:[sessionStorage.userId,name,type,breed,description]
	}).then(d=>{
		if(d.error) throw d.error;
		ListPage();
	})
}

const checkSettingsAnimalProfileForm = () => {
	let name = $("#settings-animal-profile-name").val();
	let type = $("#settings-animal-profile-type").val();
	let breed = $("#settings-animal-profile-breed").val();
	let description = $("#settings-animal-profile-description").val();
	let animalId = $("#settings-animal-profile-id").val();

	query({
		type:'update_animal',
		params:[name,type,breed,description,animalId]
	}).then(d=>{
		if(d.error) throw d.error;
		window.history.back();
	})
}

const checkSettingsProfileForm = () => {
	let name = $("#settings-profile-name").val();
	let username = $("#settings-profile-username").val();
	let email = $("#settings-profile-email").val();
	let userId = $("#settings-profile-id").val();

	query({
		type:'update_user',
		params:[name,username,email,userId]
	}).then(d=>{
		if(d.error) throw d.error;
		window.history.back();
	})
}

const checkAddLocationForm = () => {
	let lat = +$("#add-location-lat").val();
	let lng = +$("#add-location-lng").val();
	let description = $("#add-location-description").val();
	let animalId = sessionStorage.animalId;

	query({
		type:'insert_location',
		params:[animalId,lat,lng,description]
	}).then(d=>{
		if(d.error) throw d.error;
		window.history.go(-2);
		// $.mobile.navigate("#animal-profile-page");
	})
}


const checkAnimalDelete = id => {
	query({
		type:'delete_animal',
		params:[id]
	}).then(d=>{
		if(d.error) throw d.error;
		window.history.back();
	})
}







const checkListSearch = (s) => {
	query({
		type:'animal_search',
		params:[`%${s}%`,`%${s}%`,`%${s}%`,sessionStorage.userId]
	}).then(d=>{
		console.log(d)
		ListPage(d)
	})
}
const checkRecentSearch = (s) => {
	query({
		type:'animal_search_recent',
		params:[`%${s}%`,`%${s}%`,`%${s}%`,sessionStorage.userId]
	}).then(d=>{
		console.log(d)
		RecentPage(d)
	})
}



const checkListFilter = ({filter,value}) => {
	(
		value=="" ?
		query({
			type:'animals_by_user_id',
			params:[sessionStorage.userId]
		}) :
		query({
			type:'animal_filter',
			params:[filter,value,sessionStorage.userId]
		})
	).then(d=>{
		console.log(d)
		ListPage(d)
	})
}





const checkUpload = async (file) => {
	let fd = new FormData();
	fd.append("image",file);

	return fetch('data/api.php',{
		method:'POST',
		body:fd
	}).then(d=>d.json())
}

const checkSettingsProfileUpload = async (file) => {
	let upload = $("#settings-profile-src").val();
	if(upload=="") return;
	query({
		type:'update_profile_image',
		params:[upload,sessionStorage.userId]
	}).then(d=>{
		if(d.error) throw d.error;
		window.history.back();
	})
}