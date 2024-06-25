//Imports
import React from "react";



//Fonction normale --> MÊME CHOSE QUE FLECHÉES, mais nous allons toujours utilisée Fechées, car plus populaire/standard
/*function NotFound() {}*/
//Création composante (Créer une fonction fléchée)
const NotFound = () => {
    //Backend
    //Frontend = return (what you will see)
    return( //Mon code HTML - seulement un item à la fois, donc mettre tout dans 1 DIV (plusieurs items dans 1 item)
    <div>
        <h1>ERREUR 404, PAGE INTROUVABLE</h1>
    </div>
    )

}

//Export de la composante
export default NotFound;

