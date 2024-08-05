import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
    return (
        <main>
            {/* ----------------------------- Hero Selection ----------------------------- */}
            <section
                className="hero min-h-screen "
                style={{
                    // backgroundImage: 'url(https://www.motosikletsitesi.com/wp-content/uploads/2021/11/50cc-motor-modelleri.jpeg)',
                    backgroundImage: 'url(hero.jpeg)',
                }}
            >
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content flex-col lg:flex-row w-full max-w-none">
                    <div className="max-w-4xl flex-1 justify-start glass p-10 rounded-badge">
                        <h1 className="text-5xl font-bold">Explore the Open Road with MotorRent</h1>
                        <h2 className="text-3xl pt-3 font-bold">Find Your Perfect Ride Today!</h2>
                        <p className="py-6">Discover our wide range of well-maintained motorcycles ready to take you on your next adventure. Whether for daily commuting or a weekend getaway, we have the right bike for you. Easy rentals, unbeatable prices, and excellent customer service.</p>
                        <button className="btn btn-primary">Book Now!</button>
                    </div>
                    {/* <div className="max-w-md rounded-lg shadow-2xl">
                        <Image src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp" alt="Hero Image" width={100} height={100} className="w-full h-full object-cover" />
                    </div> */}
                </div>
            </section>
            {/* -------------------------------------------------------------------------- */}

            {/* ---------------------------- Company overview ---------------------------- */}
            <section className="min-h-screen hero-content justify-between lg:flex-row px-32 max-w-[1550px] mx-auto">
                <div className="p-10 pl-4 max-w-paragraph">
                    <h2 className="text-4xl font-bold">About Us</h2>
                    <h3 className="pt-4 italic">~ Effortless Mobility for Everyone ~</h3>
                    <p className="pb-6 pt-1">Welcome to MotorRent, your premier solution for motorcycle rentals! We are a leading motorcycle rental company committed to providing high-quality service at competitive prices. With a wide selection of the latest models and various types of motorcycles, from scooters to sport bikes, we are ready to meet your transportation needs, whether for daily commuting, travel adventures, or business purposes. Our priority is your comfort and satisfaction, ensuring that every motorcycle in our fleet is well-maintained and ready for use. Additionally, our easy and quick rental process, along with friendly and professional customer service, ensures a delightful experience with MotorRent. Discover the freedom of riding with MotorRent and enjoy limitless journeys</p>
                    <Link href={`/about`} className="btn btn-primary">
                        Learn More
                    </Link>
                </div>
                <Image src="/vector-company.png" alt="Vector Company" width={500} height={500} className="rounded-lg shadow-2xl hidden xl:block" />
                {/* <img src="/vector-company.png" alt="Vector Company" className="rounded-lg shadow-2xl hidden lg:block" /> */}
                {/* <figure className="rounded-lg shadow-2xl hidden lg:block w-fit h-fit">
                    <Image src="/vector-company.png" alt="Vector Company" width={1000} height={1000} className="w-[500px] h-[500px]" />
                </figure> */}
            </section>
            {/* -------------------------------------------------------------------------- */}

            {/* -------------------------------- Products -------------------------------- */}
            <section className="p-10">
                <h2 className="text-center text-4xl font-bold mb-10">Our Products</h2>
                <div className="flex flex-row gap-10 flex-wrap justify-center">
                    <div className="card bg-base-100 w-96 shadow-xl">
                        {/* TODO: img 384 x 384; ratio 1:1 */}
                        <figure className="px-10 pt-10 h-[65%]">
                            <Image src="/vespa.png" alt="Vespa" width={1000} height={1000} className="w-full h-full object-cover" />
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title">
                                Vespa
                                <div className="badge bg-red-600 text-white">HOT</div>
                            </h2>
                            <p>IDR 250,000 / Day</p>
                            <div className="card-actions justify-end">
                                <button className="btn btn-primary">Details</button>
                            </div>
                        </div>
                    </div>

                    <div className="card bg-base-100 w-96 shadow-xl">
                        <figure className="px-10 pt-10 h-[65%]">
                            <Image src="/nmax.png" alt="Nmax" width={1000} height={1000} className="w-full h-full object-cover" />
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title">
                                Yamaha NMax 155
                                <div className="badge bg-red-600 text-white">HOT</div>
                            </h2>
                            <p>IDR 200,000 / Day</p>
                            <div className="card-actions justify-end">
                                <button className="btn btn-primary">Details</button>
                            </div>
                        </div>
                    </div>

                    <div className="card bg-base-100 w-96 shadow-xl">
                        <figure className="px-10 pt-10 h-[65%]">
                            <Image src="/zx25.png" alt="ZX-25" width={1000} height={1000} className="w-full h-full object-cover" />
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title">
                                Kawasaki ZX-25
                                <div className="badge bg-red-600 text-white">HOT</div>
                            </h2>
                            <p>IDR 500,000 / Day</p>
                            <div className="card-actions justify-end">
                                <button className="btn btn-primary">Details</button>
                            </div>
                        </div>
                    </div>
                </div>
                <Link href={'/products'} className="btn btn-outline btn-primary flex w-[95%] max-w-[1230px] mx-auto mt-10 px-0 text-center">
                    View All
                </Link>
            </section>
            {/* -------------------------------------------------------------------------- */}

            {/* ------------------------------ Testimonials ------------------------------ */}
            <section>
                <h2 className="text-center text-4xl font-bold mt-5">Testimonials</h2>
                <h3 className="text-center text-2xl font-bold italic mt-2">What Our Clients Say</h3>
                <div className="carousel h-full w-full">
                    <div id="slide1" className="carousel-item relative w-full">
                        <div className="w-full p-10 rounded-box bg-base-300 my-10 mx-36 flex flex-col justify-center items-center gap-5 shadow-2xl">
                            <div className="text-center">
                                <p className="tracking-[.3em] italic text-lg">“ Lorem ipsum odor amet, consectetuer adipiscing elit. Felis ex mus hac; nascetur bibendum volutpat. Montes quis elementum volutpat torquent sodales dis. ”</p>
                                <p className="mt-3 tracking-widest">⭐⭐⭐⭐⭐</p>
                            </div>
                            <div className="flex flex-row items-center gap-5">
                                <figure className="avatar">
                                    <div className="w-24 rounded-full">
                                        <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                                    </div>
                                </figure>
                                <h2 className="text-xl">NAMA</h2>
                            </div>
                        </div>
                        <div className="absolute left-[7.5rem] right-[7.5rem] top-1/2 flex -translate-y-1/2 transform justify-between">
                            <a href="#slide4" className="btn btn-circle">
                                ❮
                            </a>
                            <a href="#slide2" className="btn btn-circle">
                                ❯
                            </a>
                        </div>
                    </div>
                    <div id="slide2" className="carousel-item relative w-full">
                        <img src="https://img.daisyui.com/images/stock/photo-1609621838510-5ad474b7d25d.webp" className="w-full" />
                        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                            <a href="#slide1" className="btn btn-circle">
                                ❮
                            </a>
                            <a href="#slide3" className="btn btn-circle">
                                ❯
                            </a>
                        </div>
                    </div>
                    <div id="slide3" className="carousel-item relative w-full">
                        <img src="https://img.daisyui.com/images/stock/photo-1414694762283-acccc27bca85.webp" className="w-full" />
                        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                            <a href="#slide2" className="btn btn-circle">
                                ❮
                            </a>
                            <a href="#slide4" className="btn btn-circle">
                                ❯
                            </a>
                        </div>
                    </div>
                    <div id="slide4" className="carousel-item relative w-full">
                        <img src="https://img.daisyui.com/images/stock/photo-1665553365602-b2fb8e5d1707.webp" className="w-full" />
                        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                            <a href="#slide3" className="btn btn-circle">
                                ❮
                            </a>
                            <a href="#slide1" className="btn btn-circle">
                                ❯
                            </a>
                        </div>
                    </div>
                </div>
            </section>
            {/* -------------------------------------------------------------------------- */}
        </main>
    );
}
