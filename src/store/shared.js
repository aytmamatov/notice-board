export default {
  state: {
    loading: false,
    error: null,
  },
  mutations: {
    setLoading(state, payload) {
      state.loading = payload;
    },
    setError(state, payload) {
      state.error = payload;
    },
    clearError(state) {
      state.error = null;
    },
  },
  actions: {
    setLoading({ commit }, payload) {
      commit("setLoading", paylod);
    },
    setError({ commit }, payload) {
      commit("setError", paylod);
    },
    clearError({ commit }) {
      commit("clearError");
    },
  },
  getters: {
    loading(state) {
      return state.loading;
    },
    error(state) {
      return state.error;
    },
  },
};
