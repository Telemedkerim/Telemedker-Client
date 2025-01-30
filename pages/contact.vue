<template>
  <div>
    <navbar />

    <!-- Home Start -->
    <section
      class="bg-half-170 bg-orange d-table w-100"
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
              <p class="para-desc mx-auto text-white-50">
                Get in touch with our friendly team for a seamless moving experience across Europe.
                Whether you're planning a home or office relocation, we're here to help make your
                move stress-free.
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
    <section class="section pb-0">
      <ContactForm />
      <div class="container mt-100 mt-60">
        <ContactItem />
      </div>
      <maps />
    </section>

    <backtotop />
  </div>
</template>

<script setup>
  import navbar from '@/components/navbar/navbar.vue';
  import image from '../assets/images/bg/bg-contact.png';

  import backtotop from '@/components/back-to-top.vue';
</script>

<style lang="scss" scoped>
  .bg-orange {
    background-color: #ff9800 !important;
  }
</style>
