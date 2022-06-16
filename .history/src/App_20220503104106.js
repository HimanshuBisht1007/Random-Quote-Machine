import { useState } from 'react';
import './App.css';

 
function App() {
  const [alert,setAlert] = useState("null");
  
  const showAlert = (message,type) =>{
    setAlert({
      msg:message,
      type: type
    })
  }
  return (
    <div>
      
    </div>
   
  );
}

export default App;