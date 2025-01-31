<template>
  <div class="row align-items-center">
    <div class="col-lg-6 col-md-5 mainker mt-100">
      <img :src="`/img/efficientker.png`" alt="" />
    </div>
    <!--end col-->

    <div class="col-lg-6 col-md-7">
      <div class="section-title">
        <h1 class="title mb-3">{{ $t("smartSolutionsTitle") }}</h1>
        <p class="para-desc text-muted">
          <Description :text="$t('smartSolutionsDesc')" />
        </p>
        <digital-list :items="costEfficiencyList" />
        <div class="mt-4">
          <a href="javascript:void(0)" class="btn btn-primary">{{
            $t("viewPricing")
          }}</a>
        </div>
      </div>
    </div>
    <!--end col-->
  </div>
  <!--end row-->

  <div class="container mt-100">
    <div class="row align-items-center">
      <div class="col-md-5 order-1 order-md-2">
        <img :src="`/img/digitalker.png`" class="img-fluid" alt="" />
      </div>
      <!--end col-->

      <div class="col-md-7 mt-4 pt-2 mt-sm-0 pt-sm-0 order-2 order-md-1">
        <div class="section-title">
          <h1 class="title mb-3">{{ $t("premiumCareTitle") }}</h1>
          <p class="para-desc text-muted">
            <Description :text="$t('premiumCareDesc')" />
          </p>
          <digital-list :items="premiumCareList" />
          <div class="mt-4">
            <a href="javascript:void(0)" class="btn btn-primary">{{
              $t("viewPricing")
            }}</a>
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
import { useI18n } from "vue-i18n";

const { t } = useI18n();

const costEfficiencyList = ref([
  t("costEfficiency1"),
  t("costEfficiency2"),
  t("costEfficiency3"),
]);

const premiumCareList = ref([
  t("premiumCare1"),
  t("premiumCare2"),
  t("premiumCare3"),
  t("premiumCare4"),
  t("premiumCare5"),
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
