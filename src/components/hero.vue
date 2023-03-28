<template lang="pug">
div#hero
    menu-items
    img(src='/logo.png' alt='logo')
    wave.wave
</template>

<style lang="sass">
#hero
  height: 80vh
  background-position: bottom
  background-size: cover
  position: relative
  background-image: linear-gradient(to right top, rgba(19, 84, 122, 0.25), rgba(128, 208, 199, 0.4)), url(/background.png)
  // background-image: linear-gradient(to right top, rgba(19, 84, 122, 0.5), rgba(128, 208, 199, 0.8)), url(/background.png)

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
