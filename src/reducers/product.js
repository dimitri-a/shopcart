const initialState = {

}

export const products =(state = [{id:1,name:"gloves"},{id:2,name:"shoes"}], action) => {
  switch (action.type) {

  case 'SHOW_PRODUCTS':
    return { ...state }

  default:
    return state
  }
}
