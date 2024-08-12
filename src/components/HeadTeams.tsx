import Image from "next/image"

export default function HeadTeams() {
    const team = [
        {
            name: "John Doe",
            role: "Founder & CEO",
            img: "https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp",
            desc: "With over 20 years of experience in the automotive industry, John leads MotorRent with a focus on innovation and customer satisfaction.",
        },
        {
            name: "Jane Smith",
            role: "Operation Manager",
            img: "https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp",
            desc: "Jane's expertise in logistics and her keen eye for detail ensure that our fleet is always in top condition and ready for our customers.",
        },
        {
            name: "Michael Brown",
            role: "Customer Service Head",
            img: "https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp",
            desc: "Michael's dedication to excellent service and his extensive knowledge of motorcycles make him a favorite among our clients.",
        },
        {
            name: "Emily Davis",
            role: "Marketing Director",
            img: "https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp",
            desc: "Emily brings creativity and strategy to our marketing efforts, helping us reach new customers and grow our brand.",
        },
    ]
    return (
        <div className="my-10 flex flex-row flex-wrap justify-center gap-6">
            {team.map((member) => (
                <div key={member.role} className="card w-72 bg-base-100 shadow-xl">
                    {/* TODO: find img 384 x 384; ratio 1:1 */}
                    <figure className="h-72">
                        <Image
                            src={member.img}
                            alt="Member Profile Image"
                            width={1000}
                            height={1000}
                            className="h-full w-full object-cover"
                        />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">{member.name}</h2>
                        <p className="text-gray-500">{member.role}</p>
                        <p className="text-balance">{member.desc}</p>
                    </div>
                </div>
            ))}
        </div>
    )
}
