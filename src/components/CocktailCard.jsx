import { Link } from "react-router-dom";

function CocktailsCard ({cocktailToDisplay}) {

     {/* 
            4. Je créé ma fonction liée à l'eventListener qui a en premier paramètre
            event (qui nous bloquait précédemment) et comme second paramètre je lui 
            passe l'ID de l'élément cliqué 
    */}
 
  const handleDeleteCocktail = async (event, id) => {
     {/* 
            5. J'utilise fetch pour faire un appel à l'API/au serveur via un fake url (supposons
            que je sois admin et que le lien soit fonctionnel)
            6. J'ajoute après l'url l'id (soit directement "+ id" soit avec String)
            7. J'indique que la méthode que je souhaite utiliser en lien avec cet appel fetch 
            est DELETE pour supprimer l'élément 
    */}
 
    await fetch("https://www.thecocktaildb.com/api/json/v1/1/fake-delete.php?i=" + id, {
      method: "DELETE",
    });
  };

    return (
        <>
        <Link to = {`/drinks/${cocktailToDisplay.idDrink}`}><h3>{cocktailToDisplay.strDrink}</h3></Link>  
        <img src={cocktailToDisplay.strDrinkThumb} alt={cocktailToDisplay.strDrink} /> 
        <p>{cocktailToDisplay.strInstructions}</p>    

           {/* 
            1. Je créé une balise bouton qui me permettra in fine de supprimer l'élément au click
            2. J'ajoute au bouton l'eventListener onClick
            3. Vu que par défaut, l'eventListener à déjà un paramètre event, si je veux 
            lui passer l'ID en paramètre, je suis forcée de créer une fonction fleche 
            qui va appeler la fonction qui gère le comportement au click  
       */}
        <button
        onClick={(event) => {
          handleDeleteCocktail(event, cocktailToDisplay.idDrink);
        }}>
        Supprimer le cocktail
        </button>

        </>
    )
}

export default CocktailsCard;