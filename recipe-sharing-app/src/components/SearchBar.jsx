import React from 'react';
import useRecipeStore from './recipeStore';

const SearchBar = () => {
    const setSearchTerm = useRecipeStore((state) => state.setSearchTerm);
    const filterRecipes = useRecipeStore((state) => state.filterRecipes);

    const handleSearch = (e) => {
        setSearchTerm(e.target.value);
        filterRecipes();
    };

    return (
        <input
            type="text"
            placeholder="Search recipes..."
            onChange={handleSearch}
            style={{
                width: '100%',
                padding: '12px 15px',
                fontSize: '16px',
                border: '2px solid #e0e0e0',
                borderRadius: '8px',
                outline: 'none',
                marginBottom: '20px',
                boxSizing: 'border-box'
            }}
        />
    );
};

export default SearchBar;