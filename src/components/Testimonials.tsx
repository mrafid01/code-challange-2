import Link from "next/link"

export default function Testimonials() {
    const testimonials = [
        {
            name: "John Anderson",
            rating: `⭐⭐⭐⭐⭐`,
            review: "MotorRent made my trip unforgettable! The booking process was seamless, and the bike was in perfect condition. I’ll definitely use their services again.",
            avatar: "/profile/testiJohn.jpg",
        },
        {
            name: "Emily Davis",
            rating: `⭐⭐⭐⭐⭐`,
            review: "Renting from MotorRent was the best decision I made for my vacation. The bike was well-maintained, and the staff was incredibly helpful and friendly.",
            avatar: "/profile/testiEmily.jpg",
        },
        {
            name: "Michael Lee",
            rating: `⭐⭐⭐⭐⭐`,
            review: "The team at MotorRent is fantastic! They helped me choose the right bike for my needs, and the whole experience was hassle-free. Highly recommended!",
            avatar: "/profile/testiMichael.jpg",
        },
    ]

    return (
        <div className="my-5">
            <div className="carousel carousel-center w-full">
                {testimonials.map((testimonial, index) => {
                    return (
                        <div key={index} id={`item${index + 1}`} className="carousel-item w-full">
                            <div className="mx-10 mb-2 mt-5 flex w-full flex-col items-center justify-center gap-5 rounded-box bg-base-300 p-10 shadow-lg">
                                <div className="text-center">
                                    <p className="text-lg italic tracking-[.3em]">
                                        {`“ ${testimonial.review}  ”`}
                                    </p>
                                    <p className="mt-3 tracking-widest">{testimonial.rating}</p>
                                </div>
                                <div className="flex flex-row items-center gap-5">
                                    <figure className="avatar">
                                        <div className="w-24 rounded-full">
                                            <img src={testimonial.avatar} />
                                        </div>
                                    </figure>
                                    <h2 className="text-xl">{testimonial.name}</h2>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
            <div className="my-2 flex w-full justify-center gap-2">
                <Link href="#item1" className="btn btn-xs">
                    1
                </Link>
                <Link href="#item2" className="btn btn-xs">
                    2
                </Link>
                <Link href="#item3" className="btn btn-xs">
                    3
                </Link>
            </div>
        </div>
    )
}
