<template lang="pug">
div.menu-items.flex.gap-8.text-3xl.font-langar.pt-2.px-3
    nuxt-link.inline-block.text-white.no-underline(to='/' class='hover:underline') Accueil
    nuxt-link.inline-block.text-white.no-underline(to='/planning' class='hover:underline') Planning
    .inline-block.text-white.no-underline(class='hover:underline') FAQ
      .block.w-auto.absolute
        ul.flex.flex-col.p-4.mt-2.border.rounded.gap-3
          li.inline-block.text-white.no-underline
            nuxt-link(to='/faq' class='hover:underline') Les créateurs
          li.inline-block.text-white.no-underline
            nuxt-link(to='/faq' class='hover:underline') Nos expériences
    nuxt-link.inline-block.text-white.no-underline(href='javascript:;' target='_blank' class='hover:underline') Jouer !
</template>

<style lang="sass">
.menu-items
  ul
    background: var(--primary-background-color)
</style>
