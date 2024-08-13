import { createClient } from "contentful"
import Image from "next/image"
import Link from "next/link"
import { TypeProductMotorRentSkeleton, ContentfulImage } from "@/contentful/types"

export default async function Products(props: { forPage: string }) {
    try {
        const client = createClient({
            space: process.env.CONTENTFUL_SPACE_ID!,
            environment: process.env.CONTENTFUL_ENVIRONMENT,
            accessToken: process.env.CONTENTFUL_ACCESS_TOKEN!,
        })
        const response = await client.getEntries<TypeProductMotorRentSkeleton>({
            content_type: process.env.CONTENTFUL_CONTENT_TYPE!,
        })
        const hotType = response?.items.filter((item: any) => {
            return item.fields.type === "Hot"
        })
        const regularType = response?.items.filter((item: any) => {
            return item.fields.type === "Regular"
        })
        return (
            <div className="flex flex-row flex-wrap justify-center gap-10">
                {hotType.map((product, index) => {
                    const image = product?.fields.image as ContentfulImage
                    return (
                        <div key={index} className="card w-96 bg-base-100 shadow-xl">
                            <figure className="h-[65%] px-10 pt-10">
                                <Image
                                    src={`https:${image.fields.file.url}`}
                                    alt={product?.fields.title}
                                    width={304}
                                    height={255}
                                    className="h-full w-full object-fill"
                                />
                            </figure>
                            <div className="card-body">
                                <h2 className="card-title">
                                    {product?.fields.title}
                                    {product?.fields.type === "Hot" ? (
                                        <div className="badge bg-red-600 text-white">HOT</div>
                                    ) : null}
                                </h2>
                                <p>
                                    IDR {product?.fields.pricePerDay.toLocaleString("id-ID")} / Day
                                </p>
                                <div className="card-actions justify-end">
                                    <Link
                                        href={`/products/${product?.fields.slug}`}
                                        className="btn btn-info"
                                    >
                                        Details
                                    </Link>
                                    <Link
                                        href={`https://wa.me/6281234567899?text=Halo,%20Saya%20tertarik%20menyewa%20motor%20${product?.fields.title}%20ini.`}
                                        className="btn btn-success"
                                    >
                                        Book
                                    </Link>
                                </div>
                            </div>
                        </div>
                    )
                })}
                {props.forPage === "home"
                    ? null
                    : regularType.map((product, index) => {
                          const image = product?.fields.image as ContentfulImage
                          return (
                              <div key={index} className="card w-96 bg-base-100 shadow-xl">
                                  <figure className="h-[65%] px-10 pt-10">
                                      <Image
                                          src={`https:${image.fields.file.url}`}
                                          alt={product?.fields.title}
                                          width={304}
                                          height={300.6}
                                          className="h-full w-full object-fill"
                                      />
                                  </figure>
                                  <div className="card-body">
                                      <h2 className="card-title">
                                          {product?.fields.title}
                                          {product?.fields.type === "Hot" ? (
                                              <div className="badge bg-red-600 text-white">HOT</div>
                                          ) : null}
                                      </h2>
                                      <p>
                                          IDR {product?.fields.pricePerDay.toLocaleString("id-ID")}{" "}
                                          / Day
                                      </p>
                                      <div className="card-actions justify-end">
                                          <Link
                                              href={`/products/${product?.fields.slug}`}
                                              className="btn btn-info"
                                          >
                                              Details
                                          </Link>
                                          <Link
                                              href={`https://wa.me/6281234567899?text=Halo,%20Saya%20tertarik%20menyewa%20motor%20${product?.fields.title}%20ini.`}
                                              className="btn btn-success"
                                          >
                                              Book
                                          </Link>
                                      </div>
                                  </div>
                              </div>
                          )
                      })}
            </div>
        )
    } catch (error) {
        console.log(error)
    }
}
