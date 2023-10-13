import { authState } from "@/api/firebase";
import { useRouter } from "next/router";
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";

type contextProps = {
  children: React.ReactNode;
};

interface ContextInterface {
  user: any | null;
  setUser: React.Dispatch<React.SetStateAction<any | null>>;
}

const AppContext = createContext<ContextInterface>({} as ContextInterface);

const AppProvider = ({ children }: contextProps) => {
  const router = useRouter();
  const [user, setUser] = useState<any | null>(null);

  useEffect(() => {
    authState((user) => {
      setUser(user);
    });
  }, []);

  useEffect(() => {
    if (!user && router.pathname.includes("admin")) router.push("/login");
    else if (user && router.pathname.includes("login")) router.push("/admin");
  }, [user]);

  return (
    <AppContext.Provider
      value={{
        user,
        setUser,
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
