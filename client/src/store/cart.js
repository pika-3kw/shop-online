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
    transactions: [{
        items_list: {
            items: []
        },
        amount: {
            currency: 'USD',
            total: 0
        }
    }]
}

const cart = (state = initState, action) => {
    switch (action.type) {
        case 'INIT_CART': return state
        default: return state
    }
}




export function initCart() {
    return {
        type: 'INIT_CART',
        initState: {
            ex: 5,
            ss: 9
        }
    }
}

export default cart;