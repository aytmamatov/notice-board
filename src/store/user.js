import { auth } from "@/config/firebase";
export default {
  state: {
    user: null,
  },
  mutations: {
    setUser(state, payload) {
      state.user = payload;
    },
  },
  getters: {
    user(state) {
      return state.user;
    },
  },
  actions: {
    async registerUser({ commit }, { email, password }) {
      commit("clearError");
      commit("setLoading", true);
      try {
        const { user } = await auth.createUserWithEmailAndPassword(email, password);
        await commit("setUser", user);
        commit("setLoading", false);
      } catch (error) {
        commit("setError", error);
        commit("setLoading", false);
        throw error;
      }
    },
  },
};
