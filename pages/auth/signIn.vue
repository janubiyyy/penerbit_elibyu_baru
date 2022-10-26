<template>
  <div>
    <FormSignIn :email="email" :password="password" />
    <span
      ><img src="/nuxt.png" height="12" /> &copy;
      {{ new Date().getFullYear() }} {{ company }}</span
    >
  </div>
</template>

<script>
import { mapState } from 'vuex'
import global from '~/constants/global'

export default {
  layout: 'blank',
  data() {
    return {
      email: '',
      password: '',
      company: global.company
    }
  },
  computed: {
    ...mapState({
      isDark: (state) => state.core.theme.isDark
    })
  }
}
</script>
