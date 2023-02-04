import Link from 'next/link';
import React from 'react';

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between py-3">
      <h2 className="text-lg font-bold">
        <Link href="/">E-Commerce</Link>
      </h2>
      <ul className='flex items-center gap-3'>
        <li>
          <Link href="/cart">Cart</Link>
        </li>
        <li>
          <Link href="/login">Login</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
