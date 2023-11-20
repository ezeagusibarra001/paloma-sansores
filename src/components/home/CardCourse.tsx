import { Button } from "mdc-ui";
import Link from "next/link";
import React from "react";

type CourseProps = {
  title: string;
  description: string;
  image: string;
  price: number;
  name: string;
  link: string;
};

export default function CardCourse(course: CourseProps) {
  return (
    <div className="mb-12 flex flex-col justify-center items-center">
      <div className="h-full w-4/5 bg-blue-600/20 rounded-3xl">
        <div
          style={{
            backgroundImage: `url(${course.image})`,
          }}
          className={`h-[30vh] bg-contain bg-no-repeat md:h-[50vh] md:bg-cover bg-center rounded-3xl`}
        ></div>
        <div className="flex flex-col justify-center items-center gap-5 my-5">
          <h1 className="text-center text-blue-900 font-medium text-xl w-1/2">
            {course.name}
          </h1>
          <Link href={course.link} target="_blank" className="bg-blue-900 px-4 py-2 rounded-full text-white">
            Adquirí el Curso
          </Link>
        </div>
      </div>
    </div>
  );
}
