import './post.css';
import { MoreVert } from '@material-ui/icons';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { format } from 'timeago.js';

export default function Post({ post }) {
  const [like, setLike] = useState(post.likes.length);
  const [isLiked, setIsLiked] = useState(false);
  const [user, SetUser] = useState({});
  // const [items, setItems] =  useState(post);
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;

  useEffect(() => {
    const fetchUser = async () => {
      const res = await axios.get(`users/${post.userId}`);
      SetUser(res.data);
    };
    fetchUser();
  }, [post.userId]);

  const likeHandler = () => {
    setLike(isLiked ? like - 1 : like + 1);
    setIsLiked(!isLiked);
  };

  // useEffect(() => {
  //   const event = window.addEventListener('scroll', () => {
  //     if (
  //       window.innerHeight + window.scrollY >=
  //       document.body.scrollHeight - 5
  //     ) {
  //       setItems((oldItems) => {
  //         return oldItems + 1;
  //       });
  //     }
  //   });
  //   return () => window.removeEventListener('scroll', event);
  // }, []);

  return (
    <main className='post'>
      <div className='postWrapper'>
        <article className='postTop'>
          <div className='postTopLeft'>
            <img
              src={user.profilePicture || PF + 'person/noAvatar.png'}
              alt='profile'
              className='postProfileImg'
            />
            <span className='postUsername'>{user.username}</span>
            <span className='postDate'>{format(post.createdAt)}</span>
          </div>
          <div className='postTopRight'>
            <MoreVert />
          </div>
        </article>
        <article className='postCenter'>
          <span className='postText'>{post?.desc}</span>
          <img src={PF + post.img} alt='post' className='postImage' />
        </article>
        <article className='postBottom'>
          <div className='postBottomLeft'>
            <img
              className='likeIcon'
              src={PF + 'like.png'}
              onClick={likeHandler}
              alt='like'
            />
            <img
              className='likeIcon'
              src={PF + 'heart.png'}
              onClick={likeHandler}
              alt='love'
            />
            <span className='postLikeCounter'>{like} people like it</span>
          </div>
          <div className='postBottomRight'>
            <span className='postCommentText'>{post.comment} comments</span>
          </div>
        </article>
      </div>
    </main>
  );
}
