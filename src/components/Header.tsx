import Link from 'next/link';
import Image from 'next/image';
import { FaWhatsapp } from 'react-icons/fa6';

export default function Header() {
    return (
        <header className="bg-red-500">
            <nav className="navbar bg-base-100 px-32">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            <li>
                                <Link href={'/'}>Home</Link>
                            </li>
                            <li>
                                <Link href={'/about'}>About Us</Link>
                            </li>
                            <li>
                                <Link href={'/products'}>Products</Link>
                            </li>
                            <li>
                                <Link href={'/teams'}>Teams</Link>
                            </li>
                        </ul>
                    </div>
                    <Link href={`/`} className="btn btn-ghost text-xl hover:bg-transparent">
                        <Image src={`/logo-svg/logo-no-background.svg`} alt="Logo" width={1500} height={1500} className="h-full w-auto dark:invert" />
                    </Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li>
                            <Link href={'/'}>Home</Link>
                        </li>
                        <li>
                            <Link href={'/about'}>About Us</Link>
                        </li>
                        <li>
                            <Link href={'/products'}>Products</Link>
                        </li>
                        <li>
                            <Link href={'/teams'}>Teams</Link>
                        </li>
                    </ul>
                </div>
                <div className="navbar-end">
                    <Link href={'/'} className="btn">
                        <FaWhatsapp className="h-full" />
                        Button
                    </Link>
                </div>
            </nav>
        </header>
    );
}
