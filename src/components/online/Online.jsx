import './online.css';

export default function online({ user }) {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  return (
    <li className='rightbarFriend'>
      <div className='rightbarProfileImgContainer'>
        <img
          className='rightbarProfileImg'
          src={PF + user.profilePicture}
          alt=''
        />
        <span className='rightbarOnline'></span>
      </div>
      <span className=' '>{user.username}</span>
    </li>
  );
}
