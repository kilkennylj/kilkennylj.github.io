// Comments require API which githubpages does not support

import React from 'react';

import '../../styles/BlogPage.css';

import { fetchPosts, fetchPostDetails } from '../../graphcms';
import { PostDetail, PostWidget, Author, Categories } from '../../components'

const PostDetails = ({ post }) =>
{
    return(
        <div className="blogContainer">
            <div className="blog">
                <PostDetail post={ post }/>
                <Author author={ post.author }/>
            </div>
            <div className="sidebar">
                <PostWidget slug={post.slug} categories={post.categories.map((category) => category.slug)} />
                <Categories />
            </div>
        </div>
    );
}

export default PostDetails;

export async function getStaticProps({ params })
{
    const data = (await fetchPostDetails(params.slug)) || [];

    return{
        props: { post: data },
    };
}

export async function getStaticPaths()
{
    const posts = await fetchPosts();

    return{
        paths: posts.map(({ node: { slug } }) => ({ params: { slug } })),
        fallback: false,
    };
}