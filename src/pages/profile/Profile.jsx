import Topbar from "../../components/topbar/Topbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Feed from "../../components/feed/Feed";
import Rightbar from "../../components/rightbar/Rightbar";

import "./profile.css";

export default function Profile() {
  return (
    <>
      <Topbar />
      <main className="profile">
        <Sidebar />
        <article className="profileRight">
          <div className="profileRightTop">
            <div className="profileCover">
              <img
                className="profileCoverImg"
                src="asset/post/post3-unsplash.jpg"
                alt="co verphoto"
              />
              <img
                className="profileUserImg"
                src="asset/person/person3-unsplash.jpg"
                alt="profilepicture"
              />
            </div>
            <div className="profileInfo">
              <h4 className="profileInfoName">Adeola Ademosu</h4>
              <span className="profileInfoDesc">Hello my friends</span>
            </div>
          </div>
          <div className="profileRightBottom">
            <Feed />
            <Rightbar profile />
          </div>
        </article>
      </main>
    </>
  );
}
