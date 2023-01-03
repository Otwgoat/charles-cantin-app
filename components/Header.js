import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'


const Header = () => {
    const [iconPrefix, setIconPrefix] = useState(null);
    useEffect(() => setIconPrefix('fab'));
    
    return (
        <header>
            <nav className='navbar'>
                <ul>
                    <li>
                        <Link href="/">Portfolio</Link>
        
                    </li>
                    <li>
                        <Link href="/">Prestations</Link>
        
                    </li>
                    <li>
                        <Link href="/">Contact</Link>
        
                    </li>
                        
                </ul>
        
            </nav>
            <div className='logo_section'></div>
            <div className='social_section'>
                <a href='https://www.facebook.com'>
                    <FontAwesomeIcon icon={[`${iconPrefix}`,'facebook']} className="social_icon"/>
                </a>
                <a>
                    <FontAwesomeIcon icon={[`${iconPrefix}`, 'twitter']} className="social_icon"/>
                </a>
                <a>
                    <FontAwesomeIcon icon={[`${iconPrefix}`, 'flickr']} className="social_icon"/>
                </a>
            </div>
                
        
        </header>
    )

    

}

export default Header