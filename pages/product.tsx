import * as React from 'react';
import { NextPage } from 'next';
// import { Home } from '../src/components/Home';
import { Layout } from '../src/components/Layout/';

const Page: NextPage = () => (
  <Layout>
    <div className="mt4 pt4 mb2 tc">
      <img className="w-60 db center" src="/static/images/plant1.png" />
      <h1 className="">Longevity Spinach</h1>
      <p>$55 – $174</p>
    </div>

    <p className="tc">Plants with Love™</p>
    <form className="mw55 center">
      <div className="dib relative noselect w-100 ">
        <div
          style={{ minHeight: '46px' }}
          className="ba pa3 bw15 tc overflow-hidden relative "
        >
          <div
            style={{ letterSpacing: '2px' }}
            className="truncate v-mid ttu fw6 f6 w-100"
          >
            Love
          </div>
        </div>
        <div
          style={{ minHeight: '46px' }}
          className="bl br  pa1  bw15 tc justify-between items-center flex relative "
        >
          <button className="pointer bn w-10 ma2 fw3 bg-transparent">-</button>
          <input
            style={{ letterSpacing: '2px' }}
            className="truncate v-mid fw6 f6 bn tc w-100"
            defaultValue={1}
          />
          <button className="pointer bn w-10 ma2 fw1 bg-transparent mr2">
            +
          </button>
        </div>
        <div
          style={{ minHeight: '46px' }}
          className="ba pa3 bw15 tc overflow-hidden relative "
        >
          <div
            style={{ letterSpacing: '2px' }}
            className="truncate v-mid ttu fw6 f6 w-100"
          >
            Add to Cart
          </div>
        </div>
      </div>
    </form>

    <p className="tc">6 in stock :)</p>
  </Layout>
);

export default Page;
