import React from "react";
import  useEffect from "react";
 import './App.css';


function App (){

return(
  <div className = "App">
    <h1 className = "animated-heading">Compax</h1>
  </div>
);

function edit () {
  const containerStyle = {
    backgroundColor: 'black',
    width: '100%',
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'top',
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

}



    
  /*function App (props){
     const currDate = new Date();
     return(
      <div>
        <h1>New App</h1>
        <h2>The time now is{currDate.toLocaleTimeString()}. </h2>
      </div>
    )

  }*/



  
   
    
  
  
  
  
    


  
    

export default App;