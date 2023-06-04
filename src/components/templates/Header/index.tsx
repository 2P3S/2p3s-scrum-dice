import { Logo } from '@/components/molecules/Logo';
import { Navigation } from '@/components/molecules/Navigation';

export const Header = () => {
  return (
    <header className="flex flex-col items-center py-5 space-y-5 border-b border-slate-100">
      <Logo />
      <Navigation />
    </header>
  );
};
