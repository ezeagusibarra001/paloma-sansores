import React, { useEffect, useState } from "react";
import { Button, Icon, Input, Modal, Slider } from "mdc-ui";
import NoteCard from "@/components/home/NoteCard";
import CardCourse from "@/components/home/CardCourse";
import { useRouter } from "next/router";
import useStorage from "@/hooks/useStorage";
import { getAll } from "@/api/firebase";
import toast from "react-hot-toast";

export default function Home() {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const { getItem, setItem } = useStorage();
  const alreadyOpen = getItem("alreadyOpen");

  useEffect(() => {
    if (alreadyOpen !== "true") {
      setOpen(true);
      setItem("alreadyOpen", "true");
    }
  }, []);

  const [capacitaciones, setCapacitaciones] = useState<any[]>([]);

  const getCapacitaciones = async () => {
    try {
      const data = await getAll("capacitaciones");
      console.log(data);
      setCapacitaciones(data);
    } catch (error) {
      toast.error("Error al obtener las capacitaciones");
    }
  };

  useEffect(() => {
    getCapacitaciones();
  }, []);

  return (
    <>
      <section className="flex flex-col items-center justify-center h-[50vh] xl:h-[70vh] bg-banner bg-center bg-cover gap-2">
        <h1 className="text-3xl lg:text-5xl xl:text-6xl font-bold text-white">
          Paloma Sansores
        </h1>
        <p className="text-lg lg:text-2xl xl:text-4xl font-light text-white w-2/3 text-center">
          Si estás aquí es una señal para cambiar tu vida{" "}
        </p>
        <div className="mt-6">
          <Button
            label="Empieza HOY"
            shade="900"
            onClick={() => console.log("Empieza HOY")}
          />
        </div>
      </section>
      <section className="flex flex-col items-center justify-center">
        <p className="text-sm lg:text-xl xl:text-3xl font-bold w-1/2 text-center my-12">
          Es momento de elevar tu conciencia y tus resultados
        </p>
        <div className="mb-12 flex flex-col gap-4 lg:grid grid-cols-2 grid-rows-2 lg:w-4/5">
          <NoteCard
            title="Cursos"
            description="Estás a tiempo de cumplir tus sueños, yo se como ayudarte"
            icon={<Icon name="course" color="violet" shade="900" />}
          />
          <NoteCard
            title="Comunidad"
            description="Mantente motivada formando parte de un grupo de personas como tú, que todos los días trabajamos por ser mejores."
            icon={<Icon name="clip" color="violet" shade="900" />}
          />
          <NoteCard
            title="+ 100 VIDEOS"
            description="Enfocados en programar tu subconsciente"
            icon={<Icon name="play" color="violet" shade="900" />}
          />
          <NoteCard
            title="Herramientas de crecimiento"
            description="Conoce los recursos que te ayudarán en tu proceso"
            icon={<Icon name="stars" color="violet" shade="900" />}
          />
        </div>
      </section>
      <section>
        <p className="font-bold text-xl text-center my-12">
          Mis Cursos/Mentorías
        </p>
        <div className="mx-auto md:w-3/4 mb-12">
          <Slider
            items={capacitaciones.map((course, index) => (
              <CardCourse key={index} {...course} />
            ))}
            delay={4000}
          />
        </div>
      </section>
      <section className="md:flex gap-20 justify-center items-center mb-12">
        <div className="h-[70vh] bg-paloma bg-cover bg-top md:w-1/4 md:rounded-2xl md:h-[70vh]"></div>
        <div className="p-12 text-gray md:w-1/3 md:p-0">
          <p className="text-xs mb-4">Paloma Sansores, Coach Millonario</p>
          <p className="text-xl font-bold mb-7">
            La mentalidad correcta te llevará a tus resultados deseados.
          </p>
          <p className="text-sm mb-4">
            Soy Paloma Sansores, tengo más de 8 años de emprendimiento en
            negocios digitales y disfrutando de la libertad financiera. Inicié
            esta carrera del emprendimiento porque siempre supe como quería
            vivir mi vida, sabia que quería vivir mi vida bajo mis propios
            términos.
          </p>
          <p className="text-sm">
            Mi visión es impactar en la vida de muchas mujeres. Logrando que
            cada una de ellas viva una vida empoderada, libre y feliz, porque en
            definitiva, eso sucede cuando sabes lo que quieres y tienes las
            herramientas las herramientas necesarias para hacerlo.
          </p>
          <div className="mt-6">
            <Button
              label="Sobre Mi"
              color="gray"
              shade="300"
              onClick={() => router.push("sobre-mi")}
            />
          </div>
        </div>
      </section>
      <Modal
        bgImage="/img/bg-modal.png"
        shade="300"
        isOpen={open}
        onClose={() => setOpen(!open)}
      >
        <div className="flex flex-col gap-5">
          <h2 className="text-white uppercase text-2xl">
            Enterate todas las novedades que tengo para tí
          </h2>
          <p className="text-white">
            ¡Próximamente anunciaré nuevos cursos y eventos presenciales!
          </p>
          <div className="flex items-center gap-4">
            <Input
              onChange={() => console.log("onChange")}
              placeholder="Déjame tu email"
              bgColor="white"
              type="text"
            />
            <div className="w-10 h-8 bg-white/30 rounded p-2">
              <Icon name="arrowRight" color="white" />
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
}
