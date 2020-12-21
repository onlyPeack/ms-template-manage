<template>
  <div>
    <ms-self-scroll></ms-self-scroll>
    <ms-self-index-one></ms-self-index-one>
    <ms-self-index-two></ms-self-index-two>
  </div>
</template>

<script>
  export default {
    name: "index",
    components: {
      msSelfScroll: () => import(`../components/ms-self-scroll`),
      msSelfIndexOne: () => import(`../components/default/ms-self-index-1`),
      msSelfIndexTwo: () => import(`../components/default/ms-self-index-2`),
    }
  }
</script>

<style scoped>

</style>
