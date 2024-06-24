import { request, gql } from 'graphql-request';

const graphqlAPI = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT;

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
            slug
            title
            excerpt
            content {
              raw
            }
            id
            publishedAt
          }
        }
      }
    }
    `;
    const result = await request(graphqlAPI, query)
    return result.postsConnection.edges;
}

export const getRecentPosts = async () =>
{
  const query = gql`
  query GetPostDetails() {
    posts(
      orderBy: createdAt_DESC
      last: 3
    )
    {
      title
      publishedAt
      slug
    }
  }
  `;
  const result = await request(graphqlAPI, query)
  return result.posts;
}