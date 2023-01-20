//LINKS
import{ Routes, Route } from 'react-router-dom';

//PAGES
import Websites from '../pages/Websites';
import Home from '../pages/Home';
import Pod from '../pages/Pod';
import Business from '../pages/Business';
import Contacts from '../pages/Contacts';
import Learn from '../pages/Learn';
import Plus from '../pages/Plus';

function Main({user}) {
    
return(
    
<Routes>
     <Route path='/' element={<Home/>}/>
     <Route path='/contact-us' element={<Contacts/>}/>
     <Route path='/Websites' element={<Websites/>}/>
     <Route path='/spotlight' element={<Pod/>}/>
     <Route path='/learn' element={<Learn/>}/>
     <Route path='/business' element={<Business/>}/>
     <Route path='/plus' element={<Plus/>}/>
</Routes>

    )
};

export default Main;