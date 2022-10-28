import React from 'react';
import Post from './Post';

const PostContainer = (props) => {
    // debugger;
    return (
        <Post 
            {...props}
        />
    );
};

export default PostContainer;