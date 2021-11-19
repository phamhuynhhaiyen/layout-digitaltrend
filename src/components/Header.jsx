import React, { useRef } from 'react'
import {Link} from 'react-router-dom'

const Header = () => {
    const menuNav = [
        {
            name: "Studio",
            path: "/"
        },
        {
            name: "Our Works",
            path: "/"
        },
        {
            name: "Blog",
            path: "/blog"
        },
        {
            name: "Contact",
            path: "/contact"
        },
    ]
    const menuRef = useRef(null)
    const iconRef = useRef(null)
    const handleClick = () => {
        menuRef.current.classList.toggle("active")
        iconRef.current.classList.toggle("fa-times")
    }
    return (
        <div className="header">
            <div className="header__logo"><Link to="/"><i class="fas fa-chart-line"></i>Digital Trend</Link></div>
            <div className="header__bar" onClick={handleClick}>
                <i className="fa fa-bars" ref={iconRef}></i>
            </div>
            <div className="header__menu" ref={menuRef}>
                {menuNav.map((item, index)=>(
                    <Link to={item.path} className="header__menu__item" key={index}>
                        {item.name}
                    </Link>
                ))}
            </div>
        </div>
    )
}

export default Header
