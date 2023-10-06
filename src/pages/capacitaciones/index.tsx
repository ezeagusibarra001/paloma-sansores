import React, {useEffect, useState} from 'react'
import { Button, Card } from 'mdc-ui'
import { getAll } from '@/api/firebase'
import toast from 'react-hot-toast'
import { useRouter } from 'next/router'

export default function Capacitaciones() {
    const router = useRouter()
    const [filter, setFilter] = useState<string>('all')
    const [capacitaciones, setCapacitaciones] = useState<any[]>([])

    const getCapacitaciones = async() => {
        try {
            const data = await getAll('capacitaciones')
            console.log(data)
            setCapacitaciones(data)
        } catch (error) {
            toast.error('Error al obtener las capacitaciones')
        }
    }

    useEffect(() => {
        getCapacitaciones()
    }
    , [])

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
                {
                    capacitaciones.map((capacitacion, index) => {
                        return (
                            <Card key={index} img={capacitacion.image} onClick={() => {router.push(`/capacitaciones/${capacitacion.id}`)}} title={capacitacion.name} price={capacitacion.price}  label='Precio Lanzamiento'/>
                        )
                    }
                    )
                }
            </section>
        </>
    )
}
