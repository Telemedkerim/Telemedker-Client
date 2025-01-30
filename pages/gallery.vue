<template>
  <div>
    <Hero />

    <section class="section">
      <Portfolio
        containerclass="container"
        gridrow="row row-cols-lg-3 row-cols-md-2 g-3"
      />
    </section>
    <backtotop />
  </div>
</template>

<script setup>
import backtotop from "@/components/back-to-top.vue";
</script>

<style lang="scss" scoped></style>
