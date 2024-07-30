
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import Home from './home';
import NavBar from './Components/Navbar'
import Footer from './Components/Footer';



function App() {
  return (
    <Router>
        <NavBar/>
      <Routes>
        <Route path="/" element={<Home />} />
 
      
      </Routes>
    <Footer/>
    </Router>
 
  );
}

export default App;
