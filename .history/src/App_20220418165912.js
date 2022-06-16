import { useState } from 'react';
import './App.css';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
// import About from './components/About';
 
function App() {
  const [alert,setAlert] = useState("null");
  
  const showAlert = (message,type) =>{
    setAlert({
      msg:message,
      type: type
    })
  }
  return (
    <>
    <Navbar title="TextUtils" aboutText="About TextUtils" />
    <Alert alert={alert}/>
    
    {/* <Navbar/> */}
    {/* <Navbar title="TextUtils" /> */}
    <div className="container my-3">
    <TextForm heading="Enter the text to analyze below"/>
    {/* <About/> */}
    </div>
    </> 
  );
}

export default App;