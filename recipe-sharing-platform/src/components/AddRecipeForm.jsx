import React, { useState } from "react";

function AddRecipeForm() {
  const [title, setTitle] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [steps, setSteps] = useState("");
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    if (!title.trim()) newErrors.title = "Title is required";
    if (!ingredients.trim()) {
      newErrors.ingredients = "Ingredients are required";
    } else if (ingredients.split("\n").length < 2) {
      newErrors.ingredients = "Please include at least 2 ingredients";
    }
    if (!steps.trim()) newErrors.steps = "Preparation steps are required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    const newRecipe = {
      title,
      ingredients: ingredients.split("\n"),
      instructions: steps.split("\n"),
    };
    console.log("New Recipe Submitted:", newRecipe);

    // Clear form after submission
    setTitle("");
    setIngredients("");
    setSteps("");
    setErrors({});
    alert("Recipe submitted successfully!");
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">Add New Recipe</h1>
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 md:p-8 rounded-lg shadow-lg max-w-2xl mx-auto space-y-4"
      >
        {/* Recipe Title */}
        <div>
          <label className="block font-medium mb-1">Recipe Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full md:w-1/2 border border-gray-300 rounded p-2 focus:outline-none focus:ring focus:ring-blue-200"
            placeholder="Enter recipe title"
          />
          {errors.title && (
            <p className="text-red-500 text-sm">{errors.title}</p>
          )}
        </div>

        {/* Ingredients */}
        <div>
          <label className="block font-medium mb-1">Ingredients</label>
          <textarea
            value={ingredients}
            onChange={(e) => setIngredients(e.target.value)}
            className="w-full border border-gray-300 rounded p-2 h-28 focus:outline-none focus:ring focus:ring-blue-200"
            placeholder="List each ingredient on a new line"
          ></textarea>
          {errors.ingredients && (
            <p className="text-red-500 text-sm">{errors.ingredients}</p>
          )}
        </div>

        {/* Preparation Steps */}
        <div>
          <label className="block font-medium mb-1">Preparation Steps</label>
          <textarea
            value={steps}
            onChange={(e) => setSteps(e.target.value)}
            className="w-full border border-gray-300 rounded p-2 h-28 focus:outline-none focus:ring focus:ring-blue-200"
            placeholder="List each step on a new line"
          ></textarea>
          {errors.steps && (
            <p className="text-red-500 text-sm">{errors.steps}</p>
          )}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded transition-colors"
        >
          Submit Recipe
        </button>
      </form>
    </div>
  );
}

export default AddRecipeForm;
