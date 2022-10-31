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
                <v-text-field class="text-dark-custom" v-model="loggedInUser.penerbit" label="Nama Penerbit" ></v-text-field>
                <v-text-field v-model="loggedInUser.username" label="Username" ></v-text-field>
                <v-text-field v-model="loggedInUser.address" label="Alamat" ></v-text-field>
                <v-text-field v-model="loggedInUser.email" label="Email" ></v-text-field>
                <v-text-field v-model="loggedInUser.phone" label="No Telphone" ></v-text-field>
                <div>
                  Profile Penerbit
                  <v-file-input v-model="avatarImage" label="Image" required @change="onFileChange" ></v-file-input>
                  <img v-if="imagePreviewURL" :src="imagePreviewURL" alt="" style="max-width: 100%;width: 250px; object-fit: cover" />
                </div>
                
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
      imagePreviewURL: null,
    }
  },
  computed: {
    ...mapGetters(["isAuthenticated", "loggedInUser"]),
  },
  methods: {
    onFileChange(payload) {
      //const file = payload.target.files[0]; // use it in case of normal HTML input
      const file = payload; // in case vuetify file input
      if (file) {
        this.imagePreviewURL = URL.createObjectURL(file);
        URL.revokeObjectURL(file); // free memory
      } else {
        this.imagePreviewURL = null
      }
    }
  },
}
</script>
