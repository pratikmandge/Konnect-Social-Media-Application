import React from 'react'
import './FollowersCard.css'
import { Followers } from '../../Data/FollowersData'

const followersCard = () => {
  return (
      <div className="FollowerCard">
        <h3>Who is Following...</h3>
        {Followers.map((follower, id) => {
          return (
            <div className="follower">
              <div>
                <img src={follower.img} className='followerImg' alt="" />
                <div className="name">
                  <span>{follower.name}</span>
                  <span>@{follower.username}</span>
                </div>
              </div>
              <button className='button fc-button'>Follow</button>
            </div>
          )
        })}
      </div>
  )
}

export default followersCard
