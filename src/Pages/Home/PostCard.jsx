import React from 'react';

const PostCard = (props) => {
    const {_id, id, name, noOfMutualFriend, postPrivacy, post, postImage, noOfLikes, comments
    } = props.postItem;
    return (
        <div>
            <h2>{name}</h2>
        </div>
    );
};

export default PostCard;