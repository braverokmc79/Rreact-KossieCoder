import { useEffect, useState } from 'react';
import './App.css';

function App() {

  const [condition, setCondition] = useState(false);

  const toggle = () => setCondition(!condition);

  useEffect(() => {
    console.log("condition : ", condition);
  }, [condition]);


  const renderCondition = condition ? 'True' : 'False'

  return (
    <div className="App">
      <h1>Hong Gil Dong</h1>

      <div>
        {renderCondition}
      </div>

      <button onClick={toggle} > Toggle</button>
    </div >
  );


}
export default App;
