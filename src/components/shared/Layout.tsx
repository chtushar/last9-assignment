import React from "react"
import Header from "./Header"
import Footer from "./Footer"

export interface LayoutProps {
    children: React.ReactNode
}

const Layout = ({ children }: LayoutProps): JSX.Element => {
    return (
        <div className="flex flex-col h-full">
            <Header />
            <main className="max-w-[1440px] w-full mx-auto flex-1">
                {children}
            </main>
            <Footer />
        </div>
    )
}

export default Layout;