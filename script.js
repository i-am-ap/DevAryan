// Ensure the DOM is fully loaded before running scripts
// view resume in a new tab
document.addEventListener('DOMContentLoaded', () => {
  const resumeBtn = document.getElementById('resume');

  if (resumeBtn) {
    resumeBtn.addEventListener('click', (e) => {
      e.preventDefault();
      window.open('assets/files/Resume_Aryan.pdf', '_blank');
    });
  } else {
    console.error("Resume button not found in DOM.");
  }
});

// Add event listener for the "Let's Connect" button
// This will open the user's email client with a pre-filled subject and body
document.getElementById('connectBtn').addEventListener('click', () => {
  window.location.href = "mailto:aryanpalaspagar30@gmail.com?subject=Let's%20Connect&body=Hi%20Aryan,%20I%20saw%20your%20portfolio...";
});


// Ensure the contact form is present before adding event listeners
// This prevents errors if the form is not found in the DOM



document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('contact-form'); // <-- match HTML

  if (!form) {
    console.error("Contact form not found");
    return;
  }

  form.addEventListener('submit', function(e) {
    // alert("Thanks! I’ll get back to you soon.");
    e.preventDefault();  // now this WILL run

    const name    = document.getElementById('name').value.trim();
    const email   = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    // 1) grab the full name
  const fullName = document.getElementById('name').value.trim();

  // 2) extract the first name
  const firstName = fullName.split(' ')[0] || fullName;

  // 3) show alert
  alert(`Thanks ${firstName}! I’ll get back to you soon.`);

    const phone = "918080702916";
    const fullMessage = `Hi Aryan, I am ${name}. My email is ${email}. ${message}.`;
    const whatsappUrl = `https://wa.me/${phone}?text=${encodeURIComponent(fullMessage)}`;

    window.open(whatsappUrl, '_blank');
    return false; // extra safeguard
  });
});


// Intersection Observer to highlight active section in the nav link
// This will highlight the nav link corresponding to the section currently in view
document.addEventListener('DOMContentLoaded', () => {
  const navLinks = document.querySelectorAll('#link a');
  const sections = document.querySelectorAll('section');

  const options = {
    root: null,
    rootMargin: '0px',
    threshold: 0.6 // % of section visible
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // Remove active class from all
        navLinks.forEach(link => link.classList.remove('active'));

        // Add to the matching one
        const id = entry.target.getAttribute('id');
        const activeLink = document.querySelector(`#link a[href="#${id}"]`);
        if (activeLink) {
          activeLink.classList.add('active');
        }
      }
    });
  }, options);

  sections.forEach(section => {
    observer.observe(section);
  });
});



// Typing effect for the title
// This will create a typing effect for the title text
document.addEventListener("DOMContentLoaded", () => {
  const line1 = document.getElementById("line1");
  const line2 = document.getElementById("line2");

  const titles = [
    ["Full Stack", "Developer"],
    ["AI/ML", "Enthusiast"],
    ["Creative", "Technologist"],
    ["Problem", "Solver"]
  ];

  let index = 0;
  let charIndex = 0;
  let isDeleting = false;

  function type() {
    const [word1, word2] = titles[index];
    let complete = false;

    if (!isDeleting) {
      charIndex++;
      complete = charIndex > Math.max(word1.length, word2.length);
    } else {
      charIndex--;
      complete = charIndex < 0;
    }

    line1.textContent = word1.substring(0, charIndex);
    line2.textContent = word2.substring(0, charIndex);

    if (!isDeleting && complete) {
      isDeleting = true;
      setTimeout(type, 1000); // Wait before delete
    } else if (isDeleting && complete) {
      isDeleting = false;
      index = (index + 1) % titles.length;
      setTimeout(type, 200); // Small pause before typing next
    } else {
      setTimeout(type, isDeleting ? 40 : 100); // Typing speed
    }
  }

  type();
});


// Mouse move effect for the image
// This will create a mouse move effect on the image in the main section
const pic = document.getElementById("pic");

  pic.addEventListener("mousemove", (e) => {
    const rect = pic.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    pic.style.setProperty("--bg", `radial-gradient(circle at ${x}px ${y}px, rgba(0,255,102,0.4) 0%, transparent 40%)`);
    pic.style.setProperty("--shadow", `0 0 60px 20px rgba(0,255,102,0.2)`);
  });

  pic.addEventListener("mouseleave", () => {
    pic.style.setProperty("--bg", `none`);
    pic.style.setProperty("--shadow", `none`);
  });