import Layout from "../components/Layout";
import App, { Container } from "next/app";
import React from "react";
import { config } from "../lib/apollo";
import { ApolloProvider } from "@apollo/react-hooks";

class MyApp extends App {
  static async getInitialProps({ Component, router, ctx }) {
    let pageProps = {};
    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }
    return { pageProps };
  }

  render() {
    const { Component, ctx, pageProps } = this.props;
    return (
      <Container>
        <ApolloProvider client={config}>
          <Layout {...pageProps}>
            <Component {...pageProps} />
          </Layout>
          <style jsx global>
            {`
              a {
                color: white !important;
              }
              a:link {
                text-decoration: none !important;
                color: white !important;
              }
              a:hover {
                color: white;
              }
              .card {
                display: inline-block !important;
              }
              .card-columns {
                column-count: 3;
              }
            `}
          </style>
        </ApolloProvider>
      </Container>
    );
  }
}

export default MyApp;
