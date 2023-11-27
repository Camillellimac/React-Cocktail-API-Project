import { useEffect, useState } from "react";

function CocktailsCat () {

    const [cat, setCat] = useState(null)

    useEffect(() => {
        ( async () => {
            const catFetchResponse = await fetch ("https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list")
            const catFetch = await catFetchResponse.json()
            setCat(catFetch.drinks)
        })();
    }, [])




    return (
        <main>
            {cat !== null ? (
                <>
                    {cat.map((cat) => {
                        return (
                            <>
                            <h3>{cat.strCategory}</h3>
                            </>
                        )
                    })}
                </>
            ) : (
                <p>Loading</p>
            )}
        </main>
    )
}

export default CocktailsCat; 
