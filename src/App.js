import { useState } from 'react';
import './App.css';

function App() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [nickname, setNickname] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(username, password);
    alert("submitted");
  }

  const handleForm = (e) => {
    setNickname(e.target.value)
    console.log("handleForm : ", [e.target.name], e.target.value);
  }

  return (
    <div className="App">

      <form onSubmit={onSubmit}>
        <input placeholder='Username'
          name='username'
          value={username}
          onChange={(e) => {
            setUsername(e.target.value)
          }} /><br />


        <input placeholder='Password'
          name='username'
          value={password}
          onChange={(e) => {
            setPassword(e.target.value)
          }}
        /><br />

        <input placeholder='Nickname'
          name='nickname'
          value={nickname}
          onChange={handleForm}
        /><br />

        <button>Login</button>
      </form>

    </div >
  );

}
export default App;
