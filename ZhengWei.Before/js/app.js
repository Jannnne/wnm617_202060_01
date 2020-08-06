
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
		}
	})





	// FORM SUBMISSIONS
	.on("submit","#signin-form",function(e){
		e.preventDefault();
		checkSigninForm();
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