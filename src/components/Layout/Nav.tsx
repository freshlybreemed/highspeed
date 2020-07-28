import * as React from 'react';

export const Nav: React.FunctionComponent = () => {
  return (
    <nav className="ba bw15  pb1 center flex items-center">
      <div className="list dtc w-100 v-mid ph3 tl mv0">
        <a
          href="/about"
          className={` fw4 v-mid black link no-underline pb2 dib mr3 mr4-ns `}
        >
          About
        </a>

        <a
          href="/product"
          className={`fw4 v-mid  black link no-underline pb2 dib mr3 mr4-ns `}
        >
          Shop
        </a>
      </div>
      <a className="pt2 " href="/">
        <img className="dib w3 h3 br-100" src="/static/highspeedlogo.png" />
      </a>
      <div className="list dtc w-100 v-mid ph3 tr mv0">
        <a
          href="/about"
          className={`fw4 black v-mid  link no-underline pb2 dib mr3 mr4-ns `}
        >
          FAQ
        </a>

        <a
          href="/about"
          className={`fw4 black v-mid link no-underline pb2 dib mr3 mr4-ns `}
        >
          Contact
        </a>
      </div>
    </nav>
  );
};
