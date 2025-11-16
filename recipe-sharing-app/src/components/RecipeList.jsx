import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import useRecipeStore from './recipeStore';

const RecipeList = () => {
    const filteredRecipes = useRecipeStore((state) => state.filteredRecipes);
    const recipes = useRecipeStore((state) => state.recipes);
    const searchTerm = useRecipeStore((state) => state.searchTerm);
    const filterRecipes = useRecipeStore((state) => state.filterRecipes);

    useEffect(() => {
        filterRecipes();
    }, [recipes, filterRecipes]);

    const displayRecipes = searchTerm ? filteredRecipes : recipes;

    return (
        <div>
            <h2>Recipe List ({displayRecipes.length} recipes)</h2>

            {displayRecipes.length === 0 ? (
                <p style={{ textAlign: 'center', color: '#666', padding: '20px' }}>
                    {searchTerm ? `No recipes found for "${searchTerm}"` : 'No recipes available'}
                </p>
            ) : (
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
                    gap: '20px',
                    marginTop: '20px'
                }}>
                    {displayRecipes.map((recipe) => (
                        <div
                            key={recipe.id}
                            style={{
                                border: '1px solid #ddd',
                                borderRadius: '8px',
                                padding: '20px',
                                backgroundColor: '#fff',
                                boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
                            }}
                        >
                            <Link to={`/recipe/${recipe.id}`} style={{ textDecoration: 'none' }}>
                                <h3 style={{ marginTop: 0, color: '#333' }}>{recipe.title}</h3>
                            </Link>
                            <p style={{ color: '#666', lineHeight: '1.5' }}>{recipe.description}</p>
                            {recipe.prepTime && (
                                <p style={{
                                    fontSize: '14px',
                                    color: '#27ae60',
                                    fontWeight: 'bold',
                                    marginTop: '10px'
                                }}>
                                    ⏱️ Prep time: {recipe.prepTime} minutes
                                </p>
                            )}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default RecipeList;