import { createClient } from "contentful"
import Image from "next/image"
import Link from "next/link"
import { TypeProductMotorRentSkeleton, ContentfulImage } from "@/contentful/types"

export default async function Page({ params }: { params: { slug: string } }) {
    try {
        const client = createClient({
            space: process.env.CONTENTFUL_SPACE_ID!,
            environment: process.env.CONTENTFUL_ENVIRONMENT,
            accessToken: process.env.CONTENTFUL_ACCESS_TOKEN!,
        })
        const response = await client.getEntries<TypeProductMotorRentSkeleton>({
            content_type: process.env.CONTENTFUL_CONTENT_TYPE!,
            "fields.slug": params.slug,
        })
        const results = response.items[0].fields
        const { title, brand, pricePerDay, cc, transmission, year, gasTank, type } = results
        const image = results.image as ContentfulImage
        return (
            <main className="mx-auto my-10 w-full max-w-7xl">
                <h2 className="my-10 px-5 text-center text-4xl font-bold">DETAIL PRODUCTS</h2>
                <div className="flex h-full flex-col items-center justify-around md:flex-row">
                    <figure>
                        <Image
                            src={`https:${image.fields.file.url}`}
                            alt={title || "Motorcycles"}
                            width={image.fields.file.details.image.height}
                            height={image.fields.file.details.image.width}
                        />
                    </figure>
                    <div className="flex h-96 min-w-80 flex-col justify-evenly">
                        <h3 className="text-center text-2xl font-bold">
                            {title}{" "}
                            {type === "Hot" ? (
                                <div className="badge bg-red-600 align-top text-white">HOT</div>
                            ) : null}
                        </h3>
                        <div className="flex justify-between">
                            <div>
                                <p>Brand</p>
                                <p>Price</p>
                                <p>CC</p>
                                <p>Transmission</p>
                                <p>Year</p>
                                <p>Gas Tank</p>
                            </div>
                            <div>
                                <p>: {brand}</p>
                                <p>
                                    :{" "}
                                    {pricePerDay?.toLocaleString("id-ID", {
                                        style: "currency",
                                        currency: "IDR",
                                        maximumFractionDigits: 0,
                                    })}{" "}
                                    / Day
                                </p>
                                <p>: {cc}</p>
                                <p>: {transmission}</p>
                                <p>: {year}</p>
                                <p>: {gasTank} L</p>
                            </div>
                        </div>
                        <div className="flex justify-end gap-3">
                            <Link href={`/products`} className="btn btn-ghost btn-outline">
                                Back
                            </Link>
                            <Link
                                href={`https://wa.me/6281234567899?text=Halo,%20Saya%20tertarik%20menyewa%20motor%20${title}%20ini.`}
                                target="_blank"
                                className="btn btn-success"
                            >
                                Book
                            </Link>
                        </div>
                    </div>
                </div>
            </main>
        )
    } catch (error) {
        console.error(error)
    }
}
