import Link from "next/link"
import Image from "next/image"
import { FaWhatsapp } from "react-icons/fa6"

export default function Header() {
    return (
        <header className="bg-base-100">
            <nav className="navbar mx-auto max-w-7xl">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div
                            tabIndex={0}
                            role="button"
                            className="btn btn-ghost lg:hidden"
                            aria-label="Dropdown Button"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16"
                                />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu dropdown-content menu-sm z-[1] mt-3 w-52 rounded-box bg-base-100 p-2 shadow"
                        >
                            <li>
                                <Link href={"/"}>Home</Link>
                            </li>
                            <li>
                                <Link href={"/about-us"}>About Us</Link>
                            </li>
                            <li>
                                <Link href={"/products"}>Products</Link>
                            </li>
                            <li>
                                <Link href={"/teams"}>Teams</Link>
                            </li>
                        </ul>
                    </div>
                    <Link href={`/`} className="btn btn-ghost text-xl hover:bg-transparent">
                        <Image
                            src={`/logo-svg/logo-no-background.svg`}
                            alt="Logo"
                            width={1500}
                            height={1500}
                            className="h-1/2 w-auto sm:h-full dark:invert"
                        />
                    </Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li>
                            <Link href={"/"}>Home</Link>
                        </li>
                        <li>
                            <Link href={"/about-us"}>About Us</Link>
                        </li>
                        <li>
                            <Link href={"/products"}>Products</Link>
                        </li>
                        <li>
                            <Link href={"/teams"}>Teams</Link>
                        </li>
                    </ul>
                </div>
                <div className="navbar-end">
                    <Link
                        href={
                            "https://wa.me/6281234567899?text=Halo%2C%20MotorRent.%20Saya%20butuh%20bantuan."
                        }
                        target="_blank"
                        className="btn btn-outline btn-error"
                    >
                        <FaWhatsapp className="h-full" />
                        Layanan Darurat
                    </Link>
                </div>
            </nav>
        </header>
    )
}
