//LINKS
import{ Routes, Route } from 'react-router-dom';

//PAGES
import Home from '../pages/Home';
import Blog from '../pages/Blog';
import KodyBlog from '../pages/KodyBlog';

function Main({user}) {
    
return(
    
<Routes>
     <Route path='/' element={<Home/>}/>
     <Route path='/blog' element={<Blog/>}/>
     <Route path='/kodyblog' element={<KodyBlog/>}/>
</Routes>

    )
};

export default Main;