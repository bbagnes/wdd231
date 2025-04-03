const url = 'https://bbagnes.github.io/wdd231/chamber/data/discover.json';
const cards = document.querySelector('.discover div');

async function getData() {
    const response = await fetch(url);
    const data = await response.json();
    console.table(data.locations);
    displayLocations(data.locations);
}

getData();
    

const displayLocations = (locations) => {
        
        locations.forEach((location) => {
            let card = document.createElement("section");
            let name = document.createElement('h2');
            let address = document.createElement('address');
            let description = document.createElement('p');
            let image = document.createElement('figure');

            name.textContent = `${location.name}`;
            address.textContent = `Address: ${location.address}`;
            description.textContent = `Description: ${location.description}`;

            image.setAttribute('src', location.imageurl);
            portrait.setAttribute('alt', `Portrait of ${prophet.name} ${prophet.lastname}`);
            portrait.setAttribute('loading', 'lazy');
            portrait.setAttribute('width', '340');
            portrait.setAttribute('height', '440');

            card.appendChild(name);
            card.appendChild(image);
            card.appendChild(address);
            card.appendChild(description);

            cards.append(card);      
        });
      }
