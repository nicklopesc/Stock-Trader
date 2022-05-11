import Vue from 'vue'

export default {
    loadData({ commit }) {
        //fazendo get: .$http() ou .$http.get()
        Vue.prototype.$http('data.json').then(resp => {
            const data = resp.data
            if(data) {
                commit('setStocks', data.stocks)
                commit('setPortfolio', {
                    funds: data.funds,
                    stockPortfolio: data.stockPortfolio
                })
            }
        })
    }
}