const initialState = {

}

export const cart= (state = {totalPrice:0,items:[]}, action) => {
  switch (action.type) {

  case 'ADD_TO_CART':
  debugger
    return {...state,items:[...state.items,action.param]}

  default:
    return state
  }
}
