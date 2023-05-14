//LINKS
import{ Routes, Route } from 'react-router-dom';

//PAGES
import Home from '../pages/Home';
import About from '../pages/About';
import Staff from '../pages/Staff';
import Portfolio from '../pages/Portfolio';

function Main({user}) {
    
return( 
<Routes>
     <Route path='/' element={<Home/>}/>
     <Route path='Portfolio' element={<Portfolio/>}/>
     <Route path='Staff' element={<Staff/>}/>
     <Route path='About' element={<About/>}/>
</Routes>

    )
};

export default Main;