// src/components/Footer.jsx

function Footer() {
  return (
    <footer style={{ 
      backgroundColor: '#2c3e50',
      color: 'white',
      textAlign: 'center',
      padding: '25px 0',
      marginTop: '40px',
      boxShadow: '0 -2px 4px rgba(0,0,0,0.1)'
    }}>
      <p style={{ 
        margin: 0,
        fontSize: '1rem',
        letterSpacing: '0.5px'
      }}>
        © 2023 City Lovers
      </p>
      
      <div style={{ 
        marginTop: '15px',
        fontSize: '0.9rem',
        color: '#bdc3c7'
      }}>
        <span style={{ 
          margin: '0 10px', 
          cursor: 'pointer',
          transition: 'color 0.3s'
        }}>
          Privacy Policy
        </span>
        <span style={{ margin: '0 5px' }}>|</span>
        <span style={{ 
          margin: '0 10px', 
          cursor: 'pointer',
          transition: 'color 0.3s'
        }}>
          Terms of Service
        </span>
        <span style={{ margin: '0 5px' }}>|</span>
        <span style={{ 
          margin: '0 10px', 
          cursor: 'pointer',
          transition: 'color 0.3s'
        }}>
          Contact Us
        </span>
      </div>
    </footer>
  );
}

export default Footer;