import { Button } from 'mdc-ui'
import { useRouter } from 'next/router'
import React from 'react'

export default function Capacitacion() {
    const router = useRouter()
    return (
        <>
            <section
                style={{ backgroundImage: 'url(https://d1ih8jugeo2m5m.cloudfront.net/2021/08/negocios-digitales-4.jpg)' }}
                className='h-[50vh] lg:h-[80vh] flex flex-col gap-32 justify-center items-center bg-cover bg-center'>
                <div>
                    <p className='font-bold text-3xl text-center'>Networker Digital:</p>
                    <p className='text-2xl text-center'>Habilidades Disruptivas</p>
                </div>
            </section>
            <section className='my-12 px-12 2xl:w-4/5 2xl:mx-auto flex flex-col gap-4 lg:flex-row lg:gap-16'>
                <div className='flex flex-col gap-4 lg:w-1/2'>
                    <div>
                        <Button label='Volver' color='violet' shade='900' onClick={() => { router.back()}} />
                    </div>
                    <p className='text-2xl font-bold'>¿Estás listo para dar un salto cuántico en tu carrera y convertirte en un líder en el mundo digital? </p>
                    <p className='text-gray'>En este curso intensivo, Paloma Sansores, reconocida experta en desarrollo personal y estrategias de networking, te guiará paso a paso hacia el dominio de las habilidades disruptivas que te permitirán destacarte en el mundo virtual y ampliar tus oportunidades profesionales. Aprenderás a construir y fortalecer tu marca personal en línea, a establecer relaciones sólidas y genuinas con influencers clave de tu industria, y a utilizar las plataformas digitales de manera estratégica para aumentar tu visibilidad y alcanzar tus metas.</p>
                    <div className='hidden mt-8 lg:flex'>
                        <Button label='Comprar Ahora' color='blue' shade='700' onClick={() => { }} />
                    </div>
                </div>
                <div className='flex flex-col gap-4 lg:w-1/2 lg:mt-16'>
                    <div className='bg-blue/60 rounded-2xl'>
                        <p className='px-8 py-4 text-white text-xl font-bold'>Incluye</p>
                        <div className='bg-blue-900/80 rounded-2xl px-12 py-4 flex flex-col gap-4'>
                            <ul className='text-white'>
                                <li>Acceso a Networker Digital.</li>
                                <li>Acceso a Networker Digital.</li>
                                <li>Acceso a Networker Digital.</li>
                            </ul>
                        </div>
                    </div>
                    <div className='mt-8 lg:hidden'>
                        <Button label='Comprar Ahora' color='blue' shade='700' onClick={() => { }} />
                    </div>
                </div>
            </section>
        </>
    )
}
