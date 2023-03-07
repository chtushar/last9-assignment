import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/shared/Layout"
import { format } from "date-fns"
import Metadata from "../components/shared/Metadata"

const Blog = ({ data }) => {
    return (
        <Layout>
            <Metadata title={data.ghostPost.title} />
            <div className="flex flex-col gap-10 mt-20">
                <div className="p-6 flex flex-col gap-4">
                    <h1 className="text-5xl font-bold text-primary-100">{data.ghostPost.title}</h1>
                    <p className="text-secondary-100">Published by {' '} 
                        <a target="_blank" href={`https://twitter.com/${data.ghostPost.primary_author.twitter}`} className="underline text-secondary-100">{data.ghostPost.primary_author.name}</a> 
                        {' '} on {format(new Date(data.ghostPost.published_at), "MMMM dd, yyyy")}
                    </p>
                </div>
                <article className="p-6 prose lg:prose-lg text-primary-100" dangerouslySetInnerHTML={{ __html: data.ghostPost.html }} />
            </div>
        </Layout>
    )
}


export const query = graphql`
query MyQuery($slug: String!) {
    ghostPost(slug: {eq: $slug}) {
        html
        title
        slug
        published_at
        primary_author {
            name
            twitter
        }
    }
}
`
export default Blog