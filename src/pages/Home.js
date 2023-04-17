import Header from '../components/Header';
import Links from '../components/Links';
import Reviews from '../components/Reviews';
import Why from '../components/Why';
//import { Navigate } from 'react-router-dom';

function Home(props) {
//HIDING DATA
//function PrivatePage({ children, user }) {
//    return user ? children : <Navigate to='/' /> 
//}
  return (
    <div className='feed-container'>
      <Header />
      <Links />
      <Why />
      <Reviews />
    </div>
    )
};

export default Home;