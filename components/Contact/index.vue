<template>
  <!-- Home Start -->
  <section
    class="bg-half-170 bg-primary d-table w-100 mb-4"
    :style="{
      'background-image': 'url(' + image + ')',
      backgroundPosition: 'center',
    }"
  >
    <div class="container">
      <div class="row mt-5 justify-content-center">
        <div class="col-12">
          <div class="heading-title text-center">
            <h2 class="text-white title-dark title mb-3">Contact us</h2>
          </div>
        </div>
        <!--end col-->
      </div>
      <!--end row-->
    </div>
    <!--end container-->
  </section>
  <!--end section-->
  <Shape />
  <section class="section pb-0">
    <ContactForm />
    <div class="container mt-100 mt-60">
      <ContactItem />
    </div>
  </section>
  <footers />
  <backtotop />
</template>

<script setup>
import image from "../assets/images/bg/bg-contact.png";

import backtotop from "@/components/back-to-top.vue";
</script>

<style lang="scss" scoped></style>
