export default{
    // products(state) {
    //     return state.products;
    // },
    cart(state){
        return state.cart;
    },
    cartTotal(state){ 
       return state.cart.total.toFixed(2);
    },
    isLoggedIn(state){
        return state.isLoggedIn;
    },
}