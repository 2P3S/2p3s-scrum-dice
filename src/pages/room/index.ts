import CreateRoom from "@/components/templates/CreateRoom";

import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

export const getStaticProps = async ({ locale }: any) => ({
  props: {
    ...(await serverSideTranslations(locale, ['common', 'createroom'])),
  },
});

export default CreateRoom