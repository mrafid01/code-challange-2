import HeadTeams from "@/components/HeadTeams"
import Image from "next/image"

export default function Page() {
    return (
        <main className="mx-auto w-full max-w-7xl">
            {/* ---------------------------- About Us Section ---------------------------- */}
            <section className="hero min-h-screen">
                <div className="hero-content flex-col lg:flex-row">
                    <figure className="w-full lg:w-[620px]">
                        <Image
                            src="/about-vector.png"
                            alt="vector-about-us"
                            width={1000}
                            height={1000}
                            className="h-auto w-full object-cover"
                        />
                    </figure>
                    <div className="flex-1 text-balance">
                        <h1 className="text-5xl font-bold">MotorRent</h1>
                        <p className="py-6">
                            MotorRent is a leading motorcycle rental company that offers a wide
                            selection of motorcycles for rent at affordable rates. With a focus on
                            customer satisfaction and convenience, we provide a seamless rental
                            experience that caters to the diverse needs of our clients. Whether you
                            are a tourist exploring a new city or a local resident in need of
                            temporary transportation, MotorRent has the perfect motorcycle for you.
                        </p>
                    </div>
                </div>
            </section>
            {/* -------------------------------------------------------------------------- */}

            {/* ----------------------------- Culture Section ---------------------------- */}
            <section>
                <div className="my-1 flex flex-col items-center justify-center gap-5">
                    <h2 className="text-4xl font-bold">Our Culture</h2>
                    <p className="text-balance p-4 text-center text-xl text-gray-500 lg:p-0">
                        {`Working at MotorRent means being part of a family that values each
                        individual's contributions and strives to create an environment where
                        everyone can thrive. Our culture is the foundation of our success and the
                        key to our continued growth. We are committed to fostering a work
                        environment that encourages innovation, integrity, and inclusivity.`}
                    </p>
                </div>
                <div className="my-10 flex flex-col gap-10 p-4 lg:p-0">
                    <div className="flex w-full flex-col overflow-hidden rounded-box bg-base-100 shadow-xl lg:flex-row">
                        <figure className="h-auto w-full lg:h-[300px] lg:w-[300px]">
                            <Image
                                src="/culture/customer-centric.jpg"
                                alt="Vector Work Culture"
                                width={400}
                                height={400}
                                className="h-full w-full object-cover"
                            ></Image>
                        </figure>
                        <div className="flex flex-1 flex-col justify-center gap-3 p-7">
                            <h3 className="text-3xl font-bold">Customer-Centric Approach</h3>
                            <p className="my-3 text-pretty text-xl">
                                Our customers are at the heart of everything we do. We strive to
                                exceed their expectations by providing reliable, high-quality
                                motorcycles and exceptional service.
                            </p>
                        </div>
                    </div>
                    <div className="flex w-full flex-col-reverse overflow-hidden rounded-box bg-base-100 shadow-xl lg:flex-row">
                        <div className="flex flex-1 flex-col justify-center gap-3 p-7">
                            <h3 className="text-3xl font-bold">Continuous Improvement</h3>
                            <p className="my-3 text-pretty text-xl">
                                We are dedicated to constantly improving our services and processes.
                                We embrace new ideas and technologies to stay ahead in the industry
                                and better serve our customers.
                            </p>
                        </div>
                        <figure className="h-auto w-full lg:h-[300px] lg:w-[300px]">
                            <Image
                                src="/culture/continuous-improvement.jpg"
                                alt="Vector Work Culture"
                                width={400}
                                height={400}
                                className="h-full w-full object-fill"
                            ></Image>
                        </figure>
                    </div>
                    <div className="flex w-full flex-col overflow-hidden rounded-box bg-base-100 shadow-xl lg:flex-row">
                        <figure className="h-auto w-full lg:h-[300px] lg:w-[300px]">
                            <Image
                                src="/culture/team-collaboration.jpg"
                                alt="Vector Work Culture"
                                width={400}
                                height={400}
                                className="h-full w-full object-cover"
                            ></Image>
                        </figure>
                        <div className="flex flex-1 flex-col justify-center gap-3 p-7">
                            <h3 className="text-3xl font-bold">Team Collaboration</h3>
                            <p className="my-3 text-pretty text-xl">
                                We believe in the power of teamwork. Our diverse team works together
                                in an atmosphere of mutual respect and support, where every voice is
                                heard and valued.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            {/* -------------------------------------------------------------------------- */}

            {/* ---------------------------- Milestone Section --------------------------- */}
            <section className="flex min-h-screen items-center justify-center px-3 py-5 xl:p-0">
                <div className="flex w-full items-center justify-center">
                    <ul className="steps steps-vertical w-fit">
                        <li className="step step-primary">
                            <h3 className="px-3 py-5 text-start text-xl font-bold">
                                Founding
                                <br />
                                <span className="text-balance font-normal">
                                    MotorRent was established with a vision to provide seamless and
                                    accessible motorcycle rental solutions. Starting with a small
                                    fleet of motorcycles, we set out to revolutionize the industry
                                    with our customer-centric approach.
                                </span>
                            </h3>
                        </li>
                        <li className="step step-primary">
                            <h3 className="px-3 py-5 text-start text-xl font-bold">
                                Early Growth
                                <br />
                                <span className="text-balance font-normal">
                                    During our early growth phase, we quickly expanded our fleet and
                                    reached 1,000 customers within the first year, demonstrating our
                                    commitment to providing reliable and diverse transportation
                                    options.
                                </span>
                            </h3>
                        </li>
                        <li className="step step-primary">
                            <h3 className="px-3 py-5 text-start text-xl font-bold">
                                Technological Advancements
                                <br />
                                <span className="text-balance font-normal">
                                    We embraced technological advancements by launching an online
                                    booking system and a mobile app, significantly enhancing the
                                    accessibility and convenience of our services for customers.
                                </span>
                            </h3>
                        </li>
                        <li className="step step-primary">
                            <h3 className="px-3 py-5 text-start text-xl font-bold">
                                Present Day
                                <br />
                                <span className="text-balance font-normal">
                                    Today, we proudly serve over 50,000 customers and have expanded
                                    to multiple new locations. Our continuous innovation and
                                    dedication to exceptional service ensure that MotorRent remains
                                    a trusted name in transportation solutions.
                                </span>
                            </h3>
                        </li>
                    </ul>
                </div>
            </section>
            {/* -------------------------------------------------------------------------- */}

            {/* ------------------------------ Teams Section ----------------------------- */}
            <section>
                <h2 className="my-3 text-center text-4xl font-bold">Our Team</h2>
                <p className="my-3 text-center text-xl text-gray-500">
                    Meet the team behind MotorRent who work tirelessly to provide you with the best
                </p>
                <HeadTeams />
            </section>
            {/* -------------------------------------------------------------------------- */}
        </main>
    )
}
