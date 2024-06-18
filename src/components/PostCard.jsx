import React from 'react';

import '../styles/BlogPage.css';
import Moment from 'react-moment';
import { Link } from 'react-router-dom';

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
                <Moment date={post.publishedAt} format="MM/DD/YYYY"/>
            </div>
            <div className="postButton">
                <Link to={`/post/${post.slug}`}>
                    <span className="buttonText">Continue Reading</span>
                </Link>
            </div>
        </div>
    );
}

export default PostCard;