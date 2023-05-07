import { Noto_Sans_KR, Lato } from 'next/font/google';
import type { AppProps } from 'next/app';

import '@/styles/globals.css';
import { Header } from '@/components/templates/Header';

const notoSansKr = Noto_Sans_KR({
  // preload: true, 기본값
  subsets: ['latin'], // 또는 preload: false
  weight: ['100', '300', '400', '700', '900'], // 가변 폰트가 아닌 경우, 사용할 fontWeight 배열
});

const lato = Lato({
  subsets: ['latin'],
  weight: ['100', '300', '400', '700', '900'],
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <style jsx global>
        {`
          :root {
            --font-lato: ${lato.style.fontFamily};
            --font-notoSansKr: ${notoSansKr.style.fontFamily};
          }
        `}
      </style>
      <Header />
      <Component {...pageProps} />
    </>
  );
}
