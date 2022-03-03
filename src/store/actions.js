export default{
    cartTotal(context){
        context.commit('cartTotal');
    },
    addProductToCart(context, payload){
        context.commit('addProductToCart', payload)
    },
    removeProductFromCart(context, payload){
        context.commit('removeProductFromCart', payload)
    },

    login(contex){
        contex.commit('setAuth', {
            auth: true
        })
    },
    logout(context){
        context.commit('setAuth', {
            auth: false
        })
    }
}