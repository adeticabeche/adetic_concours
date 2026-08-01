const URL_GOOGLE_SCRIPT =
"https://script.google.com/macros/s/AKfycbwpzqWpMXdDOsvukWgA_BzZzanUK42AuevYWEHXEh7gTlCqpBfmnaLWl4uG4HNVuuPG/exec";


const formulaire = document.getElementById("formRecherche");
const resultat = document.getElementById("resultat");



formulaire.addEventListener("submit", function(e){

    e.preventDefault();



    const nom = document.getElementById("nom").value.trim();

    const prenom = document.getElementById("prenom").value.trim();

    const telephone = document.getElementById("telephone").value.trim();



    if(nom === "" || prenom === "" || telephone === ""){


        resultat.innerHTML = `

        <div class="message erreur">

            ⚠️ Veuillez remplir tous les champs avant la recherche.

        </div>

        `;

        return;

    }




    // Message pendant la recherche

    resultat.innerHTML = `

    <div class="message attente">

        ⏳ Vérification de votre résultat en cours...

    </div>

    `;




    fetch(

        URL_GOOGLE_SCRIPT +

        "?action=recherche" +

        "&nom=" + encodeURIComponent(nom) +

        "&prenom=" + encodeURIComponent(prenom) +

        "&telephone=" + encodeURIComponent(telephone)

    )



    .then(response => response.json())



    .then(data => {



        // Conversion du score en nombre

        const score = Number(data.score);



        // Candidat sélectionné

        if(data.success && score >= 12){



            resultat.innerHTML = `


            <div class="carte-resultat">


                <h3>
                    🎓 Résultat ADETIC
                </h3>



                <p>
                    <strong>Nom :</strong>
                    ${data.nom || nom}
                </p>



                <p>
                    <strong>Prénom :</strong>
                    ${data.prenom || prenom}
                </p>



                <p>
                    <strong>Téléphone :</strong>
                    ${data.telephone || telephone}
                </p>



                <p>
                    <strong>Score obtenu :</strong>
                    ${score}/20
                </p>



                <p>
                    <strong>Module :</strong>
                    ${data.module || "Non disponible"}
                </p>




                <div class="success">


                    🎉 <strong>Félicitations !</strong><br><br>


                    Vous êtes sélectionné(e) pour la formation à 
                    <strong>l'ADETIC d'Abéché</strong>.<br><br>


                    Nous vous communiquerons prochainement les informations 
                    relatives au démarrage de la formation.


                </div>



            </div>


            `;



        }



        // Candidat trouvé mais note insuffisante

        else if(data.success && score < 12){



            resultat.innerHTML = `


            <div class="carte-resultat refus">


                <h3>
                    🎓 Résultat ADETIC
                </h3>



                <p>
                    <strong>Nom :</strong>
                    ${data.nom || nom}
                </p>



                <p>
                    <strong>Prénom :</strong>
                    ${data.prenom || prenom}
                </p>



                <p>
                    <strong>Score obtenu :</strong>
                    ${score}/20
                </p>



                <div class="statut non-admis">


                    ❌ Vous n'êtes pas sélectionné(e) pour la formation gratuite.


                </div>



            </div>


            `;



        }



        // Aucun candidat trouvé

        else {



            resultat.innerHTML = `


            <div class="carte-resultat refus">


                <h3>
                    🎓 Résultat ADETIC
                </h3>



                <p>

                    ${data.message || 
                    "Aucun résultat trouvé avec ces informations."}

                </p>



            </div>


            `;


        }



    })



    .catch(error => {



        resultat.innerHTML = `


        <div class="message erreur">


            ❌ Impossible de contacter le serveur.
            Veuillez réessayer plus tard.


        </div>


        `;



        console.error("Erreur :", error);



    });



});
