import React from "react"
import Layout from "../components/shared/Layout"
import { format } from "date-fns"
import Metadata from "../components/shared/Metadata"

const Blog = ({ pageContext }) => {
    const { node } = pageContext
    return (
        <Layout>
            <Metadata title={node.title} />
            <div className="flex flex-col gap-10 mt-20">
                <div className="p-6 flex flex-col gap-4">
                    <h1 className="text-5xl font-bold text-primary-100">{node.title}</h1>
                    <p className="text-secondary-100">Published by {' '} 
                        <a target="_blank" href={`https://twitter.com/${node.primary_author.twitter}`} className="underline text-secondary-100">{node.primary_author.name}</a> 
                        {' '} on {format(new Date(node.published_at), "MMMM dd, yyyy")}
                    </p>
                </div>
                <article className="p-6 prose lg:prose-lg text-primary-100" dangerouslySetInnerHTML={{ __html: node.html }} />
            </div>
        </Layout>
    )
}

export default Blog