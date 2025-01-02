
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');

hamburger.addEventListener('click', () => {
    console.log('Hamburger clicked!');
    navLinks.classList.toggle('active');
});
// Function to toggle the sidebar (open/close)
function toggleNav() {
    const navLinks = document.getElementById('nav-links');
    navLinks.classList.toggle('active');
}

// Function to close the sidebar
function closeNav() {
    const navLinks = document.getElementById('nav-links');
    navLinks.classList.remove('active');
}
// Select the "View More" button and product items
const viewMoreBtn = document.getElementById('view-more-btn');
const hiddenItems = document.querySelectorAll('.product-item.hidden');

viewMoreBtn.addEventListener('click', function () {
    // Show all hidden products
    hiddenItems.forEach(item => {
        item.classList.remove('hidden');
    });

    // Hide the button after clicking
    viewMoreBtn.style.display = 'none';
});

// Load the header
fetch('Header.html')
    .then(response => {
        if (!response.ok) throw new Error('Header not found');
        return response.text();
    })
    .then(data => {
        document.getElementById('header').innerHTML = data;
    })
    .catch(error => console.error('Error loading header:', error));

// Load the footer
fetch('Footer.html')
    .then(response => {
        if (!response.ok) throw new Error('Footer not found');
        return response.text();
    })
    .then(data => {
        document.getElementById('footer').innerHTML = data;
    })
    .catch(error => console.error('Error loading footer:', error));

// solution page js
// Function to redirect to a specific page when a card is clicked
function redirectTo(page) {
    switch (page) {
        case 'student-management':
            window.location.href = 'student-management.html';
            break;
        case 'exam-management':
            window.location.href = 'exam-management.html';
            break;
        case 'attendance-management':
            window.location.href = 'attendance-management.html';
            break;
        case 'hostel-management':
            window.location.href = 'hostel-management.html';
            break;
        case 'human-resource':
            window.location.href = 'human-resource.html';
            break;
        case 'transport-management':
            window.location.href = 'transport-management.html';
            break;
        case 'library':
            window.location.href = 'library.html';
            break;
        case 'inventory':
            window.location.href = 'inventory.html';
            break;
        case 'parent-monitoring':
            window.location.href = 'parent-monitoring.html';
            break;
        case 'id-card-generator':
            window.location.href = 'id-card-generator.html';
            break;
        case 'bulk-sms-and-email':
            window.location.href = 'bulk-sms-and-email.html';
            break;
        case 'live-class':
            window.location.href = 'live-class.html';
            break;
        case 'report':
            window.location.href = 'report.html';
            break;
        case 'support-multiple-language':
            window.location.href = 'support-multiple-language.html';
            break;
        case 'support-multiple-currancy':
            window.location.href = 'support-multiple-currancy.html';
            break;
        case 'dynamic-institue-website':
            window.location.href = 'dynamic-institue-website.html';
            break;
        case 'custom-domain':
            window.location.href = 'custom-domain.html';
            break;
        case 'certificate-generator':
            window.location.href = 'certificate-generator.html';
            break;
        // add more redirecting pages
        default:
            alert('Select a valid page');
    }
}

// Optional: handle dropdown changes
document.getElementById('solution-select').addEventListener('change', function () {
    const selectedOption = this.value;
    redirectTo(selectedOption);
});



// service 1 .js

function toggleFAQ(element) {
    const answer = element.nextElementSibling;
    const toggleButton = element.querySelector('.faq-toggle');

    // Toggle answer display
    if (answer.style.display === "none" || !answer.style.display) {
        answer.style.display = "block";
        toggleButton.textContent = "-";
    } else {
        answer.style.display = "none";
        toggleButton.textContent = "+";
    }
}
document.addEventListener("DOMContentLoaded", () => {
    const hamburger = document.getElementById("hamburger");
    const navLinks = document.querySelector(".nav-links");
    const closeBtn = document.getElementById("close-btn");
  
    // Toggle mobile menu
    hamburger.addEventListener("click", () => {
      navLinks.classList.add("active");
    });
  
    closeBtn.addEventListener("click", () => {
      navLinks.classList.remove("active");
    });
  
    // Close menu when clicking outside
    document.addEventListener("click", (e) => {
      if (!navLinks.contains(e.target) && !hamburger.contains(e.target)) {
        navLinks.classList.remove("active");
      }
    });
  
    // Toggle dropdown on hover for desktops
    const dropdownLink = document.querySelector(".nav-links li:hover .dropdown");
    if (window.innerWidth > 768) {
      dropdownLink.addEventListener("mouseover", () => {
        dropdownLink.style.display = "block";
      });
  
      dropdownLink.addEventListener("mouseleave", () => {
        dropdownLink.style.display = "none";
      });
    }
  });
  
