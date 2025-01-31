<template>
  <div class="row justify-content-center">
    <div
      v-for="(item, index) in contactInfo"
      :key="index"
      class="col-lg-4 col-md-6 mb-5"
    >
      <div class="card border-0 text-center features feature-primary">
        <div class="icon text-center mx-auto rounded-md">
          <h3 class="mb-0"><i :class="item.icon"></i></h3>
        </div>

        <div class="card-body p-0 mt-4">
          <h5 class="title fw-bold">{{ item.title }}</h5>
          <p class="text-muted">{{ item.description }}</p>
          <a :href="item.href" class="link">{{ item.linkText }}</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const contactInfo = [
  {
    icon: "uil uil-phone",
    title: "Phone",
    description: "Start working with Landflow that can provide everything",
    href: "tel:+152534-468-854",
    linkText: "+152 534-468-854",
  },
  {
    icon: "uil uil-envelope",
    title: "Email",
    description: "Start working with Landflow that can provide everything",
    href: "mailto:contact@example.com",
    linkText: "contact@example.com",
  },
];
</script>

<style lang="scss" scoped>
/* your styles here */
</style>
