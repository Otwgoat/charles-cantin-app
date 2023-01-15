import React, { useEffect, useState } from 'react'
import Meta from '../components/Meta'





const portfolio = (props) => {
    let photosData = props.photos;
    
    const [photos, setPhotos] = useState(photosData)
    const [isActive, setIsActive] = useState('all')
    
    
    const test = (tag) =>  {
        setIsActive(tag);
        displayingPhotos(tag)
        
    }
    const displayingPhotos = (tag) => {
        let tagToSearch = '';
        switch (tag) {
            case 'wedding':
                tagToSearch = 'mariage'
                break;
            case 'pregnancy':
                tagToSearch = 'grossesse'
                break;
            case 'baby':
                tagToSearch = 'bébé'
                break;
            case 'family':
                tagToSearch = 'famille' 
                break;
            case 'baptism':
                tagToSearch = 'baptême' 
                break;
            case 'couple':
                tagToSearch = 'couple'
                break;
            case 'portrait':
                tagToSearch = 'portrait'        
                break;          
            default:
                break;
        }
        
        if(tag !== 'all'){
            
            let photosToSearch = photosData;
            let photosToDisplay = []
            photosToSearch.forEach(photo => {
                if(photo.tag === tagToSearch){
                    photosToDisplay.push(photo)
                }
                
            });  
            setPhotos(photosToDisplay)
            
        } else if(tag === 'all'){
            setPhotos(photosData)
        } else {
            alert('Aucun contenu n\'a été trouvé')
        }
        
        
    }
  return (
    <div className='page container'>
        <Meta/>
        <div className='portfolioContainer'>
            <h2>Portfolio</h2>
            <p className='descriptionContainer'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent in sapien eros. Phasellus porta diam sit amet ex aliquam rhoncus. Nulla consectetur risus et condimentum pellentesque. Ut rhoncus purus dignissim condimentum commodo. Vivamus consectetur urna ut arcu mollis suscipit. Integer tellus ipsum, tempor mattis blandit vitae, ullamcorper et tortor. Curabitur vestibulum nunc nec lacus condimentum, ut bibendum sapien aliquet. Vestibulum vitae diam congue, consequat lectus at, dictum nisl. Donec tempus ante eleifend vestibulum consequat. Donec semper nisi non mi blandit, sed suscipit sapien faucibus. Vestibulum quis efficitur est. Vestibulum ex sem, commodo dictum hendrerit vel, eleifend eu sem. Morbi vehicula.</p>
            <ul id='filterNav'>
                
                <li key='all' id='first' className={isActive === 'all' ? 'filterItemActive' : 'filterItem'} onClick={() => test('all')}>Tout</li>
                <li key='wedding' className={isActive === 'wedding' ? 'filterItemActive' : 'filterItem'} onClick={() => test('wedding')}>Mariage</li>
                <li key='pregnancy' className={isActive === 'pregnancy' ? 'filterItemActive' : 'filterItem'} onClick={() => test('pregnancy')} >Grossesse</li>
                <li key='baby' className={isActive === 'baby' ? 'filterItemActive' : 'filterItem'} onClick={() => test('baby')}>Bébé</li>
                <li key='family' className={isActive === 'family' ? 'filterItemActive' : 'filterItem'} onClick={() => test('family')}>Famille</li>
                <li key='baptism' className={isActive === 'baptism' ? 'filterItemActive' : 'filterItem'} onClick={()=> test('baptism')}>Baptême</li>
                <li key='couple' className={isActive === 'couple' ? 'filterItemActive' : 'filterItem'} onClick={() => test('couple')}>Couple</li>
                <li key='portrait' id='last' className={isActive === 'portrait' ? 'filterItemActive' : 'filterItem'} onClick={() => test('portrait')}>Portrait</li>
                
            </ul>
            
            <div className='photosContainer'>
                { photos.map((photo) => (
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

