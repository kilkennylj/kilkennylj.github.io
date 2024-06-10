import React, { useEffect, useState } from 'react';

import '../styles/BlogPage.css';
import { PostCard } from '../components/';
import { fetchPosts } from '../graphcms';

// All of the blog stuff is unfinished. Just wanted to add the files so I can easily remember the thought process.
// https://www.youtube.com/watch?v=HYv55DhgTuA helps but it does use NextJS and tailwindcss.
// Focus on getting it to work correctly, then make it look nice.
function Blog()
{
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => 
    {
        const getPosts = async () => 
        {
            try 
            {
                const data = await fetchPosts();
                setPosts(data);
                setLoading(false);
            } 
            catch (error) 
            {
                console.error('Error fetching posts:', error);
                setLoading(false);
            }
        };
    
        getPosts();
    }, []);
    
    // TODO: Change this to something nicer. Also do I need blog div?
    if (loading)
    {
        return <div>Loading...</div>;
    }

    return(
        <div className="blog">
            { posts.map((post) => (<PostCard post={post.node} key={post.node.id} />)) }
        </div>
    );
};

export default Blog;
