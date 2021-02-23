import React from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';

import { Container } from 'reactstrap';

const PageHeader = ({ header }) => (
  <div className='page-header'>
    <h1 className='page-header-title'>{header}</h1>
  </div>
);

const BasePage = ({
  indexPage,
  noWrapper,
  className = '',
  header,
  title = 'Portfolio - Atana',
  metaDescription = `My name is Athanasios Andrianesis, (Atana) and I am an 
  experienced software engineer and freelance developer. I have several years of experience working 
  on a wide range of technologies and projects from C# development for Document Management Projects,
  sto modern mobile and web applications in React, React-Native and Angular.`,
  canonicalPath,
  children,
}) => {
  const router = useRouter();
  const pageClass = indexPage ? 'index-page' : 'base-page';
  return (
    <>
      {/* <Head>
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
        <title>{title}</title>
        <meta name='description' key='description' content={metaDescription} />
        <meta name='title' key='title' content={title} />
        <meta property='og:title' key='og:title' content={title} />
        <meta property='og:locale' key='og:locale' content='en_EU' />
        <meta
          property='og:url'
          key='og:url'
          content={`${process.env.BASE_URL}${router.asPath}`}
        />
        <meta property='og:type' key='og:type' content='website' />
        <meta
          property='og:description'
          key='og:description'
          content={metaDescription}
        />
        <meta
          property='og:image'
          key='og:image'
          content={`${process.env.BASE_URL}/images/section-1.png`}
        />
        <link rel='icon' type='image/x-icon' href='/images/favicon.ico' />
        <link
          rel='canonical'
          href={`${process.env.BASE_URL}${
            canonicalPath ? canonicalPath : router.asPath
          }`}
        />
        <link
          href='https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;700&display=swap'
          rel='stylesheet'
        ></link>
      </Head> */}
      <div className={`${pageClass} ${className}`}>
        {noWrapper && (
          <>
            {header && <PageHeader header={header} />}
            {children}
          </>
        )}
        {!noWrapper && (
          <Container>
            {header && <PageHeader header={header} />}
            {children}
          </Container>
        )}
      </div>
    </>
  );
};

export default BasePage;
