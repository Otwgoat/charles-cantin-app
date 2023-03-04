import React from 'react'
import Image from 'next/image'


const Footer = () => {
   
  return (
    <footer>

        
        <div id='footerLogo'>
            <Image src='/public/img/Logo-charles-cantin-1.png' width={150} height={120} alt='logo du site' />
        </div>
        <div id='footerCGV'>
            <p id='cgvs'><span>CGV</span> et <span>mentions légales</span></p>
            <p id='signature'>2023 Lucas Jouffroy</p>
        </div>
        
        

    </footer>
  )
}

export default Footer