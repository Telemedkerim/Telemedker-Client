<template>
  <div>
    <navbar :logo-light="true" :button-light="true" nav-light="nav-light" />
    <section
      class="bg-half-170 d-table w-100"
      :style="{ 'background-image': 'url(/img/about.jpg)' }"
    >
      <div class="bg-overlay"></div>
      <div class="container">
        <div class="row mt-5 justify-content-center">
          <div class="col-12">
            <div class="heading-title text-center">
              <h2 class="text-white title title-dark mb-3">About us</h2>
              <p class="para-desc mx-auto text-white-50">
                <Description
                  text="Your Trusted European Relocation Partner. We deliver seamless home and office moves with professional packing, secure transport, and complete logistics solutions. Our experienced team ensures your belongings are handled with utmost care, making your move stress-free."
                />
              </p>
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

    <section class="section">
      <About />
      <div class="container mt-100 mt-60">
        <Images />
      </div>
      <div class="container mt-100 mt-60">
        <ClientOnly>
          <Counter />
        </ClientOnly>
      </div>
      <div class="container mt-100 mt-60">
        <Teams />
      </div>
    </section>
    <backtotop />
  </div>
</template>

<script setup>
import backtotop from "@/components/back-to-top.vue";
import navbar from "@/components/navbar/navbar.vue";
</script>

<style lang="scss" scoped></style>
