<template>
  <div class="container mt-5">
    <div class="row justify-content-center">
      <div class="col-12">
        <div class="section-title text-center mb-4 pb-2">
          <h6 class="text-primary">What we do ?</h6>
          <h4 class="title mb-4">First-class telemedicine care</h4>
          <p class="text-muted para-desc mx-auto mb-0">
            <Description
              text="Licensed specialists with certifications and practices in the countries where we operate, capable of addressing all your healthcare needs via video consultation."
            />
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
            <div
              class="d-flex features feature-primary core-feature rounded p-4"
            >
              <div class="icon text-center rounded-circle me-3 mt-2">
                <img
                  :src="item.icon"
                  alt="icon"
                  class="mb-0"
                  style="width: 24px; height: 24px"
                />
              </div>
              <div class="flex-1">
                <h5>{{ item.name }}</h5>
                <p class="text-muted mb-0">{{ item.desc }}</p>
              </div>
            </div>
          </div>
          <!--end col-->
        </div>
        <!--end row-->
      </div>
      <!--end col-->

      <!--end col-->
    </div>
    <!--end row-->
  </div>
  <!--end container-->
</template>

<script setup>
import { ref, onMounted } from "vue";
import feather from "feather-icons";

const datas = ref([
  {
    icon: "/icons/patientkericon.png",
    name: "Patient record",
    desc: "In your profile, you can view and download all your doctor-documented conditions, prescriptions, and certificates.",
  },
  {
    icon: "/icons/reportskericon.png",
    name: "Sick notes",
    desc: "Electronic submission of sick notes to the necessary health organizations.",
  },
  {
    icon: "/icons/medicinekericon.png",
    name: "Prescriptions",
    desc: "The prescriptions are electronic and can be directly redeemed at any pharmacy. You only need to identify yourself at the pharmacy.",
  },
  {
    icon: "/icons/doctorkericon.png",
    name: "Multilingual doctors",
    desc: "Our doctors speak English, German, Turkish, Bulgarian, and Serbo-Croatian.",
  },
]);

onMounted(() => {
  feather.replace();
});
</script>

<style lang="scss" scoped></style>
