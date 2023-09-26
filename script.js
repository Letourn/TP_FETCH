/**
 * Une requête HTTP comprend :
 *  - une méthode (GET, POST, DELETE...)
 *  - Une URL
 *  - éventuellement des données
 */

//Défintiion de l'URL à appeler
const URL = "https://randomuser.me/api?results=50&nat=FR";


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
        console.log(data);
        //Affichage des éléments du tableau results
       /*data.results.forEach(element => {
           document.write(element.nat);
           document.write("<br>");
           document.write(element.login.username);
           document.write("<br>");
           document.write(element.email);
           document.write("<br>");
           document.write(element.phone);
           document.write("<br>");
           document.write(element.picture.thumbnail);
           document.write("<br>");
        
       });*/
    }
)

