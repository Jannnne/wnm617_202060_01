
const makeLocationList = templater(o=>`
<div class="Locationlist-item display-flex location-jump" data-id="${o.id}">
	<div class="flex-none"><img src="${o.img}" alt="" class="list-image" /></div>
	<div class="flex-stretch Locationlist-body">
		<div>${o.name}</div>
		<div>${o.type}</div>
		<div>${o.breed}</div>
	</div>
</div>
`);


const makeUserProfile = o =>`
<div>
	<div class="hero-image">
		<a href="#settings-profile-upload-page"><img src="${o.img}" alt=""></a>
	</div>
	<h2 class="profile-title">${o.name}</h2>
	<div class="profile-body">
		<div>${o.username}</div>
		<div>${o.email}</div>
	</div>
</div>
`;


const makeLocationProfile = o=>`
<div class="display-flex">
	<div class="flex-none">
		<img src="${o.img}" alt="" />
	</div>
	<div>
		<div><strong>${o.name}</strong></div>
		<div>${o.type}</div>
		<div>${o.breed}</div>
		<div class="display-flex">
			<div class="flex-none">
				<button data-toggle=".profile-head" class="form-button">More</button>
			</div>
			<div class="flex-none">
				<a href="#settings-location-profile-page" class="form-button">Edit</a>
			</div>
			<div class="flex-none">
				<a href="#" class="form-button js-delete-Location" data-id="${o.id}">Delete</a>
			</div>
		</div>
	</div>
</div>
`;


const makeRecentProfile = o=>`
<div class="display-flex location-jump" data-id="${o.Location_id}">
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
const makeSettingsLocationProfileInputs = (o,namespace="settings-location-profile") => `
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


const makeLocationProfileInputs = (o,namespace="list-add") => {
let types = [
	['Graffiti','Graffiti'],
	['Murals','Murals'],
	['outdoor_media','outdoor_media'],
	['Wall','Wall'],
	['Ground','Ground']
];
return `
<div class="form-control">
	<label for="${namespace}-name" class="form-label">Name</label>
	<input type="text" class="form-input" id="${namespace}-name" placeholder="Type Location Name" data-role="none" value="${o.name}">
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
	<input type="text" class="form-input" id="${namespace}-breed" placeholder="Type Location Breed" data-role="none" value="${o.breed}">
</div>
<div class="form-control">
	<label for="${namespace}-description" class="form-label">Description</label>
	<textarea class="form-input" id="${namespace}-description" placeholder="Type Location Description" data-role="none">${o.description}</textarea>
</div>`;
}





const filterList = (Locations,type) => {
	let a = [...(new Set(Locations.map(o=>o[type])))];
	return templater(o=>`<li><a href="#" data-filter="${type}" data-value="${o}">${o[0].toUpperCase()+o.substr(1)}</a></li>`)(a)
}

const listFilters = (Locations) => {
	return `
	<li><a href="#" data-filter="type" data-value="">All</a></li>
	${filterList(Locations,'type')}
	${filterList(Locations,'breed')}
	`;
}