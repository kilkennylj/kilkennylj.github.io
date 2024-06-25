import { request, gql } from 'graphql-request';

const graphqlAPI = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT;

export const fetchPosts = async () => {
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
                        id
                        publishedAt
                        categories {
                            name
                            slug
                        }
                    }
                }
            }
        }
    `;
    const result = await request(graphqlAPI, query);
    return result.postsConnection.edges;
};

export const fetchPostDetails = async (slug) => {
    const query = gql`
        query GetPostDetails($slug: String!) {
            post(where: { slug: $slug }) {
                title
                excerpt
                content {
                    raw
                }
                author {
                    name
                    biography
                    id
                    picture {
                        url
                    }
                }
                slug
                publishedAt
                categories {
                    name
                    slug
                }
            }
        }
    `;
    const result = await request(graphqlAPI, query, { slug });
    return result.post;
};

export const getRecentPosts = async () => {
    const query = gql`
        query GetRecentPosts {
            posts(orderBy: createdAt_ASC, last: 3) {
                title
                publishedAt
                slug
            }
        }
    `;
    const result = await request(graphqlAPI, query);
    return result.posts;
};

export const getSimilarPosts = async (categories, slug) => {
    const query = gql`
        query GetPostDetails($slug: String!, $categories: [String!]) {
            posts(
                where: { slug_not: $slug, AND: { categories_some: { slug_in: $categories } } }
                last: 3
            ) {
                title
                publishedAt
                slug
            }
        }
    `
    const result = await request(graphqlAPI, query, { categories, slug });
    return result.posts;
}

export const getCategories = async () => {
    const query = gql`
        query GetCategories {
            categories {
                name
                slug
            }
        }
    `

    const result = await request(graphqlAPI, query);
    return result.categories;
}