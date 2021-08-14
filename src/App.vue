<template>
  <v-app>
    <v-navigation-drawer app temporary></v-navigation-drawer>
    <v-app-bar color="deep-purple accent-4" app dense dark>
      <v-app-bar-nav-icon></v-app-bar-nav-icon>

      <v-toolbar-title>Notice board</v-toolbar-title>

      <v-spacer></v-spacer>
    </v-app-bar>
    <v-content>
      Hello
      <router-view />
    </v-content>
  </v-app>
</template>
