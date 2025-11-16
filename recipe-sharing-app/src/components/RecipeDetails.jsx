import React from 'react';
import { useParams, Link } from 'react-router-dom';
import useRecipeStore from './recipeStore';

const RecipeDetails = () => {
    const { id } = useParams();
    const recipes = useRecipeStore((state) => state.recipes);

    const recipe = recipes.find((r) => r.id === parseInt(id));

    if (!recipe) {
        return (
            <div style={{ textAlign: 'center', padding: '40px' }}>
                <h2>Recipe Not Found</h2>
                <Link to="/" style={{ color: '#3498db', textDecoration: 'none' }}>
                    ← Back to Recipes
                </Link>
            </div>
        );
    }

    return (
        <div style={{
            backgroundColor: 'white',
            padding: '40px',
            borderRadius: '10px',
            boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
            maxWidth: '800px',
            margin: '0 auto'
        }}>
            <Link to="/" style={{
                color: '#3498db',
                textDecoration: 'none',
                fontSize: '16px',
                display: 'inline-block',
                marginBottom: '20px'
            }}>
                ← Back to Recipes
            </Link>

            <h1 style={{ color: '#333', marginBottom: '20px' }}>{recipe.title}</h1>

            <div style={{ marginBottom: '20px' }}>
                {recipe.prepTime && (
                    <span style={{
                        backgroundColor: '#27ae60',
                        color: 'white',
                        padding: '8px 15px',
                        borderRadius: '20px',
                        fontSize: '14px',
                        fontWeight: 'bold'
                    }}>
            ⏱️ {recipe.prepTime} minutes
          </span>
                )}
            </div>

            <div style={{
                fontSize: '18px',
                lineHeight: '1.8',
                color: '#555',
                marginTop: '30px'
            }}>
                <h3>Description:</h3>
                <p>{recipe.description}</p>
            </div>
        </div>
    );
};

export default RecipeDetails;