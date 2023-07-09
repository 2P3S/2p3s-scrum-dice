import { Paragraph } from '@/components/atoms/Paragraph';
import Image from 'next/image';
import Link from 'next/link';

export const Logo = () => {
  return (
    <Link className="flex items-center" href="/">
      <Image src="/logo.png" alt="logo" width="48" height="48" />
      <Paragraph size="large" className="text-blue-600 font-bold ml-1.5 font-lato">
        Scrum Dice
      </Paragraph>
    </Link>
  );
};
