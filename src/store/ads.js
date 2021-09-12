export default {
  state: {
    ads: [
      {
        title: "First Ad",
        description: "Hello. I'm an ad",
        promo: false,
        imageSrc: "https://picsum.photos/1300",
        id: 1,
      },
      {
        title: "Second Ad",
        description: "Hello. I'm an ad",
        promo: true,
        imageSrc: "https://picsum.photos/1350",
        id: 2,
      },
      {
        title: "Third Ad",
        description: "Hello. I'm an ad",
        promo: true,
        imageSrc: "https://picsum.photos/1450",
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
    createAd({ commit }, payload) {
      payload.id = Math.random();
      commit("createAd", payload);
    },
  },
};
