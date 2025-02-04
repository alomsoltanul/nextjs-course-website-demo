'use client'

import Link from "next/link";
import courseData from "../data/music_courses.json";
import { BackgroundGradient } from "./ui/background-gradient";

interface Course {
    id: number,
    title: string,
    slug: string,
    description: string,
    price: number,
    instructor: string,
    isFeatured: boolean,

}
export default function FeaturedCourse() {
    const featuredCourses = courseData.courses.filter((course: Course) => course.isFeatured)
    return (
        <>
            <div className="mt-20">
                <h5 className="mt-20 md:mt-0 text-sm md:text-base text-teal-600 font-bold bg-clip-text text-transparent bg-gradient-to-b mb-2 text-center from-neutral-50 to-neutral-400 ">Best Selling Courses </h5>
                <h1 className="mt-20 md:mt-0 text-4xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b mb-16 text-center from-neutral-50 to-neutral-400 ">Featured Courses </h1>

                <div className="mt-10">
                    <div className=" grid grid-col-1 sm:grid-cols-3 lg:grid-col-3 gap-8 justify-center">
                        {featuredCourses.map((course: Course) => (
                            <div key={course.id} className="flex justify-center">
                                <Link href={`/all-courses/${'courseId'}`}>
                                    <BackgroundGradient className="rounded-[22px] max-w-sm p-4 sm:p-10 bg-white dark:bg-zinc-900">

                                        <p className="text-base sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">
                                            { }
                                        </p>

                                        <p className="text-sm text-neutral-600 dark:text-neutral-400">
                                            The Air Jordan 4 Retro Reimagined Bred will release on Saturday,
                                            February 17, 2024. Your best opportunity to get these right now is by
                                            entering raffles and waiting for the official releases.
                                        </p>
                                        <button className="rounded-full pl-4 pr-1 py-1 text-white flex items-center space-x-1 bg-black mt-4 text-xs font-bold dark:bg-zinc-800">
                                            <span>Buy now </span>
                                            <span className="bg-zinc-700 rounded-full text-[0.6rem] px-2 py-0 text-white">
                                                { }
                                            </span>
                                        </button>
                                    </BackgroundGradient>
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}