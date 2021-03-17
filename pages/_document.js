import document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends document {
  static async getInitialProps(ctx) {
    const initialProps = await document.getInitialProps(ctx);
    return { ...initialProps };

  }

  render() {
    return (
      <Html>
        <Head>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument;