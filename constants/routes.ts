const AUTH = {
  SIGNIN: {
    href: '/auth/signIn.vue',
    route: '/sign-in',
    url: '/sign-in'
  },
  SIGNUP: {
    href: '/auth/signUp.vue',
    route: '/sign-up',
    url: '/sign-up'
  },
  FORGOTPASSWORD: {
    href: '/auth/forgotPassword.vue',
    route: '/forgot-password',
    url: '/forgot-password'
  }
}

const DASHBOARD = {
  PRODUK: {
    href: '/produk/index.vue',
    route: '/produk',
    url: '/produk'
  },
  HOME: {
    href: '/index.vue',
    route: '/',
    url: '/'
  },
  FORM: {
    href: '/forms.vue',
    route: '/forms',
    url: '/forms'
  },
  TYPOGRAPHY: {
    href: '/typography.vue',
    route: '/typography',
    url: '/typography'
  },
  TABLE: {
    href: '/transaksi.vue',
    route: '/transaksi',
    url: '/transaksi'
  },
  PENJUALAN : {
    href: '/penjualan.vue',
    route: '/penjualan',
    url: '/penjualan'
  },
  CHART: {
    href: '/charts.vue',
    route: '/charts',
    url: '/charts'
  },
  PROFILE: {
    href: '/profile.vue',
    route: '/user-profile',
    url: '/profile'
  },
  SETTING: {
    href: '/settings.vue',
    route: '/user-settings',
    url: '/setting'
  },
    EDITPRODUK: {
    href: '/produk/edit.vue',
    route: '/produk/edit',
    url: '/produk/edit'
  },
     DETAILPRODUK: {
    href: '/produk/detail.vue',
    route: '/produk/detail',
    url: '/produk/detail'
  },
  CARD: { href: '/cards.vue', route: '/cards', url: '/cards' },
  ICON: { href: '/icons.vue', route: '/icons', url: '/icons' },
  LANDING: { href: '/landing.vue', route: '/landing', url: '/landing' },
  PARAGRAPH: { href: '/paragraph.vue', route: '/paragraph', url: '/paragraph' },
  HEADING: { href: '/headings.vue', route: '/headings', url: '/headings' }
}

// const API = {
//   API_SALES: {
//     url: '/data-sales'
//     // route: ''
//   },
//   API_REVENUE: {
//     url: '/data-revenue'
//     // route: ''
//   },
//   API_CUSTOMER: {
//     url: '/data-customer'
//     // route: ''
//   },
//   API_PRODUCT: {
//     url: '/data-product'
//     // route: ''
//   },
//   API_CHANNEL: {
//     url: '/data-channel'
//     // route: ''
//   },
//   API_TIMELINE: {
//     url: '/data-channel'
//     // route: ''
//   }
// }

const API = {
  API: {
    href: '/api/v1',
    route: '/api/v1',
    url: '/api/v1'
  }
}

module.exports = { ...AUTH, ...DASHBOARD, ...API }
