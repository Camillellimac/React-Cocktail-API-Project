import { useState } from "react";

function CocktailRandomPage () {

    const [cocktailRandom, setCocktailRandom] = useState(null)
    
    if (!cocktailRandom) { // si cocktailRandom est vide, le fetch se lance
    (async () => { // la fonction s'appelle toute seule
        const cocktailRandomApi = await fetch("https://www.thecocktaildb.com/api/json/v1/1/random.php") // requête envoyée à l'API
        const cocktailRandomJs = await cocktailRandomApi.json() // on récupère la date en json
        setCocktailRandom(cocktailRandomJs.drinks[0]) // on accède à la data .drinks et on demande index 0 puisqu'un seul élément random sera retourné
    })(); 
    }

    return (

        <main> 
            {cocktailRandom ? // si cocktailRandom a été récupéré 
            <h3>{cocktailRandom.strDrink}</h3> // afficher la propriété .strDrink 
            : 
            <p>Loading</p>} {/* sinon afficher cette balise */}
        </main>
    )
}

export default CocktailRandomPage;

