import "./sidebar.css"
import {RssFeed, Chat,PlayCircleFilledOutlined,Group, Bookmark,HelpOutline,WorkOutline,Event,School} from '@material-ui/icons'

export default function Sidebar() {
    return (
        <div className="sidebar ">
            <div className="sidebarWrapper">
                <ul className="sidebarList">
                    <li className="sidebarListItem">
                        <RssFeed className="sidebarIcon " />
                        <span className="sidebarListItemText">Feed</span>
                    </li>
                    <li className="sidebarListItem">
                        <Chat className="sidebarIcon " />
                        <span className="sidebarListItemText">Chats</span>
                    </li>
                    <li className="sidebarListItem">
                        <PlayCircleFilledOutlined className="sidebarIcon " />
                        <span className="sidebarListItemText">Video</span>
                    </li>
                    <li className="sidebarListItem">
                        <Group className="sidebarIcon " />
                        <span className="sidebarListItemText">Groups</span>
                    </li>
                    <li className="sidebarListItem">
                        <Bookmark className="sidebarIcon " />
                        <span className="sidebarListItemText">Bookmarks</span>
                    </li>
                    <li className="sidebarListItem">
                        <HelpOutline className="sidebarIcon " />
                        <span className="sidebarListItemText">Questions</span>
                    </li>
                    <li className="sidebarListItem">
                        <WorkOutline className="sidebarIcon " />
                        <span className="sidebarListItemText">Jobs</span>
                    </li>
                    <li className="sidebarListItem">
                        <Event className="sidebarIcon " />
                        <span className="sidebarListItemText">Events</span>
                    </li>
                    <li className="sidebarListItem">
                        <School className="sidebarIcon " />
                        <span className="sidebarListItemText">Courses</span>
                    </li>
                    
                </ul>
                <button className="sidebarButton">Show More</button>
                <hr className="sidebarHr" />
                <ul className="sidebarFriendList">
                    <li className="sidebarFriend">
                        <img className="sidebarFriendImg" src="/asset/person/person2-unsplash.jpg" alt="pic"  />
                        <span className="sidebarFriendName">jane doe</span>
                    </li>
                    <li className="sidebarFriend">
                        <img className="sidebarFriendImg" src="/asset/person/person3-unsplash.jpg" alt="pic"  />
                        <span className="sidebarFriendName">john doe</span>
                    </li>
                    <li className="sidebarFriend">
                        <img className="sidebarFriendImg" src="/asset/person/person4-unsplash.jpg" alt="pic"  />
                        <span className="sidebarFriendName">jane doe</span>
                    </li>
                    <li className="sidebarFriend">
                        <img className="sidebarFriendImg" src="/asset/person/person5-unsplash.jpg" alt="pic"  />
                        <span className="sidebarFriendName">jane doe</span>
                    </li>
                    <li className="sidebarFriend">
                        <img className="sidebarFriendImg" src="/asset/person/person6-unsplash.jpg" alt="pic"  />
                        <span className="sidebarFriendName">jane doe</span>
                    </li>
                    <li className="sidebarFriend">
                        <img className="sidebarFriendImg" src="/asset/person/person6-unsplash.jpg" alt="pic"  />
                        <span className="sidebarFriendName">jane doe</span>
                    </li>
                    <li className="sidebarFriend">
                        <img className="sidebarFriendImg" src="/asset/person/person8-unsplash.jpg" alt="pic"  />
                        <span className="sidebarFriendName">jane doe</span>
                    </li>
                    <li className="sidebarFriend">
                        <img className="sidebarFriendImg" src="/asset/person/person9-unsplash.jpg" alt="pic"  />
                        <span className="sidebarFriendName">jane doe</span>
                    </li>
                    <li className="sidebarFriend">
                        <img className="sidebarFriendImg" src="/asset/person/person10-unsplash.jpg" alt="pic"  />
                        <span className="sidebarFriendName">jane doe</span>
                    </li>
                </ul>
            </div>
        </div>
    )
}
