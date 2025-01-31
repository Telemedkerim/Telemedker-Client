<template>
  <div class="container">
    <div class="features-absolute">
      <div class="row justify-content-center">
        <div
          v-for="(plan, index) in plans"
          :key="index"
          class="col-lg-4 col-md-6"
        >
          <div class="card pricing border-0 p-4 rounded-md shadow">
            <div class="card-body p-2">
              <span
                class="py-2 px-4 d-inline-block bg-soft-primary h6 mb-0 text-primary rounded-lg"
                >{{ $t(plan.nameKey) }}</span
              >
              <h2 class="fw-bold mb-0 mt-3">€{{ plan.price }}.00</h2>
              <p class="text-muted">{{ $t("pricingPerMonth") }}</p>

              <p class="text-muted">{{ $t(plan.descKey) }}</p>

              <ul class="list-unstyled pt-3 border-top">
                <li
                  v-for="(feature, featureIndex) in plan.features"
                  :key="featureIndex"
                  class="h6 text-muted mb-0"
                >
                  <span class="text-primary h4 me-2">
                    <i
                      :class="[
                        feature === 'planFeatureInsurance'
                          ? 'uil uil-times-circle text-danger'
                          : 'uil uil-check-circle text-primary',
                      ]"
                      class="align-middle"
                    ></i>
                  </span>
                  {{ $t(feature) }}
                </li>
              </ul>

              <div class="mt-4">
                <div class="d-grid">
                  <a href="javascript:void(0)" class="btn btn-primary">{{
                    $t("pricingBuyNow")
                  }}</a>
                </div>
                <p class="text-muted mt-3 mb-0">{{ $t("pricingNoCard") }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const plans = ref([
  {
    nameKey: "planFreeTitle",
    descKey: "planFreeDesc",
    price: "0",
    features: [
      "planFeatureInsurance",
      "planFeatureVideo",
      "planFeaturePrescriptions",
      "planFeatureSickNotes",
    ],
  },
  {
    nameKey: "planDocsTitle",
    descKey: "planDocsDesc",
    price: 40,
    features: [
      "planFeatureNoInsurance",
      "planFeaturePrescriptions",
      "planFeatureSickNotes",
    ],
  },
  {
    nameKey: "planConsultTitle",
    descKey: "planConsultDesc",
    price: 60,
    features: [
      "planFeatureNoInsurance",
      "planFeatureVideo",
      "planFeaturePrescriptions",
      "planFeatureSickNotes",
    ],
  },
]);
</script>

<style scoped>
.features-absolute {
  width: 100%;
}

.row {
  display: flex;
  flex-wrap: wrap;
}

.card.pricing {
  height: 100%;
  display: flex;
  flex-direction: column;
}

.card-body {
  flex: 1;
  display: flex;
  flex-direction: column;
}

.list-unstyled {
  flex: 1;
  margin-bottom: 0;
}

.mt-4 {
  margin-top: auto !important;
}
</style>
