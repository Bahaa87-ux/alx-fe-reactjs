import { useState, useEffect } from 'react';

export default function HomePage() {
    const [recipes, setRecipes] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // تحميل البيانات من ملف data.json
        const loadRecipes = async () => {
            try {
                const response = await fetch('/data.json');
                const data = await response.json();
                setRecipes(data);
                setLoading(false);
            } catch (error) {
                console.error('Error loading recipes:', error);
                setLoading(false);
            }
        };

        loadRecipes();
    }, []);

    // Loading Component
    if (loading) {
        return (
            <div className="min-h-screen bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50 flex items-center justify-center">
                <div className="text-center">
                    <div className="animate-spin rounded-full h-20 w-20 border-t-4 border-b-4 border-orange-500 mx-auto"></div>
                    <p className="mt-6 text-gray-700 text-xl font-semibold animate-pulse">Loading delicious recipes...</p>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50">
            {/* Header Section */}
            <header className="bg-white shadow-lg sticky top-0 z-50 border-b-4 border-orange-400">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 py-6 sm:py-8 lg:py-10 max-w-screen-2xl">
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-3">
                        <span className="text-4xl sm:text-5xl lg:text-6xl animate-bounce">🍽️</span>
                        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent text-center sm:text-left">
                            Recipe Collection
                        </h1>
                    </div>
                    <p className="text-center text-gray-600 mt-3 sm:mt-4 text-base sm:text-lg md:text-xl font-medium px-4">
                        Discover delicious recipes from around the world
                    </p>
                    <div className="flex justify-center mt-3 sm:mt-4 gap-2">
                        <span className="h-1 w-12 sm:w-16 bg-orange-500 rounded"></span>
                        <span className="h-1 w-6 sm:w-8 bg-orange-300 rounded"></span>
                        <span className="h-1 w-3 sm:w-4 bg-orange-200 rounded"></span>
                    </div>
                </div>
            </header>

            {/* Main Content Section */}
            <main className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 py-12 sm:py-16 lg:py-20 max-w-screen-2xl">
                {recipes.length > 0 ? (
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8 lg:gap-10">
                        {recipes.map((recipe) => (
                            // Recipe Card Component with Enhanced Styling
                            <div
                                key={recipe.id}
                                className="group bg-white rounded-3xl shadow-xl overflow-hidden transform transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:-translate-y-3 cursor-pointer border-2 border-transparent hover:border-orange-400"
                            >
                                {/* Recipe Image with Overlay */}
                                <div className="relative h-48 sm:h-56 md:h-64 lg:h-72 overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200">
                                    <img
                                        src={recipe.image}
                                        alt={recipe.title}
                                        className="w-full h-full object-cover transition-all duration-700 group-hover:scale-125 group-hover:rotate-2"
                                    />
                                    {/* Dark Gradient Overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500"></div>

                                    {/* Recipe Title on Image */}
                                    <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-4 md:p-6">
                                        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white drop-shadow-2xl transform transition-all duration-500 group-hover:scale-110 line-clamp-2">
                                            {recipe.title}
                                        </h2>
                                    </div>

                                    {/* Recipe ID Badge */}
                                    <div className="absolute top-3 sm:top-4 right-3 sm:right-4">
                    <span className="inline-flex items-center px-2 sm:px-3 md:px-4 py-1 sm:py-2 rounded-full text-xs sm:text-sm font-bold bg-orange-500 text-white shadow-lg transform transition-all duration-300 group-hover:scale-110 group-hover:rotate-6">
                      #{recipe.id}
                    </span>
                                    </div>
                                </div>

                                {/* Recipe Details */}
                                <div className="p-4 sm:p-5 md:p-7">
                                    {/* Summary */}
                                    <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-4 sm:mb-6 line-clamp-3 group-hover:text-gray-900 transition-colors duration-300">
                                        {recipe.summary}
                                    </p>

                                    {/* Divider */}
                                    <div className="h-px bg-gradient-to-r from-transparent via-orange-300 to-transparent mb-4 sm:mb-6"></div>

                                    {/* Action Buttons */}
                                    <div className="flex gap-2 sm:gap-3">
                                        <button className="flex-1 bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-bold py-2 sm:py-3 md:py-4 px-3 sm:px-4 md:px-6 text-sm sm:text-base rounded-xl transition-all duration-300 shadow-lg hover:shadow-2xl transform hover:-translate-y-1 active:translate-y-0">
                                            View Recipe
                                        </button>
                                        <button className="px-3 sm:px-4 md:px-5 py-2 sm:py-3 md:py-4 border-3 border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white font-bold rounded-xl transition-all duration-300 shadow-md hover:shadow-xl transform hover:scale-110 active:scale-95">
                                            <span className="text-lg sm:text-xl md:text-2xl">❤️</span>
                                        </button>
                                    </div>
                                </div>

                                {/* Bottom Accent Line */}
                                <div className="h-2 bg-gradient-to-r from-orange-400 via-red-400 to-orange-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                            </div>
                        ))}
                    </div>
                ) : (
                    // Empty State Section with Enhanced Design
                    <div className="text-center py-16 sm:py-20 md:py-24 bg-white rounded-2xl sm:rounded-3xl shadow-2xl max-w-xl sm:max-w-2xl mx-auto border-4 border-dashed border-orange-300 px-6 sm:px-8">
                        <div className="text-6xl sm:text-7xl md:text-8xl mb-4 sm:mb-6 animate-bounce">🍳</div>
                        <p className="text-gray-600 text-xl sm:text-2xl font-bold mb-2 px-4">No recipes available at the moment</p>
                        <p className="text-gray-400 text-base sm:text-lg px-4">Check back later for delicious recipes!</p>
                        <button className="mt-6 sm:mt-8 bg-gradient-to-r from-orange-500 to-red-500 text-white font-bold py-2 sm:py-3 px-6 sm:px-8 text-sm sm:text-base rounded-full hover:shadow-xl transform hover:scale-105 transition-all duration-300">
                            Add Your First Recipe
                        </button>
                    </div>
                )}
            </main>

            {/* Footer Section with Enhanced Design */}
            <footer className="bg-gradient-to-r from-orange-600 to-red-600 mt-12 sm:mt-16 lg:mt-20 shadow-2xl">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 py-6 sm:py-8 max-w-screen-2xl">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-4 sm:gap-6">
                        <div className="text-white text-center md:text-left">
                            <p className="text-base sm:text-lg font-semibold">Total Recipes</p>
                            <p className="text-3xl sm:text-4xl font-bold mt-1">{recipes.length}</p>
                        </div>
                        <div className="text-white text-center">
                            <p className="text-xs sm:text-sm opacity-90">Made with ❤️ for food lovers</p>
                            <p className="text-xs opacity-75 mt-1">© 2024 Recipe Collection</p>
                        </div>
                        <div className="flex gap-2 sm:gap-3">
                            <button className="bg-white/20 hover:bg-white/30 text-white p-2 sm:p-3 rounded-full transition-all duration-300 transform hover:scale-110 text-sm sm:text-base">
                                🔍
                            </button>
                            <button className="bg-white/20 hover:bg-white/30 text-white p-2 sm:p-3 rounded-full transition-all duration-300 transform hover:scale-110 text-sm sm:text-base">
                                ➕
                            </button>
                            <button className="bg-white/20 hover:bg-white/30 text-white p-2 sm:p-3 rounded-full transition-all duration-300 transform hover:scale-110 text-sm sm:text-base">
                                ⚙️
                            </button>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}
