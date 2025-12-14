import { useParams, Link } from "react-router-dom";
import recipesData from "../data.json";

function RecipeDetail() {
  const { id } = useParams();
  const recipe = recipesData.find((r) => r.id === parseInt(id));

  if (!recipe) {
    return <p className="text-center mt-10">Recipe not found</p>;
  }

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <Link to="/" className="text-blue-500 underline">
        ← Back to Home
      </Link>

      <div className="max-w-3xl mx-auto bg-white rounded-lg shadow p-6 mt-4">
        <img
          src={recipe.image}
          alt={recipe.title}
          className="w-full h-64 object-cover rounded"
        />

        <h1 className="text-3xl font-bold mt-4">{recipe.title}</h1>

        <h2 className="text-xl font-semibold mt-6">Ingredients</h2>
        <ul className="list-disc list-inside text-gray-700">
          {recipe.ingredients.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>

        <h2 className="text-xl font-semibold mt-6">Cooking Instructions</h2>
        <p className="text-gray-700 mt-2">{recipe.instructions}</p>
      </div>
    </div>
  );
}

export default RecipeDetail;
