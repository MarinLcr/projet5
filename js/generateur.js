/* Création des tableaux comportant les citations */
	const premiereCitation = ["Bonjour ", "Bonsoir ", "Hello "];
	const deuxiemeCitation = ["monsieur ", "madame ", "mademoiselle "];
	const troisiemeCitation = ["Leclerc", "Beunard", "Landeau"];

	const premierCitation2 = ["Kyllian ", "Dylan ", "Dimitri "];
	const deuxiemeCitation2 = ["aime le ", "fait du ", "joue au "];
	const troisiemeCitation2 = ["football", "basket-ball", "tennis"];


/* Création de la fonction correspondant au premier générateur */
	function generateur1() {
		let premierePartieCitation = premiereCitation[Math.floor(Math.random() * premiereCitation.length)];
		let deuxiemePartieCitation = deuxiemeCitation[Math.floor(Math.random() * deuxiemeCitation.length)];
		let troisiemePartieCitation = troisiemeCitation[Math.floor(Math.random() * troisiemeCitation.length)];

		// Concatenation du contenu des variables créées précédement dans la variable citation
		let citation = premierePartieCitation + deuxiemePartieCitation + troisiemePartieCitation;
		console.log(citation);
		return citation;
	}

/* Création de la fonction correspondant au second générateur */
	function generateur2() {
		let premierePartieCitation2 = premierCitation2[Math.floor(Math.random() * premierCitation2.length)];
		let deuxiemePartieCitation2 = deuxiemeCitation2[Math.floor(Math.random() * deuxiemeCitation2.length)];
		let troisiemePartieCitation2 = troisiemeCitation2[Math.floor(Math.random() * troisiemeCitation2.length)];

		// Concatenation du contenu des variables créées précédement dans la variable citation
		let citation2 = premierePartieCitation2 + deuxiemePartieCitation2 + troisiemePartieCitation2;
		console.log(citation2);
		return citation2;
	}



/* Gestion de l'evenement au click sur le choix du nombre de citation */
		let choixCitations;
		let inputCible = document.querySelectorAll('.radio_citation');
		for (let i = 0; i < inputCible.length; i++) {
			inputCible[i].addEventListener('click', function(event) {
				choixCitations = event.target.value;
				console.log(choixCitations);
			});
		}


	/* Gestion de l'evenement au click sur le choix du generateur */
		let choixGenerateur;
		let inputCibleGenerateur = document.querySelectorAll('.radio_generateur');
		for (let i = 0; i < inputCibleGenerateur.length; i++) {
			inputCibleGenerateur[i].addEventListener('click', function(event) {
				choixGenerateur = event.target.value;
				console.log(choixGenerateur);
			});
		}


/* Fonction finale qui créer les li à l'envoi du formulaire */
	function final() {
		if (choixGenerateur === "Classique") {	
			for (let compteur = 0; compteur < choixCitations; compteur++) {
				let premierGenerateur = generateur1();
				let classiqueElt = document.createElement("li"); // Création d'un élément li
				classiqueElt.id = "citation"; // Définition de son identifiant
				classiqueElt.appendChild(document.createTextNode(premierGenerateur)); // Définition de son contenu textuel
				document.getElementById("citations").appendChild(classiqueElt); // Insertion du nouvel élément
			}
		}
		else if (choixGenerateur === "Sport") {
			for (let compteur = 0; compteur < choixCitations; compteur++) {
 				let deuxiemeGenerateur = generateur2();
				let sportElt = document.createElement("li"); // Création d'un élément li
				sportElt.id = "citation"; // Définition de son identifiant
				sportElt.appendChild(document.createTextNode(deuxiemeGenerateur)); // Définition de son contenu textuel
				document.getElementById("citations").appendChild(sportElt); // Insertion du nouvel élément
			}
		}
		else {
			console.log("BUG");
		}
	}


	/* Lancement de la fonction final à l'envoie du formulaire */
	let form = document.querySelector("form");
	form.addEventListener("submit", function (e) {
		e.preventDefault(); // Annulation de l'envoi des données
		console.log("ENVOYER");
		// Condition qui test la présence de li identifié "citations" dans mon ul identifié "citation"
		if(document.getElementById('citation')){
			let myNode = document.getElementById("citations");
			// Tant qu'il y a un élément firstchild je le supprime 
			while (myNode.firstChild) { 
					myNode.removeChild(myNode.firstChild); 
			}
			final();
		}
		else {
			console.log("ok");
			final();
		}
	});