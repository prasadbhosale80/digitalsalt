import React from 'react'
import { NavLink } from 'react-router-dom';
import './styles/Navigation.css';

const Navigation = () => {
    const navLinks = [
        { name: "First Component", path: "/" },
        { name: "Second Component", path: "two" },
        { name: "Third Component", path: "three" }
    ];

    return (
        <header>
            <nav className={"nav-bar"} >
                <div><h1 className='logo' >Header</h1></div>
                <div>
                    {navLinks.map((item: any, index: any) => <NavLink key={index}
                        to={item.path} className={'nav-links'}  >{item.name}</NavLink>)}
                </div>
            </nav>
        </header>
    )
}

export default Navigation