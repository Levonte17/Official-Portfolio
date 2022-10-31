//SASS
import './index.scss';
import{Routes, Route} from 'react-router-dom';

//PAGES
import Home from './pages/Home';
import Essential from './pages/Essential';
import Sports from './pages/Sports';
import Website from './pages/Website';
import Blogs from './pages/Blogs';
import Allcont from './pages/Allcont';
import Websites from './pages/Websites';

//COMPONENTS
import Contact from './components/Contact';
import About from './components/About';
import Nav from './components/Nav';
import Header from './components/Header';
import Footer from './components/Footer';
import Experience from './components/Experience';
import Content from './components/Content';
import Dashboard from './components/Dashboard';


function App() {
  return (
    <div className="App">
      <Header />
      <Nav />
      <Dashboard />
      <About />
      <Experience />
      <Essential />
      <Content />
      <Contact />
      <Allcont />
      <Footer />
      <Websites />
      
     <Routes>
        <Route path='/Allcont' element={<Allcont/>}/>
        <Route path='/Websites' element={<Websites/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/essential' element={<Essential/>}/>
        <Route path='/Content' element={<Content/>}/>
        <Route path='/sports' element={<Sports/>}/>
        <Route path='/website' element={<Website/>}/>
        <Route path='/blogs' element={<Blogs/>}/>
        <Route path='/Contact' element={<Contact />}/>
     </Routes>
    </div>
  );
}

export default App;
