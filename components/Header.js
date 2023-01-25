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
                        <Link href="/portfolio">Portfolio</Link>
        
                    </li>
                    <li>
                        <Link href="/prestations">Prestations</Link>
        
                    </li>
                    <li>
                        <Link href="/contact">Contact</Link>
        
                    </li>
                        
                </ul>
        
            </nav>
            <Link href='/'><div className='logo_section'></div></Link>
            
            <div className='social_section'>
                <a href='https://www.facebook.com'>
                    <FontAwesomeIcon  icon={[`${iconPrefix}`,'facebook']} className="social_icon"/>
                </a>
                <a href='https://www.twitter.com'>
                    <FontAwesomeIcon   icon={[`${iconPrefix}`, 'twitter']} className="social_icon"/>
                </a>
                <a href='https://www.instagram.com'>
                    <FontAwesomeIcon  icon={[`${iconPrefix}`, 'instagram']} className="social_icon"/>
                </a>
            </div>
                
        
        </header>
    )

    

}

export default Header