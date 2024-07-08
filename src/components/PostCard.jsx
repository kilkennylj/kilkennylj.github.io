import React from 'react';

import '../styles/BlogPage.css';
import Moment from 'react-moment';
import Link from 'next/link';

const PostCard = ({ post }) =>
{
    return(
        <div className="postCard">
            <div className="headers">
                <h1>{post.title}</h1>
                <h2>{post.excerpt}</h2>
                <Moment date={post.date} format="MM/DD/YYYY"/>
            </div>
            <div className="postButton">
                <Link href={`/blog/${post.slug}`}>
                    <span className="buttonText">Continue Reading</span>
                </Link>
            </div>
        </div>
    );
}

export default PostCard;