import Vue from 'vue';
import Vuex from 'vuex';
import Axios from 'axios';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        users: []
    },
    mutations: {
        async search(state, value) {
            let response = await Axios.get("https://jsonplaceholder.typicode.com/users");
            if (response.status >= 400) {
                alert("No network connection");
                this.state.users = [];
                return;
            }

            let data = response.data;
            if (!value) {
                this.state.users = data;
                return;
            }
            this.state.users = data.filter(item => item.username.toLowerCase().indexOf(value.toLowerCase()) > -1);
        }
    },
    getters: {
        users: state => state.users
    }
});