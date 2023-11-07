import { useApp } from "@/context/AppStore";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import ItemComponent from "./ItemComponent";
import { addData, deleteById, uploadImage } from "@/api/firebase";

interface Item {
  name: string;
  bullets: string[];
}

export const admin = ["capacitaciones", "eventos"];

export default function Admin() {
  const {
    user,
    capacitaciones: allCapacitaciones,
    eventos,
    getCapacitaciones,
    getEventos,
  } = useApp();
  const [state, setState] = useState("capacitaciones");
  const [items, setItems] = useState<Item[]>([]);

  const [capacitaciones, setCapacitaciones] = useState<{
    name: string;
    link: string;
    image: string;
    price: string;
    title: string;
    description: string;
    curso: boolean;
  }>({
    name: "",
    link: "",
    image: "",
    price: "",
    title: "",
    description: "",
    curso: false,
  });
  const router = useRouter();
  useEffect(() => {
    if (!user) router.push("/login");
  }, [user]);

  const handleSubmitEvento = async (e: any) => {
    e.preventDefault();
    const { date, link, description, title } = e.currentTarget;
    if (!date.value || !link.value || !title.value || !description.value)
      return toast.error("Todos los campos son requeridos");
    const evento = {
      date: date.value,
      link: link.value,
      description: description.value.replace(/\n/g, "<br>"),
      title: title.value,
    };
    try {
      toast.loading("Subiendo evento");
      await addData("eventos", evento);
      await getEventos();
      toast.dismiss();
      toast.success("Evento subido con éxito");
    } catch (error) {
      console.error(error);
      toast.error("Error al subir evento");
    }
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    const { name, link, image, price, description, title, curso } =
      e.currentTarget;
    if (
      !name.value ||
      !link.value ||
      !image.files[0] ||
      !price.value ||
      !title.value ||
      !description.value
    )
      return toast.error("Todos los campos son requeridos");
    const capacitacion = {
      name: name.value,
      link: link.value,
      image: image.files[0],
      price: price.value,
      title: title.value,
      description: description.value.replace(/\n/g, "<br>"),
      curso: curso.checked,
    };
    setCapacitaciones(capacitacion);
  };

  const handleSubir = async () => {
    try {
      toast.loading("Subiendo capacitación");
      if (!capacitaciones)
        return toast.error("Todos los campos son requeridos");
      const url = await uploadImage("capacitaciones", capacitaciones.image);
      const data = {
        ...capacitaciones,
        image: url,
        items,
      };
      await addData("capacitaciones", data);
      await getCapacitaciones();
      toast.dismiss();
      toast.success("Capacitación subida con éxito");
    } catch (error) {
      console.error(error);
      toast.dismiss();
      toast.error("Error al subir capacitación");
    }
  };

  return (
    <div className="flex min-h-[calc(100vh-6rem)]">
      {/* Sidebar */}
      <div className="bg-gray-800 w-1/4 p-6">
        <h1 className="text-white text-xl mb-6">Admin Panel</h1>
        <ul className="text-white">
          {admin.map((item, index) => (
            <li
              key={index}
              className="py-2 cursor-pointer capitalize"
              onClick={() => setState(item)}
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
      {/* capacitaciones */}
      {state === "capacitacion-eliminar" && (
        <div className="flex-1 p-10">
          <h2 className="text-2xl mb-6">Capacitaciones Eliminar</h2>
          <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col gap-4">
            {allCapacitaciones.map((capacitacion, index) => (
              <div key={index} className="flex items-center justify-between">
                <p>{capacitacion.name}</p>
                <button
                  onClick={async () => {
                    confirm("Estas seguro de eliminar esta capacitación?") &&
                      toast.promise(
                        deleteById("capacitaciones", capacitacion.id),
                        {
                          loading: "Eliminando capacitación",
                          success: "Capacitación eliminada con éxito",
                          error: "Error al eliminar capacitación",
                        }
                      );
                  }}
                  className="bg-red-500 text-white p-2 rounded-lg"
                >
                  Eliminar
                </button>
              </div>
            ))}
          </div>
        </div>
      )}
      {state === "capacitacion-editar" && (
        <div className="flex-1 p-10">
          <h2 className="text-2xl mb-6">Capacitaciones Editar</h2>
          <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col gap-4">
            {allCapacitaciones.map((capacitacion, index) => (
              <div key={index} className="flex items-center justify-between">
                <p>{capacitacion.name}</p>
                <button
                  onClick={() => {
                    router.push(`/admin/editar/${capacitacion.id}`);
                  }}
                  className="bg-green-500 text-white p-2 rounded-lg"
                >
                  Editar
                </button>
              </div>
            ))}
          </div>
        </div>
      )}
      {state === "capacitaciones" && (
        <div className="flex-1 p-10">
          <h2 className="text-2xl mb-6">Capacitaciones</h2>
          <button
            onClick={() => setState("capacitacion-eliminar")}
            className="bg-red-500 text-white p-2 rounded-lg mb-6"
          >
            Eliminar capacitación
          </button>
          <button
            onClick={() => setState("capacitacion-editar")}
            className="ml-4 bg-green-500 text-white p-2 rounded-lg mb-6"
          >
            Editar capacitación
          </button>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <form onSubmit={handleSubmit}>
              <div>
                <input type="checkbox" name="curso" />
                <label htmlFor="scales">Es un curso?</label>
              </div>
              <input
                name="name"
                type="text"
                placeholder="Nombre"
                className="border p-2 mb-4 w-full"
              />
              <input
                name="link"
                type="text"
                placeholder="Link"
                className="border p-2 mb-4 w-full"
              />
              <input
                name="image"
                type="file"
                placeholder="Imagen"
                className="border p-2 mb-4 w-full"
              />
              <input
                name="price"
                type="number"
                placeholder="Precio"
                className="border p-2 mb-4 w-full"
              />
              <input
                name="title"
                type="text"
                placeholder="Titulo"
                className="border p-2 mb-4 w-full"
              />
              <textarea
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    e.preventDefault();
                    e.currentTarget.value += "\n\n";
                    console.log(e.currentTarget.value);
                  }
                }}
                rows={5}
                name="description"
                placeholder="Descripción"
                className="border p-2 mb-4 w-full"
              />
              <button className="bg-blue-500 text-white p-2 rounded-lg">
                Siguiente
              </button>
            </form>
            {capacitaciones.image && (
              <div className="rounded-lg shadow-lg p-4 my-12">
                <h3>Cards</h3>
                <ItemComponent items={items} setItems={setItems} />
                <button
                  onClick={handleSubir}
                  className="bg-gray-500 text-white p-2 rounded-lg my-12"
                >
                  Subir capacitación
                </button>
              </div>
            )}
          </div>
        </div>
      )}
      {state === "eventos-eliminar" && (
        <div className="flex-1 p-10">
          <h2 className="text-2xl mb-6">Eventos Eliminar</h2>
          <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col gap-4">
            {eventos.map((evento, index) => (
              <div key={index} className="flex items-center justify-between">
                <p>{evento.title}</p>
                <button
                  onClick={async () => {
                    confirm("Estas seguro de eliminar este evento?") && (
                      toast.promise(deleteById("eventos", evento.id), {
                        loading: "Eliminando evento",
                        success: "Evento eliminada con éxito",
                        error: "Error al eliminar evento",
                      })
                    )
                  }}
                  className="bg-red-500 text-white p-2 rounded-lg"
                >
                  Eliminar
                </button>
              </div>
            ))}
          </div>
        </div>
      )}
      {state === "eventos" && (
        <div className="flex-1 p-10">
          <h2 className="text-2xl mb-6">Eventos</h2>
          <button
            onClick={() => setState("eventos-eliminar")}
            className="bg-red-500 text-white p-2 rounded-lg mb-6"
          >
            Eliminar evento
          </button>
          <button
            onClick={() => setState("eventos-editar")}
            className="ml-4 bg-green-500 text-white p-2 rounded-lg mb-6"
          >
            Editar evento
          </button>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <form onSubmit={handleSubmitEvento}>
              <input
                name="title"
                type="text"
                placeholder="Titulo"
                className="border p-2 mb-4 w-full"
              />
              <textarea
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    e.preventDefault();
                    e.currentTarget.value += "\n\n";
                    console.log(e.currentTarget.value);
                  }
                }}
                rows={5}
                name="description"
                placeholder="Descripción"
                className="border p-2 mb-4 w-full"
              />
              <input
                name="link"
                type="text"
                placeholder="Link"
                className="border p-2 mb-4 w-full"
              />
              <input
                name="date"
                type="text"
                placeholder="Fecha"
                className="border p-2 mb-4 w-full"
              />
              <button className="bg-blue-500 text-white p-2 rounded-lg">
                Siguiente
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
