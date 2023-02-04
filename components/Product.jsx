import { data } from '@/utils/data';
import Link from 'next/link';
import React from 'react';

const Product = ({ name, slug, brand_id, img, price }) => {
  const brand = data.brands.find((brand) => brand.id === brand_id);
  return (
    <li className="card">
      <Link href={`/products/${slug}`}>
        <img src={img} alt={name} />
      </Link>
      <div className="text-center p-5">
        <Link href={`/products/${slug}`}>
          <h4 className="text-lg">{name}</h4>
        </Link>
        <h4 className="text-base">{brand.name}</h4>
        <h4 className="font-semibold">${price}</h4>
        <button className="primary">Add To Cart</button>
      </div>
    </li>
  );
};

export default Product;
