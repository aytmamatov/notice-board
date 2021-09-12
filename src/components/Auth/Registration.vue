<template>
  <v-content>
    <v-container fluid fill-height>
      <v-layout align-center justify-center>
        <v-flex xs12 sm8 md6>
          <v-card class="elevation-12">
            <v-toolbar color="primary" dark>
              <v-toolbar-title color="white">Registration form</v-toolbar-title>
            </v-toolbar>
            <v-card-text>
              <v-form lazy-validation v-model="valid" validation ref="loginForm">
                <v-text-field
                  v-model="email"
                  prepend-icon="mdi-account"
                  name="email"
                  label="Email"
                  type="text"
                  :rules="emailRules"
                ></v-text-field>
                <v-text-field
                  v-model="password"
                  prepend-icon="mdi-lock"
                  name="password"
                  label="Password"
                  type="password"
                  :rules="passwordRules"
                ></v-text-field>
                <v-text-field
                  v-model="confirmPassword"
                  prepend-icon="mdi-lock"
                  name="confirm-password"
                  label="Confirm password"
                  type="password"
                  :rules="confirmPasswordRules"
                ></v-text-field>
              </v-form>
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn :loading="loading" :disabled="!valid || loading" @click="onSubmit" color="primary"
                >Create account</v-btn
              >
            </v-card-actions>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </v-content>
</template>

<script>
export default {
  data() {
    return {
      email: "",
      password: "",
      confirmPassword: "",
      valid: false,
      emailRules: [
        (v) => !!v || "E-mail is required",
        (v) => !v || /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) || "E-mail must be valid",
      ],
      passwordRules: [
        (v) => !!v || "Password is required",
        (v) => (v && v.length >= 6) || "Password must be more than 6 characters",
      ],
      confirmPasswordRules: [
        (v) => !!v || "Password is required",
        (v) => v === this.password || "Password should match",
      ],
    };
  },
  methods: {
    async onSubmit() {
      if (this.$refs.loginForm.validate()) {
        const user = {
          email: this.email,
          password: this.password,
        };

        try {
          await this.$store.dispatch("registerUser", user);
          this.$router.push("/");
        } catch (error) {
          throw error;
        }
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
