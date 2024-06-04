import React from 'react';

import '../styles/BlogPage.css';
import { PostCard, PostWidget } from '../components/';

const posts = [
    { title: "Title One", excerpt: "Excerpt 1" },
    { title: "Title Two", excerpt: "Excerpt 2" }
]

// All of the blog stuff is unfinished. Just wanted to add the files so I can easily remember the thought process.
// https://www.youtube.com/watch?v=HYv55DhgTuA helps but it does use NextJS and tailwindcss.
// Focus on getting it to work correctly, then make it look nice.
function Blog()
{
    return(
        <div className="blog">
            { posts.map((post) => <PostCard post={post} key={post.title} />) }
        </div>
    );
};

export default Blog;
