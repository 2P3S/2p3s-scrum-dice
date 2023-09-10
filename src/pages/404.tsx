import Image from 'next/image';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { Button } from '@/components/atoms/Button';

export default function Custom404() {
  const router = useRouter();

  return (
    <>
      <Head>
        <title>【Scrum Dice】 404</title>
      </Head>
      <div className="flex flex-col justify-center items-center h-screen space-y-5">
        <Image src="/404-landing.jpg" alt="page error!" width="708" height="285" />
        <Button onClick={() => router.push('/')}>Go to homepage</Button>
      </div>
    </>
  );
}
