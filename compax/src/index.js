import React from "react";
import ReactDOM from "react-dom";
import App from './App'; 


 const root = ReactDOM.createRoot( document.getElementById('root'));
function ref(){
    root.render(<App/>)
}

ReactDOM.render(<App />, document.getElementById('root'));      
