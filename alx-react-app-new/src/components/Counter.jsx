import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div style={{
      textAlign: 'center',
      padding: '40px',
      backgroundColor: '#f0f4f8',
      borderRadius: '15px',
      maxWidth: '500px',
      margin: '30px auto',
      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
    }}>
      <h2 style={{
        color: '#2c3e50',
        fontSize: '2rem',
        marginBottom: '20px'
      }}>
        Counter App
      </h2>
      
      <p style={{
        fontSize: '3rem',
        fontWeight: 'bold',
        color: '#3498db',
        margin: '20px 0',
        padding: '20px',
        backgroundColor: 'white',
        borderRadius: '10px',
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)'
      }}>
        Current Count: {count}
      </p>

      <div style={{
        display: 'flex',
        gap: '10px',
        justifyContent: 'center',
        flexWrap: 'wrap'
      }}>
        <button 
          onClick={() => setCount(count + 1)}
          style={{
            padding: '15px 30px',
            fontSize: '1.1rem',
            fontWeight: 'bold',
            color: 'white',
            backgroundColor: '#27ae60',
            border: 'none',
            borderRadius: '8px',
            cursor: 'pointer',
            transition: 'all 0.3s',
            boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)'
          }}
          onMouseOver={(e) => e.target.style.backgroundColor = '#229954'}
          onMouseOut={(e) => e.target.style.backgroundColor = '#27ae60'}
        >
          Increment
        </button>

        <button 
          onClick={() => setCount(count - 1)}
          style={{
            padding: '15px 30px',
            fontSize: '1.1rem',
            fontWeight: 'bold',
            color: 'white',
            backgroundColor: '#e74c3c',
            border: 'none',
            borderRadius: '8px',
            cursor: 'pointer',
            transition: 'all 0.3s',
            boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)'
          }}
          onMouseOver={(e) => e.target.style.backgroundColor = '#c0392b'}
          onMouseOut={(e) => e.target.style.backgroundColor = '#e74c3c'}
        >
          Decrement
        </button>

        <button 
          onClick={() => setCount(0)}
          style={{
            padding: '15px 30px',
            fontSize: '1.1rem',
            fontWeight: 'bold',
            color: 'white',
            backgroundColor: '#95a5a6',
            border: 'none',
            borderRadius: '8px',
            cursor: 'pointer',
            transition: 'all 0.3s',
            boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)'
          }}
          onMouseOver={(e) => e.target.style.backgroundColor = '#7f8c8d'}
          onMouseOut={(e) => e.target.style.backgroundColor = '#95a5a6'}
        >
          Reset
        </button>
      </div>
    </div>
  );
}

export default Counter;