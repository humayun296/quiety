function openTab(evt, tabName) {
    // Hide all tab content
    var tabContents = document.getElementsByClassName("tab-content");

    for (var i = 0; i < tabContents.length; i++) 
        {
        tabContents[i].style.opacity = "0"; // Start fade-out

    }

    // Remove "active" class from all tabs
    var tabs = document.getElementsByClassName("tab");

    for (var i = 0; i < tabs.length; i++) {

        tabs[i].className = tabs[i].className.replace(" active", "");

    }

    // Show the current tab content and add "active" class to the clicked tab
    var currentTab = document.getElementById(tabName);

    currentTab.style.display = "flex"; // Show the tab content

    setTimeout(function() {

        currentTab.style.opacity = "1"; // Start fade-in

    }, 10); // Short delay to allow display change


    evt.currentTarget.className += " active";

    // Hide other tabs after a short delay
    setTimeout(function() {

        for (var i = 0; i < tabContents.length; i++) {

            if (tabContents[i] !== currentTab) {

                tabContents[i].style.display = "none"; // Hide non-active tabs

            }
        }
    }, 400); // Match this duration with the CSS transition
}

// Initialize the first tab as active

document.querySelector(".tab").click();


// Testimonial Slider JS Begin

const bullets = document.querySelectorAll('.pagination .bullet');

const slides = document.querySelectorAll('.slide');

let currentSlide = 0;

bullets.forEach((bullet, index) => {

    bullet.addEventListener('click', () => {

        bullets[currentSlide].classList.remove('active');
        slides[currentSlide].style.display = 'none';

        currentSlide = index;

        bullet.classList.add('active');

        slides[currentSlide].style.display ='flex';
        slides[currentSlide].style.animation = 'slideEffect 0.5s forwards';
    });
});

// Testimonial Slider JS End