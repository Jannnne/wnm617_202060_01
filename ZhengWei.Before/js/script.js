

$(()=>{
	/* ACCORDION */
	$(".accordion dt").on("click",function(e){
		// $(this).next().toggle();
		// $(this).next().slideToggle();
		$(this).next().slideDown()
			.siblings("dd").slideUp();
	});


	/* TAB GROUP */
	$(".tabgroup .tab").on("click",function(e){
		let id = $(this).index();

		$(this).addClass("active")
			.siblings().removeClass("active")

		$(this).closest(".tabgroup")
			.find(".content").eq(id)
				.addClass("active")
			.siblings().removeClass("active")
	});


});



// window.addEventListener("DOMContentLoaded",function(e){
// 	document.querySelectorAll(".accordion dt").forEach(o=>{
// 		o.addEventListener("click",function(e){
// 			o.nextElementSibling.style.display = this.nextElementSibling.style=="none"?"":"none";
// 		})
// 	})
// })
