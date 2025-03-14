createBusinessCard(type);

const gridLink = document.querySelector(".grid");
const listLink = document.querySelector(".list");
const h2 = document.querySelector("h2");

gridLink.classList.add('active');

let clearActive  = () => {
	gridLink.classList.remove('active');
	listLink.classList.remove('active');
};

gridLink.addEventListener("click", () => {
	clearActive();
	createbusinessCard();	
	gridLink.classList.add('active');
	document.querySelector("h2.active").textContent = "Grid View";
})

listLink.addEventListener("click", () => {
	clearActive();
		
	listLink.classList.add('active');
	document.querySelector("h2.active").textContent = "List View";
});

function createbusinessCard() {
	document.querySelector(".business").innerHTML = "";
	filteredbusinesss.forEach(business => {
		let card = document.createElement("section");
		let name = document.createElement("h3");
		let location = document.createElement("p");
		let dedication = document.createElement("p");
		let area = document.createElement("p");
		let img = document.createElement("img");

		name.textContent = business.businessName;
		if (business.location.length < 20) {
			const invisibleChar = "\u200B";
			location.innerHTML = `<span class="label">Location:</span> ${business.location}<br>${invisibleChar}`;
		}
		else {
			location.innerHTML = `<span class="label">Location:</span> ${business.location}`;
		}
		dedication.innerHTML = `<span class="label">Dedicated:</span> ${business.dedicated}`;
		area.innerHTML = `<span class="label">Size:</span> ${business.area}sq ft`;
		img.setAttribute("src", business.imageUrl);
		img.setAttribute("alt", `${business.businessName} business`);
		img.setAttribute("loading", "lazy");

		card.appendChild(name);
		card.appendChild(location);
		card.appendChild(dedication);
		card.appendChild(area);
		card.appendChild(img);

		document.querySelector(".business").appendChild(card);
});
}