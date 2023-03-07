import React from "react"
import { GrTwitter, GrInstagram } from 'react-icons/gr';

const Footer = () => {
    return (
        <footer className="bg-primary-100 pb-20 pt-10 px-6 flex justify-between text-white font-normal">
            <p>© 2023, IMBROKEN</p>
            <div className="flex gap-8">
                <a href="https://twitter.com/ctushr" target="_blank" className="text-white">
                    <span className="inline-block">
                        <GrTwitter />
                    </span>
                    <span className="ml-2 inline-block">
                        Twitter
                    </span>
                </a>
                <a href="https://instagram.com/t.ushr" target="_blank" className="text-white">
                    <span className="inline-block">
                        <GrInstagram />
                    </span>
                    <span className="ml-2 inline-block">
                        Instagram
                    </span>
                </a>
            </div>
        </footer>
    )
}

export default Footer