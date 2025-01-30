<template>
  <!-- Hero Start -->
  <navbar :navLight="'nav-light'" :logoLight="true" />
  <MainVideoContent />
  <section
    class="bg-half-130 d-table w-100 overflow-hidden"
    :style="{
      'background-image': 'url(/img/bg-index.png)',
      backgroundPosition: 'top',
    }"
  >
    <div class="container">
      <div class="row mt-5 align-items-center pt-5">
        <div class="col-lg-6 col-md-7">
          <div class="heading-title">
            <h1 class="heading fw-bold mb-3">Worry-Free Relocation Across Europe</h1>
            <p class="para-desc text-muted">
              <Description
                text=" Experience Hassle-Free Relocation with Expert Support and Tailored Logistics
  Services Across Europe"
              />
            </p>
            <div class="watch-video mt-4 pt-2">
              <NuxtLink to="/contact" class="btn btn-primary mb-2">Contact us</NuxtLink>
            </div>
          </div>
        </div>
        <!--end col-->

        <div class="col-lg-6 col-md-5 mt-4 pt-2 mt-sm-0 pt-sm-0">
          <div class="bg-saas-shape position-relative">
            <img src="/img/home-intro.png" class="mx-auto d-block" alt="" />
          </div>
        </div>
        <!--end col-->
      </div>
      <!--end row-->
    </div>
    <!--end container-->
  </section>
  <!--end section-->
  <!-- Hero End -->

  <!-- <div class="container py-4">
    <div class="row justify-content-center">
      <logos />
    </div>
  </div> -->

  <section class="section">
    <principle />

    <div class="container mt-100 mt-60">
      <services />
    </div>
    <div class="container mt-100 mt-60">
      <subscribe />
    </div>
  </section>

  <backtotop />
</template>

<script setup>
  import principle from '@/components/our-principles.vue';
  import services from '@/components/principel-services.vue';
  import subscribe from '@/components/subscribe.vue';

  import backtotop from '@/components/back-to-top.vue';
</script>

<style lang="scss" scoped></style>
