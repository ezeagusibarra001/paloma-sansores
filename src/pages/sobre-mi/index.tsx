import { Button, Icon } from 'mdc-ui'
import Link from 'next/link'
import React from 'react'

export default function SobreMi() {
    return (
        <>
            <section className='h-[50vh] flex justify-center items-center bg-bannerSobreMi bg-cover bg-top'>
                <p className='font-bold text-3xl text-center'>Tu aliada en el camino hacia la
                    independencia y el empoderamiento</p>
            </section>
            <section className='md:flex gap-20 md:py-12 justify-center items-center mt-12' >
                <div className='md:h-[80vh] h-[40vh] bg-sobreMi bg-cover bg-top md:w-2/5 md:rounded-2xl md:h-[40vh]'></div>
                <div className='p-12 md:w-2/5 md:p-0'>
                    <p className='text-xl font-bold mb-7'>Sobre Mí</p>
                    <p className='text-gray-900 text-sm mb-4'>Hace 11 años lei mi primer libro de desarrollo personal, me impactó tanto que no pude parar.</p>
                    <p className='text-gray-900 text-sm mb-4'>Me he dedicado a la continua transformacion de mi persona y encontré mi propósito al enseñarle a otras personas lo que a mi me ha dado resultados. </p>
                    <p className='text-gray-900 text-sm mb-4'>Soy una apasionada por aprender, por vivir, por ser feliz y generar abundancia economica.</p>
                    <p className='text-gray-900 text-sm mb-4'>Estoy dispuesta a compartirte todo lo que he aprendido, las herramientas, los secretos y todo lo que necesitas saber para cumplir tus objetivos.</p>
                </div>
            </section>
            <section className='md:flex md:flex-row-reverse md:bg-violet-900 gap-20 justify-center items-center mb-12'>
                <div className='md:h-[80vh] h-[40vh] bg-micro bg-violet-900 bg-cover bg-center md:w-2/5 md:rounded-2xl md:h-[40vh]'></div>
                <div className='p-12 md:py-12 md:w-2/5 md:p-0 bg-violet-900 text-white flex flex-col gap-6'>
                    <p className='text-xl font-bold'>¿Por qué comencé?</p>
                    <p className='text-sm'>Soy una chica con mucha pasión desde pequeña he sentido un llamado a hacer cosas grandes y siento una gran conexión con Dios.</p>
                    <p className='text-sm'>Siempre estuve desde pequeña involucrada en deportes o actividades y era muy competitiva porque me gusta ganar y marcar una diferencia. Hoy me di cuenta que la clave no es competir contra otras personas, sino siempre estar siendo una mejor versión de nosotros mismos.</p>
                    <div className='bg-violet rounded-xl p-4 flex flex-col gap-4  text-white/80'>
                        <p className='italic text-sm'>Mi compromiso contigo</p>
                        <p className='italic text-sm'>Mi propósito es sembrar en los demás</p>
                        <p className='italic text-sm'>Esperanza de que si se puede prosperar</p>
                        <p className='italic text-sm'>Hoy vivo en mi propósito porque impacto en la vida de otras personas atravez de mis resultados.</p>
                        <p className='italic text-sm'>Mi propósito es inspirar a otros a ir por más en sus vidas, a creer en ellos mismos</p>
                        <p className='italic text-sm'>Y eso lo hago a travez de mi ejemplo.</p>
                        <p className='italic text-sm'>Quiero que sueñes en grande y cumplas cada una de tus metas. Creo en ti ¿Tu crees en ti?</p>
                    </div>
                </div>
            </section>
            <section className='my-12'>
                <div className='sm:w-3/4 mx-auto md:w-1/2 flex flex-col gap-4 justify-center items-center mx-6 rounded-xl shadow-lg p-8'>
                    <div className='w-6 h-6'>
                        <Icon name='course' color='blue' shade='900' />
                    </div>
                    <p className='text-blue-900 px-6 text-center'>Lo más grandioso en la vida es descubrir quién eres, encontrar tu don y ponerlo al servicio de los demás</p>
                    <p className='text-sm text-gray'>Paloma Sansores, Coach Millonaria</p>
                </div>
            </section>
            <section className='my-12'>
                <h3 className='text-2xl font-bold text-center'>Mis últimos videos de Youtube</h3>
                <div className='flex flex-col gap-10 my-10 lg:flex-row lg:px-10'>
                    <iframe className='mx-auto w-3/4 h-64 lg:h-48' src="https://www.youtube.com/embed/BS08zdV1Be0?si=KhyiZBetTWbZtq_j" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                    <iframe className='mx-auto w-3/4 h-64 lg:h-48' src="https://www.youtube.com/embed/gOojxj97KAM?si=8EbM3-lrTzdRIK-e" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                    <iframe className='mx-auto w-3/4 h-64 lg:h-48' src="https://www.youtube.com/embed/71uUN8XV_yo?si=VlOepPKGxqltcj3m" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                </div>
            </section>
            <section className='md:flex-row md:items-center md:gap-20 bg-violet-900 flex flex-col px-10 justify-center items-start gap-10 py-10'>
                <div className='w-16 h-16 md:w-32 md:h-32'>
                    <Icon name='telegram' color='white' />
                </div>
                <div className='text-white flex flex-col gap-5 md:w-1/2'>
                    <h3 className='text-2xl font-bold'>¡Únete a la comunidad inspiradora en Telegram!</h3>
                    <p>¿Estás buscando un espacio donde puedas conectar con personas que comparten tus mismas metas de crecimiento personal y emprendimiento? </p>
                    <Link href="https://www.tiktok.com/@palomasansores.cm" target="_blank">
                        <Button label='¡Únete Ya!' color='white' textColor='violet' weight="bold" onClick={() => { }} />
                    </Link>
                </div>

            </section>
        </>
    )
}
