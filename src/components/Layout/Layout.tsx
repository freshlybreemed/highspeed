import * as React from 'react';
import { Nav, Footer } from '.';
import Head from 'next/head';
import classnames from 'classnames';
import {
  SITE_NAME,
  SITE_TITLE,
  SITE_DESCRIPTION,
  SITE_IMAGE,
} from '../../constants/env';

interface LayoutProps {
  noPadding?: boolean;
  data?: {
    title: string;
    header: string;
    description: string;
  };
}
export const Layout: React.FunctionComponent<LayoutProps> = ({
  noPadding,
  children,
  data,
}) => (
  <div className={`black relative`}>
    {/*language=PostCSS*/}
    <Head>
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, shrink-to-fit=no"
      />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={data ? data.header : SITE_NAME} />
      <meta property="og:title" content={data ? data.title : SITE_TITLE} />
      <title>{data ? data.title : SITE_TITLE}</title>
      <meta
        property="og:description"
        content={data ? data.description : SITE_DESCRIPTION}
      />
      <meta property="og:image" content={SITE_IMAGE} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content={SITE_NAME} />
      <meta name="twitter:title" content={SITE_TITLE} />
      <meta name="twitter:description" content={SITE_DESCRIPTION} />
      <meta property="twitter:image" content={SITE_IMAGE} />
      <meta
        name="format-detection"
        content="telephone=no, address=no, email=no"
      />
    </Head>
    <div className="db" />
    <div
      className={`${classnames({
        'pa4-ns pa3': noPadding,
      })}`}
    >
      <Nav />
    </div>
    <main className="relative">{children}</main>
    <div
      className={`${classnames({
        'pa4-ns pa3': noPadding,
      })}`}
    >
      <Footer />
    </div>
  </div>
);
