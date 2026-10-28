console.log("Mobility slider loaded");

/* ==========================
   UNIVERSITIES
========================== */

const universities = [

{
    name: "TOHOKU UNIVERSITY",

    universityUrl:
    "https://www.eng.tohoku.ac.jp/english/",

    universityDisplayUrl:
    "www.eng.tohoku.ac.jp",

    labUrl:
    "https://neuro.mech.tohoku.ac.jp/",

    labDisplayUrl:
    "neuro.mech.tohoku.ac.jp",

    banner: "images/tohoku_photo.jpg",
    logo: "images/tohoku_logo.png",
    labImage: "images/tohoku_robot_photo.jpg",

    title: "Department of Robotics",

    text:
    "Exchange semester at Tohoku University, Japan, within the Department of Robotics and the Graduate School of Biomedical Engineering. Research activities in the Neuro-Robotics Laboratory focused on neurorobotics, biosignal processing, artificial intelligence, and human–robot interaction for healthcare and rehabilitation applications.",

    location: "Sendai, Japan",
    laboratory: "Neuro-Robotics Laboratory",
    field: "Biomedical Engineering",
    period: "2nd or 3rd year"
},

{
    name: "KOBE UNIVERSITY",

    universityUrl:
    "https://www.kobe-u.ac.jp/en/",

    universityDisplayUrl:
    "www.kobe-u.ac.jp",

    labUrl:
    "https://www.research.kobe-u.ac.jp/eng-robotics/index-e.html",

    labDisplayUrl:
    "research.kobe-u.ac.jp",

    banner: "images/kobe_photo.jpg",
    logo: "images/kobe_logo.png",
    labImage: "images/kobe_robot_photo.jpg",

    title: "Medical Engineering Program",

    text:
    "Exchange semester at Kobe University, Japan, within the Medical Engineering program. Academic activities focused on intelligent robotics, autonomous systems, medical robotics, and robotic technologies for healthcare applications, including systems related to robot-assisted surgery.",

    location: "Kobe, Japan",
    laboratory: "Function-Oriented Robotics Laboratory",
    field: "Automation & Robotics",
    period: "2nd or 3rd year"
},

{
    name: "KYOTO UNIVERSITY OF ADVANCED SCIENCE",

    universityUrl:
    "https://www.kuas.ac.jp/en/",

    universityDisplayUrl:
    "www.kuas.ac.jp",

    labUrl:
    "https://nisarlab.org/",

    labDisplayUrl:
    "nisarlab.org",

    banner: "images/kyoto_photo.jpg",
    logo: "images/kyoto_logo.png",
    labImage: "images/kyoto_robot_photo.jpg",

    title: "NISAR Laboratory",

    text:
    "Exchange semester at Kyoto University of Advanced Science (KUAS), Japan. Research activities within the NISAR Laboratory focused on medical and surgical robotics, haptics, human–robot interaction, and AI-powered robotic systems for healthcare applications.",

    location: "Kyoto, Japan",
    laboratory: "NISAR Laboratory",
    field: "Artificial Intelligence & Robotics",
    period: "2nd or 3rd year"
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