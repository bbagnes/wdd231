let memberURL = 'https://bbagnes.github.io/wdd231/chamber/data/members.json';
const directory = document.querySelector('.directory');
const gridLink = document.querySelector(".grid");
const listLink = document.querySelector(".list");

async function getMembersData() {
    const response = await fetch(memberURL);
    const data = await response.json();
    // console.table(data.members);
    displayMembersGrid(data.members);
}

// const members = getMembersData();    

function displayMembersGrid(members) {
    document.querySelector(".directory").innerHTML = "";

    members.forEach((member) => {
        let card = document.createElement("section");
        let memberName = document.createElement('h2');
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


// gridLink.classList.add('active');

// let clearActive  = () => {
// 	gridLink.classList.remove('active');
// 	listLink.classList.remove('active');
// };

// gridLink.addEventListener("click", () => {
// 	clearActive();
//     getMembersData();
// 	displayMembersGrid();	
// 	gridLink.classList.add('active');
// });

// listLink.addEventListener("click", () => {
// 	clearActive();
//     getMembersData();
//     displayMembersList();		
// 	listLink.classList.add('active');
// });

// function displayMembersList(members) {
// 	document.querySelector(".directory").innerHTML = "";

//     let list = document.createElement("ul");
// 	members.forEach((member) => {
		
// 		let stats = document.createElement("li");
		
// 		stats.textContent = `${member.name}   ${member.address}   ${member.phoneNumber}   ${member.websiteURL}`;
		
// 		list.appendChild(stats);		
// });
//     directory.append(list);
// }