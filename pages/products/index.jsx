import { Page, Product } from '@/components'
import { data } from '@/utils/data'
import React from 'react'

const Products = () => {
  return (
    <Page>
      <ul className="card-list">
        {data.products.map((product) => (
          <Product key={product.id} {...product} />
        ))}
      </ul>
    </Page>
  )
}

export default Products