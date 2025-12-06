import React from 'react';
import { Link } from 'react-router-dom';
import useRecipeStore from './recipeStore';

const FavoritesList = () => {
    const recipes = useRecipeStore((state) => state.recipes);
    const favorites = useRecipeStore((state) => state.favorites);
    const removeFavorite = useRecipeStore((state) => state.removeFavorite);

    const favoriteRecipes = favorites.map((id) =>
        recipes.find((recipe) => recipe.id === id)
    ).filter(Boolean);

    return (
        <div>
            <h2 style={{ color: '#333', marginBottom: '20px' }}>
                ❤️ My Favorites ({favoriteRecipes.length})
            </h2>

            {favoriteRecipes.length === 0 ? (
                <div style={{
                    textAlign: 'center',
                    padding: '60px 20px',
                    backgroundColor: '#f9f9f9',
                    borderRadius: '10px'
                }}>
                    <p style={{ fontSize: '18px', color: '#999', marginBottom: '10px' }}>
                        No favorite recipes yet
                    </p>
                    <p style={{ fontSize: '14px', color: '#bbb' }}>
                        Start adding recipes to your favorites!
                    </p>
                    <Link
                        to="/"
                        style={{
                            display: 'inline-block',
                            marginTop: '20px',
                            padding: '10px 20px',
                            backgroundColor: '#3498db',
                            color: 'white',
                            textDecoration: 'none',
                            borderRadius: '5px'
                        }}
                    >
                        Browse Recipes
                    </Link>
                </div>
            ) : (
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
                    gap: '20px'
                }}>
                    {favoriteRecipes.map((recipe) => (
                        <div
                            key={recipe.id}
                            style={{
                                border: '2px solid #e74c3c',
                                borderRadius: '10px',
                                padding: '20px',
                                backgroundColor: '#fff',
                                boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
                                position: 'relative'
                            }}
                        >
                            {/* زر حذف من المفضلة */}
                            <button
                                onClick={() => removeFavorite(recipe.id)}
                                style={{
                                    position: 'absolute',
                                    top: '10px',
                                    right: '10px',
                                    background: 'none',
                                    border: 'none',
                                    fontSize: '24px',
                                    cursor: 'pointer',
                                    color: '#e74c3c'
                                }}
                                title="Remove from favorites"
                            >
                                ❤️
                            </button>

                            <Link
                                to={`/recipe/${recipe.id}`}
                                style={{ textDecoration: 'none' }}
                            >
                                <h3 style={{ marginTop: 0, color: '#333', marginRight: '40px' }}>
                                    {recipe.title}
                                </h3>
                            </Link>

                            <p style={{ color: '#666', lineHeight: '1.5', marginBottom: '10px' }}>
                                {recipe.description}
                            </p>

                            {recipe.prepTime && (
                                <p style={{
                                    fontSize: '14px',
                                    color: '#27ae60',
                                    fontWeight: 'bold',
                                    marginTop: '10px'
                                }}>
                                    ⏱️ {recipe.prepTime} minutes
                                </p>
                            )}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default FavoritesList;