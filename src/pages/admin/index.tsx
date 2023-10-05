import { useApp } from "@/context/AppStore";
import { useRouter } from "next/router";
import React, { useEffect, useRef, useState } from "react";
import toast from "react-hot-toast";


const admin = ["capacitaciones", "users", "settings"];

export default function Admin() {
  const { user } = useApp();
  const json = useRef(null);
  const [state, setState] = useState("capacitaciones");

  const [capacitaciones, setCapacitaciones] = useState<{
    name: string;
    link: string;
    image: string;
    price: string;
    description: string;
  }>();
  const router = useRouter();
  useEffect(() => {
    if (!user) router.push("/login");
  }, [user]);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    const { name, link, image, price, description } = e.currentTarget;
    if (
      !name.value ||
      !link.value ||
      !image.value ||
      !price.value ||
      !description.value
    )
      return toast.error("Todos los campos son requeridos");
    const capacitacion = {
      name: name.value,
      link: link.value,
      image: image.value,
      price: price.value,
      description: description.value,
    };
    setCapacitaciones(capacitacion);
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
      {state === "capacitaciones" && (
        <div className="flex-1 p-10">
          <h2 className="text-2xl mb-6">Capacitaciones</h2>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <form onSubmit={handleSubmit}>
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
            {capacitaciones && (
              <div className="rounded-lg shadow-lg p-4 my-12">
                <h3>Cards</h3>
                
                <button
                  onClick={() => console.log("yooo")}
                  className="bg-gray-500 text-white p-2 rounded-lg"
                >
                  Subir capacitación
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
