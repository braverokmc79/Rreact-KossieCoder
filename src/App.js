import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);
  const [kossie, setKossie] = useState(0);

  useEffect(() => {
    console.log("count :", count);
  }, [count]);


  useEffect(() => {
    console.log("first rendering");
  }, []);

  const increment = () => {
    setCount(count + 1);
  }

  return (
    <div className="App">
      <h1>hong gil dong</h1>
      <button onClick={increment}>Click</button>
      <button onClick={() => {
        console.log("kossie", kossie);
        setKossie(kossie + 1);
      }}>Click1</button>
    </div >
  );

}
export default App;
