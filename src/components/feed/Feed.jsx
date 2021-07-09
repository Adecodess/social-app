import Share from "../share/Share"
import Post from "../post/Post"
import "./feed.css"
import { Posts } from "../../dummyData"

export default function Feed() {
    return (
        <div className='feed'>
           <div className="feedWrapper">
               <Share/>
               {Posts.map((item)=>{
                   return <Post key={item.id} post={item}/>  
               })}
               </div> 
        </div>
    )
}
