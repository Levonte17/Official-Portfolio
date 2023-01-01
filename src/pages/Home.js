import Header from '../components/Header';
import Create from '../components/Create';
import Inspire from '../components/Inspire';
import Locard from '../components/Locard';
import Secure from '../components/Secure';
import Booking from '../components/Booking';
import Schedule from '../components/Schedule';
import Ecommerce from '../components/Ecommerce';
import Customize from '../components/Customize';

function Home(props) {
//HIDING DATA
//function PrivatePage({ children, user }) {
//    return user ? children : <Navigate to='/' /> 
//}
  return (
    <div className='feed-container'>
      <Header />
      <Create />
        <Secure />
        <Booking />
        <Schedule />
        <Ecommerce />
      <Inspire />
      <Customize />
      <Locard />
    </div>
    )
};

export default Home;