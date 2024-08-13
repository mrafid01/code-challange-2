import type { Metadata } from "next"
import { Montserrat } from "next/font/google"
import "./globals.css"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import Providers from "@/app/providers"

const montserrat = Montserrat({ subsets: ["latin"] })

export const metadata: Metadata = {
    title: "MotorRent",
    description:
        "Effortless Mobility for Everyone – Explore the open road with MotorRent, your trusted partner for reliable and convenient motorcycle rentals.",
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="en">
            <body className={montserrat.className}>
                <Providers>
                    <Header />
                    {children}
                    <Footer />
                </Providers>
            </body>
        </html>
    )
}
