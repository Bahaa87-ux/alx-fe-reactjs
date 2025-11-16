import { create } from 'zustand';

const useRecipeStore = create((set) => ({
    recipes: [],

    // إضافة وصفة جديدة
    addRecipe: (newRecipe) => set((state) => ({
        recipes: [...state.recipes, newRecipe]
    })),

    // تعيين قائمة الوصفات
    setRecipes: (recipes) => set({ recipes }),

    // حذف وصفة (إضافة مفيدة)
    deleteRecipe: (id) => set((state) => ({
        recipes: state.recipes.filter((recipe) => recipe.id !== id)
    })),

    // تحديث وصفة (إضافة مفيدة)
    updateRecipe: (updatedRecipe) => set((state) => ({
        recipes: state.recipes.map((recipe) =>
            recipe.id === updatedRecipe.id ? updatedRecipe : recipe
        )
    }))
}));

export default useRecipeStore;