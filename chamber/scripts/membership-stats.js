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
    dialogBoxText.innerHTML = ``;
});

bronzeButton.addEventListener("click", () => {
    dialogBox.showModal();
    dialogBoxText.innerHTML = ``;
});

silverButton.addEventListener("click", () => {
    dialogBox.showModal();
    dialogBoxText.innerHTML = ``;
});

goldButton.addEventListener("click", () => {
    dialogBox.showModal();
    dialogBoxText.innerHTML = ``;
});

closeButton.addEventListener("click", () => {
    dialogBox.close();
});