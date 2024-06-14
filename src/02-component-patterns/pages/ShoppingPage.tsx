import { useCallback, useState } from 'react';
import { ProductCard, ProductButtons, ProductImage, ProductTitle } from '../components/'
import { products } from '../data/product'
import '../styles/custom-styles.css'

const product = products[0];

const ShoppingPage = () => {

  return (
    <div>
      <h1>Shopping Store</h1>
      <hr />
      <div style={{//style inline
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
      }}>

        <ProductCard
          product={product}
          className='bg-dark text-bold'
          key={product.id}
          initialValues={{
            count: 4,
            maxCount: 10,
          }}
        >
          {
            ({ reset }) => (
              <>
                <ProductImage className='custom-image' />
                <ProductTitle className='text-white' />
                <ProductButtons className='custom-button' />

                <button onClick={reset}>Reset</button>
              </>
            )
          }
        </ProductCard>
      </div>

    </div>
  )
}

export default ShoppingPage
