import { createStore } from "vuex";
import * as actions from "./actions";
import * as getters from "./getters";
import * as mutations from "./mutations";
import state from "./state";

const store = createStore({
    actions,
    getters,
    mutations,
    state
})

export default store;