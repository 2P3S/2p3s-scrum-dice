import { Main } from '@/components/templates/Main';
import Head from 'next/head';

import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';

export default function Home() {
  const translate = useTranslation(['common', 'createroom']).t;

  return (
    <>
      <Head>
        <title>Scrum Dice</title>
        <meta name="description" content="지금까지 없던 혁신적인 플래닝 포커 Scrum Dice" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    </>
  );
}

export const getStaticProps = async ({ locale }: any) => ({
  props: {
    ...(await serverSideTranslations(locale, ['common', 'createroom'])),
  },
});
