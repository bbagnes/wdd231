const url = 'https://bbagnes.github.io/wdd231/project/data/camp-sites.json';
const cards = document.querySelector('.sites div');
const seeAll = document.querySelector(".all");
const sky = document.querySelector(".sky");
const uncrowded = document.querySelector(".uncrowded");


async function getData() {
    const response = await fetch(url);
     const data = await response.json();
    console.table(data.campSites);    
    onload = () => {
	displaySites(data.campSites);
	seeAll.classList.add('active');
    }
}

getData();    

let clearActive  = () => {
	seeAll.classList.remove('active');
	sky.classList.remove('active');
	uncrowded.classList.remove('active');
};

seeAll.addEventListener("click", () => {
	clearActive();
	displaySites(data.campSites);	
	all.classList.add('active');
});

sky.addEventListener("click", () => {
	clearActive();
	displaySites(data.campSites.filter(site => data.campSites.darkSky == true));	
	sky.classList.add('active');
});

uncrowded.addEventListener("click", () => {
	clearActive();
	displaySites(data.campSites.filter(site => data.campSites.avgVisitors < 3000));	
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
            location.innerHTML = `<strong>Location:</strong> ${site.location}`;
            activities.innerHTML = `<strong>Activities:</strong> ${site.recreationOptions}`;
            button.textContent = `Learn more`;

            image.setAttribute('src', site.images[0]);
            image.setAttribute('alt', `Image of ${site.siteName}`);
            image.setAttribute('loading', 'lazy');
            image.setAttribute('width', '300');
            image.setAttribute('height', '200');

            button.setAttribute('href', site.siteURL);

            photo.appendChild(image);

            card.appendChild(name);
            card.appendChild(image);
            card.appendChild(location);
            card.appendChild(activities);
            card.appendChild(button);

            cards.append(card);      
        });
      }
