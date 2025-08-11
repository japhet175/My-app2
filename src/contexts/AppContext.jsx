// AppContext.jsx
import { users, products, assignments, categories } from "../data/fakeDB";
import { createContext, useContext, useState } from "react";

const AppContext = createContext(null);

export default function AppProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null); // pas connecté par défaut
  const [activePage, setActivePage] = useState("login"); // page login au départ

  const totalUsers = users.length;
  const totalProducts = products.length;
  const totalAssigned = assignments.length;
  const unassigned = totalProducts - totalAssigned;

  // Fonction pour connecter un utilisateur
  const login = (user) => {
    setCurrentUser(user);
    setActivePage("dashboard"); // bascule vers dashboard après connexion
  };

  // Fonction pour déconnecter
  const logout = () => {
    setCurrentUser(null);
    setActivePage("login"); // retour à la page login
  };

  return (
    <AppContext.Provider
      value={{
        currentUser,
        setCurrentUser,
        activePage,
        setActivePage,
        users,
        products,
        assignments,
        categories,
        totalUsers,
        totalProducts,
        totalAssigned,
        unassigned,
        login,
        logout,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  return useContext(AppContext);
}
