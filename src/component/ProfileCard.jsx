import React from 'react'
import PropTypes from "prop-types"


const ProfileCard = ({image, username}) => {
  return (
    <div className='card'>
        <div className='gitImage'>
            <img src={image} alt={username} />
        </div>

        <div>
            <h2 className='gitImage'>{username}</h2>
        </div>

    </div>
  )
}

ProfileCard.propTypes = {
    image:PropTypes.string,
    username: PropTypes.string
}

export default ProfileCard