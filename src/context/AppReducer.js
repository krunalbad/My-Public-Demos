export default (state, action) => {
  switch (action.type) {
    case 'DELETE_TRANSACTION': {
      localStorage.setItem('mytrans', JSON.stringify({
        ...state,
        transactions: state.transactions.filter(transaction => transaction.id !== action.payload)
      }))
      return {
        ...state,
        transactions: state.transactions.filter(transaction => transaction.id !== action.payload)
      }
    }
    case 'ADD_TRANSACTION': {
      localStorage.setItem('mytrans', JSON.stringify({
        ...state,
        transactions: [action.payload, ...state.transactions]
      }))
      return {
        ...state,
        transactions: [action.payload, ...state.transactions]
      }
    }
    default: {
      console.log(state)
      return state;
    }
  }
}