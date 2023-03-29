//LINKS
import{ Routes, Route } from 'react-router-dom';

//PAGES
import Home from '../pages/Home';
import Blog from '../pages/Blog';
import KodyBlog from '../pages/KodyBlog';
import About from '../pages/About';
import Staff from '../pages/Staff';

function Main({user}) {
    
return(
    
<Routes>
     <Route path='/' element={<Home/>}/>
     <Route path='/blog' element={<Blog/>}/>
     <Route path='/kodyblog' element={<KodyBlog/>}/>
     <Route path='/staff' element={<Staff/>}/>
     <Route path='/about' element={<About/>}/>
</Routes>

    )
};

export default Main;