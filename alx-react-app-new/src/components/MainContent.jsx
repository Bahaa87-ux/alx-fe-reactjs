// src/components/MainContent.jsx

function MainContent() {
  return (
    <main style={{ 
      padding: '40px 20px',
      minHeight: '300px',
      backgroundColor: '#ecf0f1',
      textAlign: 'center'
    }}>
      <p style={{ 
        fontSize: '1.5rem',
        color: '#2c3e50',
        maxWidth: '800px',
        margin: '0 auto',
        lineHeight: '1.8',
        fontWeight: '500'
      }}>
        I love to visit New York, Paris, and Tokyo.
      </p>
      
      <div style={{
        marginTop: '30px',
        display: 'flex',
        justifyContent: 'center',
        gap: '20px',
        flexWrap: 'wrap'
      }}>
        <span style={{
          padding: '10px 20px',
          backgroundColor: '#3498db',
          color: 'white',
          borderRadius: '20px',
          fontSize: '1rem'
        }}>🗽 New York</span>
        
        <span style={{
          padding: '10px 20px',
          backgroundColor: '#e74c3c',
          color: 'white',
          borderRadius: '20px',
          fontSize: '1rem'
        }}>🗼 Paris</span>
        
        <span style={{
          padding: '10px 20px',
          backgroundColor: '#9b59b6',
          color: 'white',
          borderRadius: '20px',
          fontSize: '1rem'
        }}>🗾 Tokyo</span>
      </div>
    </main>
  );
}

export default MainContent;