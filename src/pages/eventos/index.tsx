import { sendEmail } from "@/api/email";
import { getAll } from "@/api/firebase";
import Accordion from "@/components/common/Accordion";
import { Button, Input } from "mdc-ui";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";

export default function Eventos() {
  const [loading, setLoading] = useState(false);
  const [eventos, setEventos] = useState<any[]>([]);
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

  useEffect(() => {
    const getEventos = async () => {
      try {
        const data = await getAll("eventos");
        setEventos(data);
      } catch (error) {
        toast.error("Ocurrió un error al cargar los eventos");
      }
    };
    getEventos();
  }, []);
  return (
    <>
      <section className="flex flex-col gap-4 py-20 bg-blue/20 bg-no-repeat justify-center items-center bg-elipse bg-cover bg-left lg:flex-row lg:justify-evenly">
        <div>
          <p className="text-2xl text-left text-white font-medium lg:text-4xl">
            Eventos presenciales
          </p>
        </div>
        <div className="w-4/5 mx-auto bg-white/80 flex flex-col gap-4 my-4 rounded-xl px-4 py-8 lg:w-2/5 lg:mx-0">
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
          <div>
            <Button
              disabled={data.name.length === 0 || data.email.length === 0}
              onClick={handelSend}
              shade="700"
              label={loading ? "ENVIANDO..." : "ENVIAR"}
            />
          </div>
        </div>
      </section>
      <div className="my-12">
        <Accordion
          items={eventos}
        />
      </div>
    </>
  );
}
