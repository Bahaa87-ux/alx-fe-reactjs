import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import useRecipeStore from './recipeStore';

const RecommendationsList = () => {
    const recommendations = useRecipeStore((state) => state.recommendations);
    const generateRecommendations = useRecipeStore((state) => state.generateRecommendations);
    const favorites = useRecipeStore((state) => state.favorites);

    useEffect(() => {
        generateRecommendations();
    }, [generateRecommendations]);

    return (
        <div>
            <h2 style={{ color: '#333', marginBottom: '10px' }}>
                💡 Recommended for You
            </h2>
            <p style={{ color: '#666', fontSize: '14px', marginBottom: '20px' }}>
                Based on your favorite recipes
            </p>

            {favorites.length === 0 ? (
                <div style={{
                    textAlign: 'center',
                    padding: '60px 20px',
                    backgroundColor: '#f9f9f9',
                    borderRadius: '10px'
                }}>
                    <p style={{ fontSize: '18px', color: '#999', marginBottom: '10px' }}>
                        No recommendations yet
                    </p>
                    <p style={{ fontSize: '14px', color: '#bbb', marginBottom: '20px' }}>
                        Add some recipes to your favorites to get personalized recommendations!
                    </p>
                    <Link
                        to="/"
                        style={{
                            display: 'inline-block',
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
            ) : recommendations.length === 0 ? (
                <div style={{
                    textAlign: 'center',
                    padding: '40px 20px',
                    backgroundColor: '#f9f9f9',
                    borderRadius: '10px'
                }}>
                    <p style={{ fontSize: '16px', color: '#999' }}>
                        No recommendations available at the moment
                    </p>
                    <button
                        onClick={generateRecommendations}
                        style={{
                            marginTop: '15px',
                            padding: '10px 20px',
                            backgroundColor: '#3498db',
                            color: 'white',
                            border: 'none',
                            borderRadius: '5px',
                            cursor: 'pointer',
                            fontSize: '14px'
                        }}
                    >
                        🔄 Refresh Recommendations
                    </button>
                </div>
            ) : (
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
                    gap: '20px'
                }}>
                    {recommendations.map((recipe) => (
                        <div
                            key={recipe.id}
                            style={{
                                border: '2px solid #f39c12',
                                borderRadius: '10px',
                                padding: '20px',
                                backgroundColor: '#fffbf0',
                                boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
                                position: 'relative'
                            }}
                        >
                            {/* علامة التوصية */}
                            <span
                                style={{
                                    position: 'absolute',
                                    top: '10px',
                                    right: '10px',
                                    fontSize: '24px'
                                }}
                            >
                💡
              </span>

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

            {recommendations.length > 0 && (
                <div style={{ textAlign: 'center', marginTop: '30px' }}>
                    <button
                        onClick={generateRecommendations}
                        style={{
                            padding: '12px 30px',
                            backgroundColor: '#3498db',
                            color: 'white',
                            border: 'none',
                            borderRadius: '5px',
                            cursor: 'pointer',
                            fontSize: '16px',
                            fontWeight: 'bold'
                        }}
                    >
                        🔄 Get More Recommendations
                    </button>
                </div>
            )}
        </div>
    );
};

export default RecommendationsList;