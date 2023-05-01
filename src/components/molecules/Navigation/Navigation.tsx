import Link from 'next/link';

export const Navigation = () => {
  return (
    <nav>
      <ul className="flex space-x-12 text-gray-600">
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/room">Rooms</Link>
        </li>
        <li>
          <Link href="/login">Contact</Link>
        </li>
      </ul>
    </nav>
  );
};
