import Header from '../components/Header';
import Create from '../components/Create';
import Inspire from '../components/Inspire';
import Books from '../components/Books';
import Locard from '../components/Locard';
import Secure from '../components/Secure';
import Booking from '../components/Booking';
import Schedule from '../components/Schedule';
import Ecommerce from '../components/Ecommerce';

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
      <Locard />
      <Books />
    </div>
    )
};

export default Home;