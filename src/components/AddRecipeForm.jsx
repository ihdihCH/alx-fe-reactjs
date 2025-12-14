import { useState } from "react";
import { Link } from "react-router-dom";

function AddRecipeForm() {
  const [title, setTitle] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [steps, setSteps] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title || !ingredients || !steps) {
      setError("All fields are required");
      return;
    }

    alert("Recipe submitted successfully!");
    setTitle("");
    setIngredients("");
    setSteps("");
    setError("");
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <Link to="/" className="text-blue-500 underline">
        ← Back to Home
      </Link>

      <div className="max-w-xl mx-auto bg-white p-6 rounded-lg shadow mt-4">
        <h1 className="text-2xl font-bold mb-4">Add New Recipe</h1>

        {error && <p className="text-red-500 mb-4">{error}</p>}

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            placeholder="Recipe Title"
            className="w-full border p-2 rounded"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />

          <textarea
            placeholder="Ingredients (comma separated)"
            className="w-full border p-2 rounded"
            rows="4"
            value={ingredients}
            onChange={(e) => setIngredients(e.target.value)}
          />

          <textarea
            placeholder="Preparation Steps"
            className="w-full border p-2 rounded"
            rows="4"
            value={steps}
            onChange={(e) => setSteps(e.target.value)}
          />

          <button
            type="submit"
            className="w-full bg-green-500 text-white py-2 rounded hover:bg-green-600"
          >
            Submit Recipe
          </button>
        </form>
      </div>
    </div>
  );
}

export default AddRecipeForm;
