import React from 'react'
import Shoes from '../shoes.json'
import {Grid,Paper} from '@material-ui/core';
import Styles from '../App.css'
import {Link} from 'react-router-dom'

const Products = () => {
    return (
        <div>
        <Grid container spacing={3} >
        {
             Object.keys(Shoes).map(keyName=>{
                 const shoe=Shoes[keyName];
                 return(
                    <Link item key={keyName} xs={12} sm={4} className="grid" to={`/products/${keyName}`}>
                      <h2>{shoe.name}</h2>
                      <img src={shoe.img} height={200}/>
                    </Link> 
                 )
             })
          }
        </Grid>
        </div>
    )
}

export default Products
