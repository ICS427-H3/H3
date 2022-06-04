import React  from 'react';
import './App.css';
import Home from './pages/Home';
import Shop from './pages/Shop';
import CreateSticker from './pages/CreateSticker';
import Navigation from './components/Navigation';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

function App() {
  return (
    <>
      <Router>
        <Navigation/>
        <Routes>
          <Route exact path='/' element={<Home />}/>
          <Route exact path='/Shop' element={<Shop />}/>
          <Route exact path='/CreateSticker' element={<CreateSticker />}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
