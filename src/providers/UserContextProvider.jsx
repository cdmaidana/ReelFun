import { createContext, useContext, useState } from "react";

const UserContext = createContext();

const { Provider } = UserContext;

export const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState({
    name: "Americo Thrull",
    email: "atrul@gmail.com",
    phone: "125556685"
  });

  const updateUser = (data) => {
    setUser(prev => ({ ...prev, ...data }));
  };

  const clearUser = () => {
    setUser({
      name: "",
      email: "",
      phone: ""
    });
  };

  return (
    <Provider value={{ user, updateUser, clearUser }}>
      {children}
    </Provider>
  );
};

export const useUser = () => useContext(UserContext);