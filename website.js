/* Responsive style scrolling  */
function toggleMenu() {
  const navLinks = document.querySelector(".nav-links");
  const burgerIcon = document.querySelector(".icon-burger");
  const closeIcon = document.querySelector(".icon-close");

  // Toggle the active class on nav links
  navLinks.classList.toggle("active");

  // Toggle icons
  if (navLinks.classList.contains("active")) {
    burgerIcon.style.display = "none";
    closeIcon.style.display = "block";
    // closeIcon.style.stroke = "white";
  } else {
    burgerIcon.style.display = "block";
    closeIcon.style.display = "none";
  }
}

window.addEventListener("scroll", () => {
  const navbar = document.querySelector(".navbar");
  if (window.scrollY > 100) {
    navbar.classList.add("scrolled");
    navbar.classList.remove("default");
  } else {
    navbar.classList.remove("scrolled");
    navbar.classList.add("default");
  }
});

// for playing the video in the home page

const videoIcon = document.getElementById("videoIcon");
const videoPopup = document.getElementById("videoPopup");
const yogaVideo = document.getElementById("yogaVideo");
const closeButton = document.getElementById("closeButton");

videoIcon.addEventListener("click", function () {
  videoPopup.classList.add("active");
  yogaVideo.play();
});

closeButton.addEventListener("click", function () {
  videoPopup.classList.remove("active");
  yogaVideo.pause();
  yogaVideo.currentTime = 0;
});

// Select video and overlay elements
const video = document.getElementById("yogaVideo");
const overlay = document.getElementById("overlay");

// Show overlay when video plays
video.addEventListener("play", () => {
  overlay.classList.add("active");
});

// Hide overlay when video pauses or ends
video.addEventListener("pause", () => {
  overlay.classList.remove("active");
});

video.addEventListener("ended", () => {
  overlay.classList.remove("active");
});

// Select buttons and video elements
const buttons = document.querySelectorAll(".filter-btn");
const videos = document.querySelectorAll(".videos_container video");

// Function to show all videos by default
function showAllVideos() {
  videos.forEach((video) => video.classList.add("active"));
}

// Call the function to show all videos when the page loads
showAllVideos();

// Add event listener to each button
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const filter = button.getAttribute("data-filter"); // Get filter value

    // Loop through all videos to apply filter
    videos.forEach((video) => {
      if (filter === "all") {
        video.classList.add("active"); // Show all videos
      } else {
        // Show videos matching the filter, hide others
        if (video.getAttribute("data-category") === filter) {
          video.classList.add("active");
        } else {
          video.classList.remove("active");
        }
      }
    });
  });
});

function sendMail() {
  var name = document.getElementById("name").value.trim();
  var email = document.getElementById("email").value.trim();
  var phone = document.getElementById("phone").value.trim();
  var message = document.getElementById("message").value.trim();

  var nameError = document.getElementById("nameError");
  var emailError = document.getElementById("emailError");
  var phoneError = document.getElementById("phoneError");
  var messageError = document.getElementById("messageError");
  var successMessage = document.getElementById("successMessage");

  // Clear previous error messages
  nameError.textContent = "";
  emailError.textContent = "";
  phoneError.textContent = "";
  messageError.textContent = "";
  successMessage.textContent = "";

  let isValid = true;

  // Validate name
  if (!name) {
    nameError.textContent = "Name is required.";
    isValid = false;
  }

  // Validate email format
  var emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if (!email) {
    emailError.textContent = "Email is required.";
    isValid = false;
  } else if (!emailPattern.test(email)) {
    emailError.textContent = "Please enter a valid email address.";
    isValid = false;
  }

  // Validate phone number (must be 10 digits)
  var phonePattern = /^[0-9]{10}$/;
  if (!phone) {
    phoneError.textContent = "Phone number is required.";
    isValid = false;
  } else if (!phonePattern.test(phone)) {
    phoneError.textContent = "Please enter a valid 10-digit phone number.";
    isValid = false;
  }

  // Validate message
  if (!message) {
    messageError.textContent = "Message cannot be empty.";
    isValid = false;
  }

  // Stop execution if any validation fails
  if (!isValid) return;

  var params = { name, email, phone, message };

  const serviceID = "service_xmxt50r";
  const templateID = "template_gy8stdh";

  emailjs
    .send(serviceID, templateID, params)
    .then((res) => {
      document.getElementById("name").value = "";
      document.getElementById("email").value = "";
      document.getElementById("phone").value = "";
      document.getElementById("message").value = "";

      successMessage.textContent = "Your message was successfully sent!";
    })
    .catch((err) => {
      successMessage.textContent = "An error occurred. Please try again later.";
    });
}



function subscribe(){
  var data={
    emailId:document.getElementById("mail-id").value,
  }

  const service="service_hn5brpg";
  const template="template_awn4min";

  emailjs
  .send(service,template,data)
  .then((res)=>{
    document.getElementById("mail-id").value="";
    console.log("Success:",res.status,res.text);
    alert("Successfully sent!!");
  })
  .catch((err) => {
      console.error("Failed to send email:", err);
      alert("An error occurred. Please try again later.");
    });
}


function subscribe() {
  var emailField = document.getElementById("mail-id");
  var emailValue = emailField.value.trim(); // Remove extra spaces
  var errorSpan = document.getElementById("email-error"); // Get the span for displaying errors

  // Reset previous error message
  errorSpan.textContent = "";

  // Check if the email field is empty
  if (emailValue === "") {
    errorSpan.textContent = "Please enter your email address.";
    return; // Stop execution if validation fails
  }

  // Check if the email format is valid
  if (!validateEmail(emailValue)) {
    errorSpan.textContent = "Please enter a valid email address.";
    return;
  }

  var data = {
    emailId: emailValue,
  };

  const service = "service_hn5brpg";
  const template = "template_awn4min";

  emailjs
    .send(service, template, data)
    .then((res) => {
      emailField.value = ""; // Clear input after success
      console.log("Success:", res.status, res.text);
      errorSpan.style.color = "green"; // Show success message in green
      errorSpan.textContent = "Successfully sent!";
    })
    .catch((err) => {
      console.error("Failed to send email:", err);
      errorSpan.style.color = "red";
      errorSpan.textContent = "An error occurred. Please try again later.";
    });
}

// Function to validate email format
function validateEmail(email) {
  var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailPattern.test(email);
}


const navLinks = document.querySelectorAll(".nav-link");
const sections = document.querySelectorAll("section");

const options = {
  root: null,
  threshold: 0.6,
};

const callback = (entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      const id = entry.target.id;
      const navLink = document.querySelector(`.nav-link[href="#${id}"]`);
      
      // console.log("Intersecting Section ID:", id);
      // console.log("Nav link found:", navLink);

      if (navLink) { // Ensure navLink is not null
        navLinks.forEach((link) => link.classList.remove("active"));
        navLink.classList.add("active");
      }
    }
  });
};

const observer = new IntersectionObserver(callback, options);
sections.forEach((section) => observer.observe(section));