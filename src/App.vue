<template>
  <v-app>
    <v-navigation-drawer app temporary v-model="drawer">
      <v-list>
        <v-list-item v-for="link in links" @click="" :key="link.title" :to="link.url">
          <v-list-item-content>
            <v-list-item-title v-text="link.title"></v-list-item-title>
          </v-list-item-content>
          <v-list-item-icon>
            <v-icon>
              {{ link.icon }}
            </v-icon>
          </v-list-item-icon>
        </v-list-item>
        <v-list-item @click="onLogout" v-if="isUserLoggedIn">
          <v-list-item-content>
            <v-list-item-title v-text="'Выйти'"></v-list-item-title>
          </v-list-item-content>
          <v-list-item-icon>
            <v-icon>
              mdi-logout
            </v-icon>
          </v-list-item-icon>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar color="primary" app dense dark>
      <v-app-bar-nav-icon class="hidden-md-and-up" @click="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title> <router-link to="/" tag="span" class="pointer">Notice board</router-link></v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn :to="link.url" text v-for="link in links" :key="link.title">
          <v-icon left :to="link.url">{{ link.icon }}</v-icon>
          {{ link.title }}
        </v-btn>
        <v-btn v-if="isUserLoggedIn" @click="onLogout" color="error">
          <v-icon left>mdi-logout</v-icon>
          Logout
        </v-btn>
      </v-toolbar-items>
    </v-app-bar>
    <v-content>
      <router-view />
    </v-content>

    <template v-if="error">
      <v-snackbar :value="true" color="error" timeout="5000" :multi-line="true">
        {{ error }}
        <template #action>
          <v-btn outlined @click="closeError">Close</v-btn>
        </template>
      </v-snackbar>
    </template>
  </v-app>
</template>
<script>
import { auth } from '@/config/firebase';

export default {
  data() {
    return {
      drawer: false,
    };
  },
  computed: {
    error() {
      return this.$store.getters.error;
    },
    isUserLoggedIn() {
      return this.$store.getters.isUserLoggedIn;
    },
    links() {
      if (this.isUserLoggedIn) {
        return [
          { title: 'Orders', icon: 'mdi-bookmark-outline', url: '/orders' },
          { title: 'New ad', icon: 'mdi-folder-plus-outline', url: '/newAd' },
          { title: 'My ad', icon: 'mdi-format-list-bulleted', url: '/list' },
        ];
      }

      return [
        { title: 'Login', icon: 'mdi-lock-outline', url: '/login' },
        { title: 'Registration', icon: 'mdi-face-outline', url: '/registration' },
      ];
    },
  },
  methods: {
    closeError() {
      return this.$store.dispatch('clearError');
    },
    onLogout() {
      this.$store.dispatch('logoutUser');
      this.$router.push('/login');
    },
  },
  created() {
    auth.onAuthStateChanged((user) => {
      if (user) {
        this.$store.dispatch('autoLoginUser', user?.multiFactor.user);
      }
    });
  },
};
</script>
<style lang="css" scoped>
.pointer {
  cursor: pointer;
}
</style>
