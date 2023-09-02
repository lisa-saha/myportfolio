import React, { useState } from "react";
import { SiPfsense } from "react-icons/si";
import { FaBars } from "react-icons/fa";
import { HiX } from "react-icons/hi";
import { Link } from 'react-router-dom';
import './style.scss';


const data = [
    {
        label: 'HOME',
        to: '/',
    },
    {
        label: 'ABOUT',
        to: '/about',
    },
    {
        label: 'SKILLS',
        to: '/skills',
    },
    {
        label: 'RESUME',
        to: '/resume',
    },
    {
        label: 'PORTFOLIO',
        to: '/portfolio',
    },
    {
        label: 'CONTACT',
        to: '/contact',
    },
];

const Navbar = () => {
    const [toggleIcon, setToggleIcon] = useState(false)

    const handleToggleIcon = () => {

        setToggleIcon(!toggleIcon);
    };
    return (
        <div>
            <nav className="navbar"></nav>
            <div className="navbar__Container">

                <Link to={"/"} className="navbar__logo">
                    <SiPfsense size={35} />
                </Link>
                <ul className={`navbar__Menu  ${toggleIcon ? "active" : " "}`}
                >
                {data.map((item,key) => (
                        <li key={key} className="navbar__MenuItem">
                            <Link className="navbar__MenuLink" to={item.to}>
                                {item.label}
                            </Link>
                        </li>
                    ))
                }
            </ul>
            <div className="navIcon" onClick={handleToggleIcon}>
                {
                    toggleIcon ? <HiX size={30} /> : <FaBars size={30} />
                }
            </div>
        </div>
    </div >
 )

}

export default Navbar;