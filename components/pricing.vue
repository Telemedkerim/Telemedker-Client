<template>
  <section
    class="bg-half-170 bg-primary d-table w-150 pricing"
    :style="{
      'background-image': 'url(' + image + ')',
      backgroundPosition: 'center',
    }"
  >
    <div class="text-center">
      <div class="heading-title">
        <h2 class="text-white title title-dark mb-3">
          Our Pricing Plans & Rates
        </h2>
        <p class="para-desc mx-auto text-white-50"><description /></p>
      </div>
    </div>
  </section>
  <!--end section-->

  <section class="section w-100">
    <PricingPart />
  </section>

  <backtotop />
</template>

<script setup>
import image from "../assets/images/bg/bg-lines-two.png";

import backtotop from "@/components/back-to-top.vue";

defineOptions({
  name: "PricingPage",
});
</script>

<style lang="scss" scoped>
.pricing {
  width: 100%;
  max-width: 100vw;
}
</style>
