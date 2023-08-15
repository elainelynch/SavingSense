import { createContext, useReducer } from "react";

const AppReducer = (state, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

const initialState = {
  income: 20000,
  expense: [
    {
      id: 1,
      category: "water bill",
      amount: 400,
      date: "2023-08-12",
      user_id: 1,
    },
    {
      id: 2,
      category: "electric bill",
      amount: 1500,
      date: "2023-08-15",
      user_id: 1,
    },
  ],
};

export const AppContext = createContext();

export const AppProvider = (props) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  return (
    <AppContext.Provider
      value={{
        income: state.income,
        expense: state.expense,
        dispatch,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};
