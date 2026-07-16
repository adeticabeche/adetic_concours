const nom = localStorage.getItem("nom");
const prenom = localStorage.getItem("prenom");

const score = Number(localStorage.getItem("score"));

document.getElementById("nom").innerHTML = nom + " " + prenom;

document.getElementById("score").innerHTML = score + " /20";

let mention = "";
let message = "";

if(score >=18){

mention="EXCELLENT";

message="Félicitations ! Vous êtes présélectionné pour la formation.";

}

else if(score >=16){

mention="TRÈS BIEN";

message="Vous êtes présélectionné.";

}

else if(score >=14){

mention="BIEN";

message="Vous êtes présélectionné.";

}

else if(score >=12){

mention="ASSEZ BIEN";

message="Vous êtes présélectionné.";

}

else{

mention="NON PRÉSÉLECTIONNÉ";

message="Merci pour votre participation. Vous n'avez pas atteint le seuil de sélection (12/20).";

}

document.getElementById("mention").innerHTML = mention;

document.getElementById("message").innerHTML = message;

// =======================
// Boutons selon le score
// =======================

const actions = document.getElementById("actions");

if(score >= 12){

    actions.innerHTML = `
        <a href="https://docs.google.com/forms/d/e/1FAIpQLSc1ZEY25DrFTv90Dz2spvK9mgEJ2KYuNupT6zB7K5qyZGosNQ/viewform?usp=dialog" target="_blank">
            <button style="background:#28a745;color:white;">
                🎉 S'inscrire à la formation gratuite
            </button>
        </a>
    `;

}else{

    actions.innerHTML = `
        <div style="margin-top:20px;padding:15px;background:#fff3cd;border-left:5px solid #ffc107;border-radius:8px;">
            <p>
                <strong>Vous n'avez pas atteint le seuil de présélection (12/20).</strong><br><br>
                Vous pouvez toutefois vous inscrire à la formation complète en payant les frais de participation fixés par l'ADETIC.
            </p>
        </div>

        <a href="https://docs.google.com/forms/d/e/1FAIpQLScSp5YLHre8bf4IyAEBvq5pHnNS-IUgo2X9stbOEoPaUyHHZQ/viewform?usp=dialog" target="_blank">
            <button style="background:#ff9800;color:white;">
                📝 S'inscrire à la formation payante
            </button>
        </a>
    `;

}

function terminer(){

    localStorage.clear();

    alert("Merci pour votre participation. La session est terminée.");

    window.close();

}