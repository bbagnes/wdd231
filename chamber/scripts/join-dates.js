let currentDate = new Date();
// console.log(currentDate.toDateString());
document.getElementById('lastModified').innerHTML = `WDD 231 Class Project<br> Brigham Bagnes<br>©${currentDate.getFullYear()} Logan City Chamber of Commerce<br>Last Modified: ${document.lastModified}`;

document.getElementById('timestamp').value = `${currentDate.toDateString()}`;