
const ourTeam = [
    /* indice 0: */ {
        nome: "Wayne",
        cognome: "Barnett",
        role: "Founder & CEO",
        img: "wayne-barnett-founder-ceo.jpg"
    },
    /* indice 1: */ {
        nome: "Angela",
        cognome: "Carroll",
        role: "Chief Editor",
        img: "angela-caroll-chief-editor.jpg"
    },
    /* indice 2: */ {
        nome: "Walter",
        cognome: "Gordon",
        role: "Office Manager",
        img: "walter-gordon-office-manager.jpg"
    },
        /* indice 0: */ {
        nome: "Angela",
        cognome: "Lopez",
        role: "Social Media Manager",
        img: "angela-lopez-social-media-manager.jpg"
    },
          /* indice 1: */ {
        nome: "Scott",
        cognome: "Estrada",
        role: "Developer",
        img: "scott-estrada-developer.jpg"
    },
          /* indice 2: */ {
        nome: "Barbara",
        cognome: "Ramos",
        role: "Graphic Designer",
        img: "barbara-ramos-graphic-designer.jpg"
    },
];

console.log(ourTeam);


const studentsList = document.querySelector(".our-team-list");

/**
 * @type {HTMLInputElement}
 */
const firstNameInput = document.querySelector("[name='firstName']");

/**
 * @type {HTMLInputElement}
 */
const lastNameInput = document.querySelector("[name='lastName']");

/**
 * @type {HTMLInputElement}
 */
const roleInput = document.querySelector("[name='role']");