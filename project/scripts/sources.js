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


const displaySources = (sources) => {
        
        sources.forEach((source) => {
            let card = document.createElement("ul");
            let url = document.createElement('li');

            card.textContent = `${site.siteName}`;
            url.textContent = `${source.siteURL}`;

            card.appendChild(url);

            cards.append(card);      
        });
      }
