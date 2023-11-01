import { sendEmail } from "@/api/email";
import Accordion from "@/components/common/Accordion";
import { Button, Icon, Input } from "mdc-ui";
import React, { useState } from "react";
import toast from "react-hot-toast";

export default function Contacto() {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState({
    name: "",
    email: "",
  });

  const handelSend = async () => {
    setLoading(true);
    await sendEmail(data.email, data.name);
    toast.success("¡Gracias por suscribirte!");
    setLoading(false);
  };

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
          <div className="my-8 hidden lg:flex lg:flex-col lg:gap-4 ">
            <p className="text-xl">Contacto</p>
            <div className="flex gap-4 mx-4">
              <div className="w-6 h-6">
                <Icon name="email" color="gray" />
              </div>
              <p className="text-gray">sansorespaloma@gmail.com</p>
            </div>
            <div className="flex gap-4 mx-4">
              <div className="w-6 h-6">
                <Icon name="phone" color="gray" />
              </div>
              <p className="text-gray">+52 1 984 276 7710</p>
            </div>
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
          <Button
            disabled={data.name.length === 0 || data.email.length === 0}
            onClick={handelSend}
            shade="700"
            label={loading ? "ENVIANDO..." : "ENVIAR"}
          />
        </div>
        <div className="my-8 lg:hidden w-4/5 mx-auto">
          <p className="text-xl">Dirección</p>
          <p className="text-gray">Tulum, México</p>
        </div>
        <div className="my-8 flex flex-col gap-4 lg:hidden w-4/5 mx-auto">
          <p className="text-xl">Contacto</p>
          <div className="flex gap-4">
            <div className="w-6 h-6">
              <Icon name="email" color="gray" />
            </div>
            <p className="text-gray">sansorespaloma@gmail.com</p>
          </div>
          <div className="flex gap-4">
            <div className="w-6 h-6">
              <Icon name="phone" color="gray" />
            </div>
            <p className="text-gray">+52 1 984 276 7710</p>
          </div>
        </div>
      </section>
      <h2 className="text-3xl font-medium my-12 text-center">
        Preguntas frecuentes
      </h2>
      <Accordion
        withButton={false}
        items={[
          {
            title: "¿Donde compro los cursos? ",
            description:
              "Puedes adquirir Networker Digital en el link que te redirige la sección al curso. Todos los demás cursos los puedes adquirir hablando conmigo directo, envíame un mensaje por WhatsApp y comienza hoy tu desarrollo.",
          },
          {
            title: "¿Cómo puedo ganar dinero contigo?",
            description:
              "Hoy en día uno de los mercados más fuertes es el de los cursos online, por lo tanto he creado WEM, un espacio donde puedes educarte y crecer en todas las áreas de tu vida: Vínculos Afectivos, Mindset, Ejercicio, Yoga, Glamour, sexologia y mucho más… y ganar dinero por recomendarlos. Si quieres comenzar; envíame un mensaje por WhatsApp.",
          },
          {
            title: "¿Cómo son las mentorias?",
            description:
              "Las mentorías son online y duran 50 minutos, se trata de una sesión en la cual vas a poder charlar conmigo acerca de eso que sientes que te está deteniendo; o para que puedas recibir una compañía y consejos en tu proceso.",
          },
        ]}
      />
    </>
  );
}
