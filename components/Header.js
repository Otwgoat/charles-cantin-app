import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react'
import Link from 'next/link'


const Header = () => {
    const [iconPrefix, setIconPrefix] = useState(null);
    const router = useRouter()
    useEffect(() => setIconPrefix('fab'));
    //State to control whether the menu is open or closed
    const [isOpen, setIsOpen] = useState(false)
    //Function to toggle the menu open/closed
    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };
    
    return (
        <header className={isOpen ? 'nav_active' : 'nav_inactive'}>
            
            <nav id='navbar' className={isOpen ? 'navbar_active' : 'navbar_inactive'} >
                <ul>
                    <li>
                        <Link className={router.pathname === '/portfolio' ? 'navLinkActive' : ' '} href="/portfolio" onClick={() => toggleMenu()}>Portfolio</Link>

                    </li>
                    <li>
                        <Link className={router.pathname === '/prestations' ? 'navLinkActive' : ' '} href="/prestations" onClick={() => toggleMenu()} >Prestations</Link>

                    </li>
                    <li>
                        <Link className={router.pathname === '/contact' ? 'navLinkActive' : ' '} href="/contact" onClick={() => toggleMenu()} >Contact</Link>

                    </li>

                </ul>

            </nav>
            
            <Link href='/'><div id='logo_section' className={isOpen ? 'logo_section_active' : 'logo_section_inactive'} ></div></Link>
            
            <div id='social_section' className={isOpen ? 'social_section_active' : 'social_section_inactive'} >
                <a href='https://www.facebook.com'>
                    <FontAwesomeIcon  icon={[`${iconPrefix}`,'facebook']} className={isOpen ? 'social_icon_active' : 'social_icon_inactive'}/>
                </a>
                <a href='https://www.twitter.com'>
                    <FontAwesomeIcon   icon={[`${iconPrefix}`, 'twitter']} className={isOpen ? 'social_icon_active' : 'social_icon_inactive'}/>
                </a>
                <a href='https://www.instagram.com'>
                    <FontAwesomeIcon  icon={[`${iconPrefix}`, 'instagram']} className={isOpen ? 'social_icon_active' : 'social_icon_inactive'}/>

                </a>
                
            </div>

            

            
            {/** Hamburger menu */}
            <div id='toggleMenuDisplay' onClick={toggleMenu}>
                <div id='toggleBars' className={isOpen ? 'toggleBars_active' : 'toggleBars_inactive'} >
                    <span id='active_left' className={isOpen ? 'toggleBar_active' : 'toggleBar_inactive'}></span>
                    <span id='active_right' className={isOpen ? 'toggleBar_active' : 'toggleBar_inactive'}></span>
                    <span id='active_toHide' className={isOpen ? 'toggleBar_active' : 'toggleBar_inactive'}></span>
                </div>
                
            </div>

           
        </header>    


                
        
       
        
    )

    

}

export default Header