//LINKS
import{ Routes, Route } from 'react-router-dom';

//PAGES
import Feed from '../pages/Feed';
import Home from '../pages/Home';
import Show from '../pages/Show';
import AddPost from '../pages/AddPost';
import Websites from '../pages/Websites';
import Blog from '../pages/Blog';
import EssentialP from '../pages/EssentialP';
import Reviews from '../pages/Reviews';
import Contacts from '../pages/Contacts';

//COMPONENTS
import Contact from '../components/Contact';
import About from '../components/About';
import Dashboard from '../components/Dashboard';
import Website from '../components/Website';
import Experience from '../components/Experience';

function Main(props) {
    
    return(
        <Main className='main' >
<h1> 
    This Is Main Section
</h1>
      <Dashboard />  
     <About />
     <Website/>
     <Contact />
     <Experience />

<Routes>
     <Route path='/contact-us' element={<Contacts/>}/>
     <Route path='/Websites' element={<Websites/>}/>
     <Route path='/home' element={<Home/>}/>
     <Route path='/essentials' element={<EssentialP/>}/>
     <Route path='/blogs' element={<Blog/>}/>
     <Route path='/AddPost' element={<AddPost />}/>
     <Route path='/reviews' element={<Reviews />}/>
     <Route path='/Feed' element={<Feed />}/>
     <Route path='/Show' element={<Show />}/>
</Routes>

     </Main>
    )
};

export default Main;