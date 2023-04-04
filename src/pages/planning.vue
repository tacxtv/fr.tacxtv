<template lang="pug">
div
    div Planning
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { definePageMeta } from '#imports'

export default defineComponent({
  name: 'Index',
  setup() {
    definePageMeta({
      layout: 'fullscreen',
    })
    return {}
  },
})
</script>
