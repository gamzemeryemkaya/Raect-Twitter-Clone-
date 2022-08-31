import React,{ useState }  from 'react'
import { ImageIcon,GIFIcon,PollIcon,EmojiIcon,ScheduleIcon,} from '../icons/Icon';
import firebase from 'firebase/compat/app';
import db from "../firebase";
import 'firebase/compat/auth';
import 'firebase/compat/firestore';



const TweetBox = () => {
  const [content, setContent] = useState("");
  const sendTweet=() =>{
    if (content !== "") {
      db.collection("feed").add({
        displayName: "Gamze Meryem Kaya",
        username: "@gamzemrym",
        content,
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        image:
        "https://c.tenor.com/1kx8dbfxSfQAAAAM/cat-cats.gif",
        avatar:"https://media-exp2.licdn.com/dms/image/C5603AQHBpyfxGGVxuw/profile-displayphoto-shrink_200_200/0/1649586709881?e=1663200000&v=beta&t=R0UqXVsTOOGE0aZGdMf3VaLkbwDk7l2pSGfRPO7fspw"
      })
      setContent("");
    }
   
  }

  return (
    <div className=' flex flex-col flex-1  mt-2 px-2 ' >
        <textarea className="w-full text-xl placeholder-gray-dark outline-none overflow-hidden resize-none bg-transparent " 
        placeholder="What's happening?"
        onChange={(e) => setContent(e.target.value)}
        value={content}
        />
        <div className='flex items-center justify-between'>
        
            <div className="flex -ml-3"> 
            <div className="flex items-center justify-center w-11 h-11 rounded-full hover:bg-gray-lightest">
            <ImageIcon className="w-6 h-6 text-primary-base" />
          </div>
          <div className="flex items-center justify-center w-11 h-11 rounded-full hover:bg-gray-lightest">
            <GIFIcon className="w-6 h-6 text-primary-base" />
          </div>
          <div className="flex items-center justify-center w-11 h-11 rounded-full hover:bg-gray-lightest">
            <PollIcon className="w-6 h-6 text-primary-base" />
          </div>
          <div className="flex items-center justify-center w-11 h-11 rounded-full hover:bg-gray-lightest">
            <EmojiIcon className="w-6 h-6 text-primary-base" />
          </div>
          <div className="flex items-center justify-center w-11 h-11 rounded-full hover:bg-gray-lightest">
            <ScheduleIcon className="w-6 h-6 text-primary-base" />
          </div>
            </div>
            <button className='bg-primary-base text-white rounded-full px-4 py-2 font-medium'
            onClick={sendTweet}>
              Tweet</button>
        </div>

        
    </div>
  )
}

export default TweetBox