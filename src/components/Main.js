//LINKS
import{ Routes, Route } from 'react-router-dom';

//PAGES
import Websites from '../pages/Websites';
import Home from '../pages/Home';
import Blog from '../pages/Blog';
import EssentialP from '../pages/EssentialP';
import Contacts from '../pages/Contacts';
import Plus from '../pages/Plus';
import BlogModule from '../pages/BlogModule';

function Main({user}) {
    
return(
    
<Routes>
     <Route path='/' element={<Home/>}/>
     <Route path='/contact-us' element={<Contacts/>}/>
     <Route path='/Websites' element={<Websites/>}/>
     <Route path='/blogs' element={<Blog/>}/>
     <Route path='/corprate' element={<EssentialP/>}/>
     <Route path='/plus' element={<Plus/>}/>
     <Route path='/modules' element={<BlogModule/>}/>
</Routes>

    )
};

export default Main;