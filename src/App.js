//SASS
import './index.scss';
import{Routes, Route} from 'react-router-dom';

//PAGES
import Home from './pages/Home';
import Essential from './pages/Essential';
import Website from './components/Website';
import Blogs from './pages/Blogs';
import Allcont from './pages/Allcont';
import Websites from './pages/Websites';
import AddPost from './pages/AddPost';
import Feed from './pages/Feed';
import Plus from './pages/Plus';
import Show from './pages/Show';

//COMPONENTS
import Contact from './components/Contact';
import About from './components/About';
import Nav from './components/Nav';
import Sidebar from './components/Sidebar';
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
      <Sidebar />
      <Experience />
      <Essential />
      <Content />
      <Contact />
      <Allcont />
      <Footer />
      
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
        <Route path='/AddPost' element={<AddPost />}/>
        <Route path='/Feed' element={<Feed />}/>
        <Route path='/Show' element={<Show />}/>
        <Route path='/Plus' element={<Plus />}/>
     </Routes>
    </div>
  );
}

export default App;
