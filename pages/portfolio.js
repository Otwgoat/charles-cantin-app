import React, { useEffect, useState } from 'react';
import Meta from '../components/Meta';
import fsPromises from 'fs/promises';
import path from 'path';
import Photo from '../components/Photo';
import Description from '../components/Description';





const portfolio = (props) => {
    let photosData = props.photos;
    
    const [photos, setPhotos] = useState(photosData)
    const [isActive, setIsActive] = useState('all')
    
    
    const test = (tag) =>  {
        setIsActive(tag);
        displayingPhotos(tag)
        
    }
    const displayingPhotos = (tag) => {
        const tagToSearch = {
            wedding: 'mariage',
            pregnancy: 'grossesse',
            baby: 'bébé',
            family: 'famille', 
            baptism: 'baptême', 
            couple: 'couple',
            portrait: 'portrait'
        }[tag] || '';
    
        if (tag === 'all') {
            setPhotos(photosData);
        } else if (tagToSearch) {
            setPhotos(photosData.filter(photo => photo.tag === tagToSearch));
        } else {
            alert('Aucun contenu n\'a été trouvé');
        }
    }
    
  return (
    <div className='page container'>
        <Meta title={'Charles Cantin - Portfolio'} description={'Bienvenue sur mon portfolio, je vous présente ici, les plus belles scènes de vos vies.'}/>
        <div className='portfolioContainer'>
            <h2>Portfolio</h2>
            <Description />
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
                { photos.length > 0  ? photos.map((photo) => (
                    <Photo photo={photo} key={photo.title} /> 
                )) : <p>Aucun contenu n'a été trouvé</p> }
            </div>
        </div>
    </div>
  )
} 

export default portfolio;


export const getStaticProps = async () => {
    const filePath = path.join(process.cwd(), 'content/portfolio.json')
    const jsonData = await fsPromises.readFile(filePath);
    const objectData = JSON.parse(jsonData)
    
    return {
        props: objectData,
        
    }
}

