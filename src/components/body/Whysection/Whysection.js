import React from 'react';
import whyCSS from './why.module.css'

import Whybox from './Whybox/Whybox'

import {ReactComponent as Bean} from '../../../assets/home/desktop/icon-coffee-bean.svg'
import {ReactComponent as Gift} from '../../../assets/home/desktop/icon-gift.svg'
import {ReactComponent as Truck} from '../../../assets/home/desktop/icon-truck.svg'

function Whysection() {

    const [whyBoxItems, setWhyBoxItems] = React.useState([
        {icon: Bean, headline: "Best quality", paragraph: "Discover an endless variety of the world’s best artisan coffee from each of our roasters."},
        {icon: Gift, headline: "Exclusive benefits", paragraph: "Special offers and swag when you subscribe, including 30% off your first shipment."},
        {icon: Truck, headline: "Free shipping", paragraph: "We cover the cost and coffee is delivered fast. Peak freshness: guaranteed."}
    ])

    


    return (
        <div>
            <div className={whyCSS.container}>
                <div className={whyCSS.txtContainer}>
                    <h4 className={whyCSS.headline}>Why choose us?</h4>
                    <p className={whyCSS.paragraph}>A large part of our role is choosing which particular coffees will be featured  in our range. This means working closely with the best coffee growers to give you a more impactful experience on every level.</p>
                        <div className={whyCSS.whyboxes}> 
                            {whyBoxItems.map((item) => {
                                return <Whybox icon={item.icon} headline={item.headline} paragraph={item.paragraph} />
                            })}
                        </div>
                </div>
                
            </div>
        </div>
    )
}

export default Whysection;