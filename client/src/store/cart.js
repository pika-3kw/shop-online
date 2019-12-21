/**
 item = {
    name: 'item',
    sku: 'sku',
    price: 'price',
    currency: 'USD',
    quantity: 1
 }
 */


const initState = {
    cartId: '',
    item_list: {
        items: []
    },
    amount: {
        currency: 'USD',
        total: 0
    }
}

const cart = (state = initState, action) => {
    switch (action.type) {
        case 'ADD_TO_CART': {

            const { item } = action;
            const found = state.item_list.items.find(elem => elem.name === item.name);

            if (!found) {
                state.item_list.items.push(item)
            } else {
                found.quantity++;
            }

            console.log(item)
            state.amount.total += item.price


            return state;
        }
        default: return state
    }
}




export function addToCart(item) {
    console.log("a")
    return {
        type: 'ADD_TO_CART',
        item
    }
}

export default cart;