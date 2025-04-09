const url = 'https://bbagnes.github.io/wdd231/project/data/camp-sites.json';
const cards = document.querySelector('.sites div');
let data = "";

async function getData() {
    const response = await fetch(url);
    const data = await response.json();
    console.table(data.campSites);
    onload = () => {
	displaySites(data.campSites);
	all.classList.add('active');
    }
}

getData();    

const all = document.querySelector(".all");
const sky = document.querySelector(".sky");
const uncrowded = document.querySelector(".uncrowded");



let clearActive  = () => {
	all.classList.remove('active');
	sky.classList.remove('active');
	uncrowded.classList.remove('active');
};

all.addEventListener("click", () => {
	clearActive();
	displaySites(data.campSites);	
	all.classList.add('active');
});

sky.addEventListener("click", () => {
	clearActive();
	displaySites(data.campSites.filter(site => data.campSites.darkSky === true));	
	sky.classList.add('active');
});

uncrowded.addEventListener("click", () => {
	clearActive();
	displaySites(data.campSites.filter(bagi => data.campSites.avgVisitors < 3000));	
	uncrowded.classList.add('active');
});

const displaySites = (sites) => {
        
        sites.forEach((site) => {
            let card = document.createElement("section");
            let name = document.createElement('h2');
            let location = document.createElement('p');
            let activities = document.createElement('p');
            let photo = document.createElement('figure')
            let image = document.createElement('img');
            let button = document.createElement('button');

            name.textContent = `${site.siteName}`;
            location.innerHTML = `<strong>Address:</strong> ${site.location}`;
            activities.innerHTML = `<strong>Description:</strong> ${site.recreationOptions}`;
            button.textContent = `Learn more`;

            image.setAttribute('src', site.images[0]);
            image.setAttribute('alt', `Image of ${site.siteName}`);
            image.setAttribute('loading', 'lazy');
            image.setAttribute('width', '300');
            image.setAttribute('height', '200');

            photo.appendChild(image);

            card.appendChild(name);
            card.appendChild(image);
            card.appendChild(address);
            card.appendChild(description);
            card.appendChild(button);

            cards.append(card);      
        });
      }
