// 📅 Footer Date Handling
const yearSpan = document.querySelector('#year');
const lastModifiedSpan = document.querySelector('#lastModified');

if (yearSpan) {
  yearSpan.textContent = new Date().getFullYear();
}

if (lastModifiedSpan) {
  lastModifiedSpan.textContent = document.lastModified;
}

// ✅ Contact Form Validation + Save Name to localStorage
const contactForm = document.getElementById("contactForm");

if (contactForm) {
  contactForm.addEventListener("submit", function (e) {
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    if (!name || !email || !message) {
      alert("Please fill in all fields before submitting.");
      e.preventDefault();
    } else {
      localStorage.setItem("visitorName", name);
    }
  });
}

// 👋 Greet Returning Visitor
const visitorName = localStorage.getItem("visitorName");

if (visitorName) {
  const heroSection = document.querySelector(".hero");
  if (heroSection) {
    const greeting = document.createElement("p");
    greeting.textContent = `Welcome back, ${visitorName}! Ready to explore more wonders?`;
    greeting.style.fontWeight = "bold";
    greeting.style.marginTop = "1rem";
    heroSection.appendChild(greeting);
  }
}

// 🍔 Hamburger Menu Toggle
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');

if (hamburger && navMenu) {
  hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('show');
  });
}

// 🎞️ Slider Logic (Hero Images)
const slider = document.querySelector(".slider");

if (slider) {
  let index = 0;
  const images = slider.querySelectorAll("img");

  setInterval(() => {
    images.forEach((img, i) => {
      img.style.display = i === index ? "block" : "none";
    });
    index = (index + 1) % images.length;
  }, 3000);
}

// 🗣️ Visitor Reviews Array + Display
const reviews = [
  {
    name: "Amina K.",
    location: "Kampala",
    comment: "Exploring the Nile with EcoExplore was unforgettable. The guides were knowledgeable and the scenery was breathtaking!"
  },
  {
    name: "David M.",
    location: "Entebbe",
    comment: "I loved the conservation efforts and the cultural insights. Jinja is truly a gem!"
  }
];

const reviewList = document.getElementById("reviewList");

if (reviewList) {
  reviewList.innerHTML = reviews.map(review => `
    <div class="review-card">
      <p><strong>${review.name}</strong> from ${review.location} says:</p>
      <blockquote>"${review.comment}"</blockquote>
    </div>
  `).join('');
}

// ⭐ Star Rating Interaction
const starRating = document.getElementById("starRating");

if (starRating) {
  starRating.addEventListener("change", (e) => {
    const selected = e.target.value;
    console.log(`User selected ${selected} stars`);
    // Optional: store in localStorage or display on page
  });
}
