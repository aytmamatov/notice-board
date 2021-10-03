import { getDatabase, set, ref } from 'firebase/database';

class Ad {
  constructor(title, description, id = null, imageSrc = '', promo = false) {
    this.title = title;
    this.description = description;
    this.imageSrc = imageSrc;
    this.promo = promo;
    this.id = id;
  }
}

export default {
  state: {
    ads: [
      {
        title: 'First Ad',
        description: "Hello. I'm an ad",
        promo: false,
        imageSrc: 'https://picsum.photos/1300',
        id: 1,
      },
      {
        title: 'Second Ad',
        description: "Hello. I'm an ad",
        promo: true,
        imageSrc: 'https://picsum.photos/1350',
        id: 2,
      },
      {
        title: 'Third Ad',
        description: "Hello. I'm an ad",
        promo: true,
        imageSrc: 'https://picsum.photos/1450',
        id: 3,
      },
    ],
  },
  mutations: {
    createAd(state, payload) {
      state.ads.push(payload);
    },
  },
  getters: {
    ads(state) {
      return state.ads;
    },
    promoAds(state) {
      return state.ads.filter((ad) => ad.promo);
    },
    myAds(state) {
      return state.ads;
    },
    adById(state) {
      return (currentId) => state.ads.find((ad) => ad.id === Number(currentId));
    },
  },
  actions: {
    async createAd({ commit, getters }, { title, description, imageSrc, promo }) {
      const newAd = new Ad(title, description, getters.user.uid, imageSrc, promo);
      commit('clearError');
      commit('setLoading', true);

      try {
        const database = getDatabase();
        const fbDatabase = ref(database, 'ads/' + getters.user.uid);
        await set(fbDatabase, newAd);
        commit('createAd', {
          ...newAd,
          id: fbDatabase.key,
        });
      } catch (error) {
        commit('setError', error.message);
        throw error;
      } finally {
        commit('setLoading', false);
      }
    },
  },
};
