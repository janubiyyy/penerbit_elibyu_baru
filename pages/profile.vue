<template>
  <v-row>
    <v-col class="text-center">
      <h1 class="title-page">Profile Page</h1>
      <v-row class="text-left">
        <v-col md="12" light>
          <v-card light>
            <v-card-title tag="h2">Card Half</v-card-title>
            <v-card-subtitle>Data examples</v-card-subtitle>
            <v-card-text>
              <v-form name="form-register">
                <v-text-field class="text-dark-custom" v-model="title" label="Title" disabled></v-text-field>
                <v-text-field v-model="tag" label="Tag" disabled></v-text-field>
                <v-text-field v-model="seo" label="Seo" disabled></v-text-field>
                <v-text-field v-model="meta" label="Meta" disabled></v-text-field>
                <v-text-field v-model="description" label="Description" disabled></v-text-field>
                <v-text-field v-model="model" label="Model" disabled></v-text-field>
                <v-text-field v-model="isbn" label="ISBN" disabled></v-text-field>
                <v-text-field v-model="author" label="Author" disabled></v-text-field>
                <v-text-field v-model="jenjang" label="Jenjang" disabled></v-text-field>
                <v-text-field v-model="tahun_terbit" label="Tahun Terbit" disabled></v-text-field>
                <v-text-field v-model="halaman" label="Halaman" disabled></v-text-field>
                <v-text-field v-model="manufacture" label="manufacture" disabled></v-text-field>
              
              
              </v-form>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
      <blockquote class="blockquote">
        &#8220;First, solve the problem. Then, write the code.&#8221;
        <footer>
          <small>
            <em>&mdash;John Johnson</em>
          </small>
        </footer>
      </blockquote>
    </v-col>
  </v-row>
</template>
<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'ProfilePage',
  setup() {}
})
</script>
