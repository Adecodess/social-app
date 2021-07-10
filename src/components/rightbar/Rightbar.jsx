import "./rightbar.css";
import { Users } from "../../dummyData";
import Online from "../online/Online";

export default function Rightbar({ profile }) {
  const HomeRightbar = () => {
    return (
      <>
        <div className="birthdayContainer">
          <img src="asset/gift.png" alt="gift" className="birthdayImg" />
          <span className="birthdayText">
            {" "}
            <b>Jane Doe</b> and <b>3 other friends</b> have birthday today
          </span>
        </div>
        <img src="asset/ad.jpg" alt="advert" className="rightbarAd" />
        <h4 className="rightbarTitle">Online Friends</h4>
        <ul className="rightbarFriendList">
          {Users.map((u) => {
            return <Online key={u.id} user={u} />;
          })}
        </ul>
      </>
    );
  };
  const ProfileRightbar = () => {
    return (
      <>
        <h4 className="rightbarTitle">User information</h4>
        <main className="rightbarInfo">
          <article className="rightbarInfoItem">
            <span className="rightbarInfoKey">City:</span>
            <span className="rightbarInfoValue">Lagos</span>
          </article>
          <article className="rightbarInfoItem">
            <span className="rightbarInfoKey">From:</span>
            <span className="rightbarInfoValue">Ogun</span>
          </article>
          <article className="rightbarInfoItem">
            <span className="rightbarInfoKey">Relationship:</span>
            <span className="rightbarInfoValue">Single</span>
          </article>
        </main>
        <h4 className="rightbarTitle">User Friends</h4>
        <main className="rightbarFollowings">
          <article className="rightbarFollowing">
            <img
              src="asset/person/person3-unsplash.jpg"
              alt="following image"
              className="rightbarfollowingImg"
            />
            <span className="rightbarFollowingName">John Doe</span>
          </article>
          <article className="rightbarFollowing">
            <img
              src="asset/person/person4-unsplash.jpg"
              alt="following image"
              className="rightbarfollowingImg"
            />
            <span className="rightbarFollowingName">John Doe</span>
          </article>
          <article className="rightbarFollowing">
            <img
              src="asset/person/person5-unsplash.jpg"
              alt="following image"
              className="rightbarfollowingImg"
            />
            <span className="rightbarFollowingName">John Doe</span>
          </article>
          <article className="rightbarFollowing">
            <img
              src="asset/person/person6-unsplash.jpg"
              alt="following image"
              className="rightbarfollowingImg"
            />
            <span className="rightbarFollowingName">John Doe</span>
          </article>
          <article className="rightbarFollowing">
            <img
              src="asset/person/person7-unsplash.jpg"
              alt="following image"
              className="rightbarfollowingImg"
            />
            <span className="rightbarFollowingName">John Doe</span>
          </article>
          <article className="rightbarFollowing">
            <img
              src="asset/person/person8-unsplash.jpg"
              alt="following image"
              className="rightbarfollowingImg"
            />
            <span className="rightbarFollowingName">John Doe</span>
          </article>
        </main>
      </>
    );
  };
  return (
    <main className="rightbar">
      <article className="rightbarWrapper">
        {profile ? <ProfileRightbar /> : <HomeRightbar />}
      </article>
    </main>
  );
}
