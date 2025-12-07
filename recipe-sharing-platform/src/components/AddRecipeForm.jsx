import { useState } from "react";

export default function AddRecipeForm() {
    const [title, setTitle] = useState("");
    const [ingredients, setIngredients] = useState("");
    const [steps, setSteps] = useState("");

    const [errors, setErrors] = useState({});

    const validateForm = () => {
        const newErrors = {};

        if (!title.trim()) newErrors.title = "Title is required";
        if (!ingredients.trim()) newErrors.ingredients = "Ingredients are required";
        if (!steps.trim()) newErrors.steps = "Steps are required";

        // Ensure at least 2 ingredients
        const ingredientsCount = ingredients.split("\n").filter((i) => i.trim() !== "").length;
        if (ingredientsCount < 2)
            newErrors.ingredients = "You must add at least two ingredients";

        setErrors(newErrors);

        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!validateForm()) return;

        const formData = {
            title,
            ingredients: ingredients.split("\n"),
            steps: steps.split("\n"),
        };

        console.log("Recipe submitted:", formData);
        alert("Recipe submitted successfully!");

        // Reset
        setTitle("");
        setIngredients("");
        setSteps("");
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50 py-10 px-4">
            <div className="max-w-3xl mx-auto bg-white rounded-3xl shadow-2xl p-8 border-4 border-orange-200">
                <h1 className="text-4xl font-bold text-center mb-6 bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
                    Add New Recipe 🍽️
                </h1>

                <form onSubmit={handleSubmit} className="space-y-6">

                    {/* Recipe Title */}
                    <div>
                        <label className="block text-lg font-semibold mb-2">Recipe Title</label>
                        <input
                            type="text"
                            className="w-full border-2 border-orange-300 rounded-xl p-3 focus:ring-2 focus:ring-orange-500 outline-none"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                        />
                        {errors.title && <p className="text-red-600 text-sm mt-1">{errors.title}</p>}
                    </div>

                    {/* Ingredients */}
                    <div>
                        <label className="block text-lg font-semibold mb-2">Ingredients (each item on a new line)</label>
                        <textarea
                            className="w-full border-2 border-orange-300 rounded-xl p-3 h-32 resize-none focus:ring-2 focus:ring-orange-500 outline-none"
                            value={ingredients}
                            onChange={(e) => setIngredients(e.target.value)}
                        ></textarea>
                        {errors.ingredients && (
                            <p className="text-red-600 text-sm mt-1">{errors.ingredients}</p>
                        )}
                    </div>

                    {/* Preparation Steps */}
                    <div>
                        <label className="block text-lg font-semibold mb-2">Preparation Steps (each step on a new line)</label>
                        <textarea
                            className="w-full border-2 border-orange-300 rounded-xl p-3 h-32 resize-none focus:ring-2 focus:ring-orange-500 outline-none"
                            value={steps}
                            onChange={(e) => setSteps(e.target.value)}
                        ></textarea>
                        {errors.steps && <p className="text-red-600 text-sm mt-1">{errors.steps}</p>}
                    </div>

                    {/* Submit Button */}
                    <button
                        type="submit"
                        className="w-full py-4 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-2xl font-bold text-lg shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300"
                    >
                        Submit Recipe
                    </button>
                </form>
            </div>
        </div>
    );
}
