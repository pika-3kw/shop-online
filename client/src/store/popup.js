const popup = (state = null, action) => {
    switch (action.type) {
        case "OPEN_MINI_CART": return state === null ? 'mini-cart' : null
        default: return null
    }
}

const openMiniCart = () => {
    return {
        type: "OPEN_MINI_CART"
    }
}

export { openMiniCart };
export default popup;



