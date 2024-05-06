import React, { useState } from 'react'
import { ProductCard, ProductButtons, ProductImage, ProductTitle } from '../components/'
import '../styles/custom-styles.css'
import { useShoppingCart } from '../hooks/useShoppingCart'
import { products } from '../data/product'


const ShoppingPage = () => {


    const {
        onProductCountChange,
        shoppingCart
    } = useShoppingCart();

   
    return (
        <div>
            <h1>Shopping Store</h1>
            <hr />
            <div style={{//style inline
                display: 'flex',
                flexDirection: 'row',
                flexWrap: 'wrap',
            }}>
                {
                    products.map(product => (

                        <ProductCard
                            product={product}
                            className='bg-dark text-bold'
                            key={product.id}
                            onChange={onProductCountChange}
                            value={shoppingCart[product.id]?.count || 0}

                        >
                            <ProductImage className='custom-image' />
                            <ProductTitle className='text-white' />
                            <ProductButtons className='custom-button' />
                        </ProductCard>
                    ))
                }
                <div className='shopping-cart'>
                    {
                        Object.entries(shoppingCart).map(([key, product]) => (
                            <ProductCard
                                key={key}
                                product={product}
                                className='bg-dark text-white'
                                style={{ width: '100px' }}
                                value={product.count}
                                onChange={onProductCountChange}
                            >
                                <ProductImage
                                    className='custom-image'
                                />
                                <ProductButtons
                                    className='custom-buttons'
                                    style={{
                                        display: 'flex',
                                        justifyContent: 'center'
                                    }}
                                />
                            </ProductCard>
                        ))
                    }
                </div>
                {/* <div className='shopping-cart'>
                    <ProductCard
                        product={product2}
                        className='bg-dark text-bold'
                    >
                        <ProductImage className='custom-image' />
                        <ProductTitle className='text-white' />
                        <ProductButtons className='custom-button' />
                    </ProductCard>

                </div> */}
            </div>
            <div>
                {JSON.stringify(shoppingCart, null, 5)}
            </div>
        </div>
    )
}

export default ShoppingPage
