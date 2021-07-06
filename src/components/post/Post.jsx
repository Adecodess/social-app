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
              <article className="PostCenter"></article>
              <article className="PostBottom"></article>
          </div>
        </main>
    )
}
