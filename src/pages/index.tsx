import React, { useEffect, useState } from "react";
import { Button, Icon, Input, Modal, Slider } from "mdc-ui";
import NoteCard from "@/components/home/NoteCard";
import CardCourse from "@/components/home/CardCourse";
import { useRouter } from "next/router";
import useStorage from "@/hooks/useStorage";
import { getAll } from "@/api/firebase";
import toast from "react-hot-toast";
import { sendEmail } from "@/api/email";
import Link from "next/link";

export default function Home() {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
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

  const handleEmail = async () => {
    setLoading(true);
    try {
      const emailRegex = /\S+@\S+\.\S+/;
      if (!emailRegex.test(email)) {
        toast.error("Email inválido");
        return;
      }
      await sendEmail(email, "Suscripción a newsletter");
      toast.success("¡Gracias por suscribirte!");
    } catch (error) {
      toast.error("Error al suscribirte");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getCapacitaciones();
  }, []);

  const testimonios = [
    {
      title: "Daniela Aguilar",
      text: "Paloma, yo estoy feliz y contenta de aprender de ti, yo personalmente siento que soy capaz de lograr todo, sé que lograré cumplir grandes metas en esta industria. Me sirve mucho llevar a la acción todos tus tips, porque si no avanzo son por las limitaciones inconscientes, pero trabajando se logra totalmente. Gracias, gracias gracias por todo.",
    },
    {
      title: "Jennifer Barrios",
      text: "Empecé a tener mi vida mas en orden, obvio que aun no se hace automático pero lo voy haciendo. Tengo arreglada mi casa, trabajo mas eficazmente. Mi cocina está diferente mi cama todos los dias ordenada, mi closet. Tiempo con mis hijos, con mi esposo. osea un orden y el rango se dió como magia.",
    },
    {
      title: "Limsy Sanchez Serrano",
      text: "He sufrido muchos traumas a mi corta edad y gracias a tus clases estoy aprendiendo a soltar y a amarme a mí misma. Gracias a ti he aprendido a perdonar y a construir un futuro mejor. A dedicarme el tiempo que merezco porque siempre estoy luchando por todo: mis estudios, mi trabajo, mi casa. Gracias!",
    },
    {
      title: "Michelle Solas",
      text: "Pues para mi tus clases me han ayudado a reconocer que soy merecedora e invertir en mi, buscar estar bien primero en mi cuerpo con mi templo, dármelo sin culpas y atraer lo que deseo desde el amor que merezco, además cuando no me siento al 100, me meto a tus clases y mi frecuencia cambia. Gracias.",
    },
    {
      title: "Marcos Reyes",
      text: "Gracias a este curso de mindset estoy mas feliz agradecido me siento abundante y por ende tengo mucho mas dinero que antes y eh cumplido mucho sueños y me esta acercando a mi riqueza y estamos desbloqueando muchos paradigmas. Tengo autoestima la que había perdido hace mucho tiempo hoy soy mas feliz.",
    },
    {
      title: "Xochitl Guadalupe",
      text: "Yo estoy comenzando de cero gracias a este programa y a tus mentorías Paloma. Me enseñaste que se puede llegar al éxito siempre que queramos. Y debemos iniciar las veces que sean necesarias para alcanzar nuestras metas. Gracias infinitas a ti.",
    },
  ];

  return (
    <>
      <section className="absolute w-full h-full flex flex-col items-center justify-center gap-2">
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
            onClick={() => router.push("/capacitaciones")}
          />
        </div>
      </section>
      <video
        id="background-video"
        className="relative -z-50"
        autoPlay
        loop
        muted
        poster="https://assets.codepen.io/6093409/river.jpg"
      >
        <source src="./videos/paloma.mp4" type="video/mp4" />
      </video>
      <section className="flex flex-col items-center justify-center">
        <p className="text-sm lg:text-xl xl:text-3xl font-bold w-1/2 text-center my-12">
          Es momento de elevar tu conciencia y tus resultados
        </p>
        <div className="mb-12 flex flex-col gap-4 lg:grid grid-cols-2 grid-rows-2 lg:w-4/5">
          <NoteCard
            title="Cursos"
            description="Estás a tiempo de cumplir tus sueños, yo se como ayudarte"
            icon={<Icon name="course" color="violet" shade="900" />}
            href={"/capacitaciones"}
          />
          <NoteCard
            title="Comunidad"
            description="Mantente motivada formando parte de un grupo de personas como tú, que todos los días trabajamos por ser mejores."
            icon={<Icon name="clip" color="violet" shade="900" />}
            href={"https://t.me/palomasansores"}
          />
          <NoteCard
            title="+ 100 VIDEOS"
            description="Enfocados en programar tu subconsciente"
            icon={<Icon name="play" color="violet" shade="900" />}
            href={"https://www.youtube.com/@palomasansores"}
          />
          <NoteCard
            title="Herramientas de crecimiento"
            description="Conoce los recursos que te ayudarán en tu proceso"
            icon={<Icon name="stars" color="violet" shade="900" />}
            href={"https://paloma-sansores-herramientas.myshopify.com/"}
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
      <section className="bg-gray-100 pt-20 flex gap-12 flex-col md:flex-row">
        <div className="flex flex-col gap-4 px-12 md:justify-center md:px-24">
          <p className="text-sm text-gray">
            Si buscas emprender con un negocio digital...
          </p>
          <h3 className="text-blue-900 font-bold text-2xl w-2/3">
            Conectate conmigo a través de WhatApp
          </h3>
          <Link href="https://wa.me/message/G4OMBUDSVX72E1" target="_blank">
            <Button shade="900" label="Emprende Conmigo" onClick={() => {}} />
          </Link>
        </div>
        <div className="h-[70vh] w-4/5 mx-auto bg-celular bg-contain bg-no-repeat bg-left-bottom md:w-1/2 md:rounded-2xl md:h-[70vh]"></div>
      </section>
      <section className="md:flex md:pt-12 gap-20 justify-center items-center mb-12">
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
      <section className="py-12">
        <h3 className="text-center text-blue-900 font-medium text-xl">
          Reseñas y Testimonios
        </h3>
        <div className="flex flex-wrap justify-center gap-6 my-8">
          {testimonios.map((testimonio, index) => (
            <Testimonios key={index} {...testimonio} />
          ))}
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
              onChange={(value) => setEmail(value)}
              placeholder="Déjame tu email"
              bgColor="white"
              type="text"
            />
            <div
              onClick={handleEmail}
              className={`w-10 h-8 bg-white/30 rounded p-2 ${
                loading && "animate-bounce"
              }`}
            >
              <Icon name="arrowRight" color="white" />
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
}

const Testimonios = ({ title, text }: { title: string; text: string }) => {
  return (
    <div className="bg-blue/20 rounded-xl mx-8 flex flex-col gap-5 py-6 w-full md:w-1/3 lg:w-1/4">
      <h2 className="text-blue-900 text-center text-xl">{title}</h2>
      <p className="text-gray-500 text-center mx-8">{text}</p>
    </div>
  );
};
