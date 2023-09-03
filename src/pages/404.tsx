import Image from 'next/image';
import { useRouter } from 'next/router';
import { Button } from '@/components/atoms/Button';

export default function Custom404() {
  const router = useRouter();

  return (
    <div className="flex flex-col justify-center items-center h-screen space-y-5">
      <Image src="/404-landing.jpg" alt="page error!" width="708" height="285" />
      <Button onClick={() =>router.push('/')}>Go to homepage</Button>
    </div>
  );
}
