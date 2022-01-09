import request from "../../utils/request.js"
const state = {
	indexData:{}
}
const mutations = {
	SET_INDEXDATA(state,indexData){
		state.indexData = indexData
	}
}
const actions = {
	async getIndexData({commit}){
		const result = await request('/getIndexData')
		// console.log(result)
		commit('SET_INDEXDATA',result)
	}
}
const getters = {
	navList(state){
		return (state.indexData.kingKongModule||{}).kingKongList || []
	},
	iconList(state){
		return state.indexData.policyDescList || []
	},
	floorList(state){
		return state.indexData.categoryModule || []
	}
}
export default {
	state,
	mutations,
	actions,
	getters
}