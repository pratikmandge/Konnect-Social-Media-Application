import React from 'react';
// import Cover from '../../img/cover.jpg';
// import Profile from '../../img/profileImg.jpg';
import defaultProfile from '../../img/defaultPicture.avif';
import defaultCover from '../../img/defaultCover.avif';
import './ProfileCard.css';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const ProfileCard = ({location}) => {

    const serverPublic  = process.env.REACT_APP_API_URL;
    const user = useSelector((state) => state.authReducer.authData);
    const posts = useSelector((state) => state.postReducer.posts)

  return (
    <div className='ProfileCard'>
        <div className="ProfileImage">
            <img src={user.coverPhotoPath ? serverPublic+"/api/users/"+user.username+"/cover-photo" : defaultCover} alt="" />
            <img src={user.profilePhotoPath ? serverPublic+"/api/users/"+user.username+"/profile-photo" : defaultProfile} alt="" />
        </div>

        <div className="ProfileName">
            <span>{user.username}</span>
            <span>{user.bio}</span>
        </div>

        <div className="followStatus">
            <hr />
            <div>
                <div className="follow">
                    <span>6,687</span>
                    <span>Following</span>
                </div>
                <div className="vl"></div>
                <div className="follow">
                    <span>1</span>
                    <span>Followers</span>
                </div>

                {location === 'profilePage' && (
                <>
                    <div className="vl"></div>
                    <div className="follow">
                        <span>{posts.filter((post) => post.user.id === user.id).length}</span>
                        <span>Posts</span>
                    </div>
                </> 
                )}
            </div>
            <hr />
        </div>
        <span>
            {location === 'profilePage' ? '' : 
            <span>
                <Link style={{textDecoration : "none", color: 'inherit'}} to={`/profile/${user.username}`}>
                    My Profile
                </Link>
            </span>}  
        </span>
    </div>
  )
}

export default ProfileCard
