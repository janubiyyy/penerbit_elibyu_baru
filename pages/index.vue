<template>
  <v-container fluid>
    <v-row v-if="isAuthenticated">
      <v-col cols="12" md="12">
        <h1 class="title-page">Hi, Penerbit Erlangga</h1>
        <v-row>
          <v-col cols="6" sm="4">
            <v-card height="100%">
              <v-container fluid>
                <h3>Total Penjualan</h3>
                <v-row height="100%">
                  <v-col>
                    <h4
                      class="
                        grey--text
                        text-h4 text-lg-h2
                        font-weight-bold
                        lh-normal
                      "
                    >
                      5230
                    </h4>
                    <h5 class="font-weight-normal grey--text">+23% Up</h5>
                  </v-col>
                  <v-col align-self="center" align="right">
                    <v-icon size="90" color="red">mdi-chart-areaspline</v-icon>
                    
                  </v-col>
                </v-row>
              </v-container>
            </v-card>
          </v-col>
          <v-col cols="6" sm="4"
            ><v-card height="100%">
              <v-container fluid>
                <h3>Total Eksemplar</h3>
                <v-row height="100%">
                  <v-col>
                    <h4
                      class="
                        grey--text
                        text-h4 text-lg-h2
                        font-weight-bold
                        lh-normal
                      "
                    >
                      6424
                    </h4>
                    <h5 class="font-weight-normal grey--text">-3% Down</h5>
                  </v-col>
                  <v-col align-self="center" align="right">
                    <v-icon size="90" color="warning">mdi-cart-plus</v-icon>
                  </v-col>
                </v-row>
              </v-container>
            </v-card></v-col
          >
          <v-col cols="6" sm="4"
            ><v-card height="100%">
              <v-container fluid>
                <h3>Produk Dimiliki</h3>
                <v-row height="100%">
                  <v-col>
                    <h4
                      class="
                        grey--text
                        text-h4 text-lg-h2
                        font-weight-bold
                        lh-normal
                      "
                    >
                      39202
                    </h4>
                    <h5 class="font-weight-normal grey--text">-10% Down</h5>
                  </v-col>
                  <v-col align-self="center" align="right">
                    <v-icon size="90" color="green">mdi-account-box-outline</v-icon>
                  </v-col>
                </v-row>
              </v-container>
            </v-card></v-col
          >
         
        </v-row>
        <v-row>
          <v-col cols="12" lg="4">
            <v-card height="100%">
              <v-card-title>Laporan Penjualan Tahun</v-card-title>
              <v-card-text>
                <client-only placeholder="Loading...">
                  <DoughnutChart
                    :chart-data="doughChartData"
                    :chart-options="doughChartOptions"
                    :height="510"
                  />
                </client-only>
                <!-- <v-row>
                  <v-col cols="9">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. At
                    animi magni modi fuga. Voluptatum suscipit totam reiciendis
                    molestiae</v-col
                  >
                  <v-col cols="3">
                    <v-btn type="submit" color="primary" small tile
                      >See all</v-btn
                    ></v-col
                  ></v-row
                > -->
              </v-card-text>
            </v-card>
          </v-col>
          <v-col cols="12" lg="8">
            <v-card height="100%" light>
              <v-card-title>Laporan Penjualan Bulan</v-card-title>
              <v-card-text>
                <!-- <v-col cols="3">
                      <v-select
                        :items="[
                          'Division 1',
                          'Division 2',
                          'Division 3',
                          'Division 4'
                        ]"
                        label="Division"
                        dense
                        outlined
                      ></v-select>
                    </v-col> -->
                <client-only placeholder="Loading...">
                  <LineChart
                    :chart-options="lineChartOptions"
                    :chart-data="lineChartData"
                    :chart-id="`chartId`"
                    :width="350"
                    :height="450"
                    :styles="{
                      margin: '1rem auto',
                      backgroundColor: 'rgba(255,255,255, .85)',
                      padding: '.75rem'
                    }"
                  />
                </client-only>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12" md="8">
            <v-card height="100%">
              <v-container fluid>
                <h3 class="title-page">
                  Company official yearly calendar release
                </h3>
                <div>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit
                  nihil corporis rem iste! Doloribus magni doloremque inventore
                  natus consectetur corporis debitis nemo numquam explicabo esse
                  iusto maxime.
                </div>
                <v-calendar class="my-10"></v-calendar>
              </v-container>
            </v-card>
          </v-col>
          <v-col cols="12" md="4">
            <v-card height="100%">
              <v-container>
                <h3 class="title-page">5 Produk yang sering dilihat</h3>
                <v-container fluid>
                  <!-- <v-virtual-scroll width="256" height="321" item-height="120"> -->
                  <v-row no-gutters>
                    <v-col cols="2" align-self="center" align="center">
                      <v-avatar color="primary">
                        <span class="white--text font-weight-bold">DR</span>
                      </v-avatar>
                    </v-col>
                    <v-col cols="10">
                      <blockquote class="blockquote grey--text body-1 px-3">
                        <div class="mb-1">
                        Tips Jitu Lolos Seleksi Pppk & Hk2
                        </div>
                        <cite class="font-weight-thin"
                          >- ADr.Irene Maria Juli Astuti,M.Pd</cite
                        >
                      </blockquote>
                    </v-col>
                  </v-row>
                  <v-row no-gutters>
                    <v-col cols="2" align-self="center" align="center">
                      <v-avatar color="info">
                        <span class="white--text font-weight-bold">LF</span>
                      </v-avatar>
                    </v-col>
                    <v-col cols="10">
                      <blockquote class="blockquote grey--text body-1 px-3">
                        <div class="mb-1">
                          Looking For The King Of Fishing
                        </div>
                        <cite class="font-weight-thin"
                          >- ZHANG WEI</cite
                        >
                      </blockquote>
                    </v-col>
                  </v-row>
                  <v-row no-gutters>
                    <v-col cols="2" align-self="center" align="center">
                      <v-avatar color="warning">
                        <span class="white--text font-weight-bold">AI</span>
                      </v-avatar>
                    </v-col>
                    <v-col cols="10">
                      <blockquote class="blockquote grey--text body-1 px-3">
                        <div class="mb-1">
                          Agama Islam
                        </div>
                        <cite class="font-weight-thin">- Moh. Masrun, Dkk</cite>
                      </blockquote>
                    </v-col>
                  </v-row>
                  <v-row no-gutters>
                    <v-col cols="2" align-self="center" align="center">
                      <v-avatar color="red">
                        <span class="white--text font-weight-bold">365</span>
                      </v-avatar>
                    </v-col>
                    <v-col cols="10">
                      <blockquote class="blockquote grey--text body-1 px-3">
                        <div class="mb-1">
                          365 Aktivitas Seru Sepanjang Tahun
                        </div>
                        <cite class="font-weight-thin">- Gramedia</cite>
                      </blockquote>
                    </v-col>
                  </v-row>
                  <v-row no-gutters>
                    <v-col cols="2" align-self="center" align="center">
                      <v-avatar color="grey">
                        <span class="white--text font-weight-bold">RAJ</span>
                      </v-avatar>
                    </v-col>
                    <v-col cols="10">
                      <blockquote class="blockquote grey--text body-1 px-3">
                        <div class="mb-1">
                          Rintangan Adalah Jalan
                        </div>
                        <cite class="font-weight-thin">- Gramedia</cite>
                      </blockquote>
                    </v-col>
                  </v-row>
                
                </v-container>
              </v-container>
            </v-card>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
    <Footer />
  </v-container>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  auth: 'auth',
  name: 'IndexPage',
  data() {
    return {
      doughChartData: {
        labels: ['Buku Masuk', 'Buku Keluar', 'Buku Ekspired'],
        datasets: [
          {
            label: 'Visualization',
            data: [50, 30, 20],
            backgroundColor: [
              'green',
              '#fca503',
              'red'
            ],
            borderColor: 'rgba(100, 155, 0, 1)',
            borderWidth: 0
          }
        ]
      },
      doughChartOptions: {
        responsive: true,
        maintainAspectRatio: false,
        offset: 8,
        radius: 160,
        spacing: 4,
        hoverOffset: 32,
        hoverBorderWidth: 1,
        weight: 0
      },
      lineChartData: {
        labels: [
          'Jan',
          'Feb',
          'Mar',
          'Apr',
          'May',
          'Jun',
          'Jul',
          'Aug',
          'Sep',
          'Oct',
          'Nov',
          'Dec'
        ],
        datasets: [
          {
            label: 'Buku Masuk',
            backgroundColor: 'green',
            borderColor: 'green',
            borderWidth: '0',
            borderJoinStyle: 'round',
            data: [40, 39, 10, 40, 39, 80, 40, 30, 10, 20, 30, 40]
          },
          {
            label: 'Buku Keluar',
            backgroundColor: '#fca503',
            borderColor: '#fca503',
            borderWidth: '0',
            borderJoinStyle: 'round',
            data: [20, 9, 80, 90, 29, 58, 80, 20, 30, 40, 55, 75]
          },
          {
            label: 'Buku Ekspired',
            backgroundColor: 'red',
            borderColor: 'red',
            borderWidth: '0',
            borderJoinStyle: 'round',
            data: [10, 24, 42, 50, 69, 10, 20, 70, 89, 45, 35, 42]
          }
        ]
      },
      lineChartOptions: {
        responsive: true,
        maintainAspectRatio: false
      }
    }
  },
  head() {
    return {
      title: 'Dashboard-Elibyu.id',
      description:
        'A Collection of Templates in Nuxtify Admin Template Dashboard by dykraf.com'
    }
  },
  computed: {
    ...mapGetters(['isAuthenticated', 'loggedInUser'])
  }
}
</script>
