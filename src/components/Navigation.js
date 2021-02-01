import React, { useState } from 'react'
import { Link } from 'react-router-dom';

function Navigation() {
    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);

    const closeMobileMenu = () => setClick(false);
    return (
        <>
            <nav className="nav">
                <div className="nav-container">
                    <Link to="/" className="nav-logo">
                        REACT <i className="fab fa-typo3" />
                    </Link>
                    <div className="nav-icon" onClick={handleClick}>
                        <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                    </div>

                    <ul className={click ? 'nav-manu active' : 'nav-menu'}>
                        <li className='nav-item'>
                            <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                                Home
                            </Link>
                            <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                                About
                            </Link>
                            <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                                Contact
                            </Link>
                        </li>
                    </ul>
                </div>

            </nav>
        </>
    )
}

export default Navigation
