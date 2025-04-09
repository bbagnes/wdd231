const url = 'https://bbagnes.github.io/wdd231/project/data/camp-sites.json';
const cards = document.querySelector('.sites div');

async function getData() {
    const response = await fetch(url);
    const data = await response.json();
    // console.table(data.locations);
    displayLocations(data.locations);
}

getData();
    

const displayLocations = (locations) => {
        
        locations.forEach((location) => {
            let card = document.createElement("section");
            let name = document.createElement('h2');
            let address = document.createElement('address');
            let description = document.createElement('p');
            let photo = document.createElement('figure')
            let image = document.createElement('img');
            let button = document.createElement('button');

            name.textContent = `${location.name}`;
            address.innerHTML = `<strong>Address:</strong> ${location.address}`;
            description.innerHTML = `<strong>Description:</strong> ${location.description}`;
            button.textContent = `Learn more`;

            image.setAttribute('src', location.imageurl);
            image.setAttribute('alt', `Image of ${location.name}`);
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
