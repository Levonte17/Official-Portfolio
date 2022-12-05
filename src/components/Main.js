//LINKS
import{ Routes, Route } from 'react-router-dom';

//PAGES
import Websites from '../pages/Websites';
import FeedS from '../pages/FeedS';
import Blog from '../pages/Blog';
import EssentialP from '../pages/EssentialP';
import Contacts from '../pages/Contacts';
import Plus from '../pages/Plus';


function Main({user}) {
return(
    
<Routes>
     <Route path='/' element={<FeedS/>}/>
     <Route path='/contact-us' element={<Contacts/>}/>
     <Route path='/Websites' element={<Websites/>}/>
     <Route path='/blogs' element={<Blog/>}/>
     <Route path='/corprate' element={<EssentialP/>}/>
     <Route path='/plus' element={<Plus/>}/>
</Routes>

    )
};

export default Main;