<template>
  <ul class="list-unstyled text-muted mt-3">
    <li v-for="item in datas" :key="item" class="mb-0">
      <span class="text-primary h5 me-2"><i class="uil uil-check-circle align-middle"></i></span>
      {{ item }}
    </li>
  </ul>
</template>

<script setup>
  import { ref, computed } from 'vue';

  const props = defineProps({
    type: {
      type: String,
      default: 'primary',
    },
  });

  const firstSectionList = [
    'Professional Packing & Unpacking Services',
    'Free Moving Boxes & Materials',
    'Expert Furniture Dismantling',
  ];

  const secondSectionList = [
    '24/7 Customer Support',
    'Secure Storage Solutions Available',
    'Residential & Commercial Moving Experts',
  ];

  const datas = computed(() => (props.type === 'primary' ? firstSectionList : secondSectionList));
</script>

<style lang="scss" scoped></style>
