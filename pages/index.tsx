import * as React from 'react';
import { NextPage } from 'next';
// import { Home } from '../src/components/Home';
import { Layout } from '../src/components/Layout/';

const Page: NextPage = () => (
  <Layout>
    <div className="">
      {/* <video
        style={{
          objectFit: 'cover',
          objectPosition: 'center center',
          top: 0,
          left: 0,
        }}
        className="dib w-100 absolute x y top left"
        loop
        autoPlay
      >
        <source
          data-src="https://player.vimeo.com/external/390337451.sd.mp4?s=57bbabbfdacf56f707d2e92b084477c7a187b1f7&amp;profile_id=165"
          src="https://player.vimeo.com/external/390337451.sd.mp4?s=57bbabbfdacf56f707d2e92b084477c7a187b1f7&amp;profile_id=165"
          type="video/mp4"
        />
      </video> 
      <div className="container--xxl x mxa rel z2 cw p1 f jcs">
        <div className="al p1 outer hero__primary-text">
          <div>
            <h2>
              Real cat food
              <span className="cooper">
                {' '}
                <br />
                made simple
              </span>
            </h2>
            <p>
              Welcome to the easiest way to feed your cat the variety of premium
              animal proteins they need. Get a Meal Plan or buy à la carte.
            </p>
          </div>
          <div>
            <a
              className="button-dark button--wide caps"
              type="button"
              href="/collections/shop-all"
            >
              Shop Now
            </a>
          </div>
        </div>
      </div>
      */}
    </div>
    <div>
      {/* <h1 className="tc">Wellness, Delivered</h1> */}
      <img
        className="w-100 db center"
        src="https://tryhighspeed.com/wp-content/uploads/2019/05/tabletophighspeed.jpg"
      />
    </div>

    <div className="tc mv5">
      <img
        className="w-20-ns w-30  tilt"
        src="https://i0.wp.com/tryhighspeed.com/wp-content/uploads/2019/05/999QQWvMSzX5Dxi6Pzyh42-ucUqyrpOhjvLZlrJEGqcpnqvaCcS7WaFhngeJckArGQl80GqKSq7QujZiyaIaUAEsk1Jk7TxxKT2mw1XgatD7EXnPm2ibnoQKs9A_dvRaxU581IXO.png?zoom=2&resize=324%2C324&ssl=1"
      />
      <img
        className="w-20-ns w-30 tilt "
        src="https://i1.wp.com/tryhighspeed.com/wp-content/uploads/2019/05/highspeednyc-green-1.png?zoom=2&resize=324%2C324&ssl=1"
      />
      <img
        className="w-20-ns w-30 tilt "
        src="https://i0.wp.com/tryhighspeed.com/wp-content/uploads/2020/03/siteuphaul-06-2.png?zoom=2&resize=324%2C324&ssl=1"
      />
    </div>
    {/* 
    <div className="overflow-hidden relative center bg-near-white pt4">
      <h1 className="tc f3 fw4">SHOP OUR FOOD</h1>
      <div className="justify-space flex-row items-center flex-wrap flex w-100">
        <a href="" className="black no-underline w-25-l w-40">
          <div className="ma2 ">
            <img
              className="overflow-hidden relative tilt w-100"
              src="/static/images/plant2.png"
            />
          </div>
          {/* <div className=" f3 tc">
            <span>
              Juco Juice <span className="fw5">></span>
            </span>
          </div> 
        </a>
        <a href="" className="black no-underline w-25-l w-40">
          <div className="ma2 ">
            <img
              className="overflow-hidden relative tilt w-100"
              src="/static/images/plant1.png"
            />
          </div>
        </a>
        <a href="" className="black no-underline w-25-l w-40">
          <div className="ma2 ">
            <img
              className="overflow-hidden relative tilt w-100"
              src="/static/images/plant3.png"
            />
          </div>

        </a>
        <a href="" className="black no-underline w-25-l w-40">
          <div className="ma2 ">
            <img
              className="overflow-hidden relative tilt w-100"
              src="/static/images/plant4.png"
            />
          </div>

        </a>
      </div>
      <a
        type="button"
        className="bg-black white ph5 pv3 no-underline f4 fw6 mt5 center tc"
        href=""
      >
        SHOP NOW
      </a>
    </div>
  */}
  </Layout>
);

export default Page;
