import React from 'react'
import { Button, Icon } from 'mdc-ui'
import NoteCard from '@/components/home/NoteCard'
import SliderPagination from '@/components/common/SliderPagination'
import CardCourse from '@/components/home/CardCourse'

export default function Home() {
  const courses = [
    {
      title: 'Curso 1',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, voluptatum.',
      image: 'speaker',
      price: 100,
    },
    {
      title: 'Curso 1',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, voluptatum.',
      image: 'speaker',
      price: 100,
    },
  ]
  return (
    <>
      <section className='flex flex-col items-center justify-center h-[50vh] bg-banner bg-center bg-cover gap-2' >
        <h1 className='text-3xl font-bold text-white'>Paloma Sansores</h1>
        <p className='text-lg font-light text-white w-2/3 text-center'>Si estás aquí es una señal para cambiar tu vida </p>
        <div className='mt-6'>
          <Button
            label="Empieza HOY"
            shade='900'
            onClick={() => console.log("Empieza HOY")}
          />
        </div>
      </section>
      <section className='flex flex-col items-center justify-center'>
        <p className='text-sm font-bold w-1/2 text-center my-12'>Es momento de elevar tu conciencia y tus resultados</p>
        <div className='mb-12 flex flex-col gap-4'>
          <NoteCard
            title='Cursos'
            description='Estás a tiempo de cumplir tus sueños, yo se como ayudarte'
            icon={<Icon name='course' color='violet' shade='900' />}
          />
          <NoteCard
            title='Comunidad'
            description='Mantente motivada formando parte de un grupo de personas como tú, que todos los días trabajamos por ser mejores.'
            icon={<Icon name='clip' color='violet' shade='900' />}
          />
          <NoteCard
            title='+ 100 VIDEOS'
            description='Enfocados en programar tu subconsciente'
            icon={<Icon name='play' color='violet' shade='900' />}
          />
          <NoteCard
            title='Herramientas de crecimiento'
            description='Conoce los recursos que te ayudarán en tu proceso'
            icon={<Icon name='stars' color='violet' shade='900' />}
          />
        </div>
      </section>
      <section>
        <p className='font-bold text-xl text-center my-12'>
          Mis Cursos/Mentorías
        </p>
        <SliderPagination
          items={courses.map((course) => (<CardCourse {...course} />))}
        />
      </section>
      <section>
        <div className='h-[50vh] bg-paloma bg-cover bg-center'></div>
      </section>
    </>
  )
}
