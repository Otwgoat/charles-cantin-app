import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react'
import Navbar from './Navbar';
import Link from 'next/link'


const Header = () => {
    const [iconPrefix, setIconPrefix] = useState(null);
    const router = useRouter()
    useEffect(() => setIconPrefix('fab'));
    
    return (
        <header>
            <Navbar classNameType='navbar'/>
            <Navbar classNameType='navbar_xs'/>
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