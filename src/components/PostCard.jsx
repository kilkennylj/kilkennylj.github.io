import React from 'react';

import '../styles/BlogPage.css';

const PostCard = ({ post }) =>
{
    const postContent = post.content.raw.children.map((child, index) =>
    {
        if (child.type === 'paragraph')
            return <p key={index}>{child.children[0].text}</p>;

        else
        {
            console.log("Error. Haven't allowed anything besides paragraphs from graphcms.")
            return null;
        }
    });

    return(
        <div className="postCard">
            <div className="headers">
                <h1>{post.title}</h1>
                <h2>{post.excerpt}</h2>
            </div>
            <div className="blogContent">
                {postContent}
            </div>
        </div>
    );
}

export default PostCard;