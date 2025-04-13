const url = 'https://bbagnes.github.io/wdd231/project/data/camp-sites.json';
const cards = document.querySelector('.sites div');
const seeAll = document.querySelector(".all");
const sky = document.querySelector(".sky");
const uncrowded = document.querySelector(".uncrowded");

async function getData() {
    try {
        const response = await fetch(url);
        const data = await response.json();
    // console.table(data.campSites);
        return data.campSites;
    } catch (error) {
        console.error(error);
    }	    
};

let clearActive  = () => {
	seeAll.classList.remove('active');
	sky.classList.remove('active');
	uncrowded.classList.remove('active');
};

seeAll.addEventListener("click", () => {
	clearActive();
    seeAll.classList.add('active');
	displaySites("");	
});

sky.addEventListener("click", () => {
	clearActive();
    sky.classList.add('active');
    displaySites("sky");
});

uncrowded.addEventListener("click", () => {
	clearActive();   
	uncrowded.classList.add('active');
    displaySites("uncrowded");
});

async function displaySites(type) {

    cards.innerHTML = "";
    let allData = await getData(type);
    // console.table(allData);

    if (type == "sky") {
        let filteredData = allData.filter(data => data.darkSky === true);
        console.table(filteredData);
        filteredData.forEach((site) => {
            let card = document.createElement("section");
            let name = document.createElement('h2');
            let location = document.createElement('p');
            let activities = document.createElement('p');
            let caption = document.createElement('p');
            let image = document.createElement('img');
            let more = document.createElement('a');
            let dialog = document.createElement('dialog');
            let video = document.createElement('video');
            let closeButton = document.createElement('button');
            let dialogBoxText = document.querySelector('#more div');
    
            location.classList.add('location');
            activities.classList.add('activities');
            dialog.setAttribute('id', 'more');

            video.setAttribute('src', site.videoURL);
            video.setAttribute('width', 'min-content');
            video.setAttribute('height', 'auto');
            video.setAttribute('controls', 'true');
            video.setAttribute('title', 'YouTube video player');
            video.load();            
            
            caption.textContent = `See More`;
            closeButton.textContent = "Close";
            closeButton.setAttribute('id', 'closeButton');
            closeButton.addEventListener("click", () => {
                dialog.close();
            }); 
    
            name.textContent = `${site.siteName}`;
            location.innerHTML = `<strong>Location:</strong> ${site.location}`;
            activities.innerHTML = `<strong>Activities:</strong> ${site.recreationOptions}`;
            
            more.setAttribute('href', site.siteURL);
            more.setAttribute('aria-label', `Link to ${site.siteName}`);
            more.setAttribute('target', '_blank');
            more.classList.add('button');
            more.textContent = `Visit Website`;                       
    
            image.setAttribute('src', site.image);
            image.setAttribute('alt', `Image of ${site.siteName}`);
            image.setAttribute('loading', 'lazy');
            image.setAttribute('width', '300');
            image.setAttribute('height', '200');
             

            caption.classList.add('caption');
            caption.addEventListener("click", () => {
                dialog.showModal();
            }); 

            dialog.appendChild(video);
            dialog.appendChild(closeButton);            
    
            card.appendChild(name);
            card.appendChild(image);
            card.appendChild(caption);
            card.appendChild(location);
            card.appendChild(activities);
            card.appendChild(more);
            card.appendChild(dialog);
    
            cards.append(card);         
        });

    } else if (type == "uncrowded") {
        let filteredData = allData.filter(data => data.avgVisitors < 3000);
        console.table(filteredData);
        filteredData.forEach((site) => {
            let card = document.createElement("section");
            let name = document.createElement('h2');
            let location = document.createElement('p');
            let activities = document.createElement('p');
            let caption = document.createElement('p');
            let image = document.createElement('img');
            let more = document.createElement('a');
            let dialog = document.createElement('dialog');
            let video = document.createElement('video');
            let closeButton = document.createElement('button');
            let dialogBoxText = document.querySelector('#more div');
    
            location.classList.add('location');
            activities.classList.add('activities');
            dialog.setAttribute('id', 'more');

            video.setAttribute('src', site.videoURL);
            video.setAttribute('width', 'min-content');
            video.setAttribute('height', 'auto');
            video.setAttribute('controls', 'true');
            video.setAttribute('title', 'YouTube video player');
            video.load();            
            
            caption.textContent = `See More`;
            closeButton.textContent = "Close";
            closeButton.setAttribute('id', 'closeButton');
            closeButton.addEventListener("click", () => {
                dialog.close();
            }); 
    
            name.textContent = `${site.siteName}`;
            location.innerHTML = `<strong>Location:</strong> ${site.location}`;
            activities.innerHTML = `<strong>Activities:</strong> ${site.recreationOptions}`;
            
            more.setAttribute('href', site.siteURL);
            more.setAttribute('aria-label', `Link to ${site.siteName}`);
            more.setAttribute('target', '_blank');
            more.classList.add('button');
            more.textContent = `Visit Website`;                       
    
            image.setAttribute('src', site.image);
            image.setAttribute('alt', `Image of ${site.siteName}`);
            image.setAttribute('loading', 'lazy');
            image.setAttribute('width', '300');
            image.setAttribute('height', '200');

            caption.classList.add('caption');
            caption.addEventListener("click", () => {
                dialog.showModal();
            }); 

            dialog.appendChild(video);
            dialog.appendChild(closeButton);            
    
            card.appendChild(name);
            card.appendChild(image);
            card.appendChild(caption);
            card.appendChild(location);
            card.appendChild(activities);
            card.appendChild(more);
            card.appendChild(dialog);
    
            cards.append(card);        
        });

    } else if (type == "") {
        let filteredData = allData;
        filteredData.forEach((site) => {
            let card = document.createElement("section");
            let name = document.createElement('h2');
            let location = document.createElement('p');
            let activities = document.createElement('p');
            let caption = document.createElement('p');
            let image = document.createElement('img');
            let more = document.createElement('a');
            let dialog = document.createElement('dialog');
            let video = document.createElement('video');
            let closeButton = document.createElement('button');
            let dialogBoxText = document.querySelector('#more div');
    
            location.classList.add('location');
            activities.classList.add('activities');
            dialog.setAttribute('id', 'more');

            video.setAttribute('src', site.videoURL);
            video.setAttribute('width', 'min-content');
            video.setAttribute('height', 'auto');
            video.setAttribute('controls', 'true');
            video.setAttribute('title', 'YouTube video player');
            video.load();            
            
            caption.textContent = `See More`;
            closeButton.textContent = "Close";
            closeButton.setAttribute('id', 'closeButton');
            closeButton.addEventListener("click", () => {
                dialog.close();
            }); 
    
            name.textContent = `${site.siteName}`;
            location.innerHTML = `<strong>Location:</strong> ${site.location}`;
            activities.innerHTML = `<strong>Activities:</strong> ${site.recreationOptions}`;
            
            more.setAttribute('href', site.siteURL);
            more.setAttribute('aria-label', `Link to ${site.siteName}`);
            more.setAttribute('target', '_blank');
            more.classList.add('button');
            more.textContent = `Visit Website`;                       
    
            image.setAttribute('src', site.image);
            image.setAttribute('alt', `Image of ${site.siteName}`);
            image.setAttribute('loading', 'lazy');
            image.setAttribute('width', '300');
            image.setAttribute('height', '200');

            caption.classList.add('caption');
            caption.addEventListener("click", () => {
                dialog.showModal();
            }); 

            dialog.appendChild(video);
            dialog.appendChild(closeButton);            
    
            card.appendChild(name);
            card.appendChild(image);
            card.appendChild(caption);
            card.appendChild(location);
            card.appendChild(activities);
            card.appendChild(more);
            card.appendChild(dialog);
    
            cards.append(card);      
        });
    }
}

window.addEventListener('load', (event) => {
    displaySites("");
    seeAll.classList.add('active'); 
});
    	    

