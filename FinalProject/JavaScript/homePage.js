//מסמן איזה דף נמצא המשתמש


  const navLinks = document.querySelectorAll('.nav-link');
  

  navLinks.forEach(link => {
    if (link.href === location.href) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });

// פה זה הסיסמאות
 const passwords = [
    "תרומת דם מצילה 3 אנשים",
    "טוב לתת טוב לקבל",
    "תרומת דם חשובה לכולם",
    "בואו נציל חיים",
    "כפות ידיים נושאות חיים"
  ];
  
  const passwordElement = document.querySelector('.password');
  
  function updatePassword() {
    const newPassword = passwords[Math.floor(Math.random() * passwords.length)];
    passwordElement.classList.add('change');
    setTimeout(function() {
      passwordElement.innerText = newPassword;
      passwordElement.classList.add('visible');
      passwordElement.classList.remove('change');
      setTimeout(function() {
        passwordElement.classList.remove('visible');
      }, 7000);
    }, 500);
  }
  
  updatePassword(); // Update password immediately on page load
  
  setInterval(updatePassword, 10000); // Update password every 10 seconds
  
  // Optional: Add a click event listener to update password on click
  passwordElement.addEventListener('click', function() {
    updatePassword();
  });
  
//   פה זה המדד

window.addEventListener('DOMContentLoaded', () => {
    const donationCount = document.getElementById('donation-count');
    const donationGoal = document.getElementById('donation-goal');
    const donationFill = document.getElementById('donation-fill');
    const donationMessage = document.getElementById('donation-message');
  
    const currentCount = 950;
    const goalCount = 1200;
  
    donationCount.innerText = currentCount;
    donationGoal.innerText = goalCount;
    donationFill.style.width = `${(currentCount / goalCount) * 100}%`;
    
    donationFill.style.backgroundColor = 'green';
    
    if (currentCount >= goalCount) {
      donationMessage.innerText = "קיבלנו את כל התרומות שצריכים, תודה רבה!";
    } else {
      donationMessage.innerText = "רק בעזרתכם נגיע ליעד";
    }
  });
  