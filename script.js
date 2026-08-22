/* ===================================================
   WEBSITE START
=================================================== */

document.addEventListener("DOMContentLoaded", () => {


    const openButton = document.getElementById("openInvitation");

    const loader = document.getElementById("loader");

    const site = document.getElementById("site");

    const music = document.getElementById("music");


    // Скрываем сайт до открытия

    if (site) {

        site.style.display = "none";

    }



    // Кнопка открытия

    if (openButton) {


        openButton.addEventListener("click", () => {



            // Запускаем музыку

if (music) {

    music.volume = 0.10;

    music.currentTime = 85;

    music.play();

}


            // Убираем заставку

            if (loader) {

                loader.style.opacity = "0";


                setTimeout(() => {

                    loader.style.display = "none";


                }, 600);

            }



            // Показываем сайт

            if (site) {

                site.style.display = "block";

            }


        });


    }


});

/* ===================================================
   COUNTDOWN
=================================================== */

const eventDate = new Date("September 25, 2026 18:00:00").getTime();


function updateCountdown() {


    const now = new Date().getTime();

    const distance = eventDate - now;



    const days = Math.floor(
        distance / (1000 * 60 * 60 * 24)
    );


    const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24))
        / (1000 * 60 * 60)
    );


    const minutes = Math.floor(
        (distance % (1000 * 60 * 60))
        / (1000 * 60)
    );


    const seconds = Math.floor(
        (distance % (1000 * 60))
        / 1000
    );



    document.getElementById("days").textContent =
        days.toString().padStart(2, "0");


    document.getElementById("hours").textContent =
        hours.toString().padStart(2, "0");


    document.getElementById("minutes").textContent =
        minutes.toString().padStart(2, "0");


    document.getElementById("seconds").textContent =
        seconds.toString().padStart(2, "0");


}


updateCountdown();


setInterval(updateCountdown, 1000);

/* ===================================================
   SCROLL REVEAL
=================================================== */

const revealElements = document.querySelectorAll(".reveal");


const revealObserver = new IntersectionObserver(
    
    (entries) => {


        entries.forEach((entry) => {


            if (entry.isIntersecting) {


                entry.target.classList.add("active");


            }


        });


    },

    {
        threshold: 0.15
    }

);



revealElements.forEach((element) => {

    revealObserver.observe(element);

});

/* ===================================================
   NAVIGATION MENU
=================================================== */

const menuButton = document.getElementById("menuButton");

const navigationLinks = document.getElementById("navigationLinks");


if (menuButton && navigationLinks) {


    menuButton.addEventListener("click", () => {


        navigationLinks.classList.toggle("active");


    });


}



// Закрытие меню после перехода по ссылке

document.querySelectorAll(".navigation__links a")
.forEach((link) => {


    link.addEventListener("click", () => {


        navigationLinks.classList.remove("active");


    });


});