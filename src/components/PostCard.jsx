import React from 'react';

import '../styles/BlogPage.css';

const PostCard = ({ post }) =>
{
    return(
        <div>
            {post.title}
            {post.excerpt}
        </div>
    );
}

export default PostCard;