
const memberInfo = new URLSearchParams(window.location.search);
console.log(memberInfo);

console.log(memberInfo.get('first'));
console.log(memberInfo.get('last'));
console.log(memberInfo.get('phone'));
console.log(memberInfo.get('email'));
console.log(memberInfo.get('title'));
console.log(memberInfo.get('business-name'));
console.log(memberInfo.get('level'));

document.querySelector('#details').innerHTML = `
<p>Thank you for joining Logan City's Chamber of Commerce!</p>
<p>Please verify the following information:</p>
<p>Applicant: ${memberInfo.get('first')} ${memberInfo.get('last')}</p>
<p>Phone: ${memberInfo.get('phone')}</p>
<p>Email: ${memberInfo.get('email')}</p>
<p>Business Name: ${memberInfo.get('business-name')}</p>
<p>Membership Level: ${memberInfo.get('level')}</p>
`;