<template>
  <!-- Hero Start -->
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
            <h1 class="heading fw-bold mb-3">
              The first international telemedicine platform in Europe
            </h1>
            <p class="para-desc text-muted">
              <Description
                text="In every country where we offer telemedicine, we also have medical practices where our doctors can examine you in person!"
              />
            </p>
            <div class="watch-video mt-4 pt-2">
              <a href="javascript:void(0)" class="btn btn-primary mb-2"
                >Register</a
              >
            </div>
          </div>
        </div>
        <!--end col-->

        <div class="col-lg-6 col-md-5 mt-4 pt-2 mt-sm-0 pt-sm-0">
          <div class="bg-saas-shape position-relative mainker">
            <img
              src="/img/mainker.png"
              class="mx-auto d-block img-fluid"
              alt=""
            />
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

  <section class="section">
    <principle />
    <div class="container mt-100 mt-60">
      <services />
    </div>
    <div class="container mt-100 mt-60">
      <subscribe />
    </div>
    <div class="container mt-100 mt-60">
      <pricing />
    </div>
  </section>

  <backtotop />
</template>

<script setup>
import principle from "@/components/our-principles.vue";
import services from "@/components/principel-services.vue";
import subscribe from "@/components/subscribe.vue";
import pricing from "@/components/pricing.vue";
import backtotop from "@/components/back-to-top.vue";
</script>

<style lang="scss" scoped>
.mainker {
  width: 100%;

  img {
    max-width: 100%;
    height: auto;
  }
}
</style>
