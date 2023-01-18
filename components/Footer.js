import Link from 'next/link'
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useEffect, useState } from 'react'
import Image from 'next/image'


const Footer = () => {
    const [iconPrefix, setIconPrefix] = useState(null);
    useEffect(() => setIconPrefix('fab'));
  return (
    <footer>
        <div className='footerListContainer' id='sitePlanContainer'>
            <h3>Plan du site</h3>
            <ul className='footerList' id='sitePlanList'>
               
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
        </div>
        
        <div className='footerListContainer'>
            <Image src='/../public/img/Logo-charles-cantin-1.png' width={150} height={120} alt='logo du site' />
        </div>
        
        <div className='footerListContainer' id='socialContainer'>
            <h3>Suivez-nous</h3>
            <ul className='footerList' id='socialList'>
                <li>
                    <a href='https://www.facebook.com'>
                        <FontAwesomeIcon  icon={[`${iconPrefix}`,'facebook']} className="social_icon"/>
                    </a>
                </li>
                <li>
                    <a href='https://www.twitter.com'>
                        <FontAwesomeIcon   icon={[`${iconPrefix}`, 'twitter']} className="social_icon"/>
                    </a>
                </li>
                <li>
                    <a href='https://www.instagram.com'>
                        <FontAwesomeIcon  icon={[`${iconPrefix}`, 'instagram']} className="social_icon"/>
                    </a>

                </li>

            </ul>
        </div>

    </footer>
  )
}

export default Footer