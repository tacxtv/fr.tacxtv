<template lang="pug">
div#navbar
    menu-items.absolute.z-10
    wave.wave
</template>

<style lang="sass">
#navbar
  height: 160px
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
  name: 'Navbar',
  setup() {
    return {}
  },
})
</script>
