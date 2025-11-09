
const UserProfile = (props) => {
  return (
    <div style={{ 
      border: '1px solid gray', 
      borderRadius: '10px',
      padding: '20px', 
      margin: '15px auto',
      maxWidth: '600px',
      backgroundColor: '#f9f9f9',
      boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
      transition: 'transform 0.2s'
    }}>
      <h2 style={{ 
        color: 'blue',
        fontSize: '1.8rem',
        marginTop: 0,
        borderBottom: '2px solid #3498db',
        paddingBottom: '10px'
      }}>
        {props.name}
      </h2>
      <p style={{ 
        fontSize: '1.1rem',
        color: '#555',
        margin: '10px 0'
      }}>
        Age: <span style={{ 
          fontWeight: 'bold',
          color: '#e74c3c',
          fontSize: '1.2rem'
        }}>
          {props.age}
        </span>
      </p>
      <p style={{ 
        fontSize: '1rem',
        color: '#666',
        lineHeight: '1.6',
        fontStyle: 'italic'
      }}>
        Bio: {props.bio}
      </p>
    </div>
  );
};

export default UserProfile;