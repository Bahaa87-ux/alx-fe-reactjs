import React from 'react';
import useRecipeStore from './recipeStore';

const SearchBar = () => {
    const setSearchTerm = useRecipeStore((state) => state.setSearchTerm);
    const filterRecipes = useRecipeStore((state) => state.filterRecipes);

    const handleSearchChange = (e) => {
        const term = e.target.value;
        setSearchTerm(term);
        filterRecipes();
    };

    return (
        <div style={styles.container}>
            <input
                type="text"
                placeholder="ابحث عن وصفة بالاسم..."
                onChange={handleSearchChange}
                style={styles.input}
            />
        </div>
    );
};

const styles = {
    container: {
        marginBottom: '20px',
        width: '100%'
    },
    input: {
        width: '100%',
        padding: '12px 15px',
        fontSize: '16px',
        border: '2px solid #e0e0e0',
        borderRadius: '8px',
        outline: 'none',
        transition: 'border-color 0.3s',
        boxSizing: 'border-box'
    }
};

export default SearchBar;