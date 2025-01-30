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
                >{{ plan.name }}</span
              >
              <h2 class="fw-bold mb-0 mt-3">€{{ plan.price }}.00</h2>
              <p class="text-muted">Per Month</p>

              <p class="text-muted">{{ plan.description }}</p>

              <ul class="list-unstyled pt-3 border-top">
                <li
                  v-for="(feature, featureIndex) in plan.features"
                  :key="featureIndex"
                  class="h6 text-muted mb-0"
                >
                  <span class="text-primary h4 me-2">
                    <i
                      :class="[
                        feature ===
                        'Proof of insurance is required for each period'
                          ? 'uil uil-times-circle text-danger'
                          : 'uil uil-check-circle text-primary',
                      ]"
                      class="align-middle"
                    ></i>
                  </span>
                  {{ feature }}
                </li>
              </ul>

              <div class="mt-4">
                <div class="d-grid">
                  <a href="javascript:void(0)" class="btn btn-primary"
                    >Buy Now</a
                  >
                </div>
                <p class="text-muted mt-3 mb-0">*No credit card required</p>
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
    name: "Free for our Patients",
    price: "0",

    features: [
      "Proof of insurance is required for each period",
      "Videoconsultation",
      "e-Prescriptions",
      "e-Sick notes",
    ],
  },
  {
    name: "Issuing documents and prescriptions",
    price: 40,

    features: [
      "No Proof of insurance is required",
      "e-Prescriptions",
      "e-Sick notes",
    ],
  },
  {
    name: "Consultation with a Physician",
    price: 60,

    features: [
      "No Proof of insurance is required",
      "Videoconsultation",
      "e-Prescriptions",
      "e-Sick notes",
    ],
  },
]);
</script>
