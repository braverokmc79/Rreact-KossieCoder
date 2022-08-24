import { useState } from 'react';
import './App.css';

function App() {
  const [text, setText] = useState("hello");

  const onSubmit = () => {
    alert("submitted");
  }
  const onKeyUp = (event) => {
    // console.log(event.target.value);
    if (event.keyCode === 13) {
      //console.log("전송");
      onSubmit();
    }
  }


  const updateText = () => {
    setText("Coder");
    console.log("1.text", text);
  }

  console.log("2.text",text);

  return (
    <div className="App">
      <input onKeyUp={onKeyUp} />
      <button onClick={onSubmit}>Submit</button>

      <br /><br />
      <span>{text}</span>
      <button onClick={updateText}>Update</button>
    </div >
  );

}
export default App;
