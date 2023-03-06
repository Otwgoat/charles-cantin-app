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
    const [currentIndex, setCurrentIndex] = useState(12)
    const [maxIndex, setMaxIndex] = useState(photos.length)
    const [maxIndexReached, setMaxIndexReached] = useState(false)
    /** Once the last photos is displayed the seeMoreBtn is removed */
    useEffect(() => {
        if(currentIndex >= maxIndex){
            setMaxIndexReached(true)
        }
        if(isActive !== 'all'){
            setCurrentIndex(maxIndex)
        } 

    }, [maxIndex, currentIndex, maxIndexReached, isActive])
    /*** This function get the tag of the selected item and send it to displayingPhotos *********/
    const sendingTag = (tag) =>  {
        setIsActive(tag);
        displayingPhotos(tag)
        
    }
    /*** This function displays the photos by their tags *********/
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
    /***This function is called by the seeMoreBtn, and add 12 to the current index each time it's clicked  *********/
    const refreshingIndex = () => {
        setCurrentIndex(currentIndex + 12)
    }    
    
    
  return (
    <div className='page container'>
        <Meta title={'Charles Cantin - Portfolio'} description={'Bienvenue sur mon portfolio, je vous présente ici, les plus belles scènes de vos vies.'}/>
        <div className='portfolioContainer'>
            <h2 className='pageTitle'>Portfolio</h2>
            
            
            <Description />
            <div id='filterNav_mobile_section'>
                <select className='filterNav_mobile' value={isActive} onChange={(event) => sendingTag(event.target.value)} >
                    <option value='all'>Toutes les photos</option>
                    <option value='wedding'>Mariage</option>
                    <option value='pregnancy'>Grossesse</option>
                    <option value='baby'>Bébé</option>
                    <option value='family'>Famille</option>
                    <option value='baptism'>Baptême</option>
                    <option value='couple'>Couple</option>
                    <option value='portrait'>Portrait</option>
                </select>
            </div>
            <ul id='filterNav'>
                
                <li key='all' id='first' className={isActive === 'all' ? 'filterItemActive' : 'filterItem'} onClick={() => sendingTag('all')}>Tout</li>
                <li key='wedding' className={isActive === 'wedding' ? 'filterItemActive' : 'filterItem'} onClick={() => sendingTag('wedding')}>Mariage</li>
                <li key='pregnancy' className={isActive === 'pregnancy' ? 'filterItemActive' : 'filterItem'} onClick={() => sendingTag('pregnancy')} >Grossesse</li>
                <li key='baby' className={isActive === 'baby' ? 'filterItemActive' : 'filterItem'} onClick={() => sendingTag('baby')}>Bébé</li>
                <li key='family' className={isActive === 'family' ? 'filterItemActive' : 'filterItem'} onClick={() => sendingTag('family')}>Famille</li>
                <li key='baptism' className={isActive === 'baptism' ? 'filterItemActive' : 'filterItem'} onClick={()=> sendingTag('baptism')}>Baptême</li>
                <li key='couple' className={isActive === 'couple' ? 'filterItemActive' : 'filterItem'} onClick={() => sendingTag('couple')}>Couple</li>
                <li key='portrait' id='last' className={isActive === 'portrait' ? 'filterItemActive' : 'filterItem'} onClick={() => sendingTag('portrait')}>Portrait</li>
                
            </ul>
           
            
            <div className='photosContainer'>
                { photos.length > 0 ? photos.slice(0, currentIndex).map((photo) => (
                    <Photo photo={photo} key={photo.title} /> 
                )) : <p>Aucun contenu n'a été trouvé</p> }
            </div>
            
            {photos.length >= 1  && !maxIndexReached   ? <button className='btn' onClick={() => refreshingIndex()}>En voir plus</button> : ''}
            
        </div>
    </div>
  )
} 

export default portfolio;

/*** Import the data of the portfolio's json *********/
export const getStaticProps = async () => {
    
    const filePath = path.join(process.cwd(), 'content/portfolio.json')
    const jsonData = await fsPromises.readFile(filePath);
    const objectData = JSON.parse(jsonData)

    
    return {
        props: objectData,
            
    }

    
    
    
}



