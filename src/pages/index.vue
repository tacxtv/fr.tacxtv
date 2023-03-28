<template lang="pug">
div index
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { definePageMeta } from '#imports'

export default defineComponent({
  name: 'Index',
  setup() {
    definePageMeta({
      layout: 'onepage',
    })
    return {}
  },
})
</script>
