const mainnav = document.querySelector('.navigation');
const hambutton = document.querySelector('#menu');
const headerspan = document.querySelector('span');
const headerimg = document.querySelector("img");


hambutton.addEventListener('click', () => {
	mainnav.classList.toggle('show');
	hambutton.classList.toggle('show');
    headerspan.classList.toggle('show');
    headerimg.classList.toggle('show');
});

const homeLink = document.querySelector(".home");
const directoryLink = document.querySelector(".chamber");
const joinLink = document.querySelector('.join');
const discoverLink = document.querySelector('.discover');


let clearActive  = () => {
	gridLink.classList.remove('active');
	listLink.classList.remove('active');
};

homeLink.addEventListener("click", () => {
	clearActive();	
	homeLink.classList.add('active');
});

directoryLink.addEventListener("click", () => {
	clearActive();		
	directoryLink.classList.add('active');
});

joinLink.addEventListener("click", () => {
	clearActive();		
	joinLink.classList.add('active');
});

discoverLink.addEventListener("click", () => {
	clearActive();		
	discoverLink.classList.add('active');
});

