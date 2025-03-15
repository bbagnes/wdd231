let memberURL = 'https://bbagnes.github.io/wdd231/chamber/data/members.json';
const directory = document.querySelector('.directory');
const gridLink = document.querySelector(".grid");
const listLink = document.querySelector(".list");
const members = getMembersData(); 

async function getMembersData() {
    const response = await fetch(memberURL);
    const data = await response.json();
    // console.table(data.members);
    return data.members;
}   

async function displayMembersGrid() {
    document.querySelector(".directory").innerHTML = "";

    let members = await getMembersData();

    members.forEach((member) => {
        let card = document.createElement("section");
        let memberName = document.createElement('h3');
        let memberAddress = document.createElement('p');
        let phoneNum = document.createElement('p');
        let url = document.createElement('p');
        let icon = document.createElement('img');

        memberName.textContent = `${member.name} `;
        memberAddress.textContent = `${member.address}`;
        phoneNum.textContent = `${member.phoneNumber}`;
        url.textContent = `${member.websiteURL}`

        icon.setAttribute('src', member.image);
        icon.setAttribute('alt', `Business Icon`);
        icon.setAttribute('loading', 'lazy');
        icon.setAttribute('width', '240');
        icon.setAttribute('height', 'auto');

        card.appendChild(icon);
        card.appendChild(memberName);
        card.appendChild(memberAddress);
        card.appendChild(phoneNum);
        card.appendChild(url);            

        directory.append(card);
        });
}

let clearActive  = () => {
	gridLink.classList.remove('active');
	listLink.classList.remove('active');
};

gridLink.addEventListener("click", () => {
	clearActive();
	displayMembersGrid();	
	gridLink.classList.add('active');
});

listLink.addEventListener("click", () => {
	clearActive();
    displayMembersList();		
	listLink.classList.add('active');
});

async function displayMembersList() {
	document.querySelector(".directory").innerHTML = "";

    let members = await getMembersData();
    
	members.forEach((member) => {
		let list = document.createElement("ul");
		let memberName = document.createElement("li");
        let memberAddress = document.createElement("li");
        let phoneNum = document.createElement("li");
        let url = document.createElement("li");
				
		memberName.innerHTML = `<strong>${member.name}</strong>`;
        memberAddress.textContent = `${member.address}`;
        phoneNum.textContent = `${member.phoneNumber}`;
        url.innerHTML = `${member.websiteURL}`;

        list.appendChild(memberName);
        list.appendChild(memberAddress);
        list.appendChild(phoneNum);
        list.appendChild(url);
        
        directory.append(list);		
});
    
}

gridLink.classList.add('active');
displayMembersGrid();