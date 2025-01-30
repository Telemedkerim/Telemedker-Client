<template>
  <div class="container">
    <div class="row">
      <div class="col-md-6">
        <div class="section-title mb-4 pb-2 mb-sm-0 pb-sm-0 me-lg-5">
          <h6 class="text-primary">About Us</h6>
          <h4 class="title mb-0 me-lg-5">Professional International Removals Across Europe</h4>
        </div>
      </div>
      <!--end col-->

      <div class="col-md-6">
        <div class="section-title">
          <p class="text-muted para-desc">
            Space 4 Time LTD is a professional company, specialized in international relocation and
            removals around Europe. We completely understand the challenges our customers face when
            moving to a new home or relocating their offices.
          </p>
          <p class="text-muted para-desc mb-0">
            We've made it our ultimate goal to provide utmost care for your entrusted belongings,
            perfect scheduling at both ends, and professional packaging service. Our smart vans can
            reach any address, ensuring a smooth and reliable moving experience.
          </p>
        </div>
      </div>
      <!--end col-->
    </div>
    <!--end row-->

    <div class="row mt-4 pt-2">
      <div v-for="item in datas" :key="item" class="col-lg-4 col-md-6 mt-4 pt-2">
        <div class="card border-0 text-center features feature-primary rounded">
          <div class="icon text-center mx-auto rounded-md">
            <h3 class="mb-0"><i :class="item.icon"></i></h3>
          </div>

          <div class="card-body p-0 mt-4">
            <h5>{{ item.name }}</h5>
            <p class="text-muted mb-0">{{ item.desc }}</p>
          </div>
        </div>
      </div>
      <!--end col-->
    </div>
    <!--end row-->
  </div>
  <!--end container-->
</template>

<script setup>
  import { ref } from 'vue';

  const datas = ref([
    {
      icon: 'uil uil-chart-pie',
      name: 'Professional Care',
      desc: 'We handle your belongings with the utmost care and attention, ensuring safe and secure transportation across Europe.',
    },
    {
      icon: 'uil uil-crosshair',
      name: 'Perfect Timing',
      desc: 'Our expert team ensures precise scheduling and timely delivery, making your relocation process smooth and stress-free.',
    },
    {
      icon: 'uil uil-airplay',
      name: 'Complete Service',
      desc: 'From professional packaging to door-to-door delivery, we provide comprehensive moving solutions tailored to your needs.',
    },
  ]);
</script>

<style lang="scss" scoped></style>
