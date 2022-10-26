<template>
  <v-row v-if="isAuthenticated">
    <v-col class="text-center" >

      <v-col class="text-left">
        <v-card light>
          <v-card-title>
            <h2 class="title-page-sub">Katalog List Produk</h2>
            <v-spacer></v-spacer>
            <v-text-field
              v-model="search"
              append-icon="mdi-magnify"
              label="Search"
              single-line
              hide-details
            ></v-text-field>
          </v-card-title>
          <v-data-table
            :headers="headers"
            :items="desserts"
            :search="search"
            light
          >
          <template v-slot:item.cover="{ item }">
            <span>
              <div>
                <img :src="'https://cdn.eurekabookhouse.co.id/ebh/product/all/' + item.cover" style="height:10rem ;">
              </div>
            </span>
          </template>
          <template v-slot:item.action="{ item }">
            <NuxtLink :to="{ path: '/produk/edit', query: { id: item.id }}" class="link-a">
              <v-btn variant="primary"><i class="bx bx-edit" style="font-size: 1rem;" ></i></v-btn>
            </NuxtLink>
            <NuxtLink :to="{ path: '/produk/detail', query: { id: item.id }}"  class="link-a">
              <v-btn variant="warning"><i class="bx bx-show-alt"  style="font-size: 1rem;"></i></v-btn>
            </NuxtLink>
          </template>

        </v-data-table>
        </v-card>
      </v-col>

    </v-col>
  </v-row>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  auth: 'auth',
  name: 'TransaksiPage',
  data() {
    return {
      search: '',
      headers: [
        {
          text: 'ID',
          align: 'start',
          sortable: false,
          value: 'productId'
        },
        { text: 'Cover', value: 'cover' },
        { text: 'Title', value: 'bookTittle' },
        { text: 'Category', value: 'bookCategory' },
        { text: 'Author', value: 'authorName' },
        { text: 'Model', value: 'model' },
        { text: 'ISBN', value: 'isbn' },
        { text: 'Publish Year', value: 'publishYear' },
        { text: 'Koleksi', value: 'koleksi' },
        { text: 'Actions', value: 'action' },
      ],
      desserts: []
      
    }
  },
  computed: {
    ...mapGetters(['isAuthenticated', 'loggedInUser'])
  },
  created() {
    this.getPage()
  },
  methods: {
    getPage: function () {
      // we simulate an api call that fetch the records from a backend
      this.$axios.get(`penerbit/catalog/get-product?page=1&limit=10`).then((response) => {
        this.desserts = response.data.data.order
        console.log(response.data.data);
      })
        .catch(err => {
        });
    },
  }
}
</script>
<style scoped>
@import "boxicons";
</style>

