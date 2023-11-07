import React, { useEffect, useState } from "react";
import { useApp } from "@/context/AppStore";
import { useRouter } from "next/router";
import toast from "react-hot-toast";
import { updateByColAndId } from "@/api/firebase";

export default function EventosEditar() {
  const router = useRouter();
  const { getEvento, getEventos } = useApp();
  const [evento, setEvento] = useState<any>({
    title: "",
    description: "",
    date: "",
    link: "",
  });

  useEffect(() => {
    if (router.query.id) {
      const loadEvento = async () => {
        try {
          const data = await getEvento(router.query.id as string);
          console.log(data);
          Object.keys(data).forEach((key) => {
            setEvento((prev: any) => ({ ...prev, [key]: data[key] }));
          });
        } catch (error) {
          console.log(error);
        }
      };
      loadEvento();
    }
  }, [router.query.id]);

  const handleUpdate = async () => {
    try {
      toast.loading("Actualizando evento");
      const res = await updateByColAndId(
        "eventos",
        router.query.id as string,
        evento
      );
      await getEventos();
      toast.dismiss();
      toast.success("Evento actualizado");
    } catch (error) {
      toast.dismiss();
      toast.error("Error al actualizar el evento");
    }
  };

  return (
    <div className="flex min-h-[calc(100vh-6rem)]">
      {/* Sidebar */}
      <div className="bg-gray-800 w-1/4 p-6">
        <h1 className="text-white text-xl mb-6">Admin Panel</h1>
        <ul className="text-white">
          <li
            className="mb-2 cursor-pointer"
            onClick={() => {
              router.back();
            }}
          >
            Volver
          </li>
        </ul>
      </div>
      {/* Main */}
      <div className="flex-1 p-10">
        <h2 className="text-2xl mb-6">Editar eventos</h2>
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <input
            value={evento.title}
            onChange={(e) => {
              setEvento((prev: any) => ({ ...prev, title: e.target.value }));
            }}
            name="title"
            type="text"
            placeholder="Titulo"
            className="border p-2 mb-4 w-full"
          />
          <textarea
            value={evento.description}
            onChange={(e) => {
              setEvento((prev: any) => ({
                ...prev,
                description: e.target.value,
              }));
            }}
            name="description"
            rows={5}
            placeholder="Descripcion"
            className="border p-2 mb-4 w-full"
          />
          <p className="pb-4">{`NOTA: En caso de querer separar en parrafos, agregar '<br>' para agregar los espacios.`}</p>
          <input
            value={evento.date}
            onChange={(e) => {
              setEvento((prev: any) => ({ ...prev, date: e.target.value }));
            }}
            name="date"
            type="text"
            placeholder="Fecha"
            className="border p-2 mb-4 w-full"
          />

          <input
            value={evento.link}
            onChange={(e) => {
              setEvento((prev: any) => ({ ...prev, link: e.target.value }));
            }}
            name="link"
            type="text"
            placeholder="Link"
            className="border p-2 mb-4 w-full"
          />
          <button
            onClick={handleUpdate}
            className="bg-blue-500 text-white p-2 rounded-lg"
          >
            Guardar
          </button>
        </div>
      </div>
    </div>
  );
}
