import Head from 'next/head';

// styles
import classNames from 'classnames';
import { Noto_Sans_KR, Lato } from 'next/font/google';

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

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={classNames(notoSansKr.className, lato.variable)}></main>
    </>
  );
}
