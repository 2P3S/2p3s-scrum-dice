import { useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Image from 'next/image';

export const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { locale, pathname } = useRouter();

  const renameLocale = (locale?: string) => {
    switch (locale) {
      case 'en':
        return 'EN';
      case 'ko':
        return 'KR';
      case 'ja':
        return 'JP';
      default:
        return 'EN';
    }
  };

  const handleMenuMouseEnter = () => {
    setIsMenuOpen(true);
  };

  const handleMenuMouseLeave = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="text-sm text-gray-600">
      <ul className="flex items-center space-x-12">
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/room">Room</Link>
        </li>
        { pathname==='/'
        ? <li onMouseEnter={handleMenuMouseEnter} onMouseLeave={handleMenuMouseLeave} className="relative">
          <div
            className="flex space-x-2 peer"
            id="menu_button"
            role="button"
            aria-haspopup="true"
            aria-controls="menu"
            aria-expanded={isMenuOpen}
          >
            <Image src="/earth-globe.svg" width={20} height={20} alt="" />
            <span>{ renameLocale(locale) }</span>
            <Image src="/arrow-down.svg" width={12} height={12} alt="" />
          </div>
          <ul
            id="menu"
            role="menu"
            aria-labelledby="menu_button"
            className="invisible peer-aria-expanded:visible absolute w-[70px] text-center space-y-3 py-2 rounded bg-white"
          >
            <li role="menuitem">
              <Link href="/" className="" locale="en">
                EN
              </Link>
            </li>
            <li role="menuitem">
              <Link href="/" className="" locale="ko">
                KR
              </Link>
            </li>
            <li role="menuitem">
              <Link href="/" className="text-sm" locale="ja">
                JP
              </Link>
            </li>
          </ul>
        </li>
        : <></>
        }
      </ul>
    </nav>
  );
};
