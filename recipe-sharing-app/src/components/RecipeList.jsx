import React, { useEffect } from 'react';
import useRecipeStore from './recipeStore';

const RecipeList = () => {
    const recipes = useRecipeStore((state) => state.recipes);
    const filteredRecipes = useRecipeStore((state) => state.filteredRecipes);
    const searchTerm = useRecipeStore((state) => state.searchTerm);
    const filterRecipes = useRecipeStore((state) => state.filterRecipes);

    useEffect(() => {
        filterRecipes();
    }, [recipes, filterRecipes]);

    const displayRecipes = searchTerm ? filteredRecipes : recipes;

    return (
        <div>
            <h2>الوصفات ({displayRecipes.length})</h2>
            {displayRecipes.length === 0 ? (
                <p>لا توجد وصفات مطابقة للبحث</p>
            ) : (
                <ul>
                    {displayRecipes.map((recipe) => (
                        <li key={recipe.id} style={{ marginBottom: '15px' }}>
                            <h3>{recipe.title}</h3>
                            <p>{recipe.description}</p>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default RecipeList;