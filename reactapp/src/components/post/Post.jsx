import React from 'react'
import './Post.css'
import Comment from '../../img/comment.png'
import Share from '../../img/share.png'
import Heart from '../../img/like.png'
import NotLike from '../../img/notlike.png'
import { useSelector } from 'react-redux'
import { likePost, unlikePost } from '../../api/PostRequest'

const Post = ({data}) => {
  const POST_API = process.env.REACT_APP_API_URL+"/api/posts/"
  const imageUrl = POST_API+data.id+"/photo";

  const user = useSelector((state) => state.authReducer.authData)
  // const isLikedByUser = data.likedByUsers.some((likedUser) => likedUser.username === user.username);
  const [liked, setLiked] = React.useState(data.likedByUsers.some((likedUser) => likedUser.username === user.username));
  const [likes, setLikes] = React.useState(data.likedByUsers.length);

  const handleLike = () => {
    if (liked) {
      unlikePost(data.id, user.username);
      setLikes((prev) => prev - 1);
    } else {
      likePost(data.id, user.username);
      setLikes((prev) => prev + 1);
    }
    setLiked((prev) => !prev);
  }

  return (
    <div className='Post'>
      <img src= {imageUrl} alt="" />

      <div className="postReact">
        <img src={liked?Heart:NotLike} alt="" style={{cursor:'pointer'}} onClick={handleLike}/>
        <img src={Comment} alt="" />
        <img src={Share} alt="" />
      </div>
      <span style={{color:'var(--gray)', fontSize: '12px'}}>{likes} likes</span>

      <div className="detail">
        <span><b>{data.user.username}</b> {data.title}</span>
        <span><hr /> {data.content}</span>
      </div>
    </div>
  );
};

export default Post;