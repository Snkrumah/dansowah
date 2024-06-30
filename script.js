// Function to toggle the visibility of the testimonials section
function toggleTestimonials() {
    var testimonialsSection = document.getElementById("testimonials");
    testimonialsSection.classList.toggle("hidden");
  }
  
  // Function to submit the contact form
  function submitForm() {
    var nameInput = document.getElementById("name");
    var emailInput = document.getElementById("email");
    var messageInput = document.getElementById("message");
  
    // Perform form validation
    if (nameInput.value === "" || emailInput.value === "" || messageInput.value === "") {
      alert("Please fill in all fields.");
      return;
    }
  
    // Perform form submission
    // You can add your own logic here to handle the form submission, such as sending an email or saving the data to a database
  
    // Clear the form inputs
    nameInput.value = "";
    emailInput.value = "";
    messageInput.value = "";
  
    alert("Form submitted successfully!");
  }