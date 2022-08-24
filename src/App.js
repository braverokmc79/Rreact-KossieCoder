import './App.css';

function App() {
  const onSubmit = () => {
    alert("submitted");
  }
  const onKeyUp = (event) => {
    console.log(event.target.value);
    if (event.keyCode === 13) {
      console.log("전송");
      onSubmit();
    }
  }


  return (
    <div className="App">
      <input onKeyUp={onKeyUp} />
      <button onClick={onSubmit}>Submit</button>
    </div >
  );
}
export default App;
