import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

const Navbar = ({classNameType}) => {
    const router = useRouter()
  return (
    <>
        <nav className={classNameType}>
            <ul>
                <li>
                    <Link className={router.pathname === '/portfolio' ? 'navLinkActive' : ' '} href="/portfolio">Portfolio</Link>
        
                </li>
                <li>
                    <Link className={router.pathname === '/prestations' ? 'navLinkActive' : ' '} href="/prestations">Prestations</Link>
        
                </li>
                <li>
                    <Link className={router.pathname === '/contact' ? 'navLinkActive' : ' '} href="/contact">Contact</Link>
        
                </li>
                        
            </ul>
        
        </nav>

    </>
  )
}

export default Navbar