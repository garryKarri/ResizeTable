import Document, { Html, Head, Main, NextScript } from "next/document";
import { createCache, extractStyle, StyleProvider } from "@ant-design/cssinjs";


export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const cache = createCache();
    const originalRenderPage = ctx.renderPage;

    ctx.renderPage = () =>
      originalRenderPage({
        enhanceApp: (App) => (props) =>
          (
            <StyleProvider cache={cache}>
              <App {...props} />
            </StyleProvider>
          ),
      });

    const initialProps = await Document.getInitialProps(ctx);

    return {
      ...initialProps,
      styles: (
        <>
          {initialProps.styles}
          {/* This is hack, `extractStyle` does not currently support returning JSX or related data. */}
          <script
            dangerouslySetInnerHTML={{
              __html: `</script>${extractStyle(cache)}<script>`,
            }}
          />
        </>
      ),
    };
  }
  render() {
    return (
      <Html>
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

   // оригинал с сайта
// import Document, { Html, Head, Main, NextScript } from 'next/document'
 
// class MyDocument extends Document {
//   static async getInitialProps(ctx) {
//     const originalRenderPage = ctx.renderPage
 
//     // Run the React rendering logic synchronously
//     ctx.renderPage = () =>
//       originalRenderPage({
//         // Useful for wrapping the whole react tree
//         enhanceApp: (App) => App,
//         // Useful for wrapping in a per-page basis
//         enhanceComponent: (Component) => Component,
//       })
 
//     // Run the parent `getInitialProps`, it now includes the custom `renderPage`
//     const initialProps = await Document.getInitialProps(ctx)
 
//     return initialProps
//   }
 
//   render() {
//     return (
//       <Html lang="en">
//         <Head />
//         <body>
//           <Main />
//           <NextScript />
//         </body>
//       </Html>
//     )
//   }
// }
 
// export default MyDocument