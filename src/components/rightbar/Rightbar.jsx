import "./rightbar.css"

export default function Rightbar() {
    return (
        <main className="rightbar">
           <article className="rightbarWrapper">
               <div className="birthdayContainer">
                   <img src="asset/gift.png" alt="gift" className="birthdayImg" />
                   <span className="birthdayText"> <b>Jane Doe</b> and <b>3  other friends</b> have birthday today</span>
               </div>
               <img src="asset/ad.jpg" alt="advert" className="rightbarAd" />
               <h4 className="rightbarTitle">Online Friends</h4>
               <ul className="rightbarFriendList">
                   <li className="rightbarFriend">
                       <div className="rightbarProfileImgContainer">
                           <img src="/asset/person/person4-unsplash.jpg" alt="rightbarprofile" className="rightbarProfileImg" />
                           <span className="rightbarOnline"></span>
                       </div>
                       <span className=" ">John Doe</span>
                   </li>
                   <li className="rightbarFriend">
                       <div className="rightbarProfileImgContainer">
                           <img src="/asset/person/person4-unsplash.jpg" alt="rightbarprofile" className="rightbarProfileImg" />
                           <span className="rightbarOnline"></span>
                       </div>
                       <span className=" ">John Doe</span>
                   </li>
                   <li className="rightbarFriend">
                       <div className="rightbarProfileImgContainer">
                           <img src="/asset/person/person4-unsplash.jpg" alt="rightbarprofile" className="rightbarProfileImg" />
                           <span className="rightbarOnline"></span>
                       </div>
                       <span className=" ">John Doe</span>
                   </li>
                   <li className="rightbarFriend">
                       <div className="rightbarProfileImgContainer">
                           <img src="/asset/person/person4-unsplash.jpg" alt="rightbarprofile" className="rightbarProfileImg" />
                           <span className="rightbarOnline"></span>
                       </div>
                       <span className=" ">John Doe</span>
                   </li>
                   <li className="rightbarFriend">
                       <div className="rightbarProfileImgContainer">
                           <img src="/asset/person/person4-unsplash.jpg" alt="rightbarprofile" className="rightbarProfileImg" />
                           <span className="rightbarOnline"></span>
                       </div>
                       <span className=" ">John Doe</span>
                   </li>
               </ul>
           </article>
        </main>
    )
}
