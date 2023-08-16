import { Button } from 'mdc-ui';
import React from 'react'

type CourseProps = {
    title: string;
    description: string;
    image: string;
    price: number;
}

export default function CardCourse(course: CourseProps) {
    return (
        <div className='mb-12 flex flex-col justify-center items-center'>
            <div className='h-full w-4/5 bg-blue-600/20 rounded-3xl'>
                <div className={`h-[50vh]  bg-speaker bg-cover bg-center rounded-3xl`}></div>
                <div className='flex flex-col justify-center items-center gap-5 my-5'>
                    <h1 className='text-center text-blue-900 font-medium text-xl w-1/2'>Networker Digital: Habilidades Disruptivas</h1>
                    <Button
                        size='large'
                        label='Adquirí el Curso'
                        shade='900'
                        onClick={() => console.log('Comprar')}
                    />
                </div>
            </div>
        </div>
    )
}
