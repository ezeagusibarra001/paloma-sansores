import React, { useState } from "react";
import { Button, Card } from "mdc-ui";
import { useRouter } from "next/router";
import { useApp } from "@/context/AppStore";
import Link from "next/link";

export default function Capacitaciones() {
  const router = useRouter();
  const [filter, setFilter] = useState<string>("all");
  const { capacitaciones } = useApp();
  return (
    <>
      <section className="h-[70vh] flex flex-col gap-32 justify-center items-center bg-bannerSobreMi bg-cover bg-top">
        <div>
          <p className="font-bold text-3xl text-center">
            Descubre el poder dentro de ti:
          </p>
          <p className="text-2xl text-center">
            Conoce los cursos y mentorías para transformar tu vida
          </p>
        </div>
        <div className="flex gap-6">
          <Button
            color={"all" !== filter ? "gray" : "blue"}
            shade={"all" !== filter ? "DEFAULT" : "900"}
            label="Todo"
            onClick={() => {
              setFilter("all");
            }}
          />
          <Button
            color={"courses" !== filter ? "gray" : "blue"}
            shade={"courses" !== filter ? "DEFAULT" : "900"}
            label="Cursos"
            onClick={() => {
              setFilter("courses");
            }}
          />
          <Button
            color={"mentoring" !== filter ? "gray" : "blue"}
            shade={"mentoring" !== filter ? "DEFAULT" : "900"}
            label="Mentorías"
            onClick={() => {
              setFilter("mentoring");
            }}
          />
        </div>
      </section>
      <section className="my-12 flex flex-wrap gap-8 justify-center items-center">
        {capacitaciones
          .filter((c) => filter == "all" || c.curso == (filter == "courses"))
          .map((capacitacion, index) => {
            return (
              <div key={index} className="min-w-92">
                <Card
                  img={capacitacion.image}
                  onClick={() => {
                    router.push(`/capacitaciones/${capacitacion.id}`);
                  }}
                  title={capacitacion.name}
                  price={capacitacion.price}
                  label="Precio Lanzamiento"
                />
              </div>
            );
          })}
      </section>
      <section className="border-t border-gray py-12">
        <h2 className="text-center text-2xl font-semibold">
          Herramientas de crecimiento:
        </h2>
        <h3 className="text-center text-xl">
          Conoce los recursos que te ayudarán en tu proceso
        </h3>

        <div className="flex flex-wrap gap-8 justify-center py-8">
          <CardsLink
            link="https://paloma-sansores-herramientas.myshopify.com/products/130-ideas-para-crear-contenido"
            img="/img/extra/130.png"
            title="130 ideas para crear contenido"
            price="5"
            price2="15"
          />
          <CardsLink
            link="https://paloma-sansores-herramientas.myshopify.com/products/agenda-networker-digital"
            img="/img/extra/agenda.png"
            title="Agenda Network Digital"
            price="10"
            price2="25"
          />
          <CardsLink
            link="https://paloma-sansores-herramientas.myshopify.com/products/vuelvete-un-master-en-reels"
            img="/img/extra/net.png"
            title="Vuélvete un master en reels"
            price="6"
            price2="15"
          />
        </div>
      </section>
    </>
  );
}

const CardsLink = ({
  title,
  img,
  price,
  price2,
  link,
}: {
  title: string;
  img: string;
  price: string;
  price2: string;
  link: string;
}) => {
  return (
    <Link href={link} target="_blank">
      <div
        style={{
          backgroundImage: `url(${img})`,
        }}
        className="w-64 h-72 bg-contain bg-center bg-no-repeat"
      ></div>
      <p>{title}</p>
      <div className="flex gap-4">
        <p className="text-sm">${price}.00</p>
        <p className="text-gray text-sm">${price2}.00</p>
      </div>
    </Link>
  );
};
