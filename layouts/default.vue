<template>
  <div class="layout-wrapper">
    <Navbar />
    <main>
      <slot />
    </main>
    <Footer />
  </div>
</template>
<script lang="ts" setup>
// Automatically update the head metadata when translations or locale change
</script>

<style scoped lang="scss">
.layout-wrapper {
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  padding: 0;
  margin: 0;

  :deep(navbar),
  :deep(footer) {
    width: 100%;
  }
}

main {
  flex: 1;
}
</style>
