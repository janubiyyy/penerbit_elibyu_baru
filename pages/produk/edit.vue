<template>
    <v-row>
        <v-col class="text-center">
            <v-container fluid>
                    <v-col cols="12" md="12">
                        <v-card class="px-4 py-4">
                            <v-card-text>
                                <h2 class="title-page-sub">Edit Produk</h2>
                                <v-form name="form-register">
                                            <v-text-field   v-text-field v-model="title" label="Title"></v-text-field>
                                            <v-text-field v-model="tag"  label="Tag" ></v-text-field>
                                            <v-text-field v-model="seo"  label="Seo" ></v-text-field>
                                            <v-text-field v-model="meta" label="Meta"></v-text-field>
                                            <v-text-field v-model="description" label="Description"></v-text-field>
                                            <v-text-field v-model="model" label="Model"></v-text-field>
                                            <v-text-field v-model="isbn" label="ISBN"></v-text-field>
                                            <v-text-field v-model="author" label="Author"></v-text-field>
                                            <v-text-field v-model="jenjang" label="Jenjang"></v-text-field>
                                            <v-text-field v-model="tahun_terbit" label="Tahun Terbit"></v-text-field>
                                            <v-text-field v-model="halaman" label="Halaman"></v-text-field>
                                            <v-text-field v-model="manufacture" label="manufacture"></v-text-field>
                                            <div class="d-flex justify-center ma-4" style="width: 200px; ">
                                            <v-img :src="'https://cdn.eurekabookhouse.co.id/ebh/product/all/' + halaman"></v-img></div>
                                            <v-file-input show-size label="Update Cover"></v-file-input>
                                            

                                           
                                    <v-btn tile color="primary" class="mr-6" @click="edit">
                                        submit
                                    </v-btn>
                                   
                                </v-form>
                            </v-card-text>
                        </v-card>
                    </v-col>
            </v-container>
        </v-col>
    </v-row>
</template>

<script>

export default {
    name: 'FormsPage',
    data: () => ({
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

    methods: {
        getPage() {
            // we simulate an api call that fetch the records from a backend
            this.$axios.get(`penerbit/catalog/get-product-detail?id=${this.$route.query.id}`)
                .then((response) => {
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
        edit() {

            this.$axios.post('penerbit/catalog/update-product-history', {
                product_id: this.product_id,
                title: this.title,
                tag: this.tag,
                seo: this.seo,
                meta: this.meta,
                description: this.description,
                model: this.model,
                isbn: this.isbn,
                author: this.author,
                jenjang: this.jenjang,
                tahun_terbit: this.tahun_terbit,
                halaman: this.halaman,
                manufacture: this.manufacture,
            })
                .then((res) => {
                    if (res.status == 205) {
                        setTimeout(() => {
                            this.$router.push('/produk')
                        }, 3000);

                        this.$toast.show('Data ini sedang dalam pengecekan Admin EIM')

                    } else
                        if (res.data.status.code == 200) {
                            setTimeout(() => {
                                this.$router.push('/produk')
                            }, 3000);

                            this.$toast.success('Data sukses dikirim dan dalam proses Menunggu Approval dari Admin EIM')

                        } else {
                            this.$toast.error(res.data.status.message)

                        }

                },

                )
                .catch((err) => {
                    this.$toast.error(err)
                })
        },
        submit() {
            this.$v.$touch()
        },
        clear() {
            this.$v.$reset()
            this.name = ''
            this.email = ''
            this.select = null
            this.checkbox = false
        }
    }
}
</script>
