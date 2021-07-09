import "./post.css";
import { MoreVert } from "@material-ui/icons";
import { Users } from "../../dummyData";
import { useState } from "react";

export default function Post({ post }) {
  const [like, setLike] = useState(post.like);
  const [isLiked, setIsLiked] = useState(false);

  const likeHandler = () => {
    setLike(isLiked ? like - 1 : like + 1);
    setIsLiked(!isLiked);
  };

  return (
    <main className="post">
      <div className="postWrapper">
        <article className="postTop">
          <div className="postTopLeft">
            <img
              src={
                Users.filter((person) => person.id === post.userId)[0]
                  .profilePicture
              }
              alt="profileimg"
              className="postProfileImg"
            />
            <span className="postUsername">
              {Users.filter((person) => person.id === post.userId)[0].username}
            </span>
            <span className="postDate">{post.date}</span>
          </div>
          <div className="postTopRight">
            <MoreVert />
          </div>
        </article>
        <article className="PostCenter">
          <span className="postText">{post?.desc}</span>
          <img src={post.photo} alt="post" className="postImage" />
        </article>
        <article className="postBottom">
          <div className="postBottomLeft">
            <img
              className="likeIcon"
              src="asset/like.png"
              onClick={likeHandler}
              alt="like"
            />
            <img
              className="likeIcon"
              src="asset/heart.png"
              onClick={likeHandler}
              alt="love"
            />
            <span className="postLikeCounter">{like} people like it</span>
          </div>
          <div className="postBottomRight">
            <span className="postCommentText">{post.comment} comments</span>
          </div>
        </article>
      </div>
    </main>
  );
}
