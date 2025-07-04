import Image from 'next/image';
import Link from 'next/link';

export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 flex items-center justify-between bg-white/5 backdrop-blur-md shadow-md p-4">
      <div className="flex items-center">
        <Link href="/"> <Image src="/icons/logo.png" alt="Logo" width={50} height={50} /> </Link>
        <span className="ml-3 font-semibold text-lg"> | VIJAYA KRISHNA</span>
      </div>
      <nav className="flex space-x-4">
        <Link href="/">
          <span className="hover:text-blue-500">Home</span>
        </Link>
        <Link href="/about">
          <span className="hover:text-blue-500">About</span>
        </Link>
        <Link href="/projects">
          <span className="hover:text-blue-500">Projects</span>
        </Link>
        <Link href="/contact">
          <span className="hover:text-blue-500">Contact</span>
        </Link>
      </nav>
      
    </header>
  );
}

 