import Dashboard from '../components/Dashboard';
import Header from '../components/Header';
import Security from '../components/Security';

function Home(props) {
//HIDING DATA
//function PrivatePage({ children, user }) {
//    return user ? children : <Navigate to='/' /> 
//}
  return (
    <div className='feed-container'>
            <Header />
            <Dashboard />
            <Security />
      </div>
    )
};

export default Home;