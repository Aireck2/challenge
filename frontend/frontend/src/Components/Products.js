import React, { Component } from 'react';
import Products from './products/Products'
import NavMenu from './Layout/NavMenu'
import './styles/nav.css'
import './styles/products.css'


class products extends Component {
    render() {
        return (
            <>
                <NavMenu />
                <Products />
            </>
        )
    }

}
export default products;