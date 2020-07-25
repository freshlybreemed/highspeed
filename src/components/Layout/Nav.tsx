import * as React from 'react';

export const Nav: React.FunctionComponent = () => {
  return (
    <nav className="ba bw15  pb1 center flex items-center mb5 mb4-l">
      <ul className="list ph3 flex mv0">
        <li className=" mr2 pt4 mr4-ns">
          <a
            href="/about"
            className={` fw4 v-mid black link no-underline pb2  `}
          >
            About
          </a>
        </li>
        <li className="mr2 pt4 mr4-ns">
          <a
            href="/product"
            className={`fw4 v-mid  black link no-underline pb2  `}
          >
            Shop
          </a>
        </li>
        <a className="pt2 " href="/">
          <img
            className="w-20 db center pt0-ns pt2"
            src="/static/highspeedlogo.png"
          />
        </a>
        <li className="mr2 pt4 mr4-ns">
          <a
            href="/about"
            className={`fw4 black v-mid  link no-underline pb2  `}
          >
            FAQ
          </a>
        </li>
        <li className="mr2 pt4 mr4-ns">
          <a
            href="/about"
            className={`fw4 black v-mid link no-underline pb2  `}
          >
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
};
