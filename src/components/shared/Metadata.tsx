import React from 'react'
import { Helmet } from 'react-helmet'

const Metadata = ({ title }) => {
    return (
        <Helmet>
            /** All the metadata goes here */
            <title>{title}</title>
        </Helmet>
    )
}

export default Metadata