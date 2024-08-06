
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import Home from './home';
import NavBar from './Components/Navbar'
import Footer from './Components/Footer';
import AnimeDetail from './AnimeDetail';
import News from './Page/News';
import Glosario from './Page/Glosary';



function App() {
  return (
    <Router>
        <NavBar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Noticias" element={<News/>} />
        <Route path="/Glosario" element={<Glosario/>} />
        <Route path="/AnimeDetail" element={  <AnimeDetail/>} />
      
      </Routes>
   
    <Footer/>
    </Router>
 
  );
}

export default App;
