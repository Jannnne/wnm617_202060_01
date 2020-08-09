
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


const checkData = (check_fn) => new Promise((resolve,reject)=>{
	let timeout = 0;
	const interior_check = () => {
		timeout++; if(timeout>10) return reject();
		return check_fn() ? resolve() : setTimeout(interior_check,10);
	}
	interior_check();
});