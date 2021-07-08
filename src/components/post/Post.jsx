import "./post.css"
import {MoreVert} from '@material-ui/icons'

export default function Post() {
    return (
        <main className="post">
          <div className="postWrapper">
              <article className="postTop">
                  <div className="postTopLeft">
                      <img src="/asset/person/person4-unsplash.jpg" alt="profileimg" className="postProfileImg" />
                      <span className="postUsername">John Doe</span>
                      <span className="postDate">5 mins ago</span>
                  </div>
                  <div className="postTopRight">
                      <MoreVert/>
                  </div>
              </article>
              <article className="PostCenter">
                  <span className="postText">Hey its my first post :)</span>
                  <img src="/asset/post/post1-unsplash.jpg" alt="post" className="postImage" />
              </article>
              <article className="postBottom">
                  <div className="postBottomLeft">
                      <img className="likeIcon" src="asset/like.png" alt="like" />
                      <img className="likeIcon" src="asset/heart.png" alt="love" />
                      <span className="postLikeCounter">32 people like it</span>
                  </div>
                  <div className="postBottomRight">
                      <span className="postCommentText">9 comments</span>
                  </div>
              </article>
          </div>
        </main>
    )
}
