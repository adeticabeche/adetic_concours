const questions = [

{
question:"Un modèle d’IA générative est exposé à une très grande quantité de textes avant toute intervention humaine visant à lui indiquer explicitement quelles réponses sont préférables. Il apprend progressivement des relations entre les mots et des structures linguistiques. Quelle interprétation est la plus rigoureuse ?",
options:[
"Il s’agit principalement d’une phase de pré-entraînement fondée sur l’exploitation de grandes quantités de données",
"Il s’agit déjà d’une phase complète d’apprentissage par renforcement puisque le modèle produit du texte",
"Il s’agit d’un apprentissage supervisé puisque tout texte possède nécessairement une réponse idéale",
"Il s’agit d’un fine-tuning puisque le modèle est déjà spécialisé avant l’apprentissage"
],
answer:0
},

{
question:"Considérons la séquence suivante : (1) exploitation d’une grande quantité de textes, (2) apprentissage des relations entre les mots et la structure des phrases, (3) utilisation d’exemples de questions et réponses idéales, (4) évaluation humaine des réponses et optimisation. Quelle lecture correspond le mieux au processus présenté dans le cours ?",
options:[
"Apprentissage supervisé, collecte de données, puis suppression du modèle",
"Pré-entraînement, apprentissage supervisé, puis apprentissage par renforcement avec retour humain",
"Apprentissage par renforcement, pré-entraînement, puis installation du modèle",
"Fine-tuning uniquement, sans autre phase d’apprentissage"
],
answer:1
},

{
question:"Un chercheur affirme : « Puisque le modèle a été entraîné sur énormément de textes, toutes ses réponses sont nécessairement correctes ». Quelle conclusion est la plus compatible avec le cours ?",
options:[
"Cette conclusion est nécessairement vraie puisque la quantité de données garantit la fiabilité",
"Cette conclusion est vraie uniquement pour les modèles utilisant le Deep Learning",
"Cette conclusion est injustifiée : l’entraînement sur de grandes quantités de données n’élimine pas les risques, les biais ou les limites du système",
"Cette conclusion est vraie dès lors qu’un modèle utilise un Transformer"
],
answer:2
},

{
question:"Deux systèmes sont comparés. Le premier est conçu pour accomplir une tâche précise. Le second est décrit comme capable de comprendre, apprendre et réaliser différentes tâches intellectuelles comparables à celles d’un humain. Quelle distinction conceptuelle doit être retenue ?",
options:[
"Le premier est nécessairement une AGI et le second une ANI",
"Les deux sont nécessairement des IA génératives",
"Les deux correspondent nécessairement à l’apprentissage supervisé",
"Le premier correspond davantage à l’ANI, tandis que le second correspond au concept d’AGI"
],
answer:3
},

{
question:"Un système peut générer du texte, des images ou d’autres contenus nouveaux, mais cela ne signifie pas nécessairement qu’il possède une intelligence générale comparable à celle de l’être humain. Quelle distinction permet de comprendre correctement cette situation ?",
options:[
"L’IA générative décrit une capacité de génération de contenu, tandis que l’AGI renvoie à une capacité intellectuelle générale beaucoup plus large",
"L’IA générative et l’AGI sont deux termes strictement synonymes",
"Toute IA générative est automatiquement une AGI",
"Une AGI ne peut produire aucun contenu génératif"
],
answer:0
},

{
question:"Un modèle reçoit des exemples de réponses évaluées par des humains. Certaines réponses sont considérées comme plus pertinentes que d’autres, puis ces évaluations servent à orienter l’optimisation du modèle. Pourquoi cette étape ne doit-elle pas être confondue avec le simple pré-entraînement ?",
options:[
"Parce que le pré-entraînement ne manipule jamais de données",
"Parce que le modèle cesse nécessairement d’utiliser des algorithmes",
"Parce que toute intervention humaine transforme automatiquement le modèle en AGI",
"Parce qu’elle introduit explicitement un retour humain destiné à orienter le comportement du modèle"
],
answer:3
},

{
question:"Un modèle fonctionne correctement sur les exemples utilisés lors de son apprentissage, mais son comportement doit être ajusté afin d’intégrer de nouvelles consignes et de corriger certains biais identifiés. Quelle opération du cours correspond le mieux à cette situation ?",
options:[
"Une simple collecte supplémentaire de données sans modification du modèle",
"Une transformation de l’ANI en AGI",
"Un ajustement du modèle par fine-tuning et mises à jour continues",
"Une modification du matériel informatique"
],
answer:2
},

{
question:"Un étudiant affirme : « Le Deep Learning et le Transformer désignent exactement la même chose ». Quelle réponse est la plus rigoureuse au regard du cours ?",
options:[
"Oui : les deux termes sont strictement interchangeables",
"Non : le cours présente le Deep Learning comme une approche d’apprentissage profond et cite Transformer comme un algorithme utilisé dans le contexte des modèles génératifs",
"Oui : Transformer désigne uniquement un réseau neuronal biologique",
"Non : Transformer est uniquement un protocole réseau"
],
answer:1
},

{
question:"Une université souhaite utiliser une IA pour traiter automatiquement les demandes répétitives des étudiants. Le système doit comprendre leurs questions et générer des réponses en langage naturel. Quelle application du cours est la plus directement transposable à ce scénario ?",
options:[
"La maintenance matérielle des ordinateurs",
"L’installation d’antennes de télécommunication",
"L’utilisation de chatbots dans le service client, adaptée ici à un contexte de service aux étudiants",
"La gestion physique des ressources humaines"
],
answer:2
},

{
question:"Une organisation utilise une IA pour analyser des données et fournir des éléments permettant aux responsables de prendre des décisions. Quelle proposition décrit le mieux la valeur de cette application sans lui attribuer un pouvoir excessif ?",
options:[
"L’IA peut faciliter l’analyse et contribuer à la décision, sans que cela signifie nécessairement qu’elle remplace entièrement le décideur humain",
"L’IA devient automatiquement responsable juridiquement de toutes les décisions",
"L’IA transforme nécessairement toutes les données en décisions exactes",
"L’analyse par IA supprime automatiquement tout risque d’erreur"
],
answer:0
},

{
question:"Une entreprise souhaite automatiser certaines tâches répétitives grâce à l’IA. Un responsable affirme que cette automatisation garantit automatiquement une suppression totale des emplois. Quelle analyse est la plus prudente au regard du cours ?",
options:[
"L’automatisation garantit toujours la disparition de tous les emplois",
"L’automatisation ne présente aucun avantage économique",
"L’automatisation concerne uniquement les systèmes de cybersécurité",
"L’automatisation peut constituer un avantage, mais la question de l’emploi fait aussi partie des risques et défis associés à l’IA"
],
answer:3
},

{
question:"Une institution possède une technologie d’IA performante mais son personnel ne sait pas correctement formuler des instructions ni interpréter les résultats. Quel problème fondamental du cours cette situation met-elle en évidence ?",
options:[
"Le fait qu’une IA ne puisse jamais être utilisée par des professionnels",
"L’importance des compétences et de la formation pour exploiter correctement les technologies d’IA",
"L’inutilité du Prompt Engineering",
"La nécessité de remplacer tous les utilisateurs par des programmeurs"
],
answer:1
},

{
question:"On propose à un enseignant le prompt suivant : « Explique l’IA ». Il souhaite obtenir une réponse destinée à des doctorants, organisée en trois parties, avec exemples et limites. Quelle modification apporte le gain qualitatif le plus important ?",
options:[
"Réduire le prompt à « IA »",
"Supprimer toute indication sur le public",
"Ajouter le contexte, le public cible, l’objectif, la structure attendue et les contraintes de réponse",
"Ajouter uniquement un mot de passe"
],
answer:2
},

{
question:"Un chercheur écrit : « Tu es expert en IA. Donne-moi une explication ». Le résultat reste trop général. Quel diagnostic est le plus pertinent selon la structure du prompt présentée dans le cours ?",
options:[
"Le rôle est indiqué, mais la tâche et le contexte restent insuffisamment définis pour orienter précisément la réponse",
"Le prompt est déjà complet parce qu’il contient un rôle",
"Le problème vient nécessairement de la connexion Internet",
"Le problème ne peut être corrigé que par une modification du modèle"
],
answer:0
},

{
question:"Un utilisateur demande à une IA de produire une analyse, mais ne précise ni le format, ni le niveau de détail, ni les contraintes, ni le contexte professionnel. Quelle propriété d’un mauvais prompt est principalement illustrée ?",
options:[
"Un excès de contraintes",
"Une spécialisation excessive du modèle",
"Une utilisation obligatoire de l’apprentissage supervisé",
"Le manque de contexte, de structure et de précision"
],
answer:3
},

{
question:"Un chercheur veut obtenir une réponse particulièrement adaptée à son domaine. Il demande d’abord à l’IA de lui poser toutes les questions nécessaires avant de produire la réponse finale. Quelle technique du cours est principalement exploitée ?",
options:[
"Le remplacement de l’IA par un moteur de recherche",
"Le renversement des rôles, consistant à demander à l’IA d’identifier les informations nécessaires avant de répondre",
"L’apprentissage non supervisé du modèle",
"La modification directe des paramètres du Transformer"
],
answer:1
},

{
question:"Un responsable affirme : « Si nous achetons une technologie d’IA très coûteuse, les problèmes de compétence et de formation disparaîtront automatiquement ». Quelle analyse contredit le mieux cette affirmation à partir du cours ?",
options:[
"Le prix d’une technologie garantit automatiquement la compétence des utilisateurs",
"Les compétences deviennent inutiles lorsqu’une IA est performante",
"Le coût technologique et le manque de compétences sont deux défis distincts qui peuvent tous deux nécessiter des réponses spécifiques",
"Le coût est le seul facteur déterminant dans l’adoption de l’IA"
],
answer:2
},

{
question:"Une organisation hésite à adopter l’IA en raison de plusieurs facteurs : coût initial, dépendance technologique, risques sur l’emploi, sécurité, éthique et résistance au changement. Quelle conclusion synthétise le mieux le cours ?",
options:[
"Tous ces facteurs sont uniquement des problèmes techniques qui disparaîtront avec un meilleur processeur",
"L’adoption de l’IA doit être envisagée comme une transformation présentant simultanément des opportunités, des coûts, des risques et des besoins d’accompagnement",
"Ces facteurs démontrent que l’IA ne peut avoir aucune application professionnelle",
"Seul le coût initial doit être pris en compte dans une décision d’adoption"
],
answer:1
},

{
question:"Un candidat soutient : « Un prompt plus long est toujours meilleur qu’un prompt court ». Quelle réponse est la plus rigoureuse au regard du cours sur le Prompt Engineering ?",
options:[
"Oui : plus un prompt contient de mots, plus la réponse est nécessairement correcte",
"Oui : la longueur remplace le besoin de contexte",
"Non : les prompts ne jouent aucun rôle dans la qualité des réponses",
"Non : la qualité dépend surtout de la pertinence et de la précision des éléments fournis, notamment le rôle, la tâche, le contexte, les contraintes et le format"
],
answer:3
},

{
question:"Un chercheur construit le prompt suivant : « Tu es professeur d’IA. Pour des doctorants en informatique, explique le fonctionnement de l’IA générative en distinguant pré-entraînement, apprentissage supervisé, renforcement et fine-tuning. Présente la réponse sous forme d’une analyse structurée en quatre parties et termine par les principaux risques. » Quelle caractéristique explique principalement sa qualité potentielle ?",
options:[
"Il combine plusieurs composantes du Prompt Engineering : rôle, public/contexte, tâche, objectif, structure et contraintes",
"Il est efficace uniquement parce qu’il contient beaucoup de mots",
"Il fonctionne parce qu’il transforme automatiquement le modèle en AGI",
"Il ne contient qu’une seule composante essentielle : le rôle"
],
answer:0
}

];
