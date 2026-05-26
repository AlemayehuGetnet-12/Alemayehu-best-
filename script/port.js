// ===============================
// Portfolio JavaScript (port.js)
// ===============================

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault();

    const targetId = this.getAttribute('href');
    const targetSection = document.querySelector(targetId);

    if (targetSection) {
      targetSection.scrollIntoView({
        behavior: 'smooth'
      });
    }
  });
});

// Welcome alert when page loads
window.addEventListener('load', () => {
  alert("Welcome to Alemayehu Getnet Portfolio Website!");
});

// Contact form validation
const form = document.querySelector("form");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.querySelector('input[type="text"]').value;
  const email = document.querySelector('input[type="email"]').value;
  const message = document.querySelector("textarea").value;

  if (name === "" || email === "" || message === "") {
    alert("Please fill all fields!");
  } else {
    alert("Message sent successfully!");

    // Clear form
    form.reset();
  }
});

// Change navbar color while scrolling
window.addEventListener("scroll", () => {
  const nav = document.getElementById("nav");

  if (window.scrollY > 50) {
    nav.style.backgroundColor = "black";
    nav.style.padding = "15px";
  } else {
    nav.style.backgroundColor = "transparent";
  }
});

// Dynamic date and time
function updateDate() {
  const dateElement = document.getElementById("date");

  const now = new Date();

  dateElement.innerHTML =
    "Current Date & Time: " + now.toLocaleString();
}

// Update every second
setInterval(updateDate, 1000);

// Typing effect for home title
const text = "Junior FullStack Developer!";
let index = 0;

function typingEffect() {
  const title = document.querySelector(".hero-text h2");

  if (index < text.length) {
    title.innerHTML += text.charAt(index);
    index++;
    setTimeout(typingEffect, 100);
  }
}

// Start typing effect
document.querySelector(".hero-text h2").innerHTML = "";
typingEffect();

// Back to top button
const topButton = document.createElement("button");

topButton.innerHTML = "⬆ Top";
topButton.style.position = "fixed";
topButton.style.bottom = "20px";
topButton.style.right = "20px";
topButton.style.padding = "10px";
topButton.style.display = "none";
topButton.style.cursor = "pointer";

document.body.appendChild(topButton);

window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    topButton.style.display = "block";
  } else {
    topButton.style.display = "none";
  }
});

topButton.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});