// añadimos contexto global a toda nuestra app

import { createContext, useContext, useReducer } from "react";
import AppReducer from "./AppReducer";
import TransactionForm from "../components/TransactionForm";

const initialState = {
  transactions: [],
};

export const Context = createContext();

//funcion que nos da el contexto para no tener que importarlo manualmente

export const useGlobalState = () => {
  const context = useContext(Context);
  return context;
};

//funcion que retorna un componente a partir del contexto

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState); //en el useReducer se tiene que definir funciones para trabajar el array, que es lo que esta en AppReducer.jsx

  return (
    <Context.Provider
      value={{
        transactions: state.transactions,
      }}>
      {children}
    </Context.Provider>
  );
};
