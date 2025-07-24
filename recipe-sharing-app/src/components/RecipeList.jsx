import useRecipeStore from '../store/recipeStore';

function RecipeList() {
  const recipes = useRecipeStore((state) => state.recipes);

  return (
    <div style={{ padding: '20px' }}>
      <h2>All Recipes</h2>
      {recipes.map((recipe) => (
        <div key={recipe.id} style={{ marginBottom: '15px' }}>
          <h3>{recipe.title}</h3>
          <p>{recipe.description}</p>
        </div>
      ))}
    </div>
  );
}

export default RecipeList;
