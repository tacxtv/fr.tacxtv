<template lang="pug">
div.menu-items.flex.gap-8.text-1xl.font-langar.pt-2.px-3.left-0.right-0(class="sm:text-3xl")
    nuxt-link.inline-block.text-white.no-underline.whitespace-nowrap(to='/' class='hover:underline') Accueil
    nuxt-link.inline-block.text-white.no-underline.whitespace-nowrap(to='/planning' class='hover:underline') Planning
    .inline-block.text-white.no-underline.whitespace-nowrap(class='hover:underline' ref="myHoverableElement") FAQ
      .block.w-auto.absolute(:class="{ 'hidden': !isHovered }")
        ul.flex.flex-col.p-4.mt-2.rounded.gap-3
          li.inline-block.text-white.no-underline.whitespace-nowrap
            nuxt-link(to='/faq' class='hover:underline') Les créateurs
          li.inline-block.text-white.no-underline.whitespace-nowrap
            nuxt-link(to='/faq' class='hover:underline') Nos expériences
    div(style="margin: auto")
    slot(name="right-items")
    //- nuxt-link.inline-block.text-white.no-underline.whitespace-nowrap(href='javascript:;' target='_blank' class='hover:underline') Jouer !
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { useElementHover } from '@vueuse/core'

export default defineComponent({
  setup() {
    const myHoverableElement = ref()
    const isHovered = useElementHover(myHoverableElement)
    return {
      myHoverableElement,
      isHovered,
    }
  },
})
</script>

<style lang="sass">
.menu-items
  ul
    background: var(--basic-background-color)
</style>
