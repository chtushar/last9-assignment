import React from 'react'
import Metadata from '../components/shared/Metadata';
import Layout from '../components/shared/Layout'
import BlogCard from '../components/BlogCard';

const AllBlogs = ({ pageContext }) => {
    const { allBlogs } = pageContext;

    return (
        <Layout>
            <Metadata title="Blog" />
            <div className="flex flex-col p-6">
                <h1 className="text-primary-100 text-[2rem] md:text-[4rem] font-bold m-0">
                    Blog
                </h1>
                <div className='grid grid-cols-1 md:grid-cols-2 grid-flows-row gap-4 mt-10'>
                    {allBlogs.map(({  node }) => (
                        <BlogCard 
                            title={node.title}
                            slug={node.slug}
                            author={node.primary_author.name}
                            date={node.published_at}
                        />
                    ))}
                </div>
            </div>
        </Layout>
    )
}

export default AllBlogs