import React from "react";
import { Link } from "gatsby"
import { format } from "date-fns";

export interface BlogCardProps {
    slug: string;
    title: string;
    description: string;
    author: string;
}

const BlogCard =({ slug, title, date, author }) => {
    return (
        <Link to={`/blogs/${slug}`} className="p-6 pointer col-span-1 rounded-xl border border-solid border-neutral-200">
            <h2 className="text-xl font-medium text-primary-100" >{title}</h2>
            <p className="mt-2 text-sm text-secondary-100">
                Published by {author} on {format(new Date(date), "MMMM dd, yyyy")}
            </p>
        </Link>    
    )
}

export default BlogCard;