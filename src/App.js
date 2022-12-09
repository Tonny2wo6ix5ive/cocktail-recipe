import { useState } from 'react';
import style from '../src/index'
import All from './components/all';
import Home from './components/home';
import NavBar from './components/navbar';

function App() {

  const [Links, setLinks] = useState([
    {name:"Home", url:'#', key:1},
    {name:"Popular", url:'#', key:2},
    {name:"Latest", url:'#', key:3},
    {name:"About", url:'#', key:4},
  ]);

  return (
    <div className="App">
      <NavBar Links={Links}/>
      <Home/>
      <div>
        <All/>
      </div>
    </div>
    
  );
}

export default App;
