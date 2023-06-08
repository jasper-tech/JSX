import React, { Component } from "react";
import  useEffect from "react";

function App() {
    const containerStyle = {
      backgroundColor: 'black',
      width: '100%',
      height: '100vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    };
  
    const titleStyle = {
      color: 'red',
      textAlign: 'center',
      
    };
  
    return (
      <div style={containerStyle}>
        <h1 style={titleStyle}>Compax</h1>
      </div>
    );
  }
  
    

export default App;