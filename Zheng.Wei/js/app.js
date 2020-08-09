
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
			case "place-profile-page": placeProfilePage(); break;

			case "recent-add-choose-place-page": ChooseplacePage(); break;
			case "add-place-page": AddplacePage(); break;
			case "add-artwork-page": AddartworkPage(); break;

			case "settings-profile-page": SettingsProfilePage(); break;
			case "settings-place-profile-page": SettingsplaceProfilePage(); break;

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
	.on("change","#add-artwork-photo-upload",function(e){
		console.log(e)
		checkUpload(this.files[0])
		.then(d=>{
			console.log(d)
			$("#add-artwork-photo").val('uploads/'+d.result);
			$("#add-artwork-info-form .imagepicker")
      		.addClass("picked")
      		.css({'background-image':`url('uploads/${d.result}')`})
		})
	})


	




	// CLICKS
	.on("click",".js-logout",function(e){
		sessionStorage.removeItem('userId');
		checkUserId();
	})
	.on("click",".place-jump",function(e){
		if(!$(this).data("id")) throw("No data ID on Element");

		sessionStorage.placeId = $(this).data("id");
		$.mobile.navigate("#place-profile-page")
	})
	.on("click",".js-choose-place",function(e){
		sessionStorage.placeId = $("#add-artwork-place-id").val();
		$.mobile.navigate("#add-artwork-page");
	})
	.on("click",".js-submit-settings-place-profile",function(e){
		e.preventDefault();
		checkSettingsplaceProfileForm();
	})
	.on("click",".js-submit-settings-profile",function(e){
		e.preventDefault();
		checkSettingsProfileForm();
	})
	.on("click",".js-submit-settings-profile-upload",function(e){
		e.preventDefault();
		checkSettingsProfileUpload();
	})
	.on("click",".js-submit-add-artwork",function(e){
		e.preventDefault();
		checkAddartworkForm();
	})
	.on("click",".js-submit-recent-add-place",function(e){
		e.preventDefault();
		checkRecentAddForm();
	})
	.on("click",".js-delete-place",function(e){
		e.preventDefault();
		checkplaceDelete($(this).data("id"));
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