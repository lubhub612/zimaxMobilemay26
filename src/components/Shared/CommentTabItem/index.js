import React, { useState } from 'react';
import { CommentTabItemContainer, CommentDetail } from './styles';
import AiOutlineHeart from '@meronex/icons/ai/AiOutlineHeart';
import AiFillHeart from '@meronex/icons/ai/AiFillHeart';
import UserAvatar from '../UserAvatar';

const CommentTabItem = (props) => {
  const { data } = props;

  const [commentCount, setCommentCount] = useState(data.favorite);
  const [isCommentted, setIsCommentted] = useState(data.set);

  // const toggleComment = () => {
  //   setIsCommentted(prev => !prev);
  //   if(isCommentted) {
  //     setCommentCount(prev => prev - 1);
  //   }else{
  //     setCommentCount(prev => prev + 1);
  //   }
  // }

  return (
    <CommentTabItemContainer>
      <div className="user-logo">
        {data.avatar !== undefined && data.avatar !== '' ? (
          <img src={data.avatar} alt="" />
        ) : (
          <UserAvatar />
        )}
      </div>
      <CommentDetail>
        <div className="user-name">{data.user}</div>
        <div className="user-comment">{data.content}</div>
        <div className="user-review">
          <div className="review-icon" onClick={() => {}}>
            {isCommentted ? (
              <AiFillHeart color="#38C948" />
            ) : (
              <AiOutlineHeart color="#38C948" />
            )}
            <div className="review-count">{commentCount}</div>
          </div>
          <div className="review-date">{data.timespan}</div>
        </div>
      </CommentDetail>
    </CommentTabItemContainer>
  );
};

export default CommentTabItem;
