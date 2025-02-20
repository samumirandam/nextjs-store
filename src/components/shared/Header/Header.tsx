import Link from 'next/link';

export const Header = () => {
  return (
    <header>
      <nav>
        <ul className='flex align-middle gap-4'>
          <Link href={'/'}>
            <li>Home</li>
          </Link>
          <Link href={'/store'}>
            <li>Store</li>
          </Link>
        </ul>
      </nav>
    </header>
  );
};
