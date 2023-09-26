/**
 * Une requête HTTP comprend :
 *  - une méthode (GET, POST, DELETE...)
 *  - Une URL
 *  - éventuellement des données
 */

//Défintiion de l'URL à appeler
const URL = "https://randomuser.me/api?results=50";


//Lancement de l'appel
// https://developer.mozilla.org/fr/docs/Web/API/Fetch_API/Using_Fetch
fetch(URL)
.then (function (response) 
{
    //Debug de la réponse et affichage dans la console
    //console.log(response);

    //Renvoi de la transformation de la réponse en JSON
    return response.json();
})
/**
 * Ca revient au même d'écrire ça :
 *  .then((response) => console.log(response))
 *  
 */

.then
(
    data => 
    {
        //Affichage du résultat de la transformation en JSON
        console.log(data.results);
        // On sélectionne l'endroit où on va mettre les données dans le fichier html
        const tableBody = document.getElementById('Tableau');
        
        // On parcourt le tableau, création de nouvelle ligne pour chaque utilisateur
        data.results.forEach(user => {
            const row = tableBody.insertRow();
            row.insertCell(0).textContent = user.name.last + " " + user.name.first;
            // Créez une cellule pour l'image de l'utilisateur
            const imageCell = row.insertCell(1);

            // Création d'un élément 'img' pour afficher l'image de l'utilisateur
            const userImage = document.createElement('img');
            userImage.src = user.picture.thumbnail;
                
            // Ajout de l'élément <img> à la cellule de l'image
            imageCell.appendChild(userImage);
            row.insertCell(2).textContent = user.email;

            // Si l'utilisateur est un homme
            if (user.gender === "male") {

                // On définit la cellule dans laquelle on met l'icône
                const imageCell = row.insertCell(3)
                // Création d'un élément 'img' pour afficher le genre de l'utilisateur
                const genderImage = document.createElement('img');
                genderImage.src = "/Debian/home/noe/TP_JS_Fetch_API/img/homme.png"
                imageCell.appendChild(genderImage);
            }
            
            // Si l'utilisateur est une femme
            else {
                
                // On définit la cellule dans laquelle on met l'icône
                const imageCell = row.insertCell(3)
                // Création d'un élément 'img' pour afficher le genre de l'utilisateur
                const genderImage = document.createElement('img');
                genderImage.src = "/Debian/home/noe/TP_JS_Fetch_API/img/femme.png"
                imageCell.appendChild(genderImage);
            }
            row.insertCell(4).textContent = user.location.city;
            row.insertCell(5).textContent = user.location.country;

        })
    }
)

// icônes faites par le graphiste Stockio