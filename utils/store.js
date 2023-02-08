import {createContext, useReducer, useContext} from "react"
import Cookies from "js-cookie"

const StoreContext = createContext({
  state: {cart: {items: [], count: 0}},
  dispatch: () => {}
})

export const useStore = () => useContext(StoreContext)

const cartData = Cookies.get('cart')
const initialState = {
  cart: cartData ? JSON.parse(cartData) : {items: [], count: 0}
}

function reducer(state, action){
  switch (action.type) {
    case 'CART_ADD_ITEM': {
      const newItem = action.payload
      const existing = Boolean(state.cart.items.find(item => item.product.id === newItem.id))
      const newItems = existing ? state.cart.items.map(item => {
        if (item.product.id === newItem.id) item.count ++
        return item
      }) : [...state.cart.items, {product: newItem, count: 1, id: crypto.randomUUID()}]
      const cart = {...state.cart, items: newItems, count: state.cart.count ++}
      Cookies.set('cart', JSON.stringify(cart))
      return {...state, cart}
    }
    case 'CART_REMOVE_ITEM': {
      const cartId = action.payload
      const newState = {...state}
      newState.cart.items = newState.cart.items.filter(item => {
        if (item.id === cartId) {
          newState.cart.count -= item.count
          return false
        }
        return true
      })
      Cookies.set('cart', JSON.stringify(newState.cart))
      return newState
    }
    case 'CART_UPDATE_ITEM_COUNT': {
      const {cartId, quantity} = action.payload
      const newState = {...state}
      const idx = newState.cart.items.findIndex(item => item.id === cartId)
      const prevCount = newState.cart.items[idx].count
      newState.cart.items[idx].count = quantity
      newState.cart.count = state.cart.count - prevCount + quantity
      Cookies.set('cart', JSON.stringify(newState.cart))
      return newState
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