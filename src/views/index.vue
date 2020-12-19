<template>
  <div>
    <ms-self-scroll></ms-self-scroll>
    <ms-self-index-one></ms-self-index-one>
  </div>
</template>

<script>
  export default {
    name: "index",
    components: {
      msSelfScroll: () => import(`../components/ms-self-scroll`),
      msSelfIndexOne: () => import(`../components/default/ms-self-index-1`),
    }
  }
</script>

<style scoped>

</style>
