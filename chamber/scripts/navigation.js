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