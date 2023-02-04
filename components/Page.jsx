import Head from 'next/head';
import React from 'react';

const Page = ({ children, title, description = 'ecommerce page' }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
      </Head>
      <main className='flex-1 max-w-[95%] mx-auto my-7'>
      {children}
      </main>
    </>
  );
};

export default Page;
