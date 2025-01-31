<template>
  <div class="row justify-content-center mt-100">
    <div class="col-12">
      <div class="section-title text-center mb-1 pb-2">
        <h4 class="title mb-4">{{ $t("languagesTitle") }}</h4>
        <p class="text-muted para-desc mx-auto mb-0"></p>
      </div>
    </div>
    <!--end col-->
  </div>
  <!--end row-->

  <div class="row justify-content-center">
    <div v-for="item in datas" :key="item" class="col-lg-2 col-4 mt-4 pt-2">
      <div
        class="card features feature-primary rounded p-4 text-center border-0"
      >
        <div class="icon text-center mx-auto">
          <img
            :src="item.icon"
            :alt="$t(item.nameKey)"
            class="h-16 w-16"
            style="object-fit: contain"
          />
        </div>
        <div class="card-body p-0 mt-4">
          <h5>{{ $t(item.nameKey) }}</h5>
          <p class="text-muted mb-0">{{ item.desc }}</p>
          <!-- <div class="mt-2">
              <a href="javascript:void(0)" class="link"
                >Read More <i data-feather="arrow-right" class="fea icon-sm"></i
              ></a>
            </div> -->
        </div>
      </div>
    </div>
    <!--end col-->
  </div>
  <!--end row-->
</template>

<script setup>
import { ref, onMounted, defineProps } from "vue";
import feather from "feather-icons";

defineProps({
  services: {
    type: Boolean,
    required: true,
  },
});

const datas = ref([
  {
    icon: "/img/bg.svg",
    nameKey: "languageBulgarian",
  },
  {
    icon: "/img/de.svg",
    nameKey: "languageGerman",
  },
  {
    icon: "/img/gb.svg",
    nameKey: "languageEnglish",
  },
  {
    icon: "/img/tr.svg",
    nameKey: "languageTurkish",
  },
  {
    icon: "/img/sr.svg",
    nameKey: "languageSerbian",
  },
]);

onMounted(() => {
  feather.replace();
});
</script>

<style lang="scss" scoped>
.icon {
  display: flex;
  justify-content: center;
  align-items: center;
  background: transparent !important;
}

.features {
  display: flex;
  flex-direction: column;
  align-items: center;
}

img {
  background: transparent;
  width: 64px;
  height: 64px;

  @media (max-width: 768px) {
    width: 32px;
    height: 32px;
  }
}
</style>
