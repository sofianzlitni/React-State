import './App.css';
import React,{useState} from 'react';
import pic from './pic.png'
import CountUp from 'react-countup';


function App() {

  const [show,setShow]=useState(false)
  
  return (
  
  
  <div className='App'>
    
    <button onClick={()=>setShow(!show)}>click</button>
    
  {show?<h1>fullstack js</h1>:null}
    
  {show?<h1>
    <CountUp start={1} end={1000} duration={1000} delay={0}/>
    </h1>:null}

  {show?<img src={pic} alt="pic" />:null}

    </div>
  );
}

export default App;
