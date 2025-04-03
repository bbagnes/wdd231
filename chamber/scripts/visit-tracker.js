const thisDate = new Date().getTime();

onload = () => {
    let visit = document.querySelector(".visits");
    let visitDate = Number(window.localStorage.getItem("visit")) || 0;
    // console.log(thisDate);
    // console.log(visitDate);
    let daysAway = ((thisDate - visitDate)/86400000);
    // console.log(daysAway);
        
    if (visitDate === 0) {
         visit.innerHTML = `<br>Welcome! Let us know if you have any questions.`;
        
        } else if (daysAway < 1) {            
            visit.innerHTML = `<br>Back so soon! Awesome!`;
        } else if (daysAway >= 1) {
            visit.innerHTML = `<br>You last visited ${daysAway.toFixed(0)} days ago.`;
        }
    window.localStorage.setItem("visit", thisDate);       
    };


