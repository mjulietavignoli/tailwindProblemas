import './App.css'
import { Collapse, initTWE } from 'tw-elements';
import { Acordeon } from './acordeon';
function App() {
  useEffect(() => {
    initTWE({ Input, Ripple,Collapse, Dropdown });
  }, []);
  return (
    <>
      <Acordeon />
    </>
  )
}

export default App
