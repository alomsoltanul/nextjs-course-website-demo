import { NextResponse } from "next/server";
import coursess from "@/data/music_courses.json";

export async function GET() {
    // const courses = [
    //     { id: 1, name: "Next.js api" },
    //     { id: 2, name: "home it works" },
    //     { id: 3, name: "it's working!! " },
    // ];

    return NextResponse.json(coursess);
}