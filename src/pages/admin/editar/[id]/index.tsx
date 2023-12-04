import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import ItemComponent from "../../ItemComponent";
import { useApp } from "@/context/AppStore";
import toast from "react-hot-toast";
import { updateByColAndId, uploadImage } from "@/api/firebase";

interface Course {
  curso: boolean;
  name: string;
  price: string;
  title: string;
  link: string;
  image: string | File;
  description: string;
}

function Editar() {
  const router = useRouter();
  const { getCapacitacion, getCapacitaciones } = useApp();
  const [course, setCourse] = useState<Course>({
    curso: false,
    name: "",
    price: "",
    title: "",
    link: "",
    image: "",
    description: "",
  });
  const [items, setItems] = useState<any[]>([]);
  useEffect(() => {
    if (router.query.id) {
      const loadCapacitacion = async () => {
        try {
          const data = await getCapacitacion(router.query.id as string);
          Object.keys(data).forEach((key) => {
            if (key === "items") {
              setItems(data[key]);
            } else {
              setCourse((prev) => ({ ...prev, [key]: data[key] }));
            }
          });
        } catch (error) {
          toast.error("Error al obtener la capacitacion");
        }
      };
      loadCapacitacion();
    }
  }, [router.query.id]);

  const handleUpdate = async () => {
    try {
        toast.loading("Actualizando capacitacion");
        const data = {
            ...course,
            items
        }
        console.log("1",data);
        if(data.image instanceof File){
            const url = await uploadImage("capacitaciones", course.image);
            console.log("url",url);
            data.image = url as string;
        }
        console.log("conimagen",data);
        const res = await updateByColAndId("capacitaciones", router.query.id as string, data);
        console.log(res);
        await getCapacitaciones();
        toast.dismiss();
        toast.success("Capacitacion actualizada");

    } catch (error) {
        toast.error("Error al actualizar la capacitacion");
    }
  }

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
      <div className="flex-1 p-10">
        <h2 className="text-2xl mb-6">Editar capacitaciones</h2>
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <div>
            <input
              onChange={(e) => {
                setCourse((prev) => ({
                  ...prev,
                  curso: e.target.checked,
                }));
              }}
              className="mr-2"
            checked={course.curso} type="checkbox" name="curso" />
            <label htmlFor="scales">Es un curso?</label>
          </div>
          <input
            value={course.name}
            onChange={(e) => {
              setCourse((prev) => ({ ...prev, name: e.target.value }));
            }}
            name="name"
            type="text"
            placeholder="Nombre"
            className="border p-2 mb-4 w-full"
          />
          <input
            value={course.link}
            onChange={(e) => {
              setCourse((prev) => ({ ...prev, link: e.target.value }));
            }}
            name="link"
            type="text"
            placeholder="Link"
            className="border p-2 mb-4 w-full"
          />
          <input
            onChange={(e) => {
              setCourse((prev) => ({
                ...prev,
                image: e.target.files ? e.target.files[0] : "",
              }));
            }}
            name="image"
            type="file"
            placeholder="Imagen"
            className="border p-2 mb-4 w-full"
          />
          <input
            value={course.price}
            onChange={(e) => {
              setCourse((prev) => ({ ...prev, price: e.target.value }));
            }}
            name="price"
            type="number"
            placeholder="Precio"
            className="border p-2 mb-4 w-full"
          />
          <input
            value={course.title}
            onChange={(e) => {
              setCourse((prev) => ({ ...prev, title: e.target.value }));
            }}
            name="title"
            type="text"
            placeholder="Titulo"
            className="border p-2 mb-4 w-full"
          />
          <textarea
            value={course.description}
            onChange={(e) => {
              setCourse((prev) => ({ ...prev, description: e.target.value }));
            }}
            //   onKeyDown={(e) => {
            //     if (e.key === "Enter") {
            //       e.preventDefault();
            //       e.currentTarget.value += "\n\n";
            //       console.log(e.currentTarget.value);
            //     }
            //   }}
            rows={5}
            name="description"
            placeholder="Descripción"
            className="border p-2 mb-4 w-full"
          />
          <p>{`NOTA: En caso de querer separar en parrafos, agregar '<br>' para agregar los espacios.`}</p>
          {items.length > 0 && (
            <div className="rounded-lg shadow-lg p-4 my-12">
              <h3>Cards</h3>
              <ItemComponent items={items} setItems={setItems} />
              <button
                onClick={handleUpdate}
                className="bg-gray-500 text-white p-2 rounded-lg my-12"
              >
                Editar capacitación
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Editar;
