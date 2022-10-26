<template>
  <v-row>
    <v-col class="text-center">
      <h1 class="title-page">Profile Penerbit
      </h1>
      <v-row class="text-left">
        <v-col md="12" light>
          <v-card light>
            <v-card-text>
              <v-form name="form-register">
                <v-text-field class="text-dark-custom" v-model="loggedInUser.penerbit" label="Nama Penerbit" disabled></v-text-field>
                <v-text-field v-model="loggedInUser.username" label="Username" disabled></v-text-field>
                <v-text-field v-model="loggedInUser.address" label="Alamat" disabled></v-text-field>
                <v-text-field v-model="loggedInUser.email" label="Email" disabled></v-text-field>
                <v-text-field v-model="loggedInUser.phone" label="No Telphone" disabled></v-text-field>
              
              
              </v-form>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-col>
  </v-row>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  name: 'ProfilePage',
  data() {
    return {
    }
  },
  computed: {
    ...mapGetters(["isAuthenticated", "loggedInUser"]),
  },
  methods: {

  }
}
</script>
