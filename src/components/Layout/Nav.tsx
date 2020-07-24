import * as React from 'react';

export const Nav: React.FunctionComponent = () => {
  return (
    <nav className=" center flex items-center mb5 mb4-l">
      <ul className="list pl0 flex mv0">
        <li className=" mr2 pt4 mr4-ns">
          <a
            href="/about"
            className={` fw6 black link no-underline pb2 underline-hover `}
          >
            About
          </a>
        </li>
        <li className="mr2 pt4 mr4-ns">
          <a
            href="/about"
            className={`fw6 black link no-underline pb2 underline-hover `}
          >
            Shop
          </a>
        </li>
        <img
          className="w-20 db center pt0-ns pt2"
          src="/static/highspeedlogo.png"
        />
        <li className="mr2 pt4 mr4-ns">
          <a
            href="/about"
            className={`fw6 black link no-underline pb2 underline-hover `}
          >
            FAQ
          </a>
        </li>
        <li className="mr2 pt4 mr4-ns">
          <a
            href="/about"
            className={`fw6 black link no-underline pb2 underline-hover `}
          >
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
};
