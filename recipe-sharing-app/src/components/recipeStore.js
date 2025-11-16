import { create } from 'zustand';
import { Link } from 'react-router-dom';

const useRecipeStore = create((set) => ({
    recipes: [],
    favorites: [],
    recommendations: [],

    searchTerm: '',
    filteredRecipes: [],

    addRecipe: (newRecipe) => set((state) => ({
        recipes: [...state.recipes, newRecipe]
    })),

    deleteRecipe: (id) => set((state) => ({
        recipes: state.recipes.filter((recipe) => recipe.id !== id)
    })),

    updateRecipe: (updatedRecipe) => set((state) => ({
        recipes: state.recipes.map((recipe) =>
            recipe.id === updatedRecipe.id ? updatedRecipe : recipe
        )
    })),

    setRecipes: (recipes) => set({ recipes }),

    addFavorite: (recipeId) => set((state) => ({
        favorites: [...state.favorites, recipeId]
    })),

    removeFavorite: (recipeId) => set((state) => ({
        favorites: state.favorites.filter((id) => id !== recipeId)
    })),

    generateRecommendations: () => set((state) => {
        const recommended = state.recipes.filter((recipe) =>
            state.favorites.includes(recipe.id) && Math.random() > 0.5
        );
        return { recommendations: recommended };
    }),

    setSearchTerm: (term) => set({ searchTerm: term }),

    filterRecipes: () => set((state) => ({
        filteredRecipes: state.recipes.filter((recipe) =>
            recipe.title.toLowerCase().includes(state.searchTerm.toLowerCase())
        )
    }))
}));

export default useRecipeStore;