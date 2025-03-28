const levels = document.querySelector('#levels');
const nonButton = document.querySelector("#nonButton");
const bronzeButton = document.querySelector("#bronzeButton");
const silverButton = document.querySelector("#silverButton");
const goldButton = document.querySelector("#goldButton");
const dialogBox = document.querySelector('#levels');
const closeButton = document.querySelector("#closeButton");
const dialogBoxText = document.querySelector('#levels div');

nonButton.addEventListener("click", () => {
    dialogBox.showModal();
    clearActive();
    dialogBox.classList.add('nonprofit');
    dialogBoxText.innerHTML = `
    <h3>Non Profit Membership Level</h3>
    <p><strong>Benefits:</strong> Listing on Website</p>
    <p><strong>Cost:</strong> Free to qualified members</p>`;
});

bronzeButton.addEventListener("click", () => {
    dialogBox.showModal();
    clearActive();
    dialogBox.classList.add('bronze');
    dialogBoxText.innerHTML = `
        <h3>Bronze Membership Level</h3>
        <p><strong>Benefits:</strong> Listing on Website</p>
        <p><strong>Cost:</strong> $50.00 (annual charge)</p>`;
});

silverButton.addEventListener("click", () => {
    dialogBox.showModal();
    clearActive();
    dialogBox.classList.add('silver');
    dialogBoxText.innerHTML = `
        <h3>Silver Membership Level</h3>
        <p><strong>Benefits:</strong> Listing on Directory Page, Spotlight on Home Page, booth at regular events</p>
        <p><strong>Cost:</strong> $200.00 (annual charge)</p>`;
});

goldButton.addEventListener("click", () => {
    dialogBox.showModal();
    clearActive();
    dialogBox.classList.add('gold');
    dialogBoxText.innerHTML = `
        <h3>Gold Membership Level</h3>
        <p><strong>Benefits:</strong> Listing on Directory Page, Spotlight on Home Page, booth at regular & special events</p>
        <p><strong>Cost:</strong> $500.00 (annual charge)</p>`;
});

closeButton.addEventListener("click", () => {
    dialogBox.close();
});

let clearActive  = () => {
	dialogBox.classList.remove('nonprofit');
	dialogBox.classList.remove('bronze');
	dialogBox.classList.remove('silver');
	dialogBox.classList.remove('gold');
};