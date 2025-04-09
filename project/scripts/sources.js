const url = 'https://bbagnes.github.io/wdd231/project/data/camp-sites.json';
const cards = document.querySelector('.sources div');
let data = "";

async function getData() {
    const response = await fetch(url);
    const data = await response.json();
    console.table(data.campSites);
    onload = () => {
	displaySources(data.campSites);
    }
}

getData();    


const displaySources = (sites) => {
        
        sites.forEach((site) => {
            let card = document.createElement("ul");
            let url = document.createElement('li');

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
