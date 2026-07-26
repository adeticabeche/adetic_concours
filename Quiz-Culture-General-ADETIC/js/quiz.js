const URL_GOOGLE_SCRIPT =
"https://script.google.com/macros/s/AKfycbwpzqWpMXdDOsvukWgA_BzZzanUK42AuevYWEHXEh7gTlCqpBfmnaLWl4uG4HNVuuPG/exec";


// ==============================
// QUIZ ADETIC
// ==============================


// Vérifier si le quiz est déjà terminé

if (sessionStorage.getItem("quizTermine") === "true") {

    window.location.href = "resultat.html";

}



// Empêcher le retour après la fin

window.addEventListener("pageshow", function(event){


    if(event.persisted || sessionStorage.getItem("quizTermine") === "true"){

        window.location.href="resultat.html";

    }


});




// Mélange des questions

const quiz = [...questions].sort(() => Math.random() - 0.5);



// Garder seulement 20 questions

const listeQuestions = quiz.slice(0,20);




let indexQuestion = 0;

let score = 0;

let reponseChoisie = null;



// Stockage des réponses

let toutesLesReponses = [];




// Récupération HTML

const question = document.getElementById("question");

const reponses = document.getElementById("reponses");

const numeroQuestion = document.getElementById("numeroQuestion");

const progressBar = document.getElementById("progressBar");





// ==============================
// AFFICHAGE QUESTION
// ==============================


function afficherQuestion(){


    reponseChoisie = null;



    const q = listeQuestions[indexQuestion];



    numeroQuestion.innerHTML =
    "Question " + (indexQuestion + 1) + " /20";



    question.innerHTML = q.question;



    reponses.innerHTML = "";




    q.options.forEach((texte,index)=>{



        const div = document.createElement("div");



        div.className="option";



        div.innerHTML = texte;




        div.onclick=function(){



            document.querySelectorAll(".option").forEach(op=>{


                op.style.background="white";

                op.style.color="black";


            });




            div.style.background="#0056b3";

            div.style.color="white";



            reponseChoisie=index;



            toutesLesReponses[indexQuestion]=texte;



        };




        reponses.appendChild(div);



    });




    progressBar.style.width =
    ((indexQuestion)/20)*100+"%";


}




afficherQuestion();





// ==============================
// BOUTON SUIVANT
// ==============================


document.getElementById("suivant")
.addEventListener("click",function(){



    if(reponseChoisie===null){


        alert("Veuillez sélectionner une réponse.");


        return;


    }




    if(reponseChoisie === listeQuestions[indexQuestion].answer){


        score++;


    }





    indexQuestion++;




    progressBar.style.width =
    (indexQuestion/20)*100+"%";





    if(indexQuestion < 20){



        afficherQuestion();



    }else{



        terminerQuiz();



    }



});// ==============================
// FIN DU QUIZ
// ==============================


function terminerQuiz(){


    sessionStorage.setItem(
        "quizTermine",
        "true"
    );



    // Enregistrer le score

    localStorage.setItem(
        "score",
        score
    );




    // Récupérer les informations du candidat

    let candidat =
    JSON.parse(localStorage.getItem("candidat"));





    // Sauvegarder pour resultat.html

    if(candidat){



        localStorage.setItem(
            "nom",
            candidat.nom || ""
        );



        localStorage.setItem(
            "prenom",
            candidat.prenom || ""
        );



        localStorage.setItem(
            "sexe",
            candidat.sexe || ""
        );



        localStorage.setItem(
            "telephone",
            candidat.telephone || ""
        );


    }





    // Envoi vers Google Sheet

    envoyerResultat()

    .then(()=>{


        window.location.href="resultat.html";


    })

    .catch(error=>{


        console.error(
            "Erreur envoi résultat :",
            error
        );


        window.location.href="resultat.html";


    });



}








// ==============================
// CHRONOMETRE
// ==============================


const duree = 3 * 60;



if(!sessionStorage.getItem("heureFin")){


    sessionStorage.setItem(

        "heureFin",

        Date.now() + duree * 1000

    );


}




const timer = document.getElementById("timer");




const chrono = setInterval(function(){



    const heureFin =
    Number(sessionStorage.getItem("heureFin"));



    let temps =
    Math.ceil((heureFin - Date.now()) / 1000);




    let minutes =
    Math.floor(temps / 60);



    let secondes =
    temps % 60;





    if(minutes < 10)

        minutes = "0" + minutes;




    if(secondes < 10)

        secondes = "0" + secondes;





    timer.innerHTML =
    minutes + ":" + secondes;






    if(temps <= 60){


        timer.style.background="red";

        timer.style.animation="clignoter 1s infinite";


    }






    if(temps <= 0){



        clearInterval(chrono);



        sessionStorage.setItem(
            "quizTermine",
            "true"
        );



        localStorage.setItem(
            "score",
            score
        );





        // Sauvegarder les informations candidat

        let candidat =
        JSON.parse(localStorage.getItem("candidat"));



        if(candidat){



            localStorage.setItem(
                "nom",
                candidat.nom || ""
            );



            localStorage.setItem(
                "prenom",
                candidat.prenom || ""
            );



            localStorage.setItem(
                "sexe",
                candidat.sexe || ""
            );



            localStorage.setItem(
                "telephone",
                candidat.telephone || ""
            );



        }





        envoyerResultat()

        .then(()=>{


            alert(
                "⏰ Temps écoulé ! Votre quiz est terminé."
            );



            window.location.href="resultat.html";



        })

        .catch(error=>{


            console.error(error);


            window.location.href="resultat.html";


        });



    }



},1000);








// ==============================
// ENVOI GOOGLE SHEET
// ==============================


function envoyerResultat(){



    let candidat =
    JSON.parse(localStorage.getItem("candidat"));




    if(!candidat){


        candidat={


            nom:"Inconnu",

            prenom:"",

            sexe:"",

            telephone:""


        };


    }





    const donnees = {



        nom:candidat.nom,



        prenom:candidat.prenom,



        sexe:candidat.sexe,



        telephone:candidat.telephone,



        reponses:
        toutesLesReponses
        .filter(Boolean)
        .join(" | "),



        score:score



    };






    console.log(
        "Données envoyées :",
        donnees
    );







    return fetch(URL_GOOGLE_SCRIPT,{



        method:"POST",




        headers:{



            "Content-Type":
            "text/plain;charset=utf-8"



        },





        body:JSON.stringify(donnees)





    })





    .then(response=>response.text())





    .then(data=>{



        console.log(
            "Réponse Google Script :",
            data
        );



        return data;



    })





    .catch(error=>{



        console.error(
            "Erreur envoi Google Sheet :",
            error
        );



        throw error;



    });



}
