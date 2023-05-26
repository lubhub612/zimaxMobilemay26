import React from 'react';
import { UserAvatarContainer } from './styles';
import FaRegUserCircle from '@meronex/icons/fa/FaRegUserCircle';
import FaUserCircle from '@meronex/icons/fa/FaUserCircle';

const UserAvatar = (props) => {

  const { mr, size, color, isNaked } = props

  return (
    <UserAvatarContainer mr={mr} size={size} color={color}>
      {isNaked ? (
        <FaRegUserCircle />
      ) : (
        <FaUserCircle />
      )}
    </UserAvatarContainer>
  )
}

export default UserAvatar;
