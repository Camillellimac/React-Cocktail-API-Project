import { Link } from "react-router-dom";

function CocktailsCard ({cocktailToDisplay}) {
    return (
        <>
        <Link to = {`/drinks/${cocktailToDisplay.idDrink}`}><h3>{cocktailToDisplay.strDrink}</h3></Link>  
        <img src={cocktailToDisplay.strDrinkThumb} alt={cocktailToDisplay.strDrink} /> 
        <p>{cocktailToDisplay.strInstructions}</p>            
        </>
    )
}

export default CocktailsCard;