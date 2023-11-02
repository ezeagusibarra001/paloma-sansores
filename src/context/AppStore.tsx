import { authState, getAll } from "@/api/firebase";
import { useRouter } from "next/router";
import {
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import toast from "react-hot-toast";

type contextProps = {
  children: React.ReactNode;
};

interface ContextInterface {
  user: any | null;
  setUser: React.Dispatch<React.SetStateAction<any | null>>;
  capacitaciones: any[];
  getCapacitaciones: () => void;
  eventos: any[];
  getEventos: () => void;
}

const AppContext = createContext<ContextInterface>({} as ContextInterface);

const AppProvider = ({ children }: contextProps) => {
  const router = useRouter();
  const [user, setUser] = useState<any | null>(null);
  const [capacitaciones, setCapacitaciones] = useState<any[]>([]);
  const [eventos, setEventos] = useState<any[]>([]);

  useEffect(() => {
    authState((user) => {
      setUser(user);
    });
    getCapacitaciones();
    getEventos();
  }, []);

  const getEventos = async () => {
    try {
      const data = await getAll("eventos");
      setEventos(data);
    } catch (error) {
      toast.error("Error al obtener las eventos");
    }
  };

  const getCapacitaciones = async () => {
    try {
      const data = await getAll("capacitaciones");
      console.log(data);
      setCapacitaciones(data);
    } catch (error) {
      toast.error("Error al obtener las capacitaciones");
    }
  };

  useEffect(() => {
    if (!user && router.pathname.includes("admin")) router.push("/login");
    else if (user && router.pathname.includes("login")) router.push("/admin");
  }, [user]);

  return (
    <AppContext.Provider
      value={{
        user,
        setUser,
        capacitaciones,
        getCapacitaciones,
        eventos,
        getEventos,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

function useApp() {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("Something wrong have happended");
  }
  return context;
}

export { AppProvider, useApp };
