

const checkListAddForm = () => {
	let name = $("#list-add-name").val();
	let type = $("#list-add-type").val();
	let breed = $("#list-add-breed").val();
	let description = $("#list-add-description").val();
	let img = $("#list-add-photo").val()!=''?$("#list-add-photo").val():'https://via.placeholder.com/400/?text=place';

	query({
		type:'insert_place',
		params:[sessionStorage.userId,name,type,breed,description,img]
	}).then(d=>{
		if(d.error) throw d.error;
		ListPage();
	})
}
const checkRecentAddForm = () => {
	let name = $("#add-place-name").val();
	let type = $("#add-place-type").val();
	let breed = $("#add-place-breed").val();
	let description = $("#add-place-description").val();
	let img = $("#add-place-photo").val()!=''?$("#add-place-photo").val():'https://via.placeholder.com/400/?text=place';

	query({
		type:'insert_place',
		params:[sessionStorage.userId,name,type,breed,description,img]
	}).then(d=>{
		if(d.error) throw d.error;
		sessionStorage.placeId = d.result;
		$.mobile.navigate("#add-artwork-page")
	})
}

const checkSettingsplaceProfileForm = () => {
	let name = $("#settings-place-profile-name").val();
	let type = $("#settings-place-profile-type").val();
	let breed = $("#settings-place-profile-breed").val();
	let description = $("#settings-place-profile-description").val();
	let placeId = $("#settings-place-profile-id").val();

	query({
		type:'update_place',
		params:[name,type,breed,description,placeId]
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

const checkAddartworkForm = () => {
	let lat = +$("#add-artwork-lat").val();
	let lng = +$("#add-artwork-lng").val();
	let description = $("#add-artwork-description").val();
	let photo = $("#add-artwork-photo").val();
	let icon = 'img/icons/map.svg';
	let placeId = sessionStorage.placeId;

	query({
		type:'insert_artwork',
		params:[placeId,lat,lng,description,photo,icon]
	}).then(d=>{
		if(d.error) throw d.error;
		// window.history.go(-2);
		$.mobile.navigate("#recent-page");
	})
}


const checkplaceDelete = id => {
	query({
		type:'delete_place',
		params:[id]
	}).then(d=>{
		if(d.error) throw d.error;
		window.history.back();
	})
}







const checkListSearch = (s) => {
	query({
		type:'place_search',
		params:[`%${s}%`,`%${s}%`,`%${s}%`,sessionStorage.userId]
	}).then(d=>{
		console.log(d)
		ListPage(d)
	})
}
const checkRecentSearch = (s) => {
	query({
		type:'place_search_recent',
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
			type:'places_by_user_id',
			params:[sessionStorage.userId]
		}) :
		query({
			type:'place_filter',
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