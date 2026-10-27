const activities = [

{
    title: "Basketball",
    image: "images/basketball.jpg",
    text: "University basketball practice and competitions."
},

{
    title: "Piano",
    image: "images/piano.jpg",
    text: "Several years of piano practice."
},

{
    title: "Dance",
    image: "images/dance.jpg",
    text: "Dance practice and performances."
},

{
    title: "Travel",
    image: "images/travel.jpg",
    text: "International experiences and cultural discovery."
}

];

/* =========================
   ELEMENTS
========================= */

const centerTitle = document.getElementById("center-title");
const centerImage = document.getElementById("center-image");
const centerText = document.getElementById("center-text");

const leftTitle = document.getElementById("left-title");
const leftImage = document.getElementById("left-image");

const rightTitle = document.getElementById("right-title");
const rightImage = document.getElementById("right-image");

/* =========================
   INDEX ACTUEL
========================= */

let current = 0;

/* =========================
   ANIMATION DE SORTIE
========================= */

function fadeOut() {

    centerImage.style.opacity = "0";
    centerImage.style.transform = "scale(0.97)";

    centerTitle.style.opacity = "0";
    centerTitle.style.transform = "translateY(15px)";

    centerText.style.opacity = "0";
    centerText.style.transform = "translateY(15px)";

    leftImage.style.opacity = "0";
    rightImage.style.opacity = "0";
}

/* =========================
   MISE A JOUR
========================= */

function updateCarousel() {

    fadeOut();

    setTimeout(() => {

        const left =
            (current - 1 + activities.length)
            % activities.length;

        const right =
            (current + 1)
            % activities.length;

        /* CENTRE */

        centerTitle.textContent =
            activities[current].title;

        centerImage.src =
            activities[current].image;

        centerText.textContent =
            activities[current].text;

        /* GAUCHE */

        leftTitle.textContent =
            activities[left].title;

        leftImage.src =
            activities[left].image;

        /* DROITE */

        rightTitle.textContent =
            activities[right].title;

        rightImage.src =
            activities[right].image;

        /* REAPPARITION */

        centerImage.style.opacity = "1";
        centerImage.style.transform = "scale(1)";

        centerTitle.style.opacity = "1";
        centerTitle.style.transform = "translateY(0)";

        centerText.style.opacity = "1";
        centerText.style.transform = "translateY(0)";

        leftImage.style.opacity = "0.25";
        rightImage.style.opacity = "0.25";

    }, 250);
}

/* =========================
   FLECHE DROITE
========================= */

document
.getElementById("next")
.addEventListener("click", () => {

    current++;

    if(current >= activities.length){
        current = 0;
    }

    updateCarousel();
});

/* =========================
   FLECHE GAUCHE
========================= */

document
.getElementById("prev")
.addEventListener("click", () => {

    current--;

    if(current < 0){
        current = activities.length - 1;
    }

    updateCarousel();
});

/* =========================
   INITIALISATION
========================= */

updateCarousel();