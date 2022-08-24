import { useEffect, useState } from 'react';
import './App.css';
import Counter from './components/Counter';

function App() {
  const [buttonName, setButtonName] = useState("클릭");
  const clickButton = () => {
    setButtonName("click");
  }
  return (
    <div className="App">
      <h1>Hong Gil Dong</h1>
      <Counter click="클릭1" />
      <Counter click={buttonName} />
      <Counter />
      <button onClick={clickButton}>Click</button>
    </div >
  );


}
export default App;
