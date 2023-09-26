import { login } from "@/api/firebase";
import { useApp } from "@/context/AppStore";
import { Button, Input } from "mdc-ui";
import { useRouter } from "next/router";
import React from "react";

export default function Admin() {
  const router = useRouter();
  const { setUser } = useApp();

  const [userData, setUserData] = React.useState({
    email: "",
    password: "",
  });

  const handleLogin = async () => {
    try {
      const userDatax = await login(
        userData.email as string,
        userData.password as string
      );
      setUser(userDatax);
      router.push("/admin");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="h-[calc(100vh-6rem)] bg-gradient-to-r from-violet-500/20 via-violet-500 to-violet-500/40 flex flex-col gap-6 justify-center items-center">
      <div className="w-1/3 flex flex-col gap-6 items-end">
        <Input
          label={{ text: "Email" }}
          type="text"
          value={userData.email}
          onChange={(value) => setUserData({ ...userData, email: value })}
        />
        <Input
          label={{ text: "Contraseña" }}
          type="password"
          value={userData.password}
          onChange={(value) => setUserData({ ...userData, password: value })}
        />

        <div>
          <Button label="Iniciar sesión" shade="900" onClick={handleLogin} />
        </div>
      </div>
    </div>
  );
}
