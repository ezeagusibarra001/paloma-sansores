import Accordion from "@/components/common/Accordion";
import { Button, Input } from "mdc-ui";
import React, { useState } from "react";

export default function Contacto() {
  const [data, setData] = useState({
    name: "",
    email: "",
  });
  return (
    <>
      <section className="flex flex-col gap-4 py-20 justify-center lg:items-center bg-left lg:flex-row lg:justify-evenly">
        <div>
          <p className="text-2xl text-center text-left text-blue-900 font-semibold lg:text-4xl">
            Mantengamos contacto!
          </p>
          <div className="my-8 hidden lg:block">
            <p className="text-xl">Dirección</p>
            <p className="text-gray px-4">Tulum, México</p>
          </div>
          <div className="my-8 hidden lg:block">
            <p className="text-xl">Contacto</p>
            <p className="text-gray px-4">sansorespaloma@gmail.com</p>
            <p className="text-gray px-4">+52 1 984 276 7710</p>
          </div>
        </div>
        <div className="w-4/5 mx-auto bg-blue/20 flex flex-col gap-8 my-4 rounded-xl px-12 py-8 lg:w-2/5 lg:mx-0">
          <h3 className="text-blue-900 font-medium text-center">
            ¡Suscríbete a nuestro newsletter para enterarte de los próximos
            eventos!
          </h3>
          <Input
            placeholder="Nombre"
            type="text"
            value={data.name}
            onChange={(value) => setData({ ...data, name: value })}
          />
          <Input
            placeholder="Email"
            type="text"
            value={data.email}
            onChange={(value) => setData({ ...data, email: value })}
          />
          <Button onClick={() => {}} shade="700" label="ENVIAR" />
        </div>
        <div className="my-8 lg:hidden w-4/5 mx-auto">
          <p className="text-xl">Dirección</p>
          <p className="text-gray">Tulum, México</p>
        </div>
        <div className="my-8 lg:hidden w-4/5 mx-auto">
          <p className="text-xl">Contacto</p>
          <p className="text-gray">sansorespaloma@gmail.com</p>
          <p className="text-gray">+52 1 984 276 7710</p>
        </div>
      </section>
      <h2 className="text-3xl font-medium my-12 text-center">
        Preguntas frecuentes
      </h2>
      <Accordion
        items={[
          {
            title: "Retiro Emprendedor a Tulum ",
            description:
              "¡Bienvenidos al Retiro Emprendedor en Tulum! Este retiro está diseñado para inspirar, empoderar y fortalecer a los emprendedores en su camino hacia el éxito. Únete a nosotros para experimentar una combinación única de aprendizaje, crecimiento personal y conexión con la vibrante energía de Tulum. A lo largo del retiro, participarás en talleres interactivos, sesiones de mentoría, conferencias motivadoras y actividades de networking estratégico. Aprenderás las mejores prácticas para impulsar tu negocio, adquirirás herramientas prácticas para superar desafíos y explorarás nuevas formas de pensar que te ayudarán a alcanzar tus metas emprendedoras. Nuestro equipo de expertos y mentores estará a tu disposición para proporcionarte orientación personalizada y apoyo estratégico. Te ayudarán a desarrollar un plan de negocios sólido, a potenciar tus habilidades de liderazgo y a establecer conexiones valiosas con otros emprendedores.",
          },
          {
            title: "Título 2",
            description:
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
          },
          {
            title: "Título 3",
            description:
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
          },
        ]}
      />
    </>
  );
}
