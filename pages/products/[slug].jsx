import { Page } from '@/components';
import { data } from '@/utils/data';
import Image from 'next/image';
import { useRouter } from 'next/router';
import React from 'react';

const ProductDetail = () => {
  const {
    query: { slug },
  } = useRouter();
  const product = data.products.find((p) => p.slug === slug);
  if (!product) return <p>product not found</p>;
  const {
    name,
    img,
    category_id,
    brand_id,
    countInStock,
    numReviews,
    price,
    rating,
    description,
  } = product;
  const category = data.categories.find((c) => c.id === category_id);
  const brand = data.brands.find((b) => b.id === brand_id);
  const isInStock = Boolean(countInStock);
  return (
    <Page title={name} backPage={{ page: 'products', route: '/products' }}>
      <div className="flex items-start gap-5 mt-5">
        <Image src={img} alt={name} width={640} height={640} />
        <div className="flex items-start flex-1">
          <ul className="flex-1">
            <li>
              <h4 className="text-lg font-semibold">{name}</h4>
            </li>
            <li>
              <p className="">Category: {category.name}</p>
            </li>
            <li>
              <p className="">Brand: {brand.name}</p>
            </li>
            <li>
              <p className="">
                {rating} of {numReviews} reviews
              </p>
            </li>
            <li>
              <p className="">Description: {description}</p>
            </li>
          </ul>
          <div className="card sticky top-0 min-w-[250px] p-5">
            <div className="flex justify-between items-center">
              <span>price</span>
              <span>${price}</span>
            </div>
            <div className="flex justify-between items-center">
              <span>status</span>
              <span className={`${!isInStock ? 'text-red-500' : ''}`}>
                {isInStock ? 'In stock' : 'Out of stock'}
              </span>
            </div>
            <button className="primary w-full mt-3">
              Add To Cart
            </button>
          </div>
        </div>
      </div>
    </Page>
  );
};

export default ProductDetail;
