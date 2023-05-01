import { Header } from '@/components/templates/Header';
import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="kr">
      <Head />
      <body>
        <Header />
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
