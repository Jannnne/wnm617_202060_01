
const makeAnimalList = templater(o=>`
<div class="animallist-item display-flex animal-jump" data-id="${o.id}">
	<div class="flex-none"><img src="${o.img}" alt="" class="list-image" /></div>
	<div class="flex-stretch animallist-body">
		<div>${o.name}</div>
		<div>${o.type}</div>
		<div>${o.breed}</div>
	</div>
</div>
`);



const UserProfileLocationsPhotoList = templater(o=>`<img src="${o.photo}" class="animal-jump" data-id="${o.animal_id}">`);
const AnimalProfileLocationsPhotoList = templater(o=>`<img src="${o.photo}" data-id="${o.id}">`);


const makeUserProfile = (user,animals,locations) =>{
return `
<div>
	<div class="hero-image">
		<a href="#settings-profile-upload-page"><img src="${user.img}" alt=""></a>
	</div>
	<div style="padding:1em">
		<h2 class="profile-title">${user.name}</h2>
		<div class="profile-body">
			<div><strong>Handle</strong> ${user.username}</div>
			<div><strong>Email</strong> ${user.email}</div>
			<div><strong>Animals</strong> ${animals.length}</div>
			<div><strong>Locations</strong> ${locations.length}</div>
		</div>
		<div class="profile-photos">
			<h3>Latest Photos</h3>
			<div class="profile-location-photos">
				${UserProfileLocationsPhotoList(locations.slice(0,3))}
			</div>
		</div>
	</div>
</div>
`;
}


const makeAnimalProfile = (animal,locations)=>{

return `<div>
<div class="display-flex">
	<div class="flex-none">
		<img src="${animal.img}" alt="" />
	</div>
	<div style="padding:1em">
		<div>${animal.type}</div>
		<div>${animal.breed}</div>
		<div class="display-flex">
			<div class="flex-none">
				<button data-toggle=".profile-head" class="form-button">More</button>
			</div>
			<div class="flex-none">
				<a href="#settings-animal-profile-page" class="form-button">Edit</a>
			</div>
			<div class="flex-none">
				<a href="#" class="form-button js-delete-animal" data-id="${animal.id}">Delete</a>
			</div>
		</div>
	</div>
</div>
<div class="profile-location-photos">
	${AnimalProfileLocationsPhotoList(locations)}
</div>
</div>
`;
}


const makeRecentProfile = o=>`
<div class="display-flex animal-jump" data-id="${o.animal_id}">
	<div class="flex-none">
		<img src="${o.img}" class="list-image" alt="" />
	</div>
	<div style="padding:0.5em">
		<div><strong>${o.name}</strong></div>
		<div>${o.type}</div>
		<div>${o.breed}</div>
	</div>
</div>
`;







// Typing out everything is fine
const makeSettingsProfileInputs = (o,namespace="settings-profile") => `
<div class="form-control">
	<label for="${namespace}-name" class="form-label">Name</label>
	<input id="${namespace}-name" type="text" class="form-input" data-role="none" value="${o.name}">
</div>
<div class="form-control">
	<label for="${namespace}-username" class="form-label">Username</label>
	<input id="${namespace}-username" type="text" class="form-input" data-role="none" value="${o.username}">
</div>
<div class="form-control">
	<label for="${namespace}-email" class="form-label">Email</label>
	<input id="${namespace}-email" type="text" class="form-input" data-role="none" value="${o.email}">
</div>`;

// You can also break things into their smaller reusable parts
const makeSettingsAnimalProfileInputs = (o,namespace="settings-animal-profile") => `
${FormControl({namespace:namespace,label:"Name",name:"name",value:o.name})}
${FormControl({namespace:namespace,label:"Type",name:"type",value:o.type})}
${FormControl({namespace:namespace,label:"Breed",name:"breed",value:o.breed})}`;


const FormControl = ({namespace,label,name,value,type="text"}) => `
<div class="form-control">
	<label for="${namespace}-${name}" class="form-label">${label}</label>
	<input id="${namespace}-${name}" value="${value}" type="${type}" class="form-input" data-role="none">
</div>`;



const makeSelectOptions = (options,selected) => {
	return templater(o=>`
		<option value='${o[0]}' ${o[0]==selected?'selected':''}>${o[1]}</option>
	`)(options);
}


const makeAnimalProfileInputs = (o,namespace="list-add") => {
let types = [
	['dog','Dog'],
	['cat','Cat'],
	['horse','Horse'],
	['turtle','Turtle'],
	['rabbit','Rabbit']
];
return `
<div class="form-control">
	<label for="${namespace}-description" class="form-label">Add a Photo</label>
	<input type='hidden' id="${namespace}-photo" data-role="none">
	<label class="imagepicker imagepicker-replace thumbnail">
		<input type='file' id="${namespace}-photo-upload" data-role="none">
	</label>
</div>
<div class="form-control">
	<label for="${namespace}-name" class="form-label">Name</label>
	<input type="text" class="form-input" id="${namespace}-name" placeholder="Type Animal Name" data-role="none" value="${o.name}">
</div>
<div class="form-control">
	<label for="${namespace}-type" class="form-label">Type</label>
	<div class="form-select">
		<select id="${namespace}-type" data-role="none">
			${makeSelectOptions(types,o.type)}
		</select>
	</div>
</div>
<div class="form-control">
	<label for="${namespace}-breed" class="form-label">Breed</label>
	<input type="text" class="form-input" id="${namespace}-breed" placeholder="Type Animal Breed" data-role="none" value="${o.breed}">
</div>
<div class="form-control">
	<label for="${namespace}-description" class="form-label">Description</label>
	<textarea class="form-input" id="${namespace}-description" placeholder="Type Animal Description" data-role="none">${o.description}</textarea>
</div>`;
}





const filterList = (animals,type) => {
	let a = [...(new Set(animals.map(o=>o[type])))];
	return templater(o=>`<li><a href="#" data-filter="${type}" data-value="${o}">${o[0].toUpperCase()+o.substr(1)}</a></li>`)(a)
}

const listFilters = (animals) => {
	return `
	<li><a href="#" data-filter="type" data-value="">All</a></li>
	${filterList(animals,'type')}
	${filterList(animals,'breed')}
	`;
}