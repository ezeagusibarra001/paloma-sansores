import React from 'react'

type CourseProps = {
    title: string;
    description: string;
    image: string;
    price: number;
}

export default function CardCourse(course: CourseProps) {
    return (
        <div className='flex flex-col justify-center items-center'>
            <div className='h-full w-4/5 bg-blue rounded-3xl'>
                <div className={`h-[50vh]  bg-speaker bg-cover bg-center rounded-3xl`}></div>
                <div>
                    holaa
                </div>
            </div>

        </div>
    )
}
