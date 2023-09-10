import Head from "next/head";
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import { CreateRoom as CreateRoomTemplate } from "@/components/templates/CreateRoom";

export const getStaticProps = async ({ locale }: any) => ({
  props: {
    ...(await serverSideTranslations(locale, ['createroom'])),
  },
});

export default function CreateRoom() {
  return (
    <>
      <Head>
        <title>【Scrum Dice】 Create Room</title>
      </Head>
      <CreateRoomTemplate />
    </>
  );
}