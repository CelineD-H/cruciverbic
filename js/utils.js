const tab = [
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

const letters = /^[a-zA-Z ]+$/;

export function afficherGrille() {
    for (let i = 0; i < tab.length; i++) {
        for (let j = 0; j < tab[i].length; j++) {
            createElem(tab[i][j], i, j);
        }
    }
    console.log("afficherGrille");
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
            if (lettre.length > 1) {
                alert("UNE seule lettre svp !");
            } else if (lettre.match(letters)) {
                button.innerHTML = lettre;
            } else {
                alert("Veuillez saisir une lettre svp !")
            }
        }
    }
}