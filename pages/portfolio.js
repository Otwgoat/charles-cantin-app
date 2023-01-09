import React, { use, useState } from 'react'
import Meta from '../components/Meta'


const portfolio = () => {
    const [allIsActive, setAllIsActive] = useState(true);
    const [weddingIsActive, setWeddingIsActive] = useState(false);
    const [pregnancyIsActive, setPregnancyIsActive] = useState(false);
    const [babyIsActive, setBabyIsActive] = useState(false);
    const [familyIsActive, setFamilyIsActive] = useState(false);
    const [baptismIsActive, setBaptismIsActive] = useState(false);
    const [coupleIsActive, setCoupleIsActive] = useState(false);

    const handleToggleAllItem = () => {
        setAllIsActive(!allIsActive)
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
    

  return (
    <div className='page container'>
        <Meta/>
        <div className='portfolioContainer'>
            <h2>Portfolio</h2>
            <p className='descriptionContainer'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent in sapien eros. Phasellus porta diam sit amet ex aliquam rhoncus. Nulla consectetur risus et condimentum pellentesque. Ut rhoncus purus dignissim condimentum commodo. Vivamus consectetur urna ut arcu mollis suscipit. Integer tellus ipsum, tempor mattis blandit vitae, ullamcorper et tortor. Curabitur vestibulum nunc nec lacus condimentum, ut bibendum sapien aliquet. Vestibulum vitae diam congue, consequat lectus at, dictum nisl. Donec tempus ante eleifend vestibulum consequat. Donec semper nisi non mi blandit, sed suscipit sapien faucibus. Vestibulum quis efficitur est. Vestibulum ex sem, commodo dictum hendrerit vel, eleifend eu sem. Morbi vehicula.</p>
            <ul id='filterNav'>
                
                <li key='all' id='all' className={allIsActive ? 'filterItemActive' : 'filterItem'} onClick={handleToggleAllItem}>Tout</li>
                <li key='wedding' id='wedding' className={weddingIsActive ? 'filterItemActive' : 'filterItem'} onClick={handleToggleWeddingItem}>Mariage</li>
                <li key='pregancy' className={pregnancyIsActive ? 'filterItemActive' : 'filterItem'} onClick={handleTogglePregnancyItem}>Grossesse</li>
                <li key='baby' className={babyIsActive ? 'filterItemActive' : 'filterItem'} onClick={handleToggleBabyItem}>Bébé</li>
                <li key='family' className={familyIsActive ? 'filterItemActive' : 'filterItem'} onClick={handleToggleFamilyItem}>Famille</li>
                <li key='baptism' className={baptismIsActive ? 'filterItemActive' : 'filterItem'} onClick={handleToggleBaptismItem}>Baptême</li>
                <li key='couple' className={coupleIsActive ? 'filterItemActive' : 'filterItem'} onClick={handleToggleCoupleItem}>Couple</li>
                
            </ul>
        </div>


    </div>
  )
} 

export default portfolio