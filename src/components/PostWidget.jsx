import React, { useState, useEffect } from 'react';

import '../styles/BlogPage.css';
import Moment from 'react-moment';
import { Link } from 'react-router-dom';
import { getRecentPosts } from '../graphcms';

function PostWidget ()
{
    const [recentPosts, setRecentPosts] = useState([]);

    useEffect(() =>
    {
        getRecentPosts()
            .then((result) => setRecentPosts(result))
    }, []);
    return(
        <div className="widgetContainer">
            <h3>Recent Posts</h3>
            {recentPosts.map((post) =>
            (
                <div key={post.slug} className="widgetItem">
                    <Moment date={post.publishedAt} format="MM/DD/YYYY"/>
                    <Link to={`/post/${post.slug}`} key={post.slug} className="widgetItemLink">{post.title}</Link>
                </div>
            ))}
        </div>
    );
}

export default PostWidget;