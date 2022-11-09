<template>
  <v-row v-if="isAuthenticated">
    <v-col class="text-center" >

      <v-col class="text-left">
        <v-card light>
          <v-card-title>
            <h2 class="title-page-sub">Transaksi</h2>
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
          <template v-slot:item.coverProduct="{ item }">
            <span>
              <div>
                <img :src="'https://cdn.eurekabookhouse.co.id/ebh/product/all/' + item.coverProduct" style="height:10rem ;">
              </div>
            </span>
          </template>
          <template v-slot:item.action="{ item }">
            <NuxtLink :to="'/edit/' + item.id" class="link-a">
              <v-btn variant="primary"><i class="bx bx-edit" style="font-size: 1rem;" ></i></v-btn>
            </NuxtLink>
            <NuxtLink :to="'/addpage/' + item.id" class="link-a">
              <v-btn variant="warning"><i class="bx bx-show-alt"  style="font-size: 1rem;"></i></v-btn>
            </NuxtLink>
          </template>

        </v-data-table>
        </v-card>
      </v-col>
    </v-col>
    <Footer />
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
        { text: 'Code', value: 'productCode' },
        { text: 'Cover', value: 'coverProduct' },
        { text: 'ISBN', value: 'productIsbn' },
        { text: 'Product', value: 'productName' },
        { text: 'Invoce', value: 'noInvoce' },
        { text: 'Total', value: 'productTotal' },
        { text: 'Price', value: 'productPrice' },
        { text: 'Buyer', value: 'buyer' },
        { text: 'E-mail', value: 'email' },
        // { text: 'buyerTime', value: 'buyerTime' },


        // { text: 'Actions', value: 'action' },
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
      this.$axios.get(`penerbit/transaction/get-product?page=1&limit=10&keyword=`).then((response) => {
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

