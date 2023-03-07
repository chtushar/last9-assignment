import React from "react"
import clsx from "clsx"

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
            <p className="text-secondary-100 max-w-[544px]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. 
            </p>
            <div className="min-h-[320px] max-w-[544px] w-full flex-1 bg-secondary-100">

            </div>
        </section>
    )
}

export default Section