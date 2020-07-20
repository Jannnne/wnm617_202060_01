
const query = (options) => {
	// Fetch is a Promise
	return fetch('data/api.php',{
		method:'POST',
		body:JSON.stringify(options),
		headers:{'Content-Type':'application/json'}
	}).then(d=>d.json());
}


// Currying
const templater = f => a => 
	(Array.isArray(a)?a:[a])
	.reduce((r,o,i,a)=>r+f(o,i,a),"");