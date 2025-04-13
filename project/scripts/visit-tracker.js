const thisDate = new Date().getTime();

window.addEventListener('load', (event) => {
    let visit = document.querySelector(".visits");
    let visitDate = Number(window.localStorage.getItem("visit")) || 0;
    console.log(thisDate);
    console.log(visitDate);
    let daysAway = (Math.trunc((thisDate - visitDate)/8640000))/10;
    console.log(daysAway);
        
    if (visitDate === 0) {
         visit.innerHTML = `<br>Welcome! Pleas use our Contact Page if you have any questions or comments.`;
        
        } else if (daysAway >= 2) {
            visit.innerHTML = `<br>Welcome back. Your last visit was ${daysAway.toFixed(0)} days ago.`;
        } else if (daysAway == 1) {
            visit.innerHTML = `<br>Welcome back. Your last visit was ${daysAway.toFixed(0)} day ago.`;
        } else if (daysAway < 1) {            
            visit.innerHTML = `<br>Back so soon? Awesome!`;
        }
    window.localStorage.setItem("visit", thisDate);       
});
