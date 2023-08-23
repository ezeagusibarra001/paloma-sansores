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
        <div className='mx-auto md:w-3/4'>
          <SliderPagination
            items={courses.map((course) => (<CardCourse {...course} />))}
          />
        </div>
      </section>
      <section >
        <div className='h-[50vh] bg-paloma bg-cover bg-center'></div>
        <div className='p-12 text-gray bg-gray-100 '>
          <p className='text-xs mb-4'>Paloma Sansores, Coach Millonario</p>
          <p className='text-xl font-bold mb-7'>La mentalidad correcta te llevará a tus resultados deseados.</p>
          <p className='text-sm mb-4'>Soy Paloma Sansores, tengo más de 8 años de emprendimiento en negocios digitales y disfrutando de la libertad financiera. Inicié esta carrera del emprendimiento porque siempre supe como quería vivir mi vida, sabia que quería vivir mi vida bajo mis propios términos.</p>
          <p className='text-sm'>Mi visión es impactar en la vida de muchas mujeres. Logrando que cada una de ellas viva una vida empoderada, libre y feliz, porque en definitiva, eso sucede cuando sabes lo que quieres y tienes las herramientas las herramientas necesarias para hacerlo.</p>
          <div className='mt-6'>
            <Button
              label="Sobre Mi"
              color="gray"
              shade='300'
              onClick={() => console.log("Sobre Mi")}
            />
          </div>
        </div>
      </section>
    </>
  )
}
