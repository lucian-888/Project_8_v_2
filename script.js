const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const navLinks = document.querySelectorAll(".nav-link");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
});

navLinks.forEach(link => {
  link.addEventListener("click", function() {
    // Toggle hamburger menu
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
    
    // Remove active class from all links
    navLinks.forEach(navLink => navLink.classList.remove("active"));
    
    // Add active class to clicked link
    this.classList.add("active");
  });
});


// Add an event listener for the 'submit' event on the form with id 'contact-form'
document.getElementById('contact-form').addEventListener('submit', function(event) {
  // Prevent the default form submission behavior
  event.preventDefault();
  
  // Use EmailJS to send the form data
  // 'this' refers to the form element
  emailjs.sendForm('service_a3l9l1x', 'template_8gg5c5y', this)
      .then(function(response) {
          // This function runs if the email is sent successfully
          // Show a success message to the user
          alert('Message sent successfully!');
          // Reset the form fields after successful submission
          document.getElementById('contact-form').reset();
      }, function(error) {
          // This function runs if there's an error in sending the email
          // Show an error message to the user
          alert('Failed to send message. Please try again.');
      });
});
