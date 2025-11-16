import React, { useEffect } from 'react';
import SearchBar from './components/SearchBar';
import RecipeList from './components/RecipeList';
import useRecipeStore from './components/recipeStore';

function App() {
    const setRecipes = useRecipeStore((state) => state.setRecipes);

    useEffect(() => {
        const sampleRecipes = [
            {
                id: 1,
                title: 'Spaghetti Carbonara',
                description: 'Classic Italian pasta dish with eggs, cheese, and bacon',
                prepTime: 30
            },
            {
                id: 2,
                title: 'Chicken Curry',
                description: 'Spicy and flavorful Indian-style chicken curry',
                prepTime: 45
            },
            {
                id: 3,
                title: 'Caesar Salad',
                description: 'Fresh romaine lettuce with parmesan and croutons',
                prepTime: 15
            },
            {
                id: 4,
                title: 'Chocolate Cake',
                description: 'Rich and moist chocolate layer cake with frosting',
                prepTime: 60
            },
            {
                id: 5,
                title: 'Beef Tacos',
                description: 'Mexican-style tacos with seasoned beef and fresh toppings',
                prepTime: 25
            },
            {
                id: 6,
                title: 'Vegetable Stir Fry',
                description: 'Quick and healthy Asian-inspired vegetable dish',
                prepTime: 20
            },
            {
                id: 7,
                title: 'Margherita Pizza',
                description: 'Classic Italian pizza with tomato, mozzarella, and basil',
                prepTime: 40
            },
            {
                id: 8,
                title: 'Greek Salad',
                description: 'Fresh Mediterranean salad with feta cheese and olives',
                prepTime: 10
            }
        ];

        setRecipes(sampleRecipes);
    }, [setRecipes]);

    return (
        <div style={{
            minHeight: '100vh',
            backgroundColor: '#f5f5f5',
            fontFamily: 'Arial, sans-serif'
        }}>
            <header style={{
                backgroundColor: '#3498db',
                color: 'white',
                padding: '30px 20px',
                textAlign: 'center',
                boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
            }}>
                <h1 style={{ margin: '0 0 10px 0', fontSize: '36px' }}>
                    🍳 Recipe Sharing Application
                </h1>
                <p style={{ margin: 0, fontSize: '16px', opacity: 0.9 }}>
                    Discover and share amazing recipes
                </p>
            </header>

            <main style={{
                maxWidth: '1200px',
                margin: '0 auto',
                padding: '40px 20px'
            }}>
                <div style={{
                    backgroundColor: 'white',
                    padding: '20px',
                    borderRadius: '10px',
                    boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                    marginBottom: '30px'
                }}>
                    <SearchBar />
                </div>

                <div style={{
                    backgroundColor: 'white',
                    padding: '30px',
                    borderRadius: '10px',
                    boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
                }}>
                    <RecipeList />
                </div>
            </main>
        </div>
    );
}

export default App;