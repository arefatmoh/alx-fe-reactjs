import { Link } from "react-router-dom";
import useRecipeStore from "./recipeStore";

function RecipeList() {
  const filteredRecipes = useRecipeStore((state) => state.filteredRecipes);

  return (
    <div>
      {filteredRecipes.length === 0 ? (
        <p>No recipes found.</p>
      ) : (
        filteredRecipes.map((recipe) => (
          <div key={recipe.id} style={{ border: "1px solid #ccc", margin: "10px", padding: "10px" }}>
            <h3>
              <Link to={`/recipe/${recipe.id}`} style={{ textDecoration: "none", color: "blue" }}>
                {recipe.title}
              </Link>
            </h3>
            <p>{recipe.description}</p>
          </div>
        ))
      )}
    </div>
  );
}

export default RecipeList;
