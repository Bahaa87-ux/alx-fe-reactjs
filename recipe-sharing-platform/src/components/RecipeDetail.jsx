import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

export default function RecipeDetail() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [recipe, setRecipe] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [checkedIngredients, setCheckedIngredients] = useState([]);
    const [completedSteps, setCompletedSteps] = useState([]);

    useEffect(() => {
        const fetchRecipeDetails = async () => {
            try {
                const response = await fetch('/data.json');
                const data = await response.json();
                const foundRecipe = data.find(recipe => recipe.id === parseInt(id));

                if (foundRecipe) {
                    setRecipe(foundRecipe);
                } else {
                    setError('Recipe not found');
                }
                setLoading(false);
            } catch (error) {
                console.error('Error loading recipe details:', error);
                setError('Failed to load recipe details');
                setLoading(false);
            }
        };

        fetchRecipeDetails();
    }, [id]);

    const toggleIngredient = (index) => {
        setCheckedIngredients(prev =>
            prev.includes(index)
                ? prev.filter(i => i !== index)
                : [...prev, index]
        );
    };

    const toggleStep = (index) => {
        setCompletedSteps(prev =>
            prev.includes(index)
                ? prev.filter(i => i !== index)
                : [...prev, index]
        );
    };

    if (loading) {
        return (
            <div className="min-h-screen bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50 flex items-center justify-center p-4">
                <div className="text-center">
                    <div className="relative w-24 h-24 mx-auto mb-8">
                        <div className="absolute inset-0 animate-spin rounded-full border-t-4 border-b-4 border-orange-500"></div>
                        <div className="absolute inset-2 animate-spin rounded-full border-t-4 border-b-4 border-red-400 animate-reverse"></div>
                        <div className="absolute inset-0 flex items-center justify-center text-4xl">🍳</div>
                    </div>
                    <p className="text-gray-700 text-xl md:text-2xl font-bold animate-pulse">
                        Loading delicious recipe...
                    </p>
                    <p className="text-gray-500 text-sm md:text-base mt-2">
                        Preparing all the details for you
                    </p>
                </div>
            </div>
        );
    }

    // Error State
    if (error || !recipe) {
        return (
            <div className="min-h-screen bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50 flex items-center justify-center p-4">
                <div className="text-center bg-white rounded-3xl shadow-2xl p-8 sm:p-12 max-w-lg border-4 border-red-200">
                    <div className="text-7xl md:text-8xl mb-6 animate-bounce">😢</div>
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">Oops!</h2>
                    <p className="text-gray-600 text-base md:text-lg mb-8 leading-relaxed">
                        {error || 'Recipe not found'}
                    </p>
                    <button
                        onClick={() => navigate('/')}
                        className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-bold py-4 px-10 rounded-full shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 text-base md:text-lg"
                    >
                        ← Back to Home
                    </button>
                </div>
            </div>
        );
    }

    const getDifficultyColor = (difficulty) => {
        switch (difficulty) {
            case 'Easy':
                return 'bg-gradient-to-r from-green-400 to-emerald-500 text-white';
            case 'Medium':
                return 'bg-gradient-to-r from-yellow-400 to-orange-500 text-white';
            case 'Hard':
                return 'bg-gradient-to-r from-red-400 to-rose-500 text-white';
            default:
                return 'bg-gradient-to-r from-gray-400 to-gray-500 text-white';
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50">
            <header className="bg-white shadow-xl border-b-4 border-orange-400 sticky top-0 z-50 backdrop-blur-sm bg-white/95">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 py-4 sm:py-6 max-w-7xl">
                    <div className="flex items-center justify-between">
                        <button
                            onClick={() => navigate('/')}
                            className="flex items-center gap-2 sm:gap-3 text-orange-600 hover:text-orange-700 font-bold transition-all duration-200 group bg-orange-50 hover:bg-orange-100 px-4 sm:px-6 py-2 sm:py-3 rounded-full text-sm sm:text-base md:text-lg"
                        >
                            <span className="text-xl sm:text-2xl transform group-hover:-translate-x-2 transition-transform duration-200">←</span>
                            <span>Back to Recipes</span>
                        </button>
                        <div className="flex gap-2 sm:gap-3">
                            <button className="p-2 sm:p-3 bg-orange-100 hover:bg-orange-200 rounded-full transition-all duration-200 transform hover:scale-110">
                                <span className="text-xl sm:text-2xl">🔖</span>
                            </button>
                            <button className="p-2 sm:p-3 bg-red-100 hover:bg-red-200 rounded-full transition-all duration-200 transform hover:scale-110">
                                <span className="text-xl sm:text-2xl">❤️</span>
                            </button>
                        </div>
                    </div>
                </div>
            </header>

            <main className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 py-6 sm:py-10 lg:py-12 max-w-7xl">

                <div className="bg-white rounded-3xl sm:rounded-[2rem] shadow-2xl overflow-hidden mb-8 sm:mb-12 border-4 border-orange-100">

                    <div className="relative h-72 sm:h-96 md:h-[450px] lg:h-[550px] overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200">
                        <img
                            src={recipe.image}
                            alt={recipe.title}
                            className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>

                        <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8 md:p-12 lg:p-16">
                            <div className="flex flex-wrap items-center gap-3 sm:gap-4 mb-4">
                <span className={`inline-flex items-center px-4 sm:px-6 py-2 sm:py-3 rounded-full text-xs sm:text-sm md:text-base font-bold shadow-2xl ${getDifficultyColor(recipe.difficulty)}`}>
                  {recipe.difficulty}
                </span>
                                <span className="inline-flex items-center px-4 sm:px-6 py-2 sm:py-3 rounded-full text-xs sm:text-sm md:text-base font-bold bg-white/20 backdrop-blur-md text-white shadow-2xl">
                  Recipe #{recipe.id}
                </span>
                            </div>
                            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black text-white drop-shadow-2xl mb-3 sm:mb-5 leading-tight">
                                {recipe.title}
                            </h1>
                            <p className="text-white/95 text-base sm:text-lg md:text-xl lg:text-2xl max-w-4xl drop-shadow-xl leading-relaxed font-medium">
                                {recipe.summary}
                            </p>
                        </div>
                    </div>

                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-0 bg-gradient-to-r from-orange-50 via-amber-50 to-yellow-50">
                        <div className="text-center p-6 sm:p-8 border-r border-b lg:border-b-0 border-orange-200 hover:bg-white transition-colors duration-300 group">
                            <div className="text-4xl sm:text-5xl mb-3 group-hover:scale-125 transition-transform duration-300">⏱️</div>
                            <p className="text-xs sm:text-sm text-gray-500 font-semibold mb-1 uppercase tracking-wider">Prep Time</p>
                            <p className="text-base sm:text-lg md:text-xl font-black text-orange-600">{recipe.prepTime}</p>
                        </div>
                        <div className="text-center p-6 sm:p-8 border-b lg:border-b-0 lg:border-r border-orange-200 hover:bg-white transition-colors duration-300 group">
                            <div className="text-4xl sm:text-5xl mb-3 group-hover:scale-125 transition-transform duration-300">🔥</div>
                            <p className="text-xs sm:text-sm text-gray-500 font-semibold mb-1 uppercase tracking-wider">Cook Time</p>
                            <p className="text-base sm:text-lg md:text-xl font-black text-red-600">{recipe.cookTime}</p>
                        </div>
                        <div className="text-center p-6 sm:p-8 border-r border-orange-200 hover:bg-white transition-colors duration-300 group">
                            <div className="text-4xl sm:text-5xl mb-3 group-hover:scale-125 transition-transform duration-300">👥</div>
                            <p className="text-xs sm:text-sm text-gray-500 font-semibold mb-1 uppercase tracking-wider">Servings</p>
                            <p className="text-base sm:text-lg md:text-xl font-black text-blue-600">{recipe.servings} people</p>
                        </div>
                        <div className="text-center p-6 sm:p-8 hover:bg-white transition-colors duration-300 group">
                            <div className="text-4xl sm:text-5xl mb-3 group-hover:scale-125 transition-transform duration-300">📊</div>
                            <p className="text-xs sm:text-sm text-gray-500 font-semibold mb-1 uppercase tracking-wider">Difficulty</p>
                            <p className="text-base sm:text-lg md:text-xl font-black text-purple-600">{recipe.difficulty}</p>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 sm:gap-8 lg:gap-10">

                    <div className="lg:col-span-2">
                        <div className="bg-white rounded-2xl sm:rounded-3xl shadow-2xl p-6 sm:p-8 md:p-10 border-4 border-orange-100 sticky top-24 hover:shadow-orange-200 transition-shadow duration-300">
                            <div className="flex items-center gap-3 sm:gap-4 mb-6 sm:mb-8 pb-4 sm:pb-6 border-b-4 border-orange-200">
                                <div className="p-3 sm:p-4 bg-gradient-to-br from-orange-400 to-red-500 rounded-2xl shadow-lg">
                                    <span className="text-3xl sm:text-4xl">🛒</span>
                                </div>
                                <div>
                                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-gray-900">Ingredients</h2>
                                    <p className="text-xs sm:text-sm text-gray-500 mt-1 font-medium">Check off as you go</p>
                                </div>
                            </div>

                            <ul className="space-y-3 sm:space-y-4">
                                {recipe.ingredients.map((ingredient, index) => (
                                    <li
                                        key={index}
                                        onClick={() => toggleIngredient(index)}
                                        className={`flex items-start gap-3 sm:gap-4 p-3 sm:p-4 rounded-xl cursor-pointer transition-all duration-300 border-2 ${
                                            checkedIngredients.includes(index)
                                                ? 'bg-green-50 border-green-300 opacity-60'
                                                : 'bg-orange-50 hover:bg-orange-100 border-orange-200 hover:border-orange-300 hover:shadow-md'
                                        }`}
                                    >
                    <span className={`flex-shrink-0 w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center rounded-full text-sm sm:text-base font-bold shadow-md transition-all duration-300 ${
                        checkedIngredients.includes(index)
                            ? 'bg-green-500 text-white scale-110'
                            : 'bg-orange-500 text-white'
                    }`}>
                      {checkedIngredients.includes(index) ? '✓' : index + 1}
                    </span>
                                        <span className={`text-gray-800 text-sm sm:text-base md:text-lg leading-relaxed flex-1 font-medium ${
                                            checkedIngredients.includes(index) ? 'line-through' : ''
                                        }`}>
                      {ingredient}
                    </span>
                                    </li>
                                ))}
                            </ul>

                            <div className="mt-6 sm:mt-8 pt-6 sm:pt-8 border-t-2 border-orange-200">
                                <div className="flex items-center justify-between text-sm sm:text-base">
                                    <span className="font-bold text-gray-700">Progress:</span>
                                    <span className="font-black text-orange-600">
                    {checkedIngredients.length} / {recipe.ingredients.length}
                  </span>
                                </div>
                                <div className="mt-3 h-3 sm:h-4 bg-gray-200 rounded-full overflow-hidden">
                                    <div
                                        className="h-full bg-gradient-to-r from-orange-500 to-red-500 transition-all duration-500 rounded-full"
                                        style={{ width: `${(checkedIngredients.length / recipe.ingredients.length) * 100}%` }}
                                    ></div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="lg:col-span-3">
                        <div className="bg-white rounded-2xl sm:rounded-3xl shadow-2xl p-6 sm:p-8 md:p-10 border-4 border-red-100 hover:shadow-red-200 transition-shadow duration-300">
                            <div className="flex items-center gap-3 sm:gap-4 mb-6 sm:mb-8 pb-4 sm:pb-6 border-b-4 border-red-200">
                                <div className="p-3 sm:p-4 bg-gradient-to-br from-red-400 to-orange-500 rounded-2xl shadow-lg">
                                    <span className="text-3xl sm:text-4xl">👨‍🍳</span>
                                </div>
                                <div>
                                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-gray-900">Instructions</h2>
                                    <p className="text-xs sm:text-sm text-gray-500 mt-1 font-medium">Follow these steps carefully</p>
                                </div>
                            </div>

                            <ol className="space-y-5 sm:space-y-6 md:space-y-8">
                                {recipe.instructions.map((instruction, index) => (
                                    <li
                                        key={index}
                                        onClick={() => toggleStep(index)}
                                        className={`flex items-start gap-4 sm:gap-5 md:gap-6 p-4 sm:p-5 md:p-6 rounded-xl cursor-pointer transition-all duration-300 border-2 ${
                                            completedSteps.includes(index)
                                                ? 'bg-green-50 border-green-300'
                                                : 'bg-red-50 hover:bg-red-100 border-red-200 hover:border-red-300 hover:shadow-lg'
                                        }`}
                                    >
                    <span className={`flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 flex items-center justify-center rounded-2xl text-base sm:text-lg md:text-xl font-black shadow-xl transition-all duration-300 ${
                        completedSteps.includes(index)
                            ? 'bg-gradient-to-br from-green-400 to-emerald-500 text-white scale-110 rotate-12'
                            : 'bg-gradient-to-br from-red-500 to-orange-500 text-white hover:scale-110'
                    }`}>
                      {completedSteps.includes(index) ? '✓' : index + 1}
                    </span>
                                        <div className="flex-1">
                                            <p className={`text-gray-800 text-sm sm:text-base md:text-lg leading-relaxed font-medium ${
                                                completedSteps.includes(index) ? 'line-through opacity-60' : ''
                                            }`}>
                                                {instruction}
                                            </p>
                                        </div>
                                    </li>
                                ))}
                            </ol>

                            <div className="mt-6 sm:mt-8 md:mt-10 pt-6 sm:pt-8 border-t-2 border-red-200">
                                <div className="flex items-center justify-between text-sm sm:text-base mb-3">
                                    <span className="font-bold text-gray-700">Cooking Progress:</span>
                                    <span className="font-black text-red-600">
                    {completedSteps.length} / {recipe.instructions.length} steps
                  </span>
                                </div>
                                <div className="h-3 sm:h-4 bg-gray-200 rounded-full overflow-hidden">
                                    <div
                                        className="h-full bg-gradient-to-r from-red-500 to-orange-500 transition-all duration-500 rounded-full"
                                        style={{ width: `${(completedSteps.length / recipe.instructions.length) * 100}%` }}
                                    ></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Action Buttons */}
                <div className="mt-8 sm:mt-12 md:mt-16 flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-stretch sm:items-center">
                    <button className="group bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-black py-4 sm:py-5 px-8 sm:px-14 rounded-2xl text-base sm:text-lg md:text-xl shadow-2xl hover:shadow-orange-300 transform hover:scale-105 transition-all duration-300 flex items-center justify-center gap-3">
                        <span className="text-2xl sm:text-3xl group-hover:rotate-12 transition-transform duration-300">🖨️</span>
                        Print Recipe
                    </button>
                    <button className="group bg-white border-4 border-orange-500 text-orange-600 hover:bg-orange-50 font-black py-4 sm:py-5 px-8 sm:px-14 rounded-2xl text-base sm:text-lg md:text-xl shadow-2xl hover:shadow-orange-300 transform hover:scale-105 transition-all duration-300 flex items-center justify-center gap-3">
                        <span className="text-2xl sm:text-3xl group-hover:scale-125 transition-transform duration-300">❤️</span>
                        Save Favorite
                    </button>
                    <button className="group bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white font-black py-4 sm:py-5 px-8 sm:px-14 rounded-2xl text-base sm:text-lg md:text-xl shadow-2xl hover:shadow-blue-300 transform hover:scale-105 transition-all duration-300 flex items-center justify-center gap-3">
                        <span className="text-2xl sm:text-3xl group-hover:rotate-12 transition-transform duration-300">📤</span>
                        Share
                    </button>
                </div>
            </main>

            {/* Enhanced Footer */}
            <footer className="bg-gradient-to-r from-orange-600 via-red-600 to-orange-600 mt-12 sm:mt-16 lg:mt-24 shadow-2xl">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 py-8 sm:py-10 max-w-7xl">
                    <div className="text-center">
                        <p className="text-white text-sm sm:text-base md:text-lg font-bold mb-2">
                            Made with <span className="text-2xl animate-pulse">❤️</span> for food lovers
                        </p>
                        <p className="text-white/80 text-xs sm:text-sm">
                            © 2024 Recipe Collection | All Rights Reserved
                        </p>
                    </div>
                </div>
            </footer>
        </div>
    );
}