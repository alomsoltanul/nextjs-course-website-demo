"use client";

import { useEffect, useState } from 'react';

interface Course {
    id: number,
    title: string,
    slug: string,
    description: string,
    price: number,
    instructor: string,
    isFeatured: boolean,

}
export default function AllCourses() {
    const [courses, setCourses] = useState<Course[]>([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState<string | null>(null)

    useEffect(() => {
        // Fetch the data from the public directory

        const fetchCourses = async () => {
            try {
                const response = await fetch('../../data/music_courses.json')
                if (!response.ok) {
                    throw new Error('Failed to fetch courses')
                }
                const data = await response.json()
                setCourses(data)
            } catch (err) {
                setError(err instanceof Error ? err.message : 'Something went wrong')
            } finally {
                setLoading(false)
            }
        }

        fetchCourses()
    }, [])

    if (loading) return <p>Loading...</p>
    if (error) return <p>Error: {error}</p>

    return (
        <div>
            <h1>All Courses</h1>
            <ul>
                {courses.map((course ) => (
                    <li key={course.id}>
                        <h2>{course.title}</h2>
                        <p>{course.description}</p>
                    </li>
                ))}
            </ul>
        </div>
    )
}