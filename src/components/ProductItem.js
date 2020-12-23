import React from 'react'
import {useParams} from 'react-router-dom'
import Shoes from '../shoes.json'
import Styles from '../App.css'

const ProductItem = () => {
    const {id}=useParams();
    const shoe=Shoes[id];
    if(!shoe){
        return(
            <h3>Page Not Found</h3>
        )
    }
    return (
        <div className="product-item">
           <h2>{shoe.name}</h2>
           <img src={shoe.img} height={400}/>
        </div>
    )
}

export default ProductItem
