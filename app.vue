<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup>
import { useI18n } from "vue-i18n";
const { locale } = useI18n();
onMounted(async () => {
  watchEffect(() => {
    document.documentElement.className = locale.value; // Add 'fr' or 'de' etc., based on locale
  });
});
</script>

<style lang="scss" scoped></style>
