import { useStore } from '@/utils/store';
import { Page } from 'components';
import Image from 'next/image';
import React from 'react';
import { CiCircleRemove } from 'react-icons/ci';
import dynamic from 'next/dynamic';
import Link from 'next/link';

const Table = ({ items, onRemove, onChange }) => {
  return (
    <table className="min-w-[550px] w-full">
      <thead className="border-b">
        <tr className="text-left">
          <th className="p-2">Item</th>
          <th className="p-2">Quantity</th>
          <th className="p-2">Price</th>
          <th className="p-2 text-center w-24">Action</th>
        </tr>
      </thead>
      <tbody className="">
        {items.map((item) => {
          const { img, name, price, countInStock } = item.product;
          return (
            <tr key={item.product.id} className="border-b">
              <td className="p-2 flex items-center gap-2">
                <Image src={img} alt={name} width={50} height={50} />
                <p>{name}</p>
              </td>
              <td className="p-2">
                <select
                  defaultValue={item.count}
                  onChange={(e) => onChange(item.id, e.target.value)}
                >
                  {
                    [...Array(countInStock).keys()].map((num) => (
                      <option key={num} value={num + 1}>
                        {num + 1}
                      </option>
                    ))
                    // renderQuantityOptions(countInStock)
                  }
                </select>
              </td>
              <td className="p-2">${price}</td>
              <td className="p-2 text-center">
                <button
                  onClick={() => onRemove(item.id)}
                  className="text-xl font-bold hover:text-red-500"
                >
                  <CiCircleRemove />
                </button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

const Cart = () => {
  const { state, dispatch } = useStore();
  const subtotal = state.cart.items.reduce(
    (total, item) => total + item.count * item.product.price,
    0
  );
  const handleRemove = (cartId) => {
    dispatch({ type: 'CART_REMOVE_ITEM', payload: cartId });
  };
  const handleChange = (cartId, newQuantity) => {
    dispatch({
      type: 'CART_UPDATE_ITEM_COUNT',
      payload: { cartId, quantity: Number(newQuantity) },
    });
  };
  return (
    <Page title="cart" backPage={{ page: 'products', route: '/products' }}>
      <h1 className="text-xl mt-2 mb-4">Shopping Cart</h1>
      {state.cart.count > 0 ? (
        <div className="flex flex-col md:flex-row items-start gap-8">
          <div className="overflow-auto flex-1 w-full">
            <Table
              items={state.cart.items}
              onRemove={handleRemove}
              onChange={handleChange}
            />
          </div>
          <div className="card mx-auto mt-5 md:mt-0 w-72 p-5">
            <h1 className="flex items-center justify-between font-semibold text-lg">
              Subtotal({state.cart.count}):
              <span>${subtotal}</span>
            </h1>
            <Link href="/login?redirect=/shipping">
              <button className="primary mt-3 w-full">Check Out</button>
            </Link>
          </div>
        </div>
      ) : (
        <div className='italic h-32 bg-slate-200 text-slate-600 center-grid rounded'>
          cart list is empty
        </div>
      )}
    </Page>
  );
};

export default dynamic(() => Promise.resolve(Cart), { ssr: false });
