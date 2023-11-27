import { useState } from "react"

function CocktailsIngredientsPage () {

    const [ingredients, setIngredients] = useState(null)

    (async () => {
        const IngredientsApiResponse = await fetch ('https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list')
        const IngredientsJsonResponse = IngredientsApiResponse.json()
        setIngredients(IngredientsJsonResponse.drinks)
    })();

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


// le rendu ne fonctionne pas 
// erreur : Uncaught TypeError: (0 , react__WEBPACK_IMPORTED_MODULE_0__.useState)(...) is not a function