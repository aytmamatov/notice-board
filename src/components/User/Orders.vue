<template>
  <v-container>
    <v-layout>
      <v-flex xs12 sm6 offset-sm-3>
        <h1 class="text--secondary mb-2">Orders</h1>
        <v-list subheader two-line flat>
          <v-list-item-group multiple>
            <v-list-item v-for="order in orders" :key="order.id">
              <v-list-item-action>
                <v-checkbox color="success" @change="markDone(order)" :input-value="order.done"></v-checkbox>
              </v-list-item-action>

              <v-list-item-content>
                <v-list-item-title>{{ order.name }} </v-list-item-title>
                <v-list-item-subtitle>{{ order.phone }} </v-list-item-subtitle>
              </v-list-item-content>

              <v-spacer></v-spacer>
              <v-list-item-content>
                <v-btn class="primary" :to="`/ad/${order.adId}`">Open</v-btn>
              </v-list-item-content>
            </v-list-item>
          </v-list-item-group>
        </v-list>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      orders: [
        {
          name: "Musa",
          id: 1,
          phone: "+996123456789",
          adId: "123",
          done: false,
        },
      ],
    };
  },
  methods: {
    markDone(order) {
      order.done = true;
    },
  },
};
</script>

<style></style>
