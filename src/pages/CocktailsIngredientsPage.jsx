import { useEffect, useState } from "react"

function CocktailsIngredientsPage () {

    const [ingredients, setIngredients] = useState(null)
    useEffect(() => {
        (async () => {
            const IngredientsApiResponse = await fetch ('https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list')
            const IngredientsJsonResponse = await IngredientsApiResponse.json()
            setIngredients(IngredientsJsonResponse.drinks)

            console.log(setIngredients)

        })();
    },[])
    

    return (
        <main>
            {ingredients !== null? (
                <>
                {ingredients.map((ingredient) => {
                    return (
                        <>
                       <p>{ingredient.strIngredient1}</p> 
                        </>
                    )
                })}
                </>
            ) : (
                <p>Loading</p>
            )
            }
        </main>
    )
}

export default CocktailsIngredientsPage;


