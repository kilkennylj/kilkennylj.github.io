import { request, gql } from 'graphql-request';

const graphqlAPI = process.env.REACT_APP_GRAPHCMS_ENDPOINT;

export const fetchPosts = async () => 
{
    const query = gql`
    {
      postsConnection {
        edges {
          node {
            author {
              biography
              name
              id
              picture {
                url
              }
            }
            createdAt
            slug
            title
            excerpt
            content {
              raw
            }
            id
          }
        }
      }
    }    
    `;
    const result = await request(graphqlAPI, query)
    return result.postsConnection.edges;
}