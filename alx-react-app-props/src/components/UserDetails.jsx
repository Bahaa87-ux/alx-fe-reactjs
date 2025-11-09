import { useContext } from 'react';
import UserContext from '../UserContext';

function UserDetails() {
  const userData = useContext(UserContext);

  return (
    <div style={{
      border: '2px solid #3498db',
      borderRadius: '10px',
      padding: '20px',
      margin: '20px auto',
      maxWidth: '500px',
      backgroundColor: '#ecf0f1',
      boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
    }}>
      <h3 style={{
        color: '#2c3e50',
        marginTop: 0,
        borderBottom: '2px solid #3498db',
        paddingBottom: '10px'
      }}>
        User Details
      </h3>
      <p style={{ fontSize: '1.2rem', color: '#34495e' }}>
        <strong>Name:</strong> {userData.name}
      </p>
      <p style={{ fontSize: '1.2rem', color: '#34495e' }}>
        <strong>Email:</strong> {userData.email}
      </p>
    </div>
  );
}

export default UserDetails;