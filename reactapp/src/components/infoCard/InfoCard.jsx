import React, { useEffect, useState } from 'react'
import './InfoCard.css'
import { UilPen } from '@iconscout/react-unicons'
import ProfileModel from '../profileModel/ProfileModel'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import * as UserApi from '../../api/userRequest'
import { logOut } from '../../actions/AuthAction'

const InfoCard = () => {

  const [modelOpen, setModelOpen] = useState(false)
  const dispatch = useDispatch();
  const {username} = useParams();
  console.log(username);
  const profileUserId = username;
  const [profileUser, setProfileUser] = useState({});

  const user = useSelector((state) => state.authReducer.authData);

  useEffect (() => {
    const fetchProfileUser = async () => {
      try{
        if(profileUserId && user && profileUserId === user.username){
          setProfileUser(user);
        }
        else{
          const profileUser = await UserApi.getUser(profileUserId);
          setProfileUser(profileUser);
        }
      }
      catch(error){
        const errorMessage = error.response?.data?.message || 'An error occurred.';
      console.error(errorMessage);
      }
    }
    fetchProfileUser();
    }, [profileUserId, user]);
    console.log(profileUser)

    const handleLogout = () => {
      dispatch(logOut())
    }

  return (
    <div className='InfoCard'>
      <div className="infoHead">
          <h4>Profile Info</h4>
          {user.username === profileUserId ? (
          <div>
            <UilPen width='2rem' hight='1.2rem' onClick={() => setModelOpen(true)}/>
            <ProfileModel modelOpen={modelOpen} setModelOpen={setModelOpen} data={user} />
          </div>
          ) : ("")}
      </div>
      <div className="Info">
        <span><b>Username</b> </span>
        <span>@{profileUser.username}</span>
      </div>
      <div className="Info">
        <span><b>Email</b> </span>
        <span> {profileUser.email}</span>
      </div>
      <div className="Info">
        <span><b>Date of Birth</b> </span>
        <span>{profileUser.dateOfBirth}</span> 
      </div>
      <button className='button logout-button' onClick={handleLogout}>Logout</button>
    </div>
  )
}

export default InfoCard
