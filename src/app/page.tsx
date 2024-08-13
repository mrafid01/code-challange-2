import Image from "next/image"
import Link from "next/link"
import Testimonials from "@/components/Testimonials"
import Products from "@/components/Products"

export default function Home() {
    return (
        <main>
            {/* ----------------------------- Hero Selection ----------------------------- */}
            <section
                className="hero min-h-screen"
                style={{
                    backgroundImage: "url(hero.webp)",
                }}
            >
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content w-full max-w-none flex-col lg:flex-row">
                    <div className="glass max-w-4xl flex-1 justify-start rounded-badge p-10">
                        <h1 className="text-5xl font-bold">Explore the Open Road with MotorRent</h1>
                        <h2 className="pt-3 text-3xl font-bold">Find Your Perfect Ride Today!</h2>
                        <p className="py-6">
                            Discover our wide range of well-maintained motorcycles ready to take you
                            on your next adventure. Whether for daily commuting or a weekend
                            getaway, we have the right bike for you. Easy rentals, unbeatable
                            prices, and excellent customer service.
                        </p>
                        <button className="btn btn-info">Book Now!</button>
                    </div>
                </div>
            </section>
            {/* -------------------------------------------------------------------------- */}

            {/* ---------------------------- Company overview ---------------------------- */}
            <section className="hero-content mx-auto min-h-screen max-w-7xl justify-between lg:flex-row">
                <div className="max-w-paragraph p-10 pl-4">
                    <h2 className="text-4xl font-bold">About Us</h2>
                    <h3 className="pt-4 italic">~ Effortless Mobility for Everyone ~</h3>
                    <p className="pb-6 pt-1">
                        Welcome to MotorRent, your premier solution for motorcycle rentals! We are a
                        leading motorcycle rental company committed to providing high-quality
                        service at competitive prices. With a wide selection of the latest models
                        and various types of motorcycles, from scooters to sport bikes, we are ready
                        to meet your transportation needs, whether for daily commuting, travel
                        adventures, or business purposes. Our priority is your comfort and
                        satisfaction, ensuring that every motorcycle in our fleet is well-maintained
                        and ready for use. Additionally, our easy and quick rental process, along
                        with friendly and professional customer service, ensures a delightful
                        experience with MotorRent. Discover the freedom of riding with MotorRent and
                        enjoy limitless journeys
                    </p>
                    <Link href={`/about-us`} className="btn btn-info">
                        Learn More
                    </Link>
                </div>
                <Image
                    src="/vector/vector-company.png"
                    alt="Vector Company"
                    width={500}
                    height={500}
                    className="hidden rounded-lg drop-shadow-xl xl:block"
                />
            </section>
            {/* -------------------------------------------------------------------------- */}

            {/* -------------------------------- Products -------------------------------- */}
            <section className="mx-auto w-full max-w-7xl px-3 py-10">
                <h2 className="mb-10 text-center text-4xl font-bold">Our Products</h2>
                <Products forPage="home" />

                <Link
                    href={"/products"}
                    className="btn btn-outline btn-info mx-auto mt-10 flex w-[95%] max-w-[1230px] px-0 text-center"
                >
                    View All
                </Link>
            </section>
            {/* -------------------------------------------------------------------------- */}

            {/* ------------------------------ Testimonials ------------------------------ */}
            <section className="mx-auto w-full max-w-7xl">
                <h2 className="mt-5 text-center text-4xl font-bold">Testimonials</h2>
                <h3 className="mt-2 text-center text-2xl font-bold italic">What Our Clients Say</h3>
                <Testimonials />
            </section>
            {/* -------------------------------------------------------------------------- */}
        </main>
    )
}
