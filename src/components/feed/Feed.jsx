import { useState, useEffect } from 'react';
import Share from '../share/Share';
import Post from '../post/Post';
import './feed.css';
import axios from 'axios';

export default function Feed() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get('posts/timeline/60d8778eb6a0822b941412ca');
      setPosts(res.data);
    };
    fetchPosts();
  }, []);
  return (
    <div className='feed'>
      <div className='feedWrapper'>
        <Share />
        {posts.map((item) => {
          return <Post key={item._id} post={item} />;
        })}
      </div>
    </div>
  );
}
