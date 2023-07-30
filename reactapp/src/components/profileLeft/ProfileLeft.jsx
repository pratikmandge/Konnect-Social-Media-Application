import React from 'react'
import LogoSearch from '../logoSearch/LogoSearch'
import InfoCard from '../infoCard/InfoCard'
import FollowersCard from '../followersCard/FollowersCard'
import '../profileSide/ProfileSide.css'

const ProfileLeft = () => {
    return (
    <div className="ProfileSide">
        <LogoSearch />
        <InfoCard />
        <FollowersCard />
    </div>
  )
}

export default ProfileLeft
