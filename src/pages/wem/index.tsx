import { Button, Icon } from "mdc-ui";
import Link from "next/link";
import React from "react";

export default function Wem() {
  return (
    <>
      <section className="flex flex-col items-center justify-center h-[50vh] xl:h-[70vh] bg-wem bg-center bg-cover gap-2 "></section>
      <div className="flex flex-col lg:flex-row lg:gap-12 items-center justify-evenly">
        <div className="h-[40vh] bg-women bg-center bg-cover w-4/5 lg:w-2/5 mx-auto rounded-2xl my-8"></div>

        <div className="w-4/5 mx-auto flex flex-col gap-4 my-12 lg:w-2/5">
          <p className="text-gray text-sm">WOMAN EMPOWERMENT MOMENTUM</p>
          <p className="text-xl">
            Bienvenida a la academia donde potenciarás tu ser y talentos para
            los negocios
          </p>
          <p className="text-gray my-3">
            Nos adaptamos a tus necesidades y por eso te ofrecemos dos formas
            para desarrollar tu máximo potencial.
          </p>
          <ul className="px-4 text-gray">
            <li>
              MINED ACADEMY: clases grabadas que te permitirán aprender a tu
              ritmo
            </li>
            <li>
              MINED TV: clases en vivo con las mejores profesionales de la
              industria.
            </li>
          </ul>
          <div className="flex gap-4">
            <Link href="https://mined.world/wem/" target="_blank">
              <Button
                label="MINED ACADEMY"
                color="pink"
                shade="300"
                onClick={() => {}}
              />
            </Link>
            <Link
              href="https://www.youtube.com/watch?v=UedPYs5QviM"
              target="_blank"
            >
              <Button
                label="MINED TV"
                color="pink"
                shade="300"
                onClick={() => {}}
              />
            </Link>
          </div>
        </div>
      </div>
      <section className="flex flex-col my-12 gap-20 bg-pink-300/5 py-20">
        <div className="flex flex-col gap-4 justify-center items-center">
          <div className="bg-pink-300 rounded-full w-12 h-12 p-2">
            <Icon name="school" color="white" />
          </div>
          <h2 className="text-pink-300 font-bold uppercase text-2xl">
            Clases Completas
          </h2>
          <p className="w-1/2 mx-auto text-center text-gray-300">
            Accede a las clases más completas y fortalece tus habilidades de
            forma integral.
          </p>
        </div>
        <div className="flex flex-col gap-4 justify-center items-center">
          <div className="bg-pink-300 rounded-full w-12 h-12 p-2">
            <Icon name="women" color="white" />
          </div>
          <h2 className="text-pink-300 font-bold uppercase text-2xl">
            Por Mujeres
          </h2>
          <p className="w-1/2 mx-auto text-center text-gray-300">
            Aprende con las mejores educadoras de la industria.
          </p>
        </div>
        <div className="flex flex-col gap-4 justify-center items-center">
          <div className="bg-pink-300 rounded-full w-12 h-12 p-2">
            <Icon name="copy" color="white" />
          </div>
          <h2 className="text-pink-300 font-bold uppercase text-2xl">
            Material Online
          </h2>
          <p className="w-1/2 mx-auto text-center text-gray-300">
            Ten a tu disposición todo el material necesario para tu proceso
            educativo.
          </p>
        </div>
      </section>
    </>
  );
}
