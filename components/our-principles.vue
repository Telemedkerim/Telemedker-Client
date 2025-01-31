<template>
  <div class="container mt-5">
    <div class="row justify-content-center">
      <div class="col-12">
        <div class="section-title text-center mb-4 pb-2">
          <h6 class="text-primary">{{ $t("principlesWhatWeDo") }}</h6>
          <h4 class="title mb-4">{{ $t("principlesTitle") }}</h4>
          <p class="text-muted para-desc mx-auto mb-0">
            <Description :text="$t('principlesDescription')" />
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
                <h5>{{ $t(item.nameKey) }}</h5>
                <p class="text-muted mb-0">{{ $t(item.descKey) }}</p>
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
    nameKey: "principlePatientRecord",
    descKey: "principlePatientRecordDesc",
  },
  {
    icon: "/icons/reportskericon.png",
    nameKey: "principleSickNotes",
    descKey: "principleSickNotesDesc",
  },
  {
    icon: "/icons/medicinekericon.png",
    nameKey: "principlePrescriptions",
    descKey: "principlePrescriptionsDesc",
  },
  {
    icon: "/icons/doctorkericon.png",
    nameKey: "principleMultilingualDoctors",
    descKey: "principleMultilingualDoctorsDesc",
  },
]);

onMounted(() => {
  feather.replace();
});
</script>

<style lang="scss" scoped></style>
