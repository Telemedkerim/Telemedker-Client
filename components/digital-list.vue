<template>
  <ul class="list-unstyled text-muted mt-3">
    <li v-for="item in datas" :key="item" class="mb-0">
      <span class="text-primary h5 me-2"
        ><i class="uil uil-check-circle align-middle"></i></span
      >{{ item }}
    </li>
  </ul>
</template>

<script setup>
import { ref } from "vue";

const datas = ref([
  "Offered at no cost to all regular patients of our medical practices",
  "A fixed flat rate, no matter the treatment",
  "High-quality, evidence-based medical care from German doctors in every country where our platform operates",
]);
</script>

<style lang="scss" scoped></style>
