import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import SearchBar from './components/SearchBar';
import RecipeList from './components/RecipeList';
import AddRecipeForm from './components/AddRecipeForm';
import RecipeDetails from './components/RecipeDetails';
import FavoritesList from './components/FavoritesList';
import RecommendationsList from './components/RecommendationsList';
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
        <BrowserRouter>
            <div style={{
                minHeight: '100vh',
                backgroundColor: '#f5f5f5',
                fontFamily: 'Arial, sans-serif'
            }}>
                <header style={{
                    backgroundColor: '#3498db',
                    color: 'white',
                    padding: '20px',
                    boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
                }}>
                    <div style={{
                        maxWidth: '1200px',
                        margin: '0 auto',
                        textAlign: 'center'
                    }}>
                        <Link to="/" style={{ textDecoration: 'none', color: 'white' }}>
                            <h1 style={{ margin: '0 0 15px 0', fontSize: '36px' }}>
                                🍳 Recipe Sharing Application
                            </h1>
                        </Link>

                        <nav style={{
                            display: 'flex',
                            justifyContent: 'center',
                            gap: '15px',
                            flexWrap: 'wrap'
                        }}>
                            <Link
                                to="/"
                                style={{
                                    color: 'white',
                                    textDecoration: 'none',
                                    padding: '10px 20px',
                                    backgroundColor: 'rgba(255,255,255,0.2)',
                                    borderRadius: '20px',
                                    fontSize: '16px',
                                    transition: 'background-color 0.3s'
                                }}
                            >
                                🏠 Home
                            </Link>

                            <Link
                                to="/favorites"
                                style={{
                                    color: 'white',
                                    textDecoration: 'none',
                                    padding: '10px 20px',
                                    backgroundColor: 'rgba(255,255,255,0.2)',
                                    borderRadius: '20px',
                                    fontSize: '16px',
                                    transition: 'background-color 0.3s'
                                }}
                            >
                                ❤️ Favorites
                            </Link>

                            <Link
                                to="/recommendations"
                                style={{
                                    color: 'white',
                                    textDecoration: 'none',
                                    padding: '10px 20px',
                                    backgroundColor: 'rgba(255,255,255,0.2)',
                                    borderRadius: '20px',
                                    fontSize: '16px',
                                    transition: 'background-color 0.3s'
                                }}
                            >
                                💡 Recommendations
                            </Link>
                        </nav>
                    </div>
                </header>

                <main style={{
                    maxWidth: '1200px',
                    margin: '0 auto',
                    padding: '40px 20px'
                }}>
                    <Routes>
                        <Route
                            path="/"
                            element={
                                <>
                                    <AddRecipeForm />

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
                                </>
                            }
                        />

                        <Route path="/recipe/:id" element={<RecipeDetails />} />

                        <Route
                            path="/favorites"
                            element={
                                <div style={{
                                    backgroundColor: 'white',
                                    padding: '30px',
                                    borderRadius: '10px',
                                    boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
                                }}>
                                    <FavoritesList />
                                </div>
                            }
                        />

                        <Route
                            path="/recommendations"
                            element={
                                <div style={{
                                    backgroundColor: 'white',
                                    padding: '30px',
                                    borderRadius: '10px',
                                    boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
                                }}>
                                    <RecommendationsList />
                                </div>
                            }
                        />
                    </Routes>
                </main>
            </div>
        </BrowserRouter>
    );
}

export default App;