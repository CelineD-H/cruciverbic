const tabVide = [
    [3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3],
    [3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [3, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 1, 0], 
    [3, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0],
    [3, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 1],
    [3, 0, 1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0], 
    [3, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0],
    [3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0],
    [3, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 1, 1, 0],
    [3, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0]
];
const tabSolution = [
    [3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3],
    [3, "A", "N", "A", "C", "H", "R", "O", "N", "I", "Q", "U", "E", "S"],
    [3, "R", "A", "M", "A", 1, "T", "U", "E", 1, "U", "R", 1, "S"], 
    [3, "C", "R", "E", "M", "A", "T", 1, "F", "R", "I", "G", "G", "A"],
    [3, "H", "A", "R", "P", "E", 1, "S", 1, "E", "L", "E", "E", 1],
    [3, "I", 1, 1, "I", 1, "S", "H", "E", "R", "L", "O", "C", "K"], 
    [3, "B", "I", "E", "N", "F", "A", "I", "T", 1, "E", "N", "K", "I"],
    [3, "A", "N", "A", "G", "R", "A", "M", "M", "E", 1, "S", "O", "L"],
    [3, "L", 1, "U", 1, "E", "B", "L", "O", "U", "I", 1, 1, "O"],
    [3, "D", "I", "X", "I", "T", 1, "A", "C", "T", "I", "V", "E", "S"]
]

const letters = /^[a-zA-Z ]+$/;
let tab = tabVide;

export function afficherGrille() {
    for (let i = 0; i < tab.length; i++) {
        for (let j = 0; j < tab[i].length; j++) {
            createElem(tab[i][j], i, j);
        }
    }
}

function createElem(k, i, j) {
    let monElem = document.createElement('p');
    switch (k) {
        case 0 : monElem.classList.add("case");
        break;
        case 1 : monElem.classList.add("case_noire");
        break;
        case 3 : monElem.classList.add("case_coordonnees");
                if (i == 0 && j == 0) {
                } else if (i != 0) {
                    monElem.innerText = i;
                } else {
                    monElem.innerText = j;
                }
        break;
    }
    document.querySelector(".grille" ).appendChild(monElem);
}

export function buttons() {
    let buttons = document.querySelectorAll(".case");
    for (let button of buttons) {
        button.onclick = function() {
            let lettre = prompt("Quelle lettre ?");
            if(isOkLettre(lettre, letters)) {
                button.innerHTML = lettre;
            }
        }
    }
}

function isOkLettre(lettre, letters) {
     let ok = false;
     if (lettre.match(letters) && lettre.length == 1) {
        ok = true;
    } else {
        alert("C'est une case de mots croisés !! il faut rentrer UNE LETTRE !!")
    }
    return ok;
}

export function recupLettre() {
    let lettre = document.getElementById("lettre").value;
    return lettre;
}

