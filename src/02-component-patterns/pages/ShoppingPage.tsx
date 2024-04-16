import React from 'react'
import { ProductCard, ProductButtons, ProductImage, ProductTitle } from '../components/'
import '../styles/custom-styles.css'

const product = {
    id: '1',
    title: 'Coffee Mug - Card',
    img: './coffee-mug.png'
}


const ShoppingPage = () => {
    return (
        <div>
            <h1>Shopping Store</h1>
            <hr />
            <div style={{
                display: 'flex',
                flexDirection: 'row',
                flexWrap: 'wrap',
            }}>

                <ProductCard product={product} className='bg-dark text-bold'>
                    <ProductImage className='custom-image' />
                    <ProductTitle className='text-white' />
                    <ProductButtons className='custom-button' />
                </ProductCard>

                <ProductCard
                    product={product}
                    style={{
                        backgroundColor:'#70D1F8'
                    }}
                >
                    <ProductImage />
                    <ProductTitle />
                    <ProductButtons style={{
                        display:'flex',
                        justifyContent:'end'
                    }}/>
                </ProductCard>



                {/* <ProductCard product={product}>
                    <ProductCard.Image />
                    <ProductCard.Title title={"hola mundo"} />
                    <ProductCard.Buttons  />
                </ProductCard> */}
            </div>
        </div>
    )
}

export default ShoppingPage
