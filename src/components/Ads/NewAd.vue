<template>
  <v-container>
    <v-layout>
      <v-flex xs12 sm-6>
        <h1 class="text--secondary mb-2">New ad</h1>

        <v-form v-model="valid" validation ref="form">
          <v-text-field
            v-model="title"
            name="title"
            label="Ad title"
            type="text"
            :rules="[(v) => !!v || 'Title is required']"
            required
          ></v-text-field>

          <v-text-field
            v-model="description"
            name="description"
            label="Ad description"
            multi-line
            type="text"
            :rules="[(v) => !!v] || 'Description is required'"
          ></v-text-field>
        </v-form>

        <v-layout mb-3>
          <v-flex xs12>
            <v-btn class="warning">
              Upload
              <v-icon right dark>mdi-cloud-upload</v-icon>
            </v-btn>
          </v-flex>
        </v-layout>

        <v-layout>
          <v-flex xs12>
            <div>
              <img src="https://picsum.photos/800" alt="ad_picture" />
            </div>
          </v-flex>
        </v-layout>

        <v-layout>
          <v-flex xs12>
            <v-switch v-model="promo" label="Add to promo"></v-switch>
          </v-flex>
        </v-layout>

        <v-layout>
          <v-flex xs12>
            <v-spacer></v-spacer>
            <v-btn color="success" :loading="loading" @click="createAd" :disabled="!valid || loading">Create ad</v-btn>
          </v-flex>
        </v-layout>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      title: '',
      description: '',
      promo: false,
      valid: false,
    };
  },
  methods: {
    createAd() {
      if (this.$refs.form.validate) {
        const ad = {
          title: this.title,
          description: this.description,
          promo: this.promo,
          imageSrc: 'https://picsum.photos/1000',
        };
        this.$store.dispatch('createAd', ad);
        this.$router.push('/list');
      }
    },
  },
  computed: {
    loading() {
      return this.$store.getters.loading;
    },
  },
};
</script>

<style></style>
