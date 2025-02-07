const items = document.querySelectorAll(".accordion-item");
let currentIndex = 0;

function activateAccordion(index) {
    items.forEach((item, i) => {
        if (i === index) {
            item.classList.add("active");
        } else {
            item.classList.remove("active");
        }
    });
}

items.forEach((item, index) => {
    item.querySelector(".accordion-header").addEventListener("click", () => {
        currentIndex = index;
        activateAccordion(index);
    });
});

setInterval(() => {
    currentIndex = (currentIndex + 1) % items.length;
    activateAccordion(currentIndex);
}, 8000);

activateAccordion(currentIndex); // Start with first open



// video slides show



let videos = document.querySelectorAll(".slide");
let currentIndex1= 0;

function showNextVideo() {
  videos[currentIndex1].classList.remove("active");
  currentIndex1 = (currentIndex1 + 1) % videos.length;
  videos[currentIndex1].classList.add("active");
}

// Start the video slideshow
setInterval(showNextVideo, 6000);


// FAQs Accordion Section


 // Add click event listener to each FAQ header
 document.querySelectorAll('.faq-header').forEach(header => {
    header.addEventListener('click', function() {
      // First, close any open FAQ items except the one being clicked.
      document.querySelectorAll('.faq-item.active').forEach(item => {
        if (item !== this.parentElement) {
          item.classList.remove('active');
          item.querySelector('.faq-content').style.maxHeight = null;
          item.querySelector('.faq-header .icon').textContent = "+";
        }
      });

      // Toggle the clicked FAQ item
      const faqItem = this.parentElement;
      const content = faqItem.querySelector('.faq-content');
      const icon = faqItem.querySelector('.faq-header .icon');

      if (faqItem.classList.contains('active')) {
        faqItem.classList.remove('active');
        content.style.maxHeight = null;
        icon.textContent = "+";
      } else {
        faqItem.classList.add('active');
        // Set max-height to the content's scrollHeight for a smooth transition
        content.style.maxHeight = content.scrollHeight + "px";
        icon.textContent = "×";
      }
    });
  });



  // toogle js

  const toggleButton = document.getElementById('toggleButton');
  const tabs = document.querySelectorAll('.tab-content');
  
  toggleButton.addEventListener('click', () => {
    toggleButton.classList.toggle('toggleActive');
  
    tabs.forEach(tab => {
      tab.classList.toggle('toggleActive');
    });
  });
  




  // mobile responsive toggle menu js



    // Get elements
const menuToggle = document.getElementById('menuToggle');
const slideMenu = document.getElementById('slideMenu');

// Toggle menu on button click
menuToggle.addEventListener('click', () => {
  slideMenu.classList.toggle('active');
  menuToggle.classList.toggle('active'); // Toggle cross icon
});

// Close menu when clicking outside
document.addEventListener('click', (event) => {
  if (!slideMenu.contains(event.target) && !menuToggle.contains(event.target)) {
    slideMenu.classList.remove('active');
    menuToggle.classList.remove('active'); // Revert to hamburger icon
  }
});




// new updated menu mobile and desktop

function toggleMenu() {
  var sideMenu = document.getElementById("side-menu");
  // Check if the side menu is open or closed and toggle accordingly
  if (sideMenu.style.left === "0px") {
      sideMenu.style.left = "-250px"; // Close the menu
  } else {
      sideMenu.style.left = "0"; // Open the menu
  }
}
