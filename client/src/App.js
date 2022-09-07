
import './App.css';
import {BrowserRouter,Routes,Route } from "react-router-dom";
import Navbar from './components/Navbar';
import Signin from './pages/Auth/Signin';
import Signup from './pages/Auth/Signup';

const App=()=> {
  return (
    
     <BrowserRouter>
      
      <Navbar/>

      <div id='content'>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/signin" exact element={<Signin/>} />
        <Route path="/signup" exact element={<Signup/>} />
      </Routes>
      </div>
      
    </BrowserRouter>
  );
}

function Home(){
  return <h2>Home</h2>
}

export default App;
