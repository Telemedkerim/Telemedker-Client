<template>
  <div class="row align-items-center">
    <div class="col-lg-6 col-md-5 mainker mt-100">
      <img :src="`/images/efficientker.png`" alt="" />
    </div>
    <!--end col-->

    <div class="col-lg-6 col-md-7">
      <div class="section-title">
        <h1 class="title mb-3">Smart Healthcare Solutions</h1>
        <p class="para-desc text-muted">
          <Description
            text="Experience premium German medical care from the comfort of your home, with transparent pricing and exceptional service quality"
          />
        </p>
        <digital-list :items="costEfficiencyList" />
        <div class="mt-4">
          <a href="javascript:void(0)" class="btn btn-primary">View Pricing</a>
        </div>
      </div>
    </div>
    <!--end col-->
  </div>
  <!--end row-->

  <div class="container mt-100">
    <div class="row align-items-center">
      <div class="col-md-5 order-1 order-md-2">
        <img :src="`/images/digitalker.png`" class="img-fluid" alt="" />
      </div>
      <!--end col-->

      <div class="col-md-7 mt-4 pt-2 mt-sm-0 pt-sm-0 order-2 order-md-1">
        <div class="section-title">
          <h1 class="title mb-3">Premium German Medical Care Across Europe</h1>
          <p class="para-desc text-muted">
            <description />
          </p>
          <digital-list :items="premiumCareList" />
          <div class="mt-4">
            <a href="javascript:void(0)" class="btn btn-primary"
              >View Pricing</a
            >
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
import { ref } from "vue";

const costEfficiencyList = ref([
  "Offered at no cost to all regular patients of our medical practices",
  "A fixed flat rate, no matter the treatment",
  "High-quality, evidence-based medical care from German doctors in every country where our platform operates",
]);

const premiumCareList = ref([
  "**High-quality, evidence-based medicine** provided by experienced German doctors",
  "**Convenient video consultations** and treatments across multiple European countries",
  "**Transparent pricing** with a fixed flat rate for all treatments",
  "**Exclusive benefits** for regular patients, including free follow-up services",
  "Save **time and money** by avoiding unnecessary travel and overpriced treatments abroad",
]);
</script>

<style lang="scss" scoped>
.mainker {
  img {
    max-width: 100%;
    height: auto;
  }
}
</style>
