"use client";
import React from "react";
import { BackgroundGradient } from "./ui/background-gradient";
// import { IconAppWindow } from "@tabler/icons-react";
import Image from "next/image";
import Jordan from "../assests/jordan.png";


export function CardSection() {
    return (
        <div>
            <h5 className="mt-20 md:mt-0 text-sm md:text-base text-teal-600 font-bold bg-clip-text text-transparent bg-gradient-to-b mb-2 text-center from-neutral-50 to-neutral-400 ">Featured Products </h5>
            <h1 className="mt-20 md:mt-0 text-4xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b mb-16 text-center from-neutral-50 to-neutral-400 ">Our Products </h1>
            
            <div className=" flex flex-row mx-auto items-center justify-center gap-8 text-center">

                <div>

                    <BackgroundGradient className="rounded-[22px] max-w-sm p-4 sm:p-10 bg-white dark:bg-zinc-900">
                        <Image
                            src={Jordan}
                            alt="jordans"
                            height="400"
                            width="400"
                            className="object-contain"
                        />
                        <p className="text-base sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">
                            Air Jordan 4 Retro Reimagined
                        </p>

                        <p className="text-sm text-neutral-600 dark:text-neutral-400">
                            The Air Jordan 4 Retro Reimagined Bred will release on Saturday,
                            February 17, 2024. Your best opportunity to get these right now is by
                            entering raffles and waiting for the official releases.
                        </p>
                        <button className="rounded-full pl-4 pr-1 py-1 text-white flex items-center space-x-1 bg-black mt-4 text-xs font-bold dark:bg-zinc-800">
                            <span>Buy now </span>
                            <span className="bg-zinc-700 rounded-full text-[0.6rem] px-2 py-0 text-white">
                                $100
                            </span>
                        </button>
                    </BackgroundGradient>
                </div>
                <div>
                    <BackgroundGradient className="rounded-[22px] max-w-sm p-4 sm:p-10 bg-white dark:bg-zinc-900">
                        <Image
                            src={Jordan}
                            alt="jordans"
                            height="400"
                            width="400"
                            className="object-contain"
                        />
                        <p className="text-base sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">
                            Air Jordan 4 Retro Reimagined
                        </p>

                        <p className="text-sm text-neutral-600 dark:text-neutral-400">
                            The Air Jordan 4 Retro Reimagined Bred will release on Saturday,
                            February 17, 2024. Your best opportunity to get these right now is by
                            entering raffles and waiting for the official releases.
                        </p>
                        <button className="rounded-full pl-4 pr-1 py-1 text-white flex items-center space-x-1 bg-black mt-4 text-xs font-bold dark:bg-zinc-800">
                            <span>Buy now </span>
                            <span className="bg-zinc-700 rounded-full text-[0.6rem] px-2 py-0 text-white">
                                $100
                            </span>
                        </button>
                    </BackgroundGradient>
                </div>
                <div>
                    <BackgroundGradient className="rounded-[22px] max-w-sm p-4 sm:p-10 bg-white dark:bg-zinc-900">
                        <Image
                            src={Jordan}
                            alt="jordans"
                            height="400"
                            width="400"
                            className="object-contain"
                        />
                        <p className="text-base sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">
                            Air Jordan 4 Retro Reimagined
                        </p>

                        <p className="text-sm text-neutral-600 dark:text-neutral-400">
                            The Air Jordan 4 Retro Reimagined Bred will release on Saturday,
                            February 17, 2024. Your best opportunity to get these right now is by
                            entering raffles and waiting for the official releases.
                        </p>
                        <button className="rounded-full pl-4 pr-1 py-1 text-white flex items-center space-x-1 bg-black mt-4 text-xs font-bold dark:bg-zinc-800">
                            <span>Buy now </span>
                            <span className="bg-zinc-700 rounded-full text-[0.6rem] px-2 py-0 text-white">
                                $100
                            </span>
                        </button>
                    </BackgroundGradient>
                </div>
            </div>
        </div>
    );
}

export default CardSection;