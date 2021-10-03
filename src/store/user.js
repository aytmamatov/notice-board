import { auth } from '@/config/firebase';
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
    isUserLoggedIn(state) {
      return state.user !== null;
    },
  },
  actions: {
    async registerUser({ commit }, { email, password }) {
      commit('clearError');
      commit('setLoading', true);
      try {
        const { user } = await auth.createUserWithEmailAndPassword(email, password);
        await commit('setUser', user);
        commit('setLoading', false);
      } catch (error) {
        commit('setError', error);
        commit('setLoading', false);
        throw error;
      }
    },
    async loginUser({ commit }, { email, password }) {
      commit('clearError');
      commit('setLoading', true);
      try {
        const { user } = await auth.signInWithEmailAndPassword(email, password);
        await commit('setUser', user);
        commit('setLoading', false);
      } catch (error) {
        commit('setError', error);
        commit('setLoading', false);
        throw error;
      }
    },
    autoLoginUser({ commit }, payload) {
      commit('setUser', payload);
    },
    logoutUser({ commit }) {
      auth.signOut();
      commit('setUser', null);
    },
  },
};
