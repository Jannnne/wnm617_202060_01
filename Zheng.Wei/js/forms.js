

const checkListAddForm = () => {
	let name = $("#list-add-name").val();
	let type = $("#list-add-type").val();
	let breed = $("#list-add-breed").val();
	let description = $("#list-add-description").val();
	let img = $("#list-add-photo").val()!=''?$("#list-add-photo").val():'https://via.placeholder.com/400/?text=ANIMAL';

	query({
		type:'insert_animal',
		params:[sessionStorage.userId,name,type,breed,description,img]
	}).then(d=>{
		if(d.error) throw d.error;
		ListPage();
	})
}
const checkRecentAddForm = () => {
	let name = $("#add-animal-name").val();
	let type = $("#add-animal-type").val();
	let breed = $("#add-animal-breed").val();
	let description = $("#add-animal-description").val();
	let img = $("#add-animal-photo").val()!=''?$("#add-animal-photo").val():'https://via.placeholder.com/400/?text=ANIMAL';

	query({
		type:'insert_animal',
		params:[sessionStorage.userId,name,type,breed,description,img]
	}).then(d=>{
		if(d.error) throw d.error;
		sessionStorage.animalId = d.result;
		$.mobile.navigate("#add-location-page")
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
	let photo = $("#add-location-photo").val();
	let icon = 'img/icons/map.svg';
	let animalId = sessionStorage.animalId;

	query({
		type:'insert_location',
		params:[animalId,lat,lng,description,photo,icon]
	}).then(d=>{
		if(d.error) throw d.error;
		// window.history.go(-2);
		$.mobile.navigate("#recent-page");
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