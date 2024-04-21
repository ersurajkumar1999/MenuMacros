import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en" >
        <Head>
          {/* Place any custom tags you want in the head here */}
        </Head>
        <body style={{ padding: '0px', margin: '0px' }}>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
