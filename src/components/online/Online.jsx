import "./online.css";

export default function online({ user }) {
  return (
    <li className="rightbarFriend">
      <div className="rightbarProfileImgContainer">
        <img
          src={user.profilePicture}
          alt="rightbarprofile"
          className="rightbarProfileImg"
        />
        <span className="rightbarOnline"></span>
      </div>
      <span className=" ">{user.username}</span>
    </li>
  );
}
