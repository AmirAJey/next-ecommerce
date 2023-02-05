import {createContext, useReducer, useContext} from "react"

const StoreContext = createContext({
  state: {cart: {items: [], count: 0}},
  dispatch: () => {}
})

export const useStore = () => useContext(StoreContext)

const initialState = {
  cart: {items: [], count: 0}
}

function reducer(state, action){
  switch (action.type) {
    case 'CART_ADD_ITEM': {
      const newItem = action.payload
      const existing = Boolean(state.cart.items.find(item => item.product.id === newItem.id))
      const newItems = existing ? state.cart.items.map(item => {
        if (item.product.id === newItem.id) item.count ++
        return item
      }) : [...state.cart.items, {product: newItem, count: 1}]
      return {...state, cart: {...state.cart, items: newItems, count: state.cart.count ++}}
    }
    default:
      return state
  }
}

const StoreProvider = ({children}) => {
  const [state, dispatch] = useReducer(reducer, initialState)
  return (
    <StoreContext.Provider value={{state, dispatch}}>
      {children}
    </StoreContext.Provider>
  )
}

export default StoreProvider