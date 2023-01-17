import React from 'react'
import Description from '../components/Description'
import Meta from '../components/Meta'
import Prestation from '../components/Prestation'
import fsPromises from 'fs/promises';
import path from 'path';

const prestations = (props) => {
    let prestationsData = props.prestations;
    console.log(prestationsData);
  return (
    <div className='page container'>
        <Meta title={'Charles Cantin - Prestations'} description={'Consultez sur cette page la liste de mes prestations. Je propose une offre compléte de services à la carte ou sur mesure.'}/>
        <div className='prestationsContainer'>
            <h2>Prestations</h2>
            <Description />
            <div className='prestationsGrid' >
                {prestationsData.map((prestation) => (
                    <Prestation  
                    key={prestation.id} 
                    title={prestation.title} 
                    content={prestation.description} 
                    id={prestation.id} 
                    price={prestation.price} 
                    />
                ))}
                <div className='prestationItem' id='onSizing'>
                    <p>« J’immortalise l’événement » sur mesure. Prestation de mariage ou baptême sur devis.</p>
                </div>

            </div>

        </div>

    </div>
  )
}

export default prestations;

export const getStaticProps = async () => {
    const filePath = path.join(process.cwd(), 'content/prestations.json')
    const jsonData = await fsPromises.readFile(filePath);
    const objectData = JSON.parse(jsonData)
    
    return {
        props: objectData,
        
    }
}