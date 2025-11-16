import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import useRecipeStore from './recipeStore';

const RecipeList = () => {
    const filteredRecipes = useRecipeStore((state) => state.filteredRecipes);
    const recipes = useRecipeStore((state) => state.recipes);
    const searchTerm = useRecipeStore((state) => state.searchTerm);
    const filterRecipes = useRecipeStore((state) => state.filterRecipes);

    const favorites = useRecipeStore((state) => state.favorites);
    const addFavorite = useRecipeStore((state) => state.addFavorite);
    const removeFavorite = useRecipeStore((state) => state.removeFavorite);

    useEffect(() => {
        filterRecipes();
    }, [recipes, filterRecipes]);

    const displayRecipes = searchTerm ? filteredRecipes : recipes;

    const isFavorite = (recipeId) => favorites.includes(recipeId);

    const toggleFavorite = (recipeId) => {
        if (isFavorite(recipeId)) {
            removeFavorite(recipeId);
        } else {
            addFavorite(recipeId);
        }
    };

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
                                boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
                                position: 'relative'
                            }}
                        >
                            {/* ✅ Step 3: زر المفضلة */}
                            <button
                                onClick={() => toggleFavorite(recipe.id)}
                                style={{
                                    position: 'absolute',
                                    top: '15px',
                                    right: '15px',
                                    background: 'none',
                                    border: 'none',
                                    fontSize: '28px',
                                    cursor: 'pointer',
                                    transition: 'transform 0.2s',
                                    color: isFavorite(recipe.id) ? '#e74c3c' : '#ddd'
                                }}
                                onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.2)'}
                                onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
                                title={isFavorite(recipe.id) ? 'Remove from favorites' : 'Add to favorites'}
                            >
                                {isFavorite(recipe.id) ? '❤️' : '🤍'}
                            </button>

                            <Link to={`/recipe/${recipe.id}`} style={{ textDecoration: 'none' }}>
                                <h3 style={{ marginTop: 0, color: '#333', marginRight: '45px' }}>
                                    {recipe.title}
                                </h3>
                            </Link>

                            <p style={{ color: '#666', lineHeight: '1.5' }}>
                                {recipe.description}
                            </p>

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