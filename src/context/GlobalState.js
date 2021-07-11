import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';

// Initial state
var mydata = []
try {
  if (localStorage.getItem('mytrans') != null && localStorage.getItem('mytrans') != undefined) {
    mydata = JSON.parse(localStorage.getItem('mytrans'))
    mydata = mydata['transactions']
  }
} catch (error) {

}

console.log(mydata)

const initialState = {
  transactions: mydata
}

// Create context
export const GlobalContext = createContext(initialState);

// Provider component
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  // Actions
  function deleteTransaction(id) {
    dispatch({
      type: 'DELETE_TRANSACTION',
      payload: id
    });
  }

  function addTransaction(transaction) {
    dispatch({
      type: 'ADD_TRANSACTION',
      payload: transaction
    });
  }

  return (<GlobalContext.Provider value={{
    transactions: state.transactions,
    deleteTransaction,
    addTransaction
  }}>
    {children}
  </GlobalContext.Provider>);
}