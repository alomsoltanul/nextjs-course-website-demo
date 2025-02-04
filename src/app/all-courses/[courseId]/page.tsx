"use client";

import { useParams } from "next/navigation";

export default function EachCourses (){
    const params = useParams();
    return(
        <>
        <h1> Here is the dedicate course you are looking for {params?.courseId}</h1>
        </>
    );
}