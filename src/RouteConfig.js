import React from 'react'
import {BrowserRouter as Router} from 'react-router-dom'
import {Routes,Route} from 'react-router-dom'
import Home from './components/Home'
import NavBar from './components/NavBar'
import Prodducts from './components/Products'
import ProductItem from './components/ProductItem'

const RouteConfig = () => {
    return (
        <div>
            <Router>
                <NavBar/>
                <Routes>
                    <Route path="/" element={<Home/>} />
                    <Route path="/products" element={<Prodducts/>} />
                    <Route path="/products/:id" element={<ProductItem/>} />
                </Routes>
            </Router>
        </div>
    )
}

export default RouteConfig;
