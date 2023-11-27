import { useEffect, useState } from "react";
import CocktailsCard from "../components/CocktailCard";

function CocktailRandomPage () {

    const [cocktailRandom, setCocktailRandom] = useState(null)
    
    useEffect(() => { // hook permettant d'executer le code qu'a certains mmoments 

    (async () => { // la fonction s'appelle toute seule
        const cocktailRandomApi = await fetch("https://www.thecocktaildb.com/api/json/v1/1/random.php") // requête envoyée à l'API
        const cocktailRandomJs = await cocktailRandomApi.json() // on récupère la date en json
        setCocktailRandom(cocktailRandomJs.drinks[0]) // on accède à la data .drinks et on demande index 0 puisqu'un seul élément random sera retourné
    })(); 
    }, []); // le tableau vide signifie qu'on veut executer le code une seule fois seulement après le chargement du composant

    return (

        <main> 
            {cocktailRandom ? // si cocktailRandom a été récupéré 
            <>
            <CocktailsCard cocktailToDisplay={cocktailRandom}/>
            </>
            : 
            <p>Loading</p>} {/* sinon afficher cette balise */}
        </main>
    )
}

export default CocktailRandomPage;

