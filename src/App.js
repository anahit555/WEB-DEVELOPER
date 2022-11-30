import {Routes, Route } from 'react-router-dom';
import './App.scss';
import Layout from './components/Layout';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';

function App() {
  return (
    <>
      <Routes>
        <Route exact path='/' element={<Layout/>}>
          <Route exact index element={<Home/>}/>
          <Route exact path='about' element={<About/>}/>
          <Route exact path='contact' element={<Contact/>}/>
        </Route>
      </Routes> 
    </>
  );
}

export default App;
