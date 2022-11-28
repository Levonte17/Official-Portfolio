import Dashboard from '../components/Dashboard';
import Boards from '../pages/Boards';

function Feed(props){

    return(
      <div className='home'>
            <Dashboard />
            <Boards />

      </div>
    )
};

export default Feed;