import { Main } from '@/components/templates/Main';
import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>Scrum Dice</title>
        <meta name="description" content="지금까지 없던 혁신적인 플래닝 포커 Scrum Dice" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Main />
    </>
  );
}
