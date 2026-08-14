console.log("PGVS Website Loaded Successfully");
function toggleGallery(id){

    var x=document.getElementById(id);

    if(x.style.display==="block"){

        x.style.display="none";

    }else{

        x.style.display="block";

    }

}
// Scroll Animation

const hiddenElements = document.querySelectorAll(
'.hidden,.zoom,.left,.right'
);

const observer = new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add('show');

}

});

});

hiddenElements.forEach((el)=>observer.observe(el));
// ================= PAGE LOADER =================

window.addEventListener("load", function () {
    const loader = document.getElementById("page-loader");

    setTimeout(() => {
        loader.classList.add("hide");
    }, 500);
});
/* ================= TOP LOADING BAR ================= */

const topLoader = document.getElementById("top-loader");

function startPageLoading() {
    if (topLoader) {
        topLoader.classList.add("loading");
        topLoader.style.width = "0%";
    }
}

function finishPageLoading() {
    if (topLoader) {
        topLoader.classList.remove("loading");
        topLoader.style.width = "100%";

        setTimeout(() => {
            topLoader.style.width = "0%";
        }, 400);
    }
}

/* Page load */
window.addEventListener("load", function () {
    finishPageLoading();
});
/* ================= NAVIGATION LOADING EFFECT ================= */

document.querySelectorAll('nav a[href^="#"]').forEach(function (link) {

    link.addEventListener("click", function (e) {

        e.preventDefault();

        const targetId = link.getAttribute("href");
        const targetSection = document.querySelector(targetId);

        if (!targetSection) return;

        // Start loading bar
        startPageLoading();

        // Wait for loading effect
        setTimeout(function () {

            // Scroll to selected section
            targetSection.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });

            // Update URL
            history.pushState(null, "", targetId);

            // Finish loading
            setTimeout(function () {
                finishPageLoading();
            }, 700);

        }, 500);

    });

});
/* =========================================
   HAMBURGER MENU
========================================= */

const menuToggle = document.getElementById("menuToggle");
const mainNav = document.getElementById("mainNav");

if (menuToggle && mainNav) {

    menuToggle.addEventListener("click", function () {

        mainNav.classList.toggle("active");

        if (mainNav.classList.contains("active")) {
            menuToggle.innerHTML = "✕";
            menuToggle.setAttribute("aria-label", "Close Menu");
        } else {
            menuToggle.innerHTML = "☰";
            menuToggle.setAttribute("aria-label", "Open Menu");
        }

    });


    /* Close menu after clicking a link */

    const navLinks = mainNav.querySelectorAll("a");

    navLinks.forEach(function(link) {

        link.addEventListener("click", function() {

            mainNav.classList.remove("active");

            menuToggle.innerHTML = "☰";
            menuToggle.setAttribute("aria-label", "Open Menu");

        });

    });

}
