const thisDate = new Date();

onload = () => {
    let visit = document.querySelector(".visits");
    let visitDate = Date(window.localStorage.getItem("visit")) || 0;
    console.log(visitDate);
    console.log(thisDate - visitDate);
    let daysAway = currentDate - visitDate;
        
    if (visitDate === NaN) {
         visit.innerHTML = `<br>Welcome! Let us know if you have any questions.`;
        
        } else if (daysAway < 1) {            
            visit.innerHTML = `<br>Back so soon! Awesome!`;
        } else if (daysAway >= 1) {
            visit.innerHTML = `<br>You last visited ${daysAway} days ago.`;
        }

        window.localStorage.setItem("visit", thisDate);
    };

