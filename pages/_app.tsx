import 'isomorphic-fetch';
import * as React from 'react';
import App from 'next/app';

export default class extends App {
  static async getInitialProps({
    Component,
    ctx,
  }: {
    Component: any;
    ctx: any;
  }) {
    const server = !!ctx.req;
    const out = { server } as any;

    if (Component.getInitialProps) {
      return {
        ...out,
        pageProps: {
          ...(await Component.getInitialProps(ctx)),
        },
      };
    }

    return out;
  }

  render() {
    const { props } = this as any;
    const { Component, pageProps } = props;

    return <Component {...pageProps} />;
  }
}
