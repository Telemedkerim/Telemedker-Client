<template>
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-12">
        <div class="section-title text-center mb-4 pb-2">
          <h6 class="text-primary">Why Choose Us</h6>
          <h4 class="title mb-4">Professional Moving Services</h4>
          <p class="text-muted para-desc mx-auto mb-0">
            <description />
          </p>
        </div>
      </div>
      <!--end col-->
    </div>
    <!--end row-->

    <div class="row justify-content-center">
      <div class="col-lg-10">
        <div class="row">
          <div v-for="item in datas" :key="item" class="col-md-6 mt-4 pt-2">
            <div class="d-flex features feature-primary core-feature rounded p-4">
              <div class="icon text-center rounded-circle me-3 mt-2">
                <h3 class="mb-0"><i :class="item.icon"></i></h3>
              </div>
              <div class="flex-1">
                <h5>{{ item.name }}</h5>
                <p class="text-muted mb-0">{{ item.desc }}</p>
                <div class="mt-2">
                  <NuxtLink to="/services" class="link">
                    Read More
                    <i data-feather="arrow-right" class="fea icon-sm"></i>
                  </NuxtLink>
                </div>
              </div>
            </div>
          </div>
          <!--end col-->
        </div>
        <!--end row-->
      </div>
      <!--end col-->

      <div class="col-12 mt-4 pt-2 text-center">
        <NuxtLink to="/services" class="text-primary h6 mb-0">
          Explore all services
          <i data-feather="arrow-right" class="fea icon-sm"></i>
        </NuxtLink>
      </div>
      <!--end col-->
    </div>
    <!--end row-->
  </div>
  <!--end container-->
</template>

<script setup>
  import { ref, onMounted } from 'vue';
  import feather from 'feather-icons';

  const datas = ref([
    {
      icon: 'uil uil-truck',
      name: 'Dedicated Move',
      desc: 'Experience premium door-to-door delivery service with our dedicated moves. Perfect for loads above 15 cubic meters, offering maximum flexibility.',
    },
    {
      icon: 'uil uil-share-alt',
      name: 'Part Load Move',
      desc: 'Smart and cost-effective solution for loads up to 15 cubic meters. Share vehicle space with other customers to significantly reduce your moving costs.',
    },
    {
      icon: 'uil uil-users-alt',
      name: 'Professional Helpers',
      desc: 'Our experienced team assists with loading and unloading your belongings. Strong, reliable, and professional helpers who handle your items with care.',
    },
    {
      icon: 'uil uil-box',
      name: 'Packing Services',
      desc: 'Professional packing service using high-quality materials and proven techniques to ensure maximum protection for your belongings during transit.',
    },
  ]);

  onMounted(() => {
    feather.replace();
  });
</script>

<style lang="scss" scoped></style>
