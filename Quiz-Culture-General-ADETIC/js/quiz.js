// ==============================
// QUIZ ADETIC
// ==============================

// Mélange les questions
const quiz = [...questions].sort(() => Math.random() - 0.5);

// On ne garde que 20 questions
const listeQuestions = quiz.slice(0, 20);

let indexQuestion = 0;
let score = 0;
let reponseChoisie = null;

// Récupération des éléments HTML
const question = document.getElementById("question");
const reponses = document.getElementById("reponses");
const numeroQuestion = document.getElementById("numeroQuestion");
const progressBar = document.getElementById("progressBar");

function afficherQuestion(){

    reponseChoisie = null;

    const q = listeQuestions[indexQuestion];

    numeroQuestion.innerHTML =
    "Question " + (indexQuestion + 1) + " /20";

    question.innerHTML = q.question;

    reponses.innerHTML = "";

    q.options.forEach((texte, index)=>{

        const div = document.createElement("div");

        div.className = "option";

        div.innerHTML = texte;

        div.onclick = function(){

            document.querySelectorAll(".option").forEach(op=>{

                op.style.background="white";
                op.style.color="black";

            });

            div.style.background="#0056b3";
            div.style.color="white";

            reponseChoisie=index;

        }

        reponses.appendChild(div);

    });

    progressBar.style.width=((indexQuestion)/20)*100+"%";

}

afficherQuestion();

document.getElementById("suivant").addEventListener("click",function(){

    if(reponseChoisie===null){

        alert("Veuillez sélectionner une réponse.");

        return;

    }

    if(reponseChoisie===listeQuestions[indexQuestion].answer){

        score++;

    }

    indexQuestion++;

    progressBar.style.width=(indexQuestion/20)*100+"%";

    if(indexQuestion<20){

        afficherQuestion();

    }else{

        localStorage.setItem("score",score);

        window.location.href="resultat.html";

    }

});

// =======================
// CHRONOMETRE 5 MINUTES
// =======================

let temps = 3 * 60; // 5 minutes

const timer = document.getElementById("timer");

const chrono = setInterval(function(){

    let minutes = Math.floor(temps / 60);
    let secondes = temps % 60;

    if(minutes < 10) minutes = "0" + minutes;
    if(secondes < 10) secondes = "0" + secondes;

    timer.innerHTML = minutes + ":" + secondes;


    // Alerte dernière minute
    if(temps <= 60){

        timer.style.background = "red";
        timer.style.animation = "clignoter 1s infinite";

    }


    temps--;


    // Fin automatique du quiz
    if(temps < 0){

        clearInterval(chrono);

        localStorage.setItem("score", score);

        alert("⏰ Temps écoulé ! Votre quiz est terminé.");

        window.location.href="resultat.html";

    }


},1000);