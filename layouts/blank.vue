<template>
  <v-app
    id="blank"
    :dark="isDark"
    style="
      background: #324da1;
    background-image: url('https://assets.tokopedia.net/assets-tokopedia-lite/v2/zeus/kratos/149df038.svg');
      background-repeat: no-repeat;
      background-size: contain;
    "
    ><SeoHead />
    <v-main>
      <v-container>
        <Nuxt />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import { mapState } from 'vuex'
import SeoHead from '~/components/SeoHead'

export default {
  name: 'LayoutBlank',
  components: { SeoHead },
  data() {
    return {
      title: 'Nuxtify'
    }
  },
  computed: {
    ...mapState({ isDark: (state) => state.core.theme.isDark })
  }
}
</script>

<!-- Styles -->
<!-- <style lang="scss" scoped>
@import '~/assets/scss/theme';
</style> -->
