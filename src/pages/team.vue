<template lang="pug">
  span Accueil
</template>

<script>

// noinspection JSUnusedGlobalSymbols
export default {
  name: 'IndexPage',
  middleware: (context) => {
    context.redirect('/stream')
  },
}
</script>
