import * as React from 'react';
import { NextPage } from 'next';
// import { Home } from '../src/components/Home';
import { Layout } from '../src/components/Layout/';

const Page: NextPage = () => (
  <Layout>
    <div className="mv4 pv4">
      <h1 className="tc">Wellness, Delivered</h1>
      <img
        className="w-70-ns w-100 db center"
        src="https://tryhighspeed.com/wp-content/uploads/2019/05/tabletophighspeed.jpg"
      />
    </div>

    <div className="tc">
      <img
        className="w-20 grow "
        src="https://i0.wp.com/tryhighspeed.com/wp-content/uploads/2019/05/999QQWvMSzX5Dxi6Pzyh42-ucUqyrpOhjvLZlrJEGqcpnqvaCcS7WaFhngeJckArGQl80GqKSq7QujZiyaIaUAEsk1Jk7TxxKT2mw1XgatD7EXnPm2ibnoQKs9A_dvRaxU581IXO.png?zoom=2&resize=324%2C324&ssl=1"
      />
      <img
        className="w-20 grow "
        src="https://i1.wp.com/tryhighspeed.com/wp-content/uploads/2019/05/highspeednyc-green-1.png?zoom=2&resize=324%2C324&ssl=1"
      />
      <img
        className="w-20 grow "
        src="https://i0.wp.com/tryhighspeed.com/wp-content/uploads/2020/03/siteuphaul-06-2.png?zoom=2&resize=324%2C324&ssl=1"
      />
    </div>
  </Layout>
);

export default Page;
