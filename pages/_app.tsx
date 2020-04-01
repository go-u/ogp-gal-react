import React from 'react';
import { Provider } from 'react-redux';
import App from 'next/app';
import Head from 'next/head';
import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import '../styles/index.sass';
import store from '../stores/index';
import theme from '../components/theme';

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;

    return (
      <>
        <Head>
          <title>Ogpギャラリー</title>
          <meta name="theme-color" content={theme.palette.primary.main} />
          <meta charSet="utf-8" />
          <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
          <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />

          {/* twitter oEmbed */}
          <script async src="https://platform.twitter.com/widgets.js" />
        </Head>

        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Provider store={store}>
            {/* eslint-disable-next-line react/jsx-props-no-spreading */}
            <Component {...pageProps} />
          </Provider>
        </ThemeProvider>
      </>
    );
  }
}
