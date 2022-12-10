import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/home';
import NavBar from './components/navbar';
import All from './components/all'

function App() {

  let Links = [
    {name:"Home", url:'/', key:1},
    {name:"Popular", url:'/all', key:2},
    {name:"Latest", url:'/all', key:3},
    {name:"About", url:'', key:4},
  ];

  return (
    <Router>
      <NavBar Links={Links}/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/all' element={<All/>}/>
      </Routes>
    </Router>
  );
}

export default App;
