import './App.css'
import { Collapse, initTWE, Input} from 'tw-elements';
import { Acordeon } from './acordeon';
import { useEffect } from "react";
function App() {
  useEffect(() => {
    initTWE({ Collapse , Input});
  }, []);
  return (
    <>
    <div className='container'>
      <Acordeon></Acordeon>
    </div>
    </>
  )
}

export default App
