
const checkSigninForm = async() => {
	let user = $("#signin-username").val();
	let pass = $("#signin-password").val();

	console.log(user,pass);

	let found_user = await query({
		type:'check_signin',
		params:[user,pass]
	})

	if(found_user.result.length > 0) {
		// logged in
		console.log("success");
		sessionStorage.userId = found_user.result[0].id;
		$("#signin-form")[0].reset();
	} else {
		// not logged in
		console.log("failure");
		sessionStorage.removeItem('userId');
	}

	checkUserId();
}

const checkUserId = () => {
	let p = ["#signin-page","#signup-page",""];

	if(sessionStorage.userId===undefined) {
		// not logged in
		if(!p.some(o=>window.location.hash===o))
			$.mobile.navigate("#signin-page");
	} else {
		// logged in
		if(p.some(o=>window.location.hash===o))
			$.mobile.navigate("#recent-page");
	}
}



const checkSignupForm = () => {
	let username = $("#signup-username").val();
	let email = $("#signup-email").val();
	let password = $("#signup-password").val();
	let password2 = $("#signup-password2").val();

	if(password!=password2) {
		throw "Passwords don't match";
		return;
	} else {
		query({
			type:'insert_user',
			params:[username,email,password]
		}).then(d=>{
			if(d.error) throw d.error;
			// d.result == new user id
			$.mobile.navigate("#signin-page");
		});
	}
}