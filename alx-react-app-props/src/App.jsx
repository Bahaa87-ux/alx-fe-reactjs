import ProfilePage from './components/ProfilePage';
import UserContext from './UserContext';

function App() {
  const userData = { name: "Jane Doe", email: "jane.doe@example.com" };

  return (
    <UserContext.Provider value={userData}>
      <div style={{
        minHeight: '100vh',
        backgroundColor: '#f5f6fa',
        padding: '20px'
      }}>
        <h1 style={{
          textAlign: 'center',
          color: '#2c3e50',
          marginBottom: '30px'
        }}>
          Context API Demo
        </h1>
        <ProfilePage />
      </div>
    </UserContext.Provider>
  );
}

export default App;