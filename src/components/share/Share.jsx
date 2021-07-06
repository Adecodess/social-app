import  './share.css'
import { PermMedia, Label,Room,EmojiEmotions } from '@material-ui/icons'

export default function Share() {
    return (
        <main className="share">
            <div className="shareWrapper">
                <div className="shareTop">
                <img className="shareProfileImg" src="/asset/person/person1-unsplash.jpg" alt="sharepic"  />
                <input placeholder="Whats on Your Mind?" className="shareInput" />
                </div>
                <hr className="shareHr" />
                <article className="shareBottom">
                    <div className="shareOptions">
                        <div className="shareOption">
                            <PermMedia htmlColor="tomato" className="shareIcon" />
                            <span className="shareOptionText">Photo or Video</span>
                        </div>
                        <div className="shareOption">
                            <Label htmlColor="blue"  className="shareIcon" />
                            <span className="shareOptionText">Tag</span>
                        </div>
                        <div className="shareOption">
                            <Room htmlColor="green"  className="shareIcon" />
                            <span className="shareOptionText">Location</span>
                        </div>
                        <div className="shareOption">
                            <EmojiEmotions htmlColor="goldenrod"  className="shareIcon" />
                            <span className="shareOptionText">Feelings</span>
                        </div>
                    </div>
                    <button className="shareButton">Share</button>
                </article>
            </div>
        </main>
    )
}
