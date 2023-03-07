import React from "react"
import clsx from "clsx"
import { StaticImage } from "gatsby-plugin-image"

export interface SectionProps {
    reverse?: boolean
}

const Section = ({ reverse = false }: SectionProps) => {
    return (
        <section 
            className={clsx(
                "flex flex-col-reverse items-center justify-between gap-8 md:gap-16",
                reverse ? "md:flex-row-reverse" : "md:flex-row",
            )}
        >
            <p className="text-secondary-100 max-w-[544px] w-full">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. 
            </p>
            <StaticImage className="w-full max-h-full object-center" src="https://picsum.photos/id/472/544/320" alt="Broken" />
        </section>
    )
}

export default Section