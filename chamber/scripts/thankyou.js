
const memberInfo = new URLSearchParams(window.location.search);
const details = document.querySelector('div#details');
// console.log(memberInfo);

console.log(memberInfo.get('first'));
console.log(memberInfo.get('last'));
console.log(memberInfo.get('phone'));
console.log(memberInfo.get('email'));
console.log(memberInfo.get('title'));
console.log(memberInfo.get('business-name'));
console.log(memberInfo.get('level'));

switch (memberInfo.get('level')) {
    case 'Nonprofit':
      details.classList.add('nonprofit');
      break;
    case 'Bronze':
      break;
    case 'Silver':
        details.classList.add('silver');
      break;
    case 'Gold':
        details.classList.add('gold');
      break;
  }

details.innerHTML = `
<p>Thank you for joining Logan City's Chamber of Commerce!</p>
<p>Your submission details are:</p>
<p>Applicant: ${memberInfo.get('first')} ${memberInfo.get('last')}</p>
<p>Phone: ${memberInfo.get('phone')}</p>
<p>Email: ${memberInfo.get('email')}</p>
<p>Business Name: ${memberInfo.get('business-name')}</p>
<p>Membership Level: ${memberInfo.get('level')}</p>
<p>If you need to update or change your information you can contact us at anytime at: LoganCoC.gmail.com 
`;