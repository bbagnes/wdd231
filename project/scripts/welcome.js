
const userInfo = new URLSearchParams(window.location.search);
const details = document.querySelector('div#details');
console.log(userInfo);

console.log(userInfo.get('first'));
console.log(userInfo.get('last'));
console.log(userInfo.get('phone'));
console.log(userInfo.get('email'));
console.log(userInfo.get('timestamp'));
console.log(userInfo.get('description'));

details.innerHTML = `
<p>Thank you for contacting Seclusive Utah!</p>
<p>Your submission details are:</p>
<p>Name: ${userInfo.get('first')} ${userInfo.get('last')}</p>
<p>Phone: ${userInfo.get('phone')}</p>
<p>Email: ${userInfo.get('email')}</p>
<p>Message Content: ${userInfo.get('description')}</p>
<p>Processed: ${userInfo.get('timestamp')}</p>
<p>We will review your message and respond within three business days.</p>`;