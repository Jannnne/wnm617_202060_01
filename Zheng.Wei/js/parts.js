
const makeAnimalList = templater(o=>`
<div class="animallist-item display-flex animal-jump" data-id="${o.id}">
	<div class="flex-none"><img src="${o.img}" alt="" class="list-image" /></div>
	<div class="flex-stretch">
		<div>${o.name}</div>
		<div>${o.type}</div>
		<div>${o.breed}</div>
	</div>
</div>
`);


const makeUserProfile = templater(o=>`
<div>
	<div class="hero-image">
		<img src="${o.img}" alt="">
	</div>
	<h2 class="profile-title">${o.name}</h2>
	<div class="profile-body">
		<div>${o.username}</div>
		<div>${o.email}</div>
	</div>
</div>
`);


const makeAnimalProfile = templater(o=>`
<div>
	<div>
		<img src="${o.img}" alt="" />
	</div>
	<div>
		<div><strong>${o.name}</strong></div>
		<div>${o.type}</div>
		<div>${o.breed}</div>
	</div>
</div>
`);