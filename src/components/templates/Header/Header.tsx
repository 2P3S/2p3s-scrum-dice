import { Logo } from '@/components/molecules/Logo';
import { Navigation } from '@/components/molecules/Navigation';

export const Header = () => {
  return (
    <header className="flex flex-col items-center py-6 space-y-5">
      <Logo />
      <Navigation />
    </header>
  );
};
