import { getById } from "@/api/firebase";
import { Button } from "mdc-ui";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";

export default function Capacitacion() {
  const router = useRouter();
  const [capacitacion, setCapacitacion] = useState<any>();
  const { id } = router.query;

  useEffect(() => {
    const getCapacitacion = async () => {
      try {
        const data = await getById("capacitaciones", id);
        setCapacitacion(data);
      } catch (error) {
        toast.error("Ocurrió un error al cargar la capacitación");
      }
    };
    if (id) getCapacitacion();
  }, [id]);

  if (!capacitacion) return null;

  // Encuentra la posición del ":"
  const indiceDosPuntos = capacitacion.name.indexOf(":");

  // Corta la palabra hasta el ":"
  const parte1 = capacitacion.name.slice(0, indiceDosPuntos + 1); // +1 para incluir el ":"

  // Corta la capacitacion.name después del ":"
  const parte2 = capacitacion.name.slice(indiceDosPuntos + 1);

  return (
    <>
      <section
        style={{ backgroundImage: `url(${capacitacion.image})` }}
        className="h-[50vh] lg:h-[80vh] flex flex-col gap-32 justify-center items-center bg-cover bg-center"
      >
        <div>
          <p className="font-bold text-3xl text-center">{parte1}</p>
          <p className="text-2xl text-center">{parte2}</p>
        </div>
      </section>
      <section className="my-12 px-12 2xl:w-4/5 2xl:mx-auto flex flex-col gap-4 lg:flex-row lg:gap-16">
        <div className="flex flex-col gap-4 lg:w-1/2">
          <div>
            <Button
              label="Volver"
              color="violet"
              shade="900"
              onClick={() => {
                router.back();
              }}
            />
          </div>
          <p className="text-2xl font-bold">{capacitacion.title}</p>
          <p
            className="text-gray"
            dangerouslySetInnerHTML={{ __html: capacitacion.description }}
          ></p>
          <div className="mt-8 w-fit">
            <Link
              href={capacitacion.link}
              target="_blank"
              className="hidden lg:flex bg-blue-900 px-4 py-2 rounded-full text-white"
            >
              Comprar Ahora
            </Link>
          </div>
        </div>
        <div className="flex flex-col lg:w-1/2 lg:mt-16">
          {capacitacion.items.map((item: any, index: number) => (
            <div className="bg-blue -mt-2 rounded-2xl" key={index}>
              <p className="px-8 py-4 text-white text-xl font-bold">
                {item.name}
              </p>
              <div className="bg-blue-900/80 rounded-2xl px-12 py-4 flex flex-col gap-4">
                <ul className="text-white">
                  {item.bullets.map((bullet: any, index: number) => (
                    <li key={index}>{bullet}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}

          <div className="mt-8">
            <Link
              href={capacitacion.link}
              target="_blank"
              className=" lg:hidden bg-blue-800 px-4 py-2 rounded-full text-white"
            >
              Comprar Ahora
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
