import style from '../src/index'
import All from './components/all';
import Home from './components/home';
import NavBar from './components/navbar';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Home/>
      <div>
        <All/>
      </div>
    </div>
    
  );
}

export default App;
