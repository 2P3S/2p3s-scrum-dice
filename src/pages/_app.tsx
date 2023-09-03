import { Noto_Sans_KR, Lato } from 'next/font/google';
import type { AppProps } from 'next/app';
import Head from 'next/head';

import '@/styles/globals.css';

import { appWithTranslation } from 'next-i18next';
import { Header } from '@/components/templates/Header';
import Toast from '@/components/atoms/Toast';

const notoSansKr = Noto_Sans_KR({
  // preload: true, 기본값
  subsets: ['latin'], // 또는 preload: false
  weight: ['100', '300', '400', '700', '900'], // 가변 폰트가 아닌 경우, 사용할 fontWeight 배열
});

const lato = Lato({
  subsets: ['latin'],
  weight: ['100', '300', '400', '700', '900'],
});

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta
          name="description"
          content="Scrum Dice로 효율적인 플래닝 포커를 진행하세요! 다양한 기능을 제공하여 팀의 빠른 의사 결정을 도와드립니다. 지금 바로 시작해보세요!"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <style jsx global>
        {`
          :root {
            --font-lato: ${lato.style.fontFamily};
            --font-notoSansKr: ${notoSansKr.style.fontFamily};
          }
        `}
      </style>
      <Header />
      <Toast />
      <Component {...pageProps} />
    </>
  );
}

export default appWithTranslation(App);
