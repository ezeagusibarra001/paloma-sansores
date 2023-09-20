import Accordion from '@/components/common/Accordion'
import { Button, Input } from 'mdc-ui'
import React, { useState } from 'react'

export default function Eventos() {
    const [data, setData] = useState({
        name: "",
        email: ""
    })
    return (
        <>
            <section className='flex flex-col gap-4 py-20 bg-blue/20 bg-no-repeat justify-center items-center bg-elipse bg-cover bg-left'>
                <div>
                    <p className='text-2xl text-left text-white font-medium'>Eventos presenciales</p>
                </div>
                <div className='w-4/5 mx-auto bg-white/80 flex flex-col gap-4 my-4 rounded-xl px-4 py-8'>
                    <h3 className='text-blue-900 font-medium text-center'>¡Suscríbete a nuestro newsletter para enterarte de los próximos eventos!</h3>
                    <Input
                        placeholder='Nombre'
                        type="text"
                        value={data.name}
                        onChange={(value) => setData({ ...data, name: value })}
                    />
                    <Input
                        placeholder='Email'
                        type="text"
                        value={data.email}
                        onChange={(value) => setData({ ...data, email: value })}
                    />
                    <div>
                        <Button onClick={() => {}} shade='900' label='ENVIAR' />
                    </div>
                </div>
            </section>
            <Accordion items={[
                {
                    title: 'Retiro Emprendedor a Tulum ',
                    description: '¡Bienvenidos al Retiro Emprendedor en Tulum! Este retiro está diseñado para inspirar, empoderar y fortalecer a los emprendedores en su camino hacia el éxito. Únete a nosotros para experimentar una combinación única de aprendizaje, crecimiento personal y conexión con la vibrante energía de Tulum. A lo largo del retiro, participarás en talleres interactivos, sesiones de mentoría, conferencias motivadoras y actividades de networking estratégico. Aprenderás las mejores prácticas para impulsar tu negocio, adquirirás herramientas prácticas para superar desafíos y explorarás nuevas formas de pensar que te ayudarán a alcanzar tus metas emprendedoras. Nuestro equipo de expertos y mentores estará a tu disposición para proporcionarte orientación personalizada y apoyo estratégico. Te ayudarán a desarrollar un plan de negocios sólido, a potenciar tus habilidades de liderazgo y a establecer conexiones valiosas con otros emprendedores.'
                },
                {
                    title: 'Título 2',
                    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.'
                },
                {
                    title: 'Título 3',
                    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.'
                },
            ]} />
        </>
    )
}
