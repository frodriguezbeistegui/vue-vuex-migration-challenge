import { createStore } from 'vuex'
import rootGetters from './getters.js'
import rootMutations from './mutations.js'
import rootActions from './actions.js'
import productsModule from './products.js'


const store = createStore({
    modules: {
        prods: productsModule,
    },
    state() {
        return {
            isLoggedIn: false,
            cart: { items: [], total: 0, qty: 0 },
        };
    },
    mutations: rootMutations,
    actions: rootActions,
    getters: rootGetters,
})

export default store