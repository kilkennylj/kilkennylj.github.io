// Comments require API which githubpages does not support

import { GraphQLClient, gql } from 'graphql-request';

const graphqlAPI = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT;

export default async function comments(req, res)
{
    const graphQLClient = new GraphQLClient(graphqlAPI, {
        headers: {
            authorization: `Bearer ${process.env.NEXT_PUBLIC_GRAPHCMS_TOKEN}`
        }
    });

    const query = gql`
    mutation CreateComment($name: String!, $email: String!, $comment: String!, $slug: String!) {
      createComment(data: { name: $name, email: $email, comment: $comment, post: { connect: { slug: $slug } } } ) { id }
    }
    `
    try
    {
        const result = await graphQLClient.request(query, req.body);
        return res.status(200).send(result);
    }
    catch(e)
    {
        console.log(e);
        return res.status(500).send(e);
    }
    

    
}