import { Link } from 'gatsby';
import React from 'react';
import Logo from './Logo';

const navLinks = [
    {
        id: 1,
        name: 'Home',
        path: '/',
    },
    {
        id: 2,
        name: 'Blog',
        path: '/blogs',
    },
]

const Header = () => {
    return (
        <header className='py-4 px-6 w-full flex flex-col md:flex-row items-center justify-center bg-white'>
            <div className='max-w-[1152px] w-full m-x-auto flex flex-col gap-10 md:flex-row justify-between'>
                <Logo />
                <div className='flex gap-8'>
                    {navLinks.map((link) => (
                        <Link to={link.path} key={link.id} className="text-primary-100 no-underline font-bold">
                            {link.name}
                        </Link>
                    ))}
                </div>
            </div>
        </header>
    )
}

export default Header;