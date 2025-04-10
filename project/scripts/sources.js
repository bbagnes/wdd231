const sourceURL = 'https://bbagnes.github.io/wdd231/project/data/camp-sites.json';
const cards = document.querySelector('.sources div');

async function getData() {
    const response = await fetch(sourceURL);
    const data = await response.json();
    console.table(data.campSites);
    displaySources(data.campSites);    
} 

const displaySources = (sources) => {
        
    sources.forEach((source) => {
        let card = document.createElement("ul");
        let sourceurl = document.createElement('li');

        card.innerHTML = `${source.siteName}:`;
        sourceurl.innerHTML = `${source.siteURL}`;

        card.appendChild(sourceurl);

        cards.append(card);      
    });
}
onload = () => {
	getData();  
    }