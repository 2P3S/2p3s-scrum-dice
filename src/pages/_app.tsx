import type { AppProps } from 'next/app';

import classNames from 'classnames';
import { Noto_Sans_KR, Lato } from 'next/font/google';
import '@/styles/globals.css';

const notoSansKr = Noto_Sans_KR({
  // preload: true, 기본값
  subsets: ['latin'], // 또는 preload: false
  weight: ['100', '400', '700', '900'], // 가변 폰트가 아닌 경우, 사용할 fontWeight 배열
});

const lato = Lato({
  subsets: ['latin'], // preload에 사용할 subsets입니다.
  weight: ['100', '400', '700', '900'],
  variable: '--lato', // CSS 변수 방식으로 스타일을 지정할 경우에 사용합니다.
});

export default function App({ Component, pageProps }: AppProps) {
  return <Component className={classNames(notoSansKr.className, lato.variable)} {...pageProps} />;
}
