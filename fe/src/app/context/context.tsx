"use client";

import {
  createContext,
  useEffect,
  useState,
  Dispatch,
  SetStateAction,
} from "react";

interface LoginContextProps {
  login: boolean;
  userId: string;
  setLogin: Dispatch<SetStateAction<boolean>>;
}

// (value: React.SetStateAction<boolean>) => void;
export const LoginContext = createContext<LoginContextProps>({
  login: false,
  userId: "",
  setLogin: () => undefined,
});

export const LoginProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [login, setLogin] = useState<boolean>(false);
  const [userId, setUserId] = useState("");

  useEffect(() => {
    const data = localStorage.getItem("data");
    if (data) {
      const { id } = JSON.parse(data);
      setUserId(id);
      setLogin(true);
    }
  }, []);

  return (
    <LoginContext.Provider value={{ login, setLogin, userId }}>
      {children}
    </LoginContext.Provider>
  );
};
