import Document, { Main, NextScript } from 'next/document';
import { Head } from 'next/document';
export default class MyDocument extends Document {
  render() {
    return (
      <html lang="en-US">
        <body>
          <Head>
            <link href="/static/fonts/HeadlinerNo45.ttf" rel="stylesheet" type="text/css" />
            {/* <!-- Favicons --> */}
            <link rel="manifest" href="/static/manifest.json" />
            <link rel="apple-touch-icon" sizes="57x57" href="/static/icons/apple-icon-57x57.png" />
            <link rel="apple-touch-icon" sizes="60x60" href="/static/icons/apple-icon-60x60.png" />
            <link rel="apple-touch-icon" sizes="72x72" href="/static/icons/apple-icon-72x72.png" />
            <link rel="apple-touch-icon" sizes="76x76" href="/static/icons/apple-icon-76x76.png" />
            <link
              rel="apple-touch-icon"
              sizes="114x114"
              href="/static/icons/apple-icon-114x114.png"
            />
            <link
              rel="apple-touch-icon"
              sizes="120x120"
              href="/static/icons/apple-icon-120x120.png"
            />
            <link
              rel="apple-touch-icon"
              sizes="144x144"
              href="/static/icons/apple-icon-144x144.png"
            />
            <link
              rel="apple-touch-icon"
              sizes="152x152"
              href="/static/icons/apple-icon-152x152.png"
            />
            <link
              rel="apple-touch-icon"
              sizes="180x180"
              href="/static/icons/apple-icon-180x180.png"
            />
            <link
              rel="icon"
              type="image/png"
              sizes="192x192"
              href="/static/icons/android-icon-192x192.png"
            />
            <link
              rel="icon"
              type="image/png"
              sizes="32x32"
              href="/static/icons/favicon-32x32.png"
            />
            <link
              rel="icon"
              type="image/png"
              sizes="96x96"
              href="/static/icons/favicon-96x96.png"
            />
            <link
              rel="icon"
              type="image/png"
              sizes="16x16"
              href="/static/icons/favicon-16x16.png"
            />

            <meta name="msapplication-TileColor" content="#ffffff" />
            <meta name="msapplication-TileImage" content="/ms-icon-144x144.png" />
            <meta name="theme-color" content="#ffffff" />
            <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
            <meta name="theme-color" content="#000000" />
            <link rel="manifest" href="%PUBLIC_URL%/static/manifest.json" />

            {/* <!-- Bootstrap --> */}
            <link
              rel="stylesheet"
              href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
              integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
              crossOrigin="anonymous"
            />
            {/* <!-- Font Awesome --> */}
            <link
              rel="stylesheet"
              href="https://use.fontawesome.com/releases/v5.8.1/css/all.css"
              integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf"
              crossOrigin="anonymous"
            />
            <script
              src="https://code.jquery.com/jquery-3.3.1.slim.min.js"
              integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo"
              crossOrigin="anonymous"
            />
            <script
              src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js"
              integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1"
              crossOrigin="anonymous"
            />
            {/* <script
              src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"
              integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM"
              crossOrigin="anonymous"
            /> */}
          </Head>
          <Main />
          <NextScript />
          <script
            data-ad-client="ca-pub-9747865315387020"
            async
            src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"
          />
        </body>
      </html>
    );
  }
}
