
const reducer = (state, action) => {
    if (action.type === 'CLEAR_CART') {
        return {...state, cart: []}
    } else if (action.type === 'REMOVE') {
        return { ...state, cart: state.cart.filter((cartItem) => cartItem.id !== action.payload )}
    }
    return state
}

export default reducer