let memberURL = 'https://bbagnes.github.io/wdd231/chamber/data/members.json';
const directory = document.querySelector('.directory');
const selected = document.querySelector('.selected');

const members = getMembersData(); 

async function getMembersData() {
    const response = await fetch(memberURL);
    const data = await response.json();
    // console.table(data.members);
    return data.members;
}   

async function displayMembersGrid() {
    directory.innerHTML = "";

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

async function displayMembersList() {
	directory.innerHTML = "";

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

async function displaySelectMembersGrid() {
    selected.innerHTML = "";

    let members = await getMembersData();
    let displayCount = 0;

    do {
        members.forEach((member) => {
            if (member.membershipLevel >= 2) {
                let select = Math.random() * 10;
                if (select >= 7) { 
                    let card = document.createElement("section");
                    let memberName = document.createElement('h3');
                    let memberAddress = document.createElement('p');
                    let phoneNum = document.createElement('p');
                    let memberEmail = document.createElement('p');
                    let url = document.createElement('p');
                    let icon = document.createElement('img');

                    memberName.textContent = `${member.name} `;
                    memberAddress.textContent = `${member.address}`;
                    memberEmail.textContent = `Email: ${member.email}`
                    phoneNum.textContent = `Phone: ${member.phoneNumber}`;
                    url.textContent = `URL: ${member.websiteURL}`

                    icon.setAttribute('src', member.image);
                    icon.setAttribute('alt', `Business Icon`);
                    icon.setAttribute('loading', 'lazy');
                    icon.setAttribute('width', '120');
                    icon.setAttribute('height', 'auto');
                    if (member.membershipLevel == 2) {
                        card.classList.add('silver');
                        memberName.setAttribute('aria-label', `Silver member ${member.name}`)
                    }
                    else {
                        card.classList.add('gold');
                        memberName.setAttribute('aria-label', `Gold member ${member.name}`)
                    }

                    card.appendChild(memberName);
                    card.appendChild(memberAddress);
                    card.appendChild(icon);
                    card.appendChild(memberEmail);        
                    card.appendChild(phoneNum);
                    card.appendChild(url);            

                    selected.append(card);
                    displayCount ++;
                    members.filter(member => member.class == 'silver' || member.class == 'gold');
                }
            }
        });
    } while (displayCount <= 1);
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }





export {displayMembersGrid, displayMembersList, displaySelectMembersGrid};