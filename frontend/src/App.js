import './App.css';
import { Home } from './components/Home.js';
import { Courses } from './components/Courses.js';
import { Contact } from './components/Contact.js';
import { Header } from './templates/Header.js';
import { Footer } from './templates/Footer.js';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
    <Router>
      <Header/>
        <Routes>
          <Route path='/' element={ <Home/> }></Route>
          <Route path='/Courses' element={ <Courses/> }></Route>
          <Route path='/Contact' element={ <Contact/> }></Route>
        </Routes>
      <Footer/>
    </Router>
    </>
  );
}

export default App;
