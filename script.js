/* =====================================================
   MOBILE MENU
===================================================== */

const menuToggle = document.getElementById("menuToggle");
const navList = document.getElementById("navList");

menuToggle.addEventListener("click", function () {

    navList.classList.toggle("active");

});


/* =====================================================
   CLOSE MOBILE MENU AFTER CLICKING A LINK
===================================================== */

const navLinks = document.querySelectorAll(".nav-list a");

navLinks.forEach(function (link) {

    link.addEventListener("click", function () {

        navList.classList.remove("active");

    });

});


/* =====================================================
   CONTACT FORM
===================================================== */

const contactForm = document.getElementById("contactForm");

const formFeedback = document.getElementById("formFeedback");


contactForm.addEventListener("submit", function (event) {

    event.preventDefault();


    const name =
        document.getElementById("name").value.trim();

    const email =
        document.getElementById("email").value.trim();

    const message =
        document.getElementById("message").value.trim();


    /* CHECK EMPTY FIELDS */

    if (name === "" || email === "" || message === "") {

        formFeedback.textContent =
            "Please fill in all fields.";

        formFeedback.style.color = "#ff5555";

        return;
    }


    /* CHECK EMAIL */

    const emailPattern =
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


    if (!emailPattern.test(email)) {

        formFeedback.textContent =
            "Please enter a valid email address.";

        formFeedback.style.color = "#ff5555";

        return;
    }


    /* SUCCESS */

    formFeedback.textContent =
        "Thank you! Your message has been sent successfully.";

    formFeedback.style.color = "#4cd137";


    /* CLEAR FORM */

    contactForm.reset();

});