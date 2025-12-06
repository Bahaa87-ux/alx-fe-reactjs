import React, { useState } from 'react';
import useRecipeStore from './recipeStore';

const AddRecipeForm = () => {
    const addRecipe = useRecipeStore((state) => state.addRecipe);
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [prepTime, setPrepTime] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        if (title && description) {
            const newRecipe = {
                id: Date.now(),
                title,
                description,
                prepTime: parseInt(prepTime) || 0
            };

            addRecipe(newRecipe);

            // Reset form
            setTitle('');
            setDescription('');
            setPrepTime('');

            alert('Recipe added successfully!');
        }
    };

    return (
        <div style={{
            backgroundColor: 'white',
            padding: '30px',
            borderRadius: '10px',
            boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
            marginBottom: '30px'
        }}>
            <h2>Add New Recipe</h2>
            <form onSubmit={handleSubmit}>
                <div style={{ marginBottom: '15px' }}>
                    <input
                        type="text"
                        placeholder="Recipe Title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        style={{
                            width: '100%',
                            padding: '10px',
                            fontSize: '16px',
                            border: '1px solid #ddd',
                            borderRadius: '5px',
                            boxSizing: 'border-box'
                        }}
                        required
                    />
                </div>

                <div style={{ marginBottom: '15px' }}>
          <textarea
              placeholder="Recipe Description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              style={{
                  width: '100%',
                  padding: '10px',
                  fontSize: '16px',
                  border: '1px solid #ddd',
                  borderRadius: '5px',
                  minHeight: '100px',
                  boxSizing: 'border-box'
              }}
              required
          />
                </div>

                <div style={{ marginBottom: '15px' }}>
                    <input
                        type="number"
                        placeholder="Preparation Time (minutes)"
                        value={prepTime}
                        onChange={(e) => setPrepTime(e.target.value)}
                        style={{
                            width: '100%',
                            padding: '10px',
                            fontSize: '16px',
                            border: '1px solid #ddd',
                            borderRadius: '5px',
                            boxSizing: 'border-box'
                        }}
                    />
                </div>

                <button
                    type="submit"
                    style={{
                        backgroundColor: '#3498db',
                        color: 'white',
                        padding: '12px 30px',
                        fontSize: '16px',
                        border: 'none',
                        borderRadius: '5px',
                        cursor: 'pointer',
                        fontWeight: 'bold'
                    }}
                >
                    Add Recipe
                </button>
            </form>
        </div>
    );
};

export default AddRecipeForm;