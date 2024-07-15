import React from 'react';

// If I create a bio, put it in a p to the right of the name and img, make sure those two move left.

const Author = ({ author }) =>
{
    return(
        <div className="authorContainer">
            <h2>{author.name}</h2>
            <img
                alt={author.name}
                className="authorImg"
                src={author.picture.url}
            />
        </div>
    )
}

export default Author;