//SASS
import './index.scss';

import { auth } from './Firebase';
import { useState, useEffect } from 'react';

//COMPONENTS
import Main from './components/Main';
import Nav from './components/Nav';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';

function App() {
  const [ user, setUser ] = useState(null);

  useEffect(() =>{
    auth.onAuthStateChanged((userObjOrNull) => setUser(userObjOrNull))
  }, []);
  return (
    <div className="App">
      <Nav />
      <Sidebar user={user} />
      <Main user={user} />
      <Footer />
    </div>
  );
}

export default App;
