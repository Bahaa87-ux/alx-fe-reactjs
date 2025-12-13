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
            ingredients: ingredients.split("\n").filter((i) => i.trim() !== ""),
            steps: steps.split("\n").filter((s) => s.trim() !== ""),
        };

        console.log("Recipe submitted:", formData);
        alert("Recipe submitted successfully!");

        // Reset form
        setTitle("");
        setIngredients("");
        setSteps("");
        setErrors({});
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50 py-8 px-4 md:py-12 md:px-6">
            <div className="max-w-3xl mx-auto bg-white rounded-3xl shadow-2xl p-6 md:p-10 border-4 border-orange-200">
                <h1 className="text-3xl md:text-4xl font-bold text-center mb-6 md:mb-8 bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
                    Add New Recipe 🍽️
                </h1>

                <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Title */}
                    <div>
                        <label className="block text-base md:text-lg font-semibold mb-2">Recipe Title</label>
                        <input
                            type="text"
                            className="w-full border-2 border-orange-300 rounded-xl p-3 md:p-4 focus:ring-2 focus:ring-orange-500 outline-none text-sm md:text-base"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            placeholder="e.g. Spicy Chicken Pasta"
                        />
                        {errors.title && <p className="text-red-600 text-sm mt-1">{errors.title}</p>}
                    </div>

                    {/* Ingredients */}
                    <div>
                        <label className="block text-base md:text-lg font-semibold mb-2">
                            Ingredients (each item on a new line)
                        </label>
                        <textarea
                            className="w-full border-2 border-orange-300 rounded-xl p-3 md:p-4 h-28 md:h-40 resize-none focus:ring-2 focus:ring-orange-500 outline-none text-sm md:text-base"
                            value={ingredients}
                            onChange={(e) => setIngredients(e.target.value)}
                            placeholder={"Tomatoes\nOlive oil\nSalt"}
                        ></textarea>
                        {errors.ingredients && (
                            <p className="text-red-600 text-sm mt-1">{errors.ingredients}</p>
                        )}
                        <p className="text-xs md:text-sm text-gray-500 mt-1">Add one ingredient per line. At least two required.</p>
                    </div>

                    {/* Steps */}
                    <div>
                        <label className="block text-base md:text-lg font-semibold mb-2">
                            Preparation Steps (each step on a new line)
                        </label>
                        <textarea
                            className="w-full border-2 border-orange-300 rounded-xl p-3 md:p-4 h-28 md:h-40 resize-none focus:ring-2 focus:ring-orange-500 outline-none text-sm md:text-base"
                            value={steps}
                            onChange={(e) => setSteps(e.target.value)}
                            placeholder={"Preheat oven to 180°C\nMix ingredients\nBake for 20 minutes"}
                        ></textarea>
                        {errors.steps && <p className="text-red-600 text-sm mt-1">{errors.steps}</p>}
                        <p className="text-xs md:text-sm text-gray-500 mt-1">Separate steps by newline for clarity.</p>
                    </div>

                    <button
                        type="submit"
                        className="w-full py-3 md:py-4 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-2xl font-bold text-lg md:text-xl shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300"
                    >
                        Submit Recipe
                    </button>
                </form>
            </div>
        </div>
    );
}
