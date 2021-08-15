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
      </v-list>
    </v-navigation-drawer>
    <v-app-bar color="deep-purple accent-4" app dense dark>
      <v-app-bar-nav-icon class="hidden-md-and-up" @click="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>Notice board</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn text v-for="link in links" :key="link.title">
          <v-icon left :to="link.url">{{ link.icon }}</v-icon>
          {{ link.title }}
        </v-btn>
      </v-toolbar-items>
    </v-app-bar>
    <v-content>
      Hello
      <router-view />
    </v-content>
  </v-app>
</template>
<script>
export default {
  data() {
    return {
      drawer: false,
      links: [
        { title: "Login", icon: "mdi-lock-outline", url: "/login" },
        { title: "Registration", icon: "mdi-face-outline", url: "/register" },
        { title: "Orders", icon: "mdi-bookmark-outline", url: "/orders" },
        { title: "New notice", icon: "mdi-folder-plus-outline", url: "/new" },
        { title: "My notices", icon: "mdi-format-list-bulleted", url: "/list" },
      ],
    };
  },
};
</script>
