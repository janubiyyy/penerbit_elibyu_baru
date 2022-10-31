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
              <template>
                <div>
                  <v-sheet tile height="54" class="d-flex">
                    <v-btn icon class="ma-2" @click="$refs.calendar.prev()">
                      <v-icon>mdi-chevron-left</v-icon>
                    </v-btn>
                    <v-select v-model="type" :items="types" dense outlined hide-details class="ma-2" label="type"></v-select>
                    <v-select v-model="mode" :items="modes" dense outlined hide-details label="event-overlap-mode" class="ma-2">
                    </v-select>
                    <v-select v-model="weekday" :items="weekdays" dense outlined hide-details label="weekdays" class="ma-2">
                    </v-select>
                    <v-spacer></v-spacer>
                    <v-btn icon class="ma-2" @click="$refs.calendar.next()">
                      <v-icon>mdi-chevron-right</v-icon>
                    </v-btn>
                  </v-sheet>
                  <v-sheet height="600">
                    <v-calendar ref="calendar" v-model="value" :weekdays="weekday" :type="type" :events="events"
                      :event-overlap-mode="mode" :event-overlap-threshold="30" :event-color="getEventColor" @change="getEvents">
                    </v-calendar>
                  </v-sheet>
                </div>
              </template> 
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

      type: 'month',
      types: ['month', 'week', 'day', '4day'],
      mode: 'stack',
      modes: ['stack', 'column'],
      weekday: [0, 1, 2, 3, 4, 5, 6],
      weekdays: [
        { text: 'Sun - Sat', value: [0, 1, 2, 3, 4, 5, 6] },
        { text: 'Mon - Sun', value: [1, 2, 3, 4, 5, 6, 0] },
        { text: 'Mon - Fri', value: [1, 2, 3, 4, 5] },
        { text: 'Mon, Wed, Fri', value: [1, 3, 5] },
      ],
      value: '',
      events: [],
      colors: ['blue', 'indigo', 'deep-purple', 'cyan', 'green', 'orange', 'grey darken-1'],
      names: ['Publish Buku', 'Update Buku', 'Delete Buku'],
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
  },
  methods: {
    getEvents({ start, end }) {
      const events = []

      const min = new Date(`${start.date}T00:00:00`)
      const max = new Date(`${end.date}T23:59:59`)
      const days = (max.getTime() - min.getTime()) / 86400000
      const eventCount = this.rnd(days, days + 20)

      for (let i = 0; i < eventCount; i++) {
        const allDay = this.rnd(0, 3) === 0
        const firstTimestamp = this.rnd(min.getTime(), max.getTime())
        const first = new Date(firstTimestamp - (firstTimestamp % 900000))
        const secondTimestamp = this.rnd(2, allDay ? 288 : 8) * 900000
        const second = new Date(first.getTime() + secondTimestamp)

        events.push({
          name: this.names[this.rnd(0, this.names.length - 1)],
          start: first,
          end: second,
          color: this.colors[this.rnd(0, this.colors.length - 1)],
          timed: !allDay,
        })
      }

      this.events = events
    },
    getEventColor(event) {
      return event.color
    },
    rnd(a, b) {
      return Math.floor((b - a + 1) * Math.random()) + a
    },
  },
}
</script>
