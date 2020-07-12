
const checkLoginForm = () => {
	let user = $("#signin-email").val();
	let pass = $("#signin-password").val();

	console.log(user,pass);

	if(user==='user' && pass==='pass') {
		// logged in
		console.log("success");
		sessionStorage.userId = 3;
		$("#signin-form")[0].reset();
	} else {
		// not logged in
		console.log("failure");
		sessionStorage.removeItem('userId');
	}

	checkUserId();
}

const checkUserId = () => {
	let p = ["#signin-password-page","#signup-page",""];

	if(sessionStorage.userId===undefined) {
		// not logged in
		if(!p.some(o=>window.location.hash===o))
			$.mobile.navigate("#signin-password-page");
	} else {
		// logged in
		if(p.some(o=>window.location.hash===o))
			$.mobile.navigate("#map-page");
	}
}