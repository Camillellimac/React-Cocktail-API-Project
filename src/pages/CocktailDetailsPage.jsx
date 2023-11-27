import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function CocktailDetailsPage () {

    const {id} = useParams()
    const [cocktails, setCocktails] = useState(null)

    useEffect(() => {
     (async () => {
        const ResponseApiFetch = await fetch ('https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=' + id)
        const ResponseJson = await ResponseApiFetch.json()
        setCocktails(ResponseJson.drinks[0])
    })();
    },[])

    console.log(setCocktails)

    return (
        <main>
            { cocktails  ? (
                        <> 
                            <h3>{cocktails.strDrink}</h3> 
                            <img src={cocktails.strDrinkThumb} alt={cocktails.strDrink} />
                            <p>{cocktails.strInstructions}</p>
                        </>
                    ) : (
                <p>Loading</p>
            )}
        </main>
    )
}

export default CocktailDetailsPage; 