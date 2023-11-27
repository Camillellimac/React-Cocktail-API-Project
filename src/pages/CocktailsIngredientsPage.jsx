import { useEffect, useState } from "react"

function CocktailsIngredientsPage () {

    const [ingredients, setIngredients] = useState(null)
    useEffect(() => {
        (async () => {
            const IngredientsApiResponse = await fetch ('https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list')
            const IngredientsJsonResponse = IngredientsApiResponse.json()
            setIngredients(IngredientsJsonResponse.drinks)
        })();
    },[])

   

    console.log(setIngredients)
    

    return (
        <main>
            {ingredients !== null? (
                <>
                {ingredients.map((ingredient) => {
                    return (
                        <>
                        {ingredient.strCategory}
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


