import React from 'react'
import Image from 'next/image'


const Footer = () => {
   
  return (
    <footer>

        
        <div id='footerLogo'>
            <Image src='/../img/Logo-charles-cantin-1.png' width={150} height={120} alt='logo du site' />
        </div>
        <div id='footerCGV'>
            <p>CGV et mentions légales</p>
            <p>2023 Lucas Jouffroy</p>
        </div>
        
        

    </footer>
  )
}

export default Footer