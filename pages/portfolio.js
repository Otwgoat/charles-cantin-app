import React, { useEffect, useState } from 'react'
import Meta from '../components/Meta'





const portfolio = (props) => {
    const photos = props.photos;
    
    const [allIsActive, setAllIsActive] = useState(true);
    const [weddingIsActive, setWeddingIsActive] = useState(false);
    const [pregnancyIsActive, setPregnancyIsActive] = useState(false);
    const [babyIsActive, setBabyIsActive] = useState(false);
    const [familyIsActive, setFamilyIsActive] = useState(false);
    const [baptismIsActive, setBaptismIsActive] = useState(false);
    const [coupleIsActive, setCoupleIsActive] = useState(false);
    const [portraitIsActive, setPortraitIsActive] = useState(false);

    useEffect(() => {
        if (weddingIsActive || babyIsActive || pregnancyIsActive || familyIsActive || baptismIsActive || coupleIsActive || portraitIsActive) {
            setAllIsActive(false)
        } else {
            setAllIsActive(true)
        }
        
    })

    const handleToggleAllItem = () => {
        setWeddingIsActive(false)
        setBabyIsActive(false)
        setPregnancyIsActive(false)
        setFamilyIsActive(false)
        setBaptismIsActive(false)
        setCoupleIsActive(false)
        setPortraitIsActive(false)
        setAllIsActive(true)
    }
    const handleToggleWeddingItem = () => {
        setWeddingIsActive(!weddingIsActive)
    }
    const handleToggleBabyItem = () => {
        setBabyIsActive(!babyIsActive)
    }
    const handleTogglePregnancyItem = () => {
        setPregnancyIsActive(!pregnancyIsActive)
    }
    const handleToggleFamilyItem = () => {
        setFamilyIsActive(!familyIsActive)
    }
    const handleToggleBaptismItem = () => {
        setBaptismIsActive(!baptismIsActive)
    }
    const handleToggleCoupleItem = () => {
        setCoupleIsActive(!coupleIsActive)
    }
    const handleTogglePortraitItem = () => {
        setPortraitIsActive(!portraitIsActive)
    }
    
    

  return (
    <div className='page container'>
        <Meta/>
        <div className='portfolioContainer'>
            <h2>Portfolio</h2>
            <p className='descriptionContainer'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent in sapien eros. Phasellus porta diam sit amet ex aliquam rhoncus. Nulla consectetur risus et condimentum pellentesque. Ut rhoncus purus dignissim condimentum commodo. Vivamus consectetur urna ut arcu mollis suscipit. Integer tellus ipsum, tempor mattis blandit vitae, ullamcorper et tortor. Curabitur vestibulum nunc nec lacus condimentum, ut bibendum sapien aliquet. Vestibulum vitae diam congue, consequat lectus at, dictum nisl. Donec tempus ante eleifend vestibulum consequat. Donec semper nisi non mi blandit, sed suscipit sapien faucibus. Vestibulum quis efficitur est. Vestibulum ex sem, commodo dictum hendrerit vel, eleifend eu sem. Morbi vehicula.</p>
            <ul id='filterNav'>
                
                <li key='all' id='first' className={allIsActive ? 'filterItemActive' : 'filterItem'} onClick={handleToggleAllItem}>Tout</li>
                <li key='wedding' className={weddingIsActive ? 'filterItemActive' : 'filterItem'} onClick={handleToggleWeddingItem}>Mariage</li>
                <li key='pregnancy' className={pregnancyIsActive ? 'filterItemActive' : 'filterItem'} onClick={handleTogglePregnancyItem}>Grossesse</li>
                <li key='baby' className={babyIsActive ? 'filterItemActive' : 'filterItem'} onClick={handleToggleBabyItem}>Bébé</li>
                <li key='family' className={familyIsActive ? 'filterItemActive' : 'filterItem'} onClick={handleToggleFamilyItem}>Famille</li>
                <li key='baptism' className={baptismIsActive ? 'filterItemActive' : 'filterItem'} onClick={handleToggleBaptismItem}>Baptême</li>
                <li key='couple' className={coupleIsActive ? 'filterItemActive' : 'filterItem'} onClick={handleToggleCoupleItem}>Couple</li>
                <li key='portrait' id='last' className={portraitIsActive ? 'filterItemActive' : 'filterItem'} onClick={handleTogglePortraitItem}>Portrait</li>
                
            </ul>
            
            <div className='photosContainer'>
                {photos.map((photo) => (
                    allIsActive &&
                    <Photo photo={photo} key={photo.title} />  
                ))}
                
                   
                
                  
                  
                    
                
                

            </div>
        </div>
        
        
        
       



    </div>
  )
} 

export default portfolio;
import fsPromises from 'fs/promises';
import path from 'path';
import Photo from '../components/Photo';

export const getStaticProps = async () => {
    const filePath = path.join(process.cwd(), 'content/portfolio.json')
    const jsonData = await fsPromises.readFile(filePath);
    const objectData = JSON.parse(jsonData)
    
    return {
        props: objectData,
        
    }
}

