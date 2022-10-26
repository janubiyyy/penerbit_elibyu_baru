<template>
  <div class="d-flex justify-center align-center min-h-100vh">
    <v-flex lg6>
      <v-row no-gutters>
      </v-row>
      <v-col>
        <v-card elevation="2" light class="bg-wave">
                    <center>  <img src="~/assets/image/elib.jpeg" alt="Logo Brand" style="width:300px ; height:150px; "/></center>

          <v-card-title> Login to Your Account </v-card-title>
          <v-container>
            <v-row class="text-left">
              <v-col cols="12" md="12">
                <v-text-field
                  v-model.trim="vemail"
                  type="text"
                  label="Email"
                  outlined
                  dense
                ></v-text-field>
              </v-col>
              <v-col cols="12" md="12">
                <v-text-field
                  v-model.trim="vpassword"
                  type="password"
                  name="password"
                  label="Password"
                  outlined
                  dense
                ></v-text-field>
              </v-col>
              <v-col cols="12" md="6">
                <v-btn @click="login" type="submit" color="primary"
                  >Login</v-btn
                >
              </v-col>
              <v-col cols="12" md="6" class="text-right">
                <nuxt-link to="/forgot-password">Forgot Password</nuxt-link>
                or
                <nuxt-link to="/">Back</nuxt-link>
              </v-col>
            </v-row>
          </v-container>
        </v-card>
      </v-col>
      <!-- <v-col>
        Don't have an account?
        <nuxt-link to="/sign-up">Sign Up</nuxt-link>
      </v-col> -->
    </v-flex>
  </div>
</template>

<script>
import Vue from 'vue'
export default Vue.extend({
  auth: 'guest',
  name: 'FormSignIn',
  props: {
    email: { type: String, default: '' },
    password: { type: String, default: '' }
  },
  data() {
    const { email, password } = this
    return { vemail: email, vpassword: password, valid: false }
  },
  methods: {
    async login() {
      try {
        await this.$auth.loginWith('local', {
          data: {
            email: this.vemail,
            password: this.vpassword
          }
        })
      } catch (e) {}
    }
  }
})
</script>
