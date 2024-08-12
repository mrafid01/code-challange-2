import Products from "@/components/Products"
import Testimonials from "@/components/Testimonials"

export default function Page() {
    return (
        <main className="mx-auto my-10 w-full max-w-7xl px-5 sm:px-0">
            <h2 className="my-10 text-center text-4xl font-bold">Our Products</h2>
            <Products />
            <h2 className="mt-10 text-center text-4xl font-bold">Testimonials</h2>
            <Testimonials />
        </main>
    )
}
