import axiosClient from "../axiosClient";
export function searchMeals({ commit }, keywords) {
    axiosClient.get(`search.php?s=${keywords}`).then(({ data }) => {
        debugger;
        commit('setSearchedMeals', data.meals);
    })
}