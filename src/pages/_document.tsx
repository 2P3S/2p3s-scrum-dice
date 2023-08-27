import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="kr">
      <Head>
        <meta
          name="description"
          content="Scrum Dice로 효율적인 플래닝 포커를 진행하세요! 다양한 기능을 제공하여 팀의 빠른 의사 결정을 도와드립니다. 지금 바로 시작해보세요!"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
