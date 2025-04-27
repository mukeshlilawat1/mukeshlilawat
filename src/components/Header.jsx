import React from 'react'

const Header = () => {
    return (
        <div>
            <header className='fixed top-0 left-0 w-full h-20 flex items-center z-40 bg-gradient-to-b from-zinc-900/0'>
                <div className='max-w-screen-2xl w-full mx-auto px-4'>
                    <h1>
                        <a href='/' className='logo'></a>
                    </h1>

                    <img src='../assets/'/>

                </div>
            </header>
        </div>
    )
}

export default Header
