console.log("JS chargé");

const nextButton = document.getElementById("next");
const prevButton = document.getElementById("prev");

console.log(nextButton);
console.log(prevButton);




const universities = [

{
    name: "TOHOKU UNIVERSITY",

    banner: "images/tohoku_photo.jpg",
    logo: "images/tohoku_logo.png",
    labImage: "images/tohoku_robot_photo.jpg",

    title: "Neuro-Robotics Laboratory",

    text:
    "Exchange semester at Tohoku University in Sendai, Japan. Research activities focused on neurorobotics, biomedical engineering and human-robot interaction.",

    location: "Sendai, Japan",
    laboratory: "Neuro-Robotics Lab",
    field: "Biomedical Robotics",
    period: "Spring Semester"
},

{
    name: "KOBE UNIVERSITY",

    banner: "images/kobe_photo.jpg",
    logo: "images/kobe_logo.png",
    labImage: "images/kobe_robot_photo.jpg",

    title: "Advanced Robotics Program",

    text:
    "Academic mobility focused on intelligent robotics, autonomous systems and industrial applications.",

    location: "Kobe, Japan",
    laboratory: "Advanced Robotics Program",
    field: "Automation & Robotics",
    period: "Exchange Program"
},

{
    name: "KYOTO UNIVERSITY",

    banner: "images/kyoto_photo.jpg",
    logo: "images/kyoto_logo.png",
    labImage: "images/kyoto_robot_photo.jpg",

    title: "Human-Robot Interaction Laboratory",

    text:
    "Research activities involving human-robot interaction, machine learning and cognitive robotics.",

    location: "Kyoto, Japan",
    laboratory: "HRI Laboratory",
    field: "Artificial Intelligence & Robotics",
    period: "Research Mobility"
}

];

/* ==========================
   ÉLÉMENTS HTML
========================== */

const heroImage = document.getElementById("hero-image");
const logo = document.getElementById("logo");
const labImage = document.getElementById("lab-image");

const universityTitle =
document.getElementById("university-title");

const programTitle =
document.getElementById("program-title");

const programText =
document.getElementById("program-text");

const locationText =
document.getElementById("location");

const laboratoryText =
document.getElementById("lab-name");

const fieldText =
document.getElementById("field");

const periodText =
document.getElementById("period");

/* ==========================
   POSITION ACTUELLE
========================== */

let current = 0;

/* ==========================
   MISE À JOUR
========================== */

function updateSlide() {

    const u = universities[current];

    heroImage.style.opacity = "0";
    labImage.style.opacity = "0";

    setTimeout(() => {

        heroImage.src = u.banner;
        logo.src = u.logo;
        labImage.src = u.labImage;

        universityTitle.textContent = u.name;

        programTitle.textContent = u.title;
        programText.textContent = u.text;

        locationText.textContent = u.location;
        laboratoryText.textContent = u.laboratory;
        fieldText.textContent = u.field;
        periodText.textContent = u.period;

        heroImage.style.opacity = "1";
        labImage.style.opacity = "1";

    }, 250);
}

/* ==========================
   FLÈCHE DROITE
========================== */

document.getElementById("next")
.addEventListener("click", () => {

    current++;

    if(current >= universities.length){
        current = 0;
    }

    updateSlide();
});

/* ==========================
   FLÈCHE GAUCHE
========================== */

document.getElementById("prev")
.addEventListener("click", () => {

    current--;

    if(current < 0){
        current = universities.length - 1;
    }

    updateSlide();
});

console.log("Mobility slider loaded");