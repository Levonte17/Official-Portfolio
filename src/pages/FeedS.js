import { useState, useEffect, useRef } from 'react';
import{ Routes, Route } from 'react-router-dom';


import Dashboard from '../components/Dashboard';
import Header from '../components/Header';

import Boards from '../pages/Boards';
import AddPost from '../pages/AddPost';
import ShowFeed from '../pages/ShowFeed';
import Feed from '../pages/Feed';
 

function FeedS({user}) {
//HIDING DATA
//function PrivatePage({ children, user }) {
//    return user ? children : <Navigate to='/' /> 
//}

  const [feed, setFeed] = useState(null);
const getDataRef = useRef(null);

const API_URL = 'http://localhost:4003/api/post';

const getData = async () => {
  try {
    const response = await fetch(API_URL);
    const data = await response.json();
    setFeed(data);
  } catch (error) {
    console.log('Error: Bad request!!');
  }
};

const createPost = async (post) => {
  try {
    await fetch(API_URL, {
      method: 'POST',
      headers: { 'Content-type': 'Application/json' },
      body: JSON.stringify(post),
    });
    getData();
  } catch (error) {
    console.log('Error: Bad request!!');
  }
};

const deletePost = async (id) => {
  try {
    await fetch(API_URL + 'delete/' + id, {
      method: 'DELETE',
    });
    getData();
  } catch (error) {
    console.log('Error: Bad request!!');
  }
};

const updateCounter = async (count, id) => {
  try {
    await fetch(API_URL + id, {
      method: 'PUT',
      headers: {
        'Content-type': 'Application/json',
      },
      body: JSON.stringify(count),
    });
  } catch (error) {
    console.log(error);
  }
};

const createComment = async (comment, id) => {
  try {
    await fetch(API_URL + id + '/comment', {
      method: 'PUT',
      headers: {
        'Content-type': 'Application/json',
      },
      body: JSON.stringify(comment),
    });
  } catch (error) {
    console.log('Error: Bad request!!');
  }
};

function createdTime(itemTime) {
  const date = new Date();
  const dateValues = {
    year: date.getUTCFullYear(),
    month: date.getUTCMonth() + 1,
    day: date.getUTCDate(),
    hour: date.getUTCHours(),
    min: date.getUTCMinutes(),
  };

  const itemValues = {
    year: itemTime.slice(0, 4),
    month: itemTime.slice(5, 7),
    day: itemTime.slice(8, 10),
    hour: itemTime.slice(11, 13),
    min: itemTime.slice(14, 16),
  };

  const units = ['year', 'month', 'day', 'hour', 'minute'];
  const timeSince = [];

  for (let key in dateValues) {
      timeSince.push(Math.abs(itemValues[key] - dateValues[key]));
    }

    for (let i = 0; i < timeSince.length; i++) {
      if (timeSince[i] > 0) {
        if (timeSince[i] === 1) {
          return `${timeSince[i]} ${units[i]} ago`;
        } else {
          return `${timeSince[i]} ${units[i]}s ago`;
        }
      }
    }
  }

  function sortPostsMostRecent(posts) {
      posts.sort((a, b) => {
        if (a.createdAt > b.createdAt) {
          return -1;
        }
        if (a.createdAt < b.createdAt) {
          return 1;
        }
        return 0;
      });
      return posts;
    }
  
    useEffect(() => {
      getDataRef.current = getData;
    }, []);
  
    useEffect(() => {
      getDataRef.current();
    }, []);

  return (
    <div className='feed-container'>
      <Routes>
        <Route
          path='/:page'
          element={
            <Feed
              feed={feed}
              createdTime={createdTime}
              sortPostsMostRecent={sortPostsMostRecent}
              updateCounter={updateCounter}
              user={user}
            />
          }
        />

<Route
      path='/addpost'
      element={<AddPost createPost={createPost} user={user} />}
    />
    <Route
      path='/post/:id'
      element={
        <ShowFeed
          feed={feed}
          deletePost={deletePost}
          createComment={createComment}
          createdTime={createdTime}
          updateCounter={updateCounter}
          user={user}
        />
      }
    />

    <Route
      path='/boards'
      element={
        <Boards
          feed={feed}
          createdTime={createdTime}
          sortPostsMostRecent={sortPostsMostRecent}
          updateCounter={updateCounter}
          user={user}
        />
      }
    />
    </Routes>      <div className='home'>
            <Header />
            <Dashboard />
      </div>
      </div>
    )
};

export default FeedS;