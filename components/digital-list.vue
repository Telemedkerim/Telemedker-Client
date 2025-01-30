<template>
  <ul class="list-unstyled text-muted mt-3">
    <li v-for="item in items" :key="item" class="mb-0">
      <span class="text-primary h5 me-2"
        ><i class="uil uil-check-circle align-middle"></i
      ></span>
      <span v-html="formatBoldText(item)"></span>
    </li>
  </ul>
</template>

<script setup>
import { defineProps } from "vue";

const props = defineProps({
  items: {
    type: Array,
    required: true,
    default: () => [],
  },
});

const formatBoldText = (text) => {
  return text.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>");
};
</script>

<style lang="scss" scoped></style>
