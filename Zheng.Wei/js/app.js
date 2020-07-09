$(()=>{

	checkUserId();

	// EVENT DELEGATION
	$(document)


	// FORM SUBMISSIONS
	.on("submit","#signin-form",function(e){
		e.preventDefault();
		checkLoginForm();
	})




	// CLICKS
	.on("click",".js-logout",function(e){
		sessionStorage.removeItem('userId');
		checkUserId();
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

});