
const memberInfo = new URLSearchParams(window.location.search);
console.log(memberInfo);

console.log(memberInfo.get('first'));
console.log(memberInfo.get('last'));
console.log(memberInfo.get('phone'));
console.log(memberInfo.get('email'));
console.log(memberInfo.get('title'));
console.log(memberInfo.get('business-name'));
console.log(memberInfo.get('level'));

document.querySelector('#results').innerHTML = `
<p>Applicant: ${memberInfo.get('first')} ${memberInfo.get('last')} (${memberInfo.get('title')})</p>
<p>Phone: ${memberInfo.get('phone')}</p>
<p>Email: ${memberInfo.get('email')}</p>
<p>Business Name: ${memberInfo.get('business-name')}</p>
<p>Membership Level: ${memberInfo.get('level')}</p>`;