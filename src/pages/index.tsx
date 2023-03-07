import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/shared/Layout"
import Seo from "../components/shared/seo"
import Section from "../components/Section"

const IndexPage = () => (
  <Layout>
    <div className="h-[400px] md:h-[500px] overflow-hidden bg-hero bg-cover bg-center flex flex-col justify-end p-6 md:pb-[180px] md:pl-[144px]">
      <h1 className="text-white text-[2rem] md:text-[4rem] font-bold m-0">
        Welcome to all
        <br />
        the broken ones.
      </h1>
    </div>
    <div className="w-full px-6 flex justify-center">
      <div className="w-full flex flex-col max-w-[1152px] gap-[120px] mt-16 mb-16 md:mt-15 md:mb-16 md:gap-[160px]">
        <Section />
        <Section reverse />
        <Section />
      </div>
    </div>
  </Layout>
)


export const Head = () => <Seo title="Home" description="home" />

export default IndexPage
