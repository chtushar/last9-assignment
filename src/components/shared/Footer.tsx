import React from "react"
import { GrTwitter, GrInstagram } from 'react-icons/gr';

const socials = [
    {
        name: "Twitter",
        icon: <GrTwitter />,
        link: "https://twitter.com/ctushr"
    },
    {
        name: "Instagram",
        icon: <GrInstagram />,
        link: "https://instagram.com/t.ushr"
    }
]

const Footer = () => {
    return (
        <footer className="bg-primary-100 pb-20 pt-10 px-6 flex justify-between text-white font-normal">
            <p>© 2023, IMBROKEN</p>
            <div className="flex gap-8">
                {socials.map((social) => {
                    return (
                        <a key={social.name} href={social.link} target="_blank" className="text-white align-middle">
                            <span className="inline-block align-middle">
                                {social.icon}
                            </span>
                            <span className="ml-2 inline-block align-middle">
                                {social.name}
                            </span>
                        </a>
                    )
                })}
            </div>
        </footer>
    )
}

export default Footer