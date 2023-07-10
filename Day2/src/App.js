import First from './First.jsx';
import Login from './Login.jsx';
import AdminLogin from './AdminLogin.jsx';
import TeamLogin from './TeamLogin.jsx';
import Home from './Home.jsx';

import {BrowserRouter,Routes,Route} from "react-router-dom";

function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <Routes>
        <Route path='' element ={<First/>}></Route>
        <Route path='First' element ={<First/>}></Route>
        <Route path='Login' element ={<Login/>}></Route>
        <Route path='AdminLogin' element ={<AdminLogin/>}></Route>
        <Route path='TeamLogin' element ={<TeamLogin/>}></Route>
        <Route path='Home' element ={<Home/>}></Route>

    </Routes> 
    </BrowserRouter>
    </div>
  );
}

export default App;
