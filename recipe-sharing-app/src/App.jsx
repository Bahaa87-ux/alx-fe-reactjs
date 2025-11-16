import React, { useEffect } from 'react';
import SearchBar from './components/SearchBar';
import RecipeList from './components/RecipeList';
import useRecipeStore from './components/recipeStore';

function App() {
    const setRecipes = useRecipeStore((state) => state.setRecipes);

    // إضافة بيانات تجريبية عند تحميل التطبيق
    useEffect(() => {
        const sampleRecipes = [
            {
                id: 1,
                title: 'كشري مصري',
                description: 'وجبة مصرية تقليدية من الأرز والمكرونة والعدس',
                prepTime: 45
            },
            {
                id: 2,
                title: 'محشي ورق عنب',
                description: 'ورق عنب محشي بالأرز واللحم المفروم',
                prepTime: 90
            },
            {
                id: 3,
                title: 'ملوخية بالدجاج',
                description: 'طبق ملوخية خضراء مع الدجاج المشوي',
                prepTime: 60
            },
            {
                id: 4,
                title: 'فتة الباذنجان',
                description: 'باذنجان مقلي مع الزبادي والثوم والخبز المحمص',
                prepTime: 40
            },
            {
                id: 5,
                title: 'بامية باللحم',
                description: 'بامية مطبوخة مع لحم البقر في صلصة الطماطم',
                prepTime: 75
            }
        ];

        setRecipes(sampleRecipes);
    }, [setRecipes]);

    return (
        <div style={styles.app}>
            <header style={styles.header}>
                <h1 style={styles.mainTitle}>🍳 تطبيق مشاركة الوصفات</h1>
                <p style={styles.subtitle}>اكتشف وشارك أفضل الوصفات</p>
            </header>

            <main style={styles.main}>
                <SearchBar />
                <RecipeList />
            </main>
        </div>
    );
}

const styles = {
    app: {
        minHeight: '100vh',
        backgroundColor: '#f5f5f5',
        fontFamily: 'Arial, sans-serif'
    },
    header: {
        backgroundColor: '#3498db',
        color: 'white',
        padding: '30px 20px',
        textAlign: 'center',
        boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
    },
    mainTitle: {
        margin: '0 0 10px 0',
        fontSize: '32px'
    },
    subtitle: {
        margin: 0,
        fontSize: '16px',
        opacity: 0.9
    },
    main: {
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '30px 20px'
    }
};

export default App;