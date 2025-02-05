"use client";

import { BackgroundGradient } from "@/components/ui/background-gradient";
import { useParams } from "next/navigation";

export default function EachCourses({ course: Course }) {
    const course = useParams();
    return (
        <>
            
            <BackgroundGradient className="rounded-[22px] max-w-lg p-6 sm:p-12 bg-white dark:bg-zinc-900 shadow-lg border border-gray-200 dark:border-zinc-800">
                <h1 className="text-2xl sm:text-3xl font-bold text-black dark:text-neutral-200">
                    {course.title}
                </h1>
                <p className="text-sm text-gray-500 dark:text-neutral-400 mb-4">by {course.instructor}</p>
                <p className="text-base sm:text-lg text-gray-700 dark:text-neutral-300 mt-2">
                    {course.description}
                </p>
                <p className="text-xl sm:text-2xl font-semibold text-black dark:text-white mt-4">
                    {/* ${course.price.toFixed(2)} */}
                </p>
                {course.isFeatured && (
                    <span className="inline-block bg-yellow-500 text-white text-xs font-semibold px-3 py-1 rounded-full mt-2">
                        Featured
                    </span>
                )}
                <button className="rounded-full pl-6 pr-2 py-2 text-white flex items-center space-x-2 bg-black mt-6 text-sm font-bold dark:bg-zinc-800 hover:bg-gray-800 dark:hover:bg-zinc-700 transition-all">
                    <span>Enroll Now</span>
                    <span className="bg-zinc-700 rounded-full text-xs px-3 py-1 text-white">
                        ID: {course.id}
                    </span>
                </button>
            </BackgroundGradient>
        </>
    );
}