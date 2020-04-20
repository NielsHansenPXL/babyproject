import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state:{
        user: {
            loggedIn: false,
            data: null
        },
        gokken:[
            {gokker:'Niels', naam:'Junior'},
            {gokker:'Kobe', naam:'Juliette'},
            {gokker:'Opa', naam:'Julie'}
            ]
    },
    getters: {
        user(state){
            return state.user;
        }
    },
    mutations: {
        SET_LOGGED_IN(state, value) {
            state.user.loggedIn = value;
        },
        SET_USER(state, data) {
            state.user.data = data;
        }
    },
    actions: {
        fetchUser({ commit }, user) {
            commit("SET_LOGGED_IN", user !== null);
            if (user) {
                commit("SET_USER", {
                    displayName: user.displayName,
                    email: user.email
                });
            } else {
                commit("SET_USER", null);
            }
        }
    }
});