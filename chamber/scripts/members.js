import {displayMembersGrid, displayMembersList, displaySelectMembersGrid} from "./members-display.mjs";

const gridLink = document.querySelector(".grid");
const listLink = document.querySelector(".list");


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

gridLink.classList.add('active');
displayMembersGrid();
displaySelectMembersGrid();