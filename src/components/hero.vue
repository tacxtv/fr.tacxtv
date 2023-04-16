<template lang="pug">
div#hero
    menu-items.absolute.z-10
      template(v-slot:right-items)
        nuxt-link.text-yellow-300(to='https://www.twitch.tv/subs/tacxtv' target="_blank") Nous soutenir
    img.logo.px-6.z-10(src='/logo.png' alt='logo')
    fog
    wave.wave
</template>

<style lang="sass">
#hero
  height: 80vh
  background-position: bottom
  background-size: cover
  display: flex
  flex-flow: column
  position: relative
  background-image: linear-gradient(to right top, rgba(19, 84, 122, 0.25), rgba(128, 208, 199, 0.4)), url(/background.png)
  // background-image: linear-gradient(to right top, rgba(19, 84, 122, 0.5), rgba(128, 208, 199, 0.8)), url(/background.png)

  .logo
    margin: auto
    max-height: 60%
    padding-bottom: 92px

  .wave
    position: absolute
    bottom: 0
    left: 0
    right: 0
    z-index: 1
</style>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Hero',
  setup() {
    return {}
  },
})
</script>
