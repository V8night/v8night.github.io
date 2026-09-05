/* ==========================================
MARUTI PORTFOLIO
FRIENDS PAGE
========================================== */

/* ===============================
FADE IN ANIMATION
================================ */

var fadeElements = document.querySelectorAll(".fade-in");

if (fadeElements.length > 0) {
    if ('IntersectionObserver' in window) {
        var observer = new IntersectionObserver(function(entries) {
            entries.forEach(function(entry) {
                if (entry.isIntersecting) {
                    entry.target.classList.add("show");
                    observer.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.1
        });

        fadeElements.forEach(function(element, index) {
            element.style.transitionDelay = (index * 75) + "ms";
            observer.observe(element);
        });
    } else {
        fadeElements.forEach(function(element) {
            element.classList.add("show");
        });
    }
}

/* ===============================
SCROLL TO TOP
================================ */

var topBtn = document.getElementById("topBtn");

if (topBtn) {
    window.addEventListener("scroll", function() {
        if (window.scrollY > 400) {
            topBtn.classList.add("show");
        } else {
            topBtn.classList.remove("show");
        }
    });

    topBtn.addEventListener("click", function() {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
}

/* ===============================
ACTIVE NAVIGATION
================================ */

var navLinks = document.querySelectorAll("nav a");

navLinks.forEach(function(link) {
    link.addEventListener("click", function() {
        navLinks.forEach(function(item) {
            item.classList.remove("active");
        });
        link.classList.add("active");
    });
});

/* ===============================
YEAR
================================ */

var year = document.getElementById("year");

if (year) {
    year.textContent = new Date().getFullYear();
}

/* ===============================
PAGE LOADED
================================ */

console.log("Maruti Friends Page Loaded");
