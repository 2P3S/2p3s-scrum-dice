import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
        <li>
          <Link href="/login">Contact</Link>
        </li>
        <li onMouseEnter={handleMenuMouseEnter} onMouseLeave={handleMenuMouseLeave} className="relative">
          <div
            className="flex space-x-2 peer"
            id="menu_button"
            role="button"
            aria-haspopup="true"
            aria-controls="menu"
            aria-expanded={isMenuOpen}
          >
            <Image src="/earth-globe.svg" width={20} height={20} alt="" />
            <span>KR</span>
            <Image src="/arrow-down.svg" width={12} height={12} alt="" />
          </div>
          <ul
            id="menu"
            role="menu"
            aria-labelledby="menu_button"
            className="invisible peer-aria-expanded:visible absolute w-[70px] text-center space-y-3 py-2 rounded bg-white"
          >
            <li role="none">
              <Link href="/" role="menuitem" className="">
                EN
              </Link>
            </li>
            <li role="none">
              <Link href="/" role="menuitem" className="text-sm">
                JP
              </Link>
            </li>
          </ul>
        </li>
      </ul>
    </nav>
  );
};
