<template>
  <div class="pricing-section position-relative">
    <section
      class="bg-half-170 bg-primary"
      :style="{
        'background-image': 'url(' + image + ')',
        'background-position': 'center',
      }"
    >
      <div class="text-center">
        <div class="heading-title">
          <h2 class="text-white title title-dark mb-3">Our Pricing</h2>
          <p class="para-desc mx-auto text-white-50"><description /></p>
        </div>
      </div>
    </section>
    <!--end section-->

    <section class="section w-100">
      <PricingPart />
    </section>

    <backtotop />
  </div>
</template>

<script setup>
import image from "../assets/images/bg/bg-lines-two.png";

import backtotop from "@/components/back-to-top.vue";
</script>

<style lang="scss" scoped>
.pricing-section {
  padding: 100px 0;
  margin-top: 100px;
}

.bg-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.pricing-card {
  transform: translateY(-50px);
  background: white;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-60px);
    box-shadow: 0 10px 25px rgba(47, 85, 212, 0.3) !important;
  }
}

.price {
  font-size: 3rem;
  font-weight: 600;
}
</style>
