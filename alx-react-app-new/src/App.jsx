import './App.css'
import Header from './components/Header'
import MainContent from './components/MainContent'
import Footer from './components/Footer'
import UserProfile from './components/UserProfile'
import Counter from './components/Counter'

function App() {
  return (
    <>
      <Header />
      
      {/* Counter Component */}
      <Counter />
      
      <MainContent />
      
      {/* UserProfile Components */}
      <UserProfile 
        name="Alice" 
        age="25" 
        bio="Loves hiking and photography" 
      />
      
      <UserProfile 
        name="Bob" 
        age="30" 
        bio="Software developer and coffee enthusiast" 
      />
      
      <UserProfile 
        name="Charlie" 
        age="28" 
        bio="Travel blogger and foodie" 
      />
      
      <Footer />
    </>
  )
}

export default App