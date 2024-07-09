import React from 'react';

// If I create a bio, put it in a p to the right of the name and img, make sure those two move left.
// Image is hardcoded because hygraph kept returning null for author.picture

const Author = ({ author }) =>
{
    return(
        <div className="authorContainer">
            <h2>{author.name}</h2>
            <img
                alt={author.name}
                className="authorImg"
                src="/images/liam.jpeg"
            />
        </div>
    )
}

export default Author;