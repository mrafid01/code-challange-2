import HeadTeams from "@/components/HeadTeams"

import UserCard from "@/features/userCard/UserCard"

export default function Page() {
    return (
        <main className="mx-auto my-10 w-full max-w-7xl">
            <h2 className="my-3 text-center text-4xl font-bold">Our Team</h2>
            <p className="my-3 text-center text-xl text-gray-500">
                Meet the team behind MotorRent who work tirelessly to provide you with the best
            </p>
            <HeadTeams />
            <h2 className="my-10 text-center text-4xl font-bold">
                Also people who help in this business
            </h2>
            <UserCard />
        </main>
    )
}
