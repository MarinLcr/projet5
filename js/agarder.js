/* Création des tableaux comportant les citations */
	const premiereCitation = ["Bonjour ", "Aurevoir ", "Hello "];
	const deuxiemeCitation = ["monsieur ", "mademoiselle ", "madame "];
	const troisiemeCitation = ["Dupond", "Daignan", "Duloup"];

	const premierCitation2 = ["Kyllian ", "Dylan ", "Dimitri "];
	const deuxiemeCitation2 = ["aime le ", "fait du ", "jouer "];
	const troisiemeCitation2 = ["football", "basket-ball", "tennis"];

/* Création de la variable compteur */
	let compteur;

/* Création de la variable citation */
	let citation = "";

/* Création de la fonction correspondant au premier générateur */
	function generateur1() {
	   let premierePartieCitation = premiereCitation[Math.floor(Math.random() * premiereCitation.length)];
	   let deuxiemePartieCitation = deuxiemeCitation[Math.floor(Math.random() * deuxiemeCitation.length)];
	   let troisiemePartieCitation = troisiemeCitation[Math.floor(Math.random() * troisiemeCitation.length)];

	   citation = premierePartieCitation + deuxiemePartieCitation + troisiemePartieCitation;
	   console.log(citation);
	   alert(citation);
	}

/* Créatiion de la fonction correspondant au second générateur */
	function generateur2() {
	   let premierePartieCitation2 = premierCitation2[Math.floor(Math.random() * premierCitation2.length)];
	   let deuxiemePartieCitation2 = deuxiemeCitation2[Math.floor(Math.random() * deuxiemeCitation2.length)];
	   let troisiemePartieCitation2 = troisiemeCitation2[Math.floor(Math.random() * troisiemeCitation2.length)];

	   citation = premierePartieCitation2 + deuxiemePartieCitation2 + troisiemePartieCitation2;
	   console.log(citation);
	   alert(citation);
	}


/* Fonction compteur clic pour dev 
	function clic() {
   		compteurClics++;
   		document.getElementById("compteurClics").textContent = compteurClics;
	}
*/




/* Fonction gérant l'événement au click sur les input nombres de citations */
	function event_citation() {
    	  let choixFinal = event.target.value;
      	  return choixFinal;
	}


		let inputCible = document.querySelectorAll('.radio_citation');
		for (let i = 0; i < inputCible.length; i++) {
    		inputCible[i].addEventListener('click', function(event) {
    	    	let voyons = event_citation();
    	    	console.log(voyons);
    	    	return voyons;
    		});
		}







/* Fonction gérant l'événement au click sur les input choix du générateur */
	function event_generateur() {
    	  let choixTest = event.target.value;
      	  return choixTest;
	}

		let inputCibleGenerateur = document.querySelectorAll('.radio_generateur');
		for (let i = 0; i < inputCibleGenerateur.length; i++) {
    		inputCibleGenerateur[i].addEventListener('click', function(event) {
    	    	let voyons2 = event_generateur();
    	    	console.log(voyons2);
    	    	return voyons2;
    		});
		}







/* Fonction final qui créer les li */
    function final() {
    	let variablequisertastockerlenombre = voyons();
    	let variablequisertastockerlegenerateur = voyons2();
	   		if (variablequisertastockerlegenerateur === "Fantasque") {	
	   			for (compteur = 0; compteur < variablequisertastockerlenombre; compteur++) {
 					// À chaque éxécution, la variable "pas" augmentera de 1
  					let trytry = "try";
					let rubyElt = document.createElement("li"); // Création d'un élément li
					rubyElt.id = "ruby"; // Définition de son identifiant
					rubyElt.appendChild(document.createTextNode(trytry)); // Définition de son contenu textuel
					document.getElementById("citations").appendChild(rubyElt); // Insertion du nouvel élément
		        }
		    }
		    else if (variablequisertastockerlegenerateur === "Classique") {
		    	for (compteur = 0; compteur < variablequisertastockerlenombre; compteur++) {
 					let trytrytry = "try2";
					let cetElt = document.createElement("li"); // Création d'un élément li
					cetElt.id = "cet"; // Définition de son identifiant
					cetElt.appendChild(document.createTextNode(trytrytry)); // Définition de son contenu textuel
					document.getElementById("citations").appendChild(cetElt); // Insertion du nouvel élément
		        }
		    }
		    else {
		    	console.log("BUG");
		    }
        }




        // Le contenu textuel de l'élément identifié par "contenu"
console.log(document.getElementById("contenu").textContent);


        
 


let form = document.querySelector("form");
form.addEventListener("submit", function (e) {
    e.preventDefault(); // Annulation de l'envoi des données
    console.log("ENVOYER");
    final();
});

















