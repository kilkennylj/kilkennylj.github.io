import { useState, useEffect } from 'react';

import '../styles/BlogPage.css';
import Moment from 'react-moment';
import Link from 'next/link';
import { getSimilarPosts, getRecentPosts } from '../graphcms';

function PostWidget ({ categories, slug })
{
    const [relatedPosts, setRelatedPosts] = useState([]);

    useEffect(() =>
    {
        if (slug)
        {
            getSimilarPosts(categories, slug).then((result) => {
                setRelatedPosts(result)});
        }

        else
        {
            getRecentPosts().then((result) => {
                setRelatedPosts(result)});
        }
        
    }, [slug, categories]);
    return(
        <div className="widgetContainer">
            <h3>{slug ? 'Related Posts' : 'Recent Posts'}</h3>
            {relatedPosts.map((post) =>
            (
                <div key={post.slug} className="widgetItem">
                    <Moment date={post.publishedAt} format="MM/DD/YYYY"/>
                    <Link href={`/blog/${post.slug}`} className="widgetItemLink">{post.title}</Link>
                </div>
            ))}
        </div>
    );
}

export default PostWidget;