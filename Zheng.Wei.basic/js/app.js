
$(()=>{

	checkUserId();

	// EVENT DELEGATION
	$(document)


	// ROUTING
	.on( "pagecontainerbeforeshow", function( e, ui ) {
		switch(ui.toPage[0].id) {
			case "recent-page": RecentPage(); break;
			case "list-page": ListPage(); break;
			case "profile-page": ProfilePage(); break;
			case "animal-profile-page": AnimalProfilePage(); break;

			case "recent-add-choose-animal-page": ChooseAnimalPage(); break;
			case "add-animal-page": AddAnimalPage(); break;
			case "add-location-page": AddLocationPage(); break;

			case "settings-profile-page": SettingsProfilePage(); break;
			case "settings-animal-profile-page": SettingsAnimalProfilePage(); break;

			case "settings-profile-upload-page": SettingsProfileUploadPage(); break;

		}
	})





	// FORM SUBMISSIONS
	.on("submit","#signin-form",function(e){
		e.preventDefault();
		checkSigninForm();
	})
	.on("submit","#signup-form",function(e){
		e.preventDefault();
		checkSignupForm();
	})
	.on("submit","#list-add-form",function(e){
		e.preventDefault();
		checkListAddForm();
	})
	.on("submit","#list-search",function(e){
		e.preventDefault();
		checkListSearch($(this).find(".search").val());
	})
	.on("submit","#recent-search",function(e){
		e.preventDefault();
		checkRecentSearch($(this).find(".search").val());
	})





	/* CHANGE */
	.on("change","#settings-profile-upload-form input",function(e){
		console.log(e)
		checkUpload(this.files[0])
		.then(d=>{
			console.log(d)
			$("#settings-profile-src").val('uploads/'+d.result);
			$(".image-uploader").css({'background-image':`url('uploads/${d.result}')`})
		})
	})
	.on("change","#add-location-photo-upload",function(e){
		console.log(e)
		checkUpload(this.files[0])
		.then(d=>{
			console.log(d)
			$("#add-location-photo").val('uploads/'+d.result);
			$("#add-location-info-form .imagepicker")
      		.addClass("picked")
      		.css({'background-image':`url('uploads/${d.result}')`})
		})
	})


	




	// CLICKS
	.on("click",".js-logout",function(e){
		sessionStorage.removeItem('userId');
		checkUserId();
	})
	.on("click",".animal-jump",function(e){
		if(!$(this).data("id")) throw("No data ID on Element");

		sessionStorage.animalId = $(this).data("id");
		$.mobile.navigate("#animal-profile-page")
	})
	.on("click",".js-choose-animal",function(e){
		sessionStorage.animalId = $("#add-location-animal-id").val();
		$.mobile.navigate("#add-location-page");
	})
	.on("click",".js-submit-settings-animal-profile",function(e){
		e.preventDefault();
		checkSettingsAnimalProfileForm();
	})
	.on("click",".js-submit-settings-profile",function(e){
		e.preventDefault();
		checkSettingsProfileForm();
	})
	.on("click",".js-submit-settings-profile-upload",function(e){
		e.preventDefault();
		checkSettingsProfileUpload();
	})
	.on("click",".js-submit-add-location",function(e){
		e.preventDefault();
		checkAddLocationForm();
	})
	.on("click",".js-submit-recent-add-animal",function(e){
		e.preventDefault();
		checkRecentAddForm();
	})
	.on("click",".js-delete-animal",function(e){
		e.preventDefault();
		checkAnimalDelete($(this).data("id"));
	})


	.on("click","[data-filter]",function(e){
		e.preventDefault();
		checkListFilter($(this).data())
	})




	// ACTIVATE TOOLS
	.on("click","[data-activate]",function(e){
		$($(this).data("activate")).addClass("active");
	})
	.on("click","[data-deactivate]",function(e){
		$($(this).data("deactivate")).removeClass("active");
	})
	.on("click","[data-toggle]",function(e){
		$($(this).data("toggle")).toggleClass("active");
	})
	.on("click","[data-activateone]",function(e){
		$($(this).data("activateone")).addClass("active")
			.siblings().removeClass("active");
	})

	;



	$("[data-template]").each(function(){
		$(this).html($($(this).data("template")).html());
	})

});