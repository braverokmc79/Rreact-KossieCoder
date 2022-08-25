import Navbar from './components/Navbar';
import { Routes, Route } from 'react-router-dom';
import routes from './routes';

function App() {

  return (
    <div className="App">
      <div className='container'>
        <Navbar />
        <Routes>

          {routes.map((route) => {
            return <Route key={route.path} path={route.path} element={route.element}></Route>
          })}

        </Routes>
      </div>

    </div >
  );
}
export default App;
