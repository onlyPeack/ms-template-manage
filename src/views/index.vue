<template>
  <div>
    <ms-self-scroll></ms-self-scroll>
  </div>
</template>

<script>
  export default {
    name: "index",
    components: {
      msSelfScroll: () => import(`../components/ms-self-scroll`),
    }
  }
</script>

<style scoped>

</style>
