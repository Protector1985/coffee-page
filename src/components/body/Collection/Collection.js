import React from 'react'

import granEspresso from '../../../assets/home/desktop/image-gran-espresso.png'
import piccollo from '../../../assets/home/desktop/image-piccollo.png'
import planalto from '../../../assets/home/desktop/image-planalto.png'
import danche from '../../../assets/home/desktop/image-danche.png'

import collectionCSS from './collection.module.css'


function Collection() {

    return (
        <div className={collectionCSS.container}>
            <h4 className={collectionCSS.headline}>our collection</h4>
            <ul>
                <li>
                    <img src={granEspresso} alt="Gran Espresso Picture" />
                    <h4>Gran Espresso</h4>
                    <p>Light and flavorful blend with cocoa and black pepper for an intense experience</p>
                </li>

                <li>
                    <img src={planalto} alt="Planalto Coffee Picture" />
                    <h4>Planalto</h4>
                    <p>Brazilian dark roast with rich and velvety body, and hints of fruits and nuts</p>
                </li>
                <li>
                    <img src={piccollo} alt="Piccollo Coffee Picture" />
                    <h4>Piccollo</h4>
                    <p>Mild and smooth blend featuring notes of toasted almond and dried cherry</p>
                </li>
                <li>
                    <img src={danche} alt="Danche Coffee Picture" />
                    <h4>Danche</h4>
                    <p>Ethiopian hand-harvested blend densely packed with vibrant fruit notes</p>
                </li>
            </ul>
        </div>
    )
}

export default Collection;