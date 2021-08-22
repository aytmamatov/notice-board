<template>
  <div>
    <v-container fluid>
      <v-layout row>
        <v-flex xs12>
          <v-carousel>
            <v-carousel-item
              v-for="ad in ads"
              :key="ad.id"
              :src="ad.imageSrc"
              reverse-transition="fade-transition"
              transition="fade-transition"
            >
              <div class="carousel-link">
                <v-btn class="error" :to="`/ad/${ad.id}`">{{ ad.title }}</v-btn>
              </div>
            </v-carousel-item>
          </v-carousel>
        </v-flex>
      </v-layout>
    </v-container>
    <v-container grid-list-lg grid-list-xs>
      <v-layout row wrap>
        <v-flex xs12 sm6 md4 v-for="ad of ads" :key="ad.id">
          <v-card class="mx-auto" max-width="344">
            <v-img :src="ad.imageSrc" height="200px"></v-img>

            <v-card-title>
              {{ ad.title }}
            </v-card-title>

            <v-card-subtitle>
              {{ ad.description }}
            </v-card-subtitle>

            <v-card-actions>
              <v-spacer></v-spacer>

              <v-btn :to="`/ad/${ad.id}`" text>
                Open
              </v-btn>

              <v-btn class="primary" raised>Buy</v-btn>
            </v-card-actions>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
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
    };
  },
};
</script>

<style scoped>
.carousel-link {
  position: absolute;
  bottom: 50px;
  left: 50%;
  background: rgba(0, 0, 0, 50%);
  transform: translate(-50%, 0);
  padding: 5px 15px;
  border-top-right-radius: 5px;
  border-top-left-radius: 5px;
}
</style>
