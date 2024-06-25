import React from 'react';

import { fetchPosts, fetchPostDetails } from '../../graphcms';
import { PostDetail, PostWidget, Author, Comments, CommentsForm} from '../../components'

const PostDetails = ({ post }) =>
{
    return(
        <div>
            <div>
                <PostDetail post={ post }/>
                <Author author={ post.author }/>
                <CommentsForm slug={ post.slug }/>
                <Comments slug={ post.slug }/>
            </div>
            <div>
                <PostWidget />
            </div>
        </div>
    );
}

export default PostDetails;

export async function getStaticProps({ params })
{
    const data = (await fetchPostDetails(params.slug)) || [];

    return{
        props: { post: data }
    }
}