console.log("Mobility slider loaded");

/* ==========================
   UNIVERSITIES
========================== */

const universities = [

{
    name: "UNIVERSITÉ DE TOHOKU",

    universityUrl:
    "https://www.eng.tohoku.ac.jp/english/",

    universityDisplayUrl:
    "www.eng.tohoku.ac.jp",

    labUrl:
    "https://neuro.mech.tohoku.ac.jp/",

    labDisplayUrl:
    "neuro.mech.tohoku.ac.jp",

    banner: "../images/tohoku_photo.jpg",
    logo: "../images/tohoku_logo.png",
    labImage: "../images/tohoku_robot_photo.jpg",

    title: "Département de Robotique",

    text:
    "Semestre d'échange à l'Université de Tohoku, au Japon, au sein du Département de Robotique et de l'École Supérieure de Génie Biomédical. Les activités de recherche menées au Neuro-Robotics Laboratory portent sur la neurorobotique, le traitement des biosignaux, l'intelligence artificielle et l'interaction humain-robot appliquées à la santé et à la rééducation.",

    location: "Sendai, Japon",
    laboratory: "Neuro-Robotics Laboratory",
    field: "Génie biomédical",
    period: "2e ou 3e année"
},

{
    name: "UNIVERSITÉ DE KOBE",

    universityUrl:
    "https://www.kobe-u.ac.jp/en/",

    universityDisplayUrl:
    "www.kobe-u.ac.jp",

    labUrl:
    "https://www.research.kobe-u.ac.jp/eng-robotics/index-e.html",

    labDisplayUrl:
    "research.kobe-u.ac.jp",

    banner: "../images/kobe_photo.jpg",
    logo: "../images/kobe_logo.png",
    labImage: "../images/kobe_robot_photo.jpg",

    title: "Programme d'Ingénierie Médicale",

    text:
    "Semestre d'échange à l'Université de Kobe, au Japon, dans le cadre du programme d'Ingénierie Médicale. Les activités académiques sont orientées vers la robotique intelligente, les systèmes autonomes, la robotique médicale et les technologies robotiques pour la santé, notamment les systèmes liés à la chirurgie assistée par robot.",

    location: "Kobe, Japon",
    laboratory: "Function-Oriented Robotics Laboratory",
    field: "Automatique et robotique",
    period: "2e ou 3e année"
},

{
    name: "UNIVERSITÉ DES SCIENCES AVANCÉES DE KYOTO",

    universityUrl:
    "https://www.kuas.ac.jp/en/",

    universityDisplayUrl:
    "www.kuas.ac.jp",

    labUrl:
    "https://nisarlab.org/",

    labDisplayUrl:
    "nisarlab.org",

    banner: "../images/kyoto_photo.jpg",
    logo: "../images/kyoto_logo.png",
    labImage: "../images/kyoto_robot_photo.jpg",

    title: "Recherche en Robotique et Haptique",

    text:
    "Semestre d'échange à la Kyoto University of Advanced Science (KUAS), au Japon. Les activités de recherche menées au sein du laboratoire NISAR portent sur la robotique médicale et chirurgicale, l'haptique, l'interaction humain-robot ainsi que les systèmes robotiques intégrant l'intelligence artificielle pour les applications de santé.",

    location: "Kyoto, Japon",
    laboratory: "Laboratoire NISAR",
    field: "Intelligence artificielle et robotique",
    period: "2e ou 3e année"
}

];
/* ==========================
   HTML ELEMENTS
========================== */

const heroImage =
document.getElementById("hero-image");

const logo =
document.getElementById("logo");

const labImage =
document.getElementById("lab-image");

const universityTitle =
document.getElementById("university-title");

const universityLink =
document.getElementById("university-link");

const universityUrl =
document.getElementById("university-url");

const programTitle =
document.getElementById("program-title");

const programText =
document.getElementById("program-text");

const labNameLink =
document.getElementById("lab-name-link");

const labLink =
document.getElementById("lab-link");

const labUrl =
document.getElementById("lab-url");

const locationText =
document.getElementById("location");

const laboratoryText =
document.getElementById("lab-name");

const fieldText =
document.getElementById("field");

const periodText =
document.getElementById("period");

/* ==========================
   CURRENT POSITION
========================== */

let current = 0;

/* ==========================
   UPDATE SLIDE
========================== */

function updateSlide() {

    const u = universities[current];

    heroImage.style.opacity = "0";
    labImage.style.opacity = "0";

    setTimeout(() => {

        heroImage.src = u.banner;
        logo.src = u.logo;
        labImage.src = u.labImage;

        universityTitle.textContent =
            u.name;

        universityLink.href =
            u.universityUrl;

        universityUrl.textContent =
            u.universityDisplayUrl;

        programTitle.textContent =
            u.title;

        programText.textContent =
            u.text;

        labNameLink.textContent =
            u.laboratory;

        labLink.href =
            u.labUrl;

        labUrl.textContent =
            u.labDisplayUrl;

        locationText.textContent =
            u.location;

        laboratoryText.textContent =
            u.laboratory;

        fieldText.textContent =
            u.field;

        periodText.textContent =
            u.period;

        heroImage.style.opacity = "1";
        labImage.style.opacity = "1";

    }, 250);
}

/* ==========================
   NEXT BUTTON
========================== */

document
.getElementById("next")
.addEventListener("click", () => {

    current++;

    if(current >= universities.length){
        current = 0;
    }

    updateSlide();
});

/* ==========================
   PREVIOUS BUTTON
========================== */

document
.getElementById("prev")
.addEventListener("click", () => {

    current--;

    if(current < 0){
        current = universities.length - 1;
    }

    updateSlide();
});

/* ==========================
   INITIALIZATION
========================== */

updateSlide();