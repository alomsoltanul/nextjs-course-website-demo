import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import Image from "next/image";
import Link from "next/link";

const fetchCourse = async () => {
    const res = await fetch("http://localhost:3000/data.json", {
        cache: "no-store",
    });

    if (!res.ok) {
        throw new Error("Failed to fetch courses");
    }

    const data = await res.json();
    return data.courses;
};

const AllCoursesServer = async () => {
    const courses = await fetchCourse();
    return (
        <div className="h-auto md:h-[40rem] w-full rounded-md items-center justify-center mt-44 mx-auto py-10 md:py-0">
            <h1 className="mt-20 md:mt-0 text-4xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 text-center">Get to know our all {courses.length} courses </h1>
            <div className="grid grid-cols-3 gap-6">
                {courses.map((course: {
                    id: number;
                    title: string;
                    slug: string;
                    description: string;
                    price: number;
                    instructor: string;
                    image: string | null;
                }) => (
                    <CardContainer key={course.id} className="inter-var">
                        <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border">
                            <CardItem
                                translateZ="50"
                                className="text-xl font-bold text-neutral-600 dark:text-white"
                            >
                                {course.title}
                            </CardItem>
                            <CardItem
                                as="p"
                                translateZ="60"
                                className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
                            >
                                {course.description}
                            </CardItem>
                            <CardItem translateZ="100" className="w-full mt-4">
                                {course.image && (
                                    <Image
                                        src={course.image}
                                        height={1000}
                                        width={1000}
                                        className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                                        alt={course.title}
                                    />
                                )}
                            </CardItem>
                            <div className="flex justify-between items-center mt-20">
                                <CardItem
                                    translateZ={20}
                                    as={Link}
                                    href="https://twitter.com/mannupaaji"
                                    target="__blank"
                                    className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
                                >
                                    Try now →
                                </CardItem>
                                <CardItem
                                    translateZ={20}
                                    as="button"
                                    className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
                                >
                                    Sign up
                                </CardItem>
                            </div>
                        </CardBody>
                    </CardContainer>
                ))}
            </div>
        </div>
    );
}

export default AllCoursesServer;
