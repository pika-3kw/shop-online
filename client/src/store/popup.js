const popup = (state = null, action) => {
    switch (action.type) {
        case "OPEN_MINI_CART": return state === null ? 'mini-cart' : null
        case "CLOSE": return null
        default: return null
    }
}

const openMiniCart = () => {
    return {
        type: "OPEN_MINI_CART"
    }
}

const close = () => {
    return {
        type: "CLOSE"
    }
}

export { openMiniCart, close };
export default popup;



