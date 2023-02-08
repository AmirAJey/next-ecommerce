import { useStore } from '@/utils/store';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';

const Navbar = () => {
  const { state } = useStore();
  const [count, setCount] = useState(0)
  useEffect(() => {
    setCount(state.cart.count)
  }, [state.cart.count])
  return (
    <nav className="flex items-center justify-between py-3">
      <h2 className="text-lg font-bold">
        <Link href="/">E-Commerce</Link>
      </h2>
      <ul className="flex items-center gap-3">
        <li className='flex gap-1'>
          <Link href="/cart">Cart</Link>
          {count > 0 && (
            <span className="badge">{count}</span>
          )}
        </li>
        <li>
          <Link href="/login">Login</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
