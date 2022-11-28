//LINKS
import{ Routes, Route } from 'react-router-dom';

//PAGES
import Feed from '../pages/Feed';
import Websites from '../pages/Websites';
import Blog from '../pages/Blog';
import EssentialP from '../pages/EssentialP';
import Contacts from '../pages/Contacts';
import Plus from '../pages/Plus';

function Main(props) {
    
    return(
        <main>

<Routes>
     <Route path='/' element={<Feed  />}/>
     <Route path='/contact-us' element={<Contacts/>}/>
     <Route path='/Websites' element={<Websites/>}/>
     <Route path='/blogs' element={<Blog/>}/>
     <Route path='/corprate' element={<EssentialP/>}/>
     <Route path='/plus' element={<Plus/>}/>
</Routes>



     </main>
    )
};

export default Main;