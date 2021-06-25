import React from 'react'
import headquarterCSS from './headquarter.module.css'


function Headquarters({Icon, headline, street, city, state, zip, phone}) {

    function Items() {
        return (
            <div>
                <h4 className={headquarterCSS.subHead}>{headline}</h4>
                <p>{street}</p> 
                <p>{city}</p> 
                <p>{`${state} ${zip}`}</p> 
                <p>{phone}</p> 
            </div>
        )
    }


    return (
        <div className={headquarterCSS.container}>
            <Icon className={headquarterCSS.icon} />
            <Items />

        </div>
    )
}

export default Headquarters