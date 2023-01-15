import React from 'react'
import Description from '../components/Description'
import Meta from '../components/Meta'
import Prestation from '../components/Prestation'

const prestations = () => {
  return (
    <div className='page container'>
        <Meta title={'Charles Cantin - Prestations'} description={'Consultez sur cette page la liste de mes prestations. Je propose une offre compléte de services à la carte ou sur mesure.'}/>
        <div className='prestationsContainer'>
            <h2>Prestations</h2>
            <Description />
            <div className='prestationsGrid' >
                <Prestation/> 

            </div>

        </div>

    </div>
  )
}

export default prestations