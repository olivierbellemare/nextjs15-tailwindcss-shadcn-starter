'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Navbar = () => {
  const pathname = usePathname();

  return (
    <nav className="bg-White30 backdrop-blur-xs p-4 gap-4 flex">
      <Link href="./" className={`text-White70 hover:text-gray-300 ${ pathname === '/' ? 'underline' : '' }`}>Home</Link>
      <Link href="/about" className={`text-White70 hover:text-gray-300 ${ pathname === '/about' ? 'underline' : '' }`}>About</Link>
      <Link href="/contact" className={`text-White70 hover:text-gray-300 ${ pathname === '/contact' ? 'underline' : '' }`}>Contact</Link>   
    </nav>
  );
};

export default Navbar;