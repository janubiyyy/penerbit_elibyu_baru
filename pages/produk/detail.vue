<template>
    <v-row>
        <v-col >
        <template>
            <v-card>
                <v-toolbar color="" >
                   
                    <template v-slot:extension>
                        <v-tabs v-model="tabs" >
                            <v-tab v-for="n in 3" :key="n">
                                Detail {{ n }}
                            </v-tab>
                        </v-tabs>
                    </template>
                </v-toolbar>
        
                <v-tabs-items v-model="tabs">
                    <v-tab-item>
                        <div style="padding: 20px;">
                            <h2 class="title-page-sub">Detail Produk</h2>
                        </div>
                        <v-card flat>
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
                    </v-tab-item>
                    <v-tab-item>
                        <v-card flat>
                            
                            <div style="padding: 20px;">
                                <h2 class="title-page-sub"> Riwayat Edit Produk</h2></div>
                                <template>
                                    <div style="padding: 30px;">
                            <v-row justify="center">
                                <v-expansion-panels accordion>
                                    <v-expansion-panel :key="index" v-for="(item,index) in dataHistory"  class="px-5" expand>
                                        <v-expansion-panel-header>Tanggal Pengajuan : {{item.tanggalpengajuan}}</v-expansion-panel-header>
                                        <v-expansion-panel-content >
                                            <div style="padding: 20px;">
                                                <v-text-field v-model="item.title" label="Title" disabled></v-text-field>
                                                <v-text-field v-model="item.tag" label="Tag" disabled></v-text-field>
                                                <v-text-field v-model="item.seo" label="SEO" disabled></v-text-field>
                                                <v-text-field v-model="item.meta" label="Meta" disabled></v-text-field>
                                                <v-text-field v-model="item.description" label="Description" disabled></v-text-field>
                                                <v-text-field v-model="item.model" label="Model" disabled></v-text-field>
                                                <v-text-field v-model="item.isbn" label="ISBN" disabled></v-text-field>
                                                <v-text-field v-model="item.author" label="Author" disabled></v-text-field>
                                                <v-text-field v-model="item.jenjang" label="Jenjang" disabled></v-text-field>
                                                <v-text-field v-model="item.tahun_terbit" label="Tahun Terbit" disabled></v-text-field>
                                                <v-text-field v-model="item.halaman" label="Halaman" disabled></v-text-field>
                                                <v-text-field v-model="item.Manufacture" label="Manufacture" disabled></v-text-field>
                                                <v-text-field v-model="item.status_update" label="Status Update" disabled></v-text-field>
                                                <v-text-field v-model="item.tanggalpengajuan" label="Tanggal Pengajuan" disabled></v-text-field>
                                                
                                 
                                            </div>
                                        </v-expansion-panel-content>
                                    </v-expansion-panel>
                                </v-expansion-panels>
                            </v-row>
                            </div>
                            </template>
                          
                        </v-card>
                    </v-tab-item>
                    
                    <v-tab-item>
                        <div style="padding: 20px;">
                            <h2 class="title-page-sub">Cover Produk</h2>
                        </div>
                        <v-card flat>
                       <div class="d-flex justify-center ma-4" style="width: 250px; ">
                    <v-img :src="'https://cdn.eurekabookhouse.co.id/ebh/product/all/' + halaman" ></v-img>
                                            </div>
                          
                        </v-card>
                    </v-tab-item>
                
                </v-tabs-items>
            </v-card>
        </template>

            <!-- <img src="/v.png" alt="Vuetify.js" class="mt-8" />
            <blockquote class="blockquote">
                &#8220;First, solve the problem. Then, write the code.&#8221;
                <footer>
                    <small>
                        <em>&mdash;John Johnson</em>
                    </small>
                </footer>
            </blockquote> -->
        </v-col>
    </v-row>
</template>
n  
<script>
  export default {
     name: 'FormsPage',
    data: ( 
    ) => ({
        product_id: "",
        title: "",
        tag: "",
        seo: "",
        meta: "",
        description: "",
        model: "",
        isbn: "",
        author: "",
        jenjang: "",
        tahun_terbit: "",
        halaman: "",
        manufacture: "",
       
    }),
    computed: {
    },
    created() {
        this.getPage()
    },
    watch: {
        model(nxt, old) {
            let oldIdx = old.indexOf(true)
            if (oldIdx >= 0) {
                nxt[oldIdx] = false
            }
            let activeIdx = nxt.indexOf(true)
            console.log("activeIdx", activeIdx)
        },
    },

    methods: {
        gethistory(id) {
            // we simulate an api call that fetch the records from a backend
            this.$axios.get(`Nimda/product/get-history?product_id=${id}`)

                .then((response) => {
                    this.dataHistory = response.data.data
                    this.items = response.data.data.product_id
                    this.recordsLength = response.data.data.tanggalpengajuan

                })
                .catch(err => {
                });
        },
        getPage() {
            // we simulate an api call that fetch the records from a backend
            this.$axios.get(`penerbit/catalog/get-product-detail?id=${this.$route.query.id}`)
                .then((response) => {
                    this.gethistory(response.data.data[0].productId)
                    this.dataDetail = response.data.data
                    this.product_id = response.data.data[0].productId
                    this.title = response.data.data[0].productName
                    this.tag = response.data.data[0].productTag
                    this.seo = response.data.data[0].productSEO
                    this.meta = response.data.data[0].descriptionMeta
                    this.description = response.data.data[0].description
                    this.model = response.data.data[0].productModel
                    this.isbn = response.data.data[0].productISBN
                    this.author = response.data.data[0].productJenjang
                    this.jenjang = response.data.data[0].productYear
                    this.tahun_terbit = response.data.data[0].productPage
                    this.halaman = response.data.data[0].productCover
                    this.manufacture = response.data.data[0].productManufacturer
                })
                .catch(err => {
                });
        },
    },
    data () {
      return {
        tabs: null,
          recordsLength: 0,
          items: [],
          dataDetail: [],
          form: {
              namaProduk: "",
              tagProduk: "",
              productSEO: "",
              descriptionMeta: "",
              description: "",
              productModel: "",
              productISBN: "",
              productYear: "",
              productPage: "",
              productCover: "",
              productManufacturer: "",
              productJenjang: "",
              productAuthor: "",
          },
          dataHistory: [],
          form: {
              idHistory: "",
              idProduct: "",
              title: "",
              tag: "",
              seo: "",
              meta: "",
              description: "",
              model: "",
              isbn: "",
              author: "",
              jenjang: "",
              tahun_terbit: "",
              halaman: "",
              manufacture: "",
              status_update: "",
              tanggalpengajuan: "",



          },
          idProduct: '',
          model: [],
          itemss: [
              { name: 'Item One', content: 'Content of Item One' },
              { name: 'Item Two', content: 'Content of Item Two' },
              { name: 'Item Three', content: 'Content of Item Three' },
          ],
      
      }
    },
  }
</script>
<style lang="scss" scoped>
.text-dark-custom {
    color: #0000 !important
}
</style>