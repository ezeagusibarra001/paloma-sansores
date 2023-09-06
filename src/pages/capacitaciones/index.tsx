import React, {useState} from 'react'
import { Button, Card } from 'mdc-ui'

export default function Capacitaciones() {
    const [filter, setFilter] = useState<string>('')

    return (
        <>
            <section className='h-[70vh] flex flex-col gap-32 justify-center items-center bg-bannerSobreMi bg-cover bg-top'>
               <div>
               <p className='font-bold text-3xl text-center'>Descubre el poder dentro de ti:</p>
                <p className='text-2xl text-center'>Conoce los cursos y mentorías para transformar tu vida</p>
               </div>
                <div className='flex gap-6'>
                    <Button color={"all" !== filter ? "gray" : "blue"} shade={"all" !== filter ? "DEFAULT" : "900"} label='Todo' onClick={()=> {setFilter("all")}} />
                    <Button color={"courses" !== filter ? "gray" : "blue"}  shade={"courses" !== filter ? "DEFAULT" : "900"}  label='Cursos' onClick={()=> {setFilter("courses")}} />
                    <Button color={"mentoring" !== filter ? "gray" : "blue"}  shade={"mentoring" !== filter ? "DEFAULT" : "900"}  label='Mentorías' onClick={()=> {setFilter("mentoring")}} />
                </div>
            </section>
            <section className='my-12 flex flex-wrap gap-8 justify-center items-center'>
                <Card img='https://elestudiantedigital.com/wp-content/uploads/2019/01/cursos-online-gratuitos-certificados.jpg' onClick={() => {}} title='Networker Digital: Habilidades Disruptivas' price={297}  label='Precio Lanzamiento'/>
                <Card img='https://elestudiantedigital.com/wp-content/uploads/2019/01/cursos-online-gratuitos-certificados.jpg' onClick={() => {}} title='Networker Digital: Habilidades Disruptivas' price={297}  label='Precio Lanzamiento'/>
                <Card img='https://elestudiantedigital.com/wp-content/uploads/2019/01/cursos-online-gratuitos-certificados.jpg' onClick={() => {}} title='Networker Digital: Habilidades Disruptivas' price={297}  label='Precio Lanzamiento'/>
                <Card img='https://elestudiantedigital.com/wp-content/uploads/2019/01/cursos-online-gratuitos-certificados.jpg' onClick={() => {}} title='Networker Digital: Habilidades Disruptivas' price={297}  label='Precio Lanzamiento'/>
            </section>
        </>
    )
}
