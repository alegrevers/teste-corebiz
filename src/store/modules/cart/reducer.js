export default function cart(state = JSON.parse(localStorage.getItem('productsBuy')) || [], action) {
    switch (action.type) {
        case 'ADD':
            return [...state, action.product];
        case 'REMOVE':
            return [state.filter((product) => product.productId !== action)];
        default:
            return state
    }
}