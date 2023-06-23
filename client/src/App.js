import './App.css';
import {BrowserRouter,Routes,Route}from'react-router-dom'
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import Register from './Pages/Register/Register';
import { AuthContext } from "./Context/AuthContext";
import { useContext } from 'react';


function App() {
  const { currentUser } = useContext(AuthContext);

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={currentUser ? <Home/> : <Login/>}/>
          <Route path='/login' element={currentUser ? <Home/> : <Login/>}/>
          <Route path='/register' element={currentUser ? <Home/> : <Register/>}/>


        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
