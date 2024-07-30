import React from 'react';
import Moment from 'react-moment';

import '../styles/BlogPage.css';

const PostDetail = ({ post }) =>
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
        <div className="blogPost">
            <div className="headers">
                <h1>{post.title}</h1>
                <h2>{post.excerpt}</h2>
                <Moment date={post.date} format="MM/DD/YYYY"/>
            </div>
            <div className="content">
                {postContent}
            </div>
        </div>
    )
}

export default PostDetail;