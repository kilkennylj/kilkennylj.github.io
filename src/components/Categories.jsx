import { useState, useEffect } from 'react';
import Link from 'next/link';

import '../styles/BlogPage.css';

import { getCategories } from '../graphcms';

const Categories = () =>
{
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        getCategories().then((newCategories) =>
            setCategories(newCategories))
    }, []);
    return(
        <div className="widgetContainer">
            <h3>Categories</h3>
            {categories.map((category) => (
                <div key={category.slug} className="widgetItem">
                    <Link href={`category/${category.slug}`}>
                        <span className="category">{category.name}</span>
                    </Link>
                </div>
            ))}
        </div>
    )
}

export default Categories;