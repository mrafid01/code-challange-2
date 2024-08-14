"use client"

import { useDispatch, useSelector } from "react-redux"
import { fetchUsers } from "@/features/userCard/userSlice"
import { ThunkDispatch } from "@reduxjs/toolkit"
import { useEffect } from "react"
import Image from "next/image"
import { User } from "@/store/store"

export default function UserCard() {
    const dispatch = useDispatch<ThunkDispatch<any, void, any>>()
    const results = useSelector((state: User) => state.user.users)

    useEffect(() => {
        dispatch(fetchUsers())
    }, [dispatch])

    return (
        <>
            <div className="mx-auto my-12 grid grid-cols-2 content-center justify-items-center gap-4 gap-y-6 sm:grid-cols-3 md:grid-cols-5">
                {results.map((user, index) => {
                    return (
                        <div
                            key={index}
                            className="mx-auto flex min-h-[15.625rem] w-full cursor-pointer flex-col items-center justify-center space-y-2 rounded-lg p-2 transition-all hover:scale-105 hover:bg-base-200 hover:shadow-xl"
                        >
                            <figure>
                                <Image
                                    className="h-24 w-24 rounded-full object-cover"
                                    src={user?.picture?.large}
                                    alt="Shoes"
                                    height={200}
                                    width={200}
                                />
                            </figure>
                            <h2 className="text-mainColor text-xl font-semibold">
                                {user?.name?.first}
                            </h2>
                            <p className="text-secondaryTextGray line-clamp-1 text-center text-sm">
                                {user?.location?.city}, {user?.location?.country}
                            </p>
                        </div>
                    )
                })}
            </div>
        </>
    )
}
