import Head from 'next/head';
import Link from 'next/link';
import React from 'react';
import { BsArrowLeft } from 'react-icons/bs';

const Page = ({
  children,
  title,
  description = 'ecommerce page',
  backPage,
}) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
      </Head>
      <main className="flex-1 max-w-[95%] w-full mx-auto my-7">
        {backPage ? (
          <Link href={backPage.route}>
            <h4 className="flex items-center gap-2 group">
              <BsArrowLeft className="group-hover:-translate-x-1 transition-all" />
              back to {backPage.page}
            </h4>
          </Link>
        ) : null}

        {children}
      </main>
    </>
  );
};

export default Page;
