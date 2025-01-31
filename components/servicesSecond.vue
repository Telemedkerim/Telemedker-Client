<template>
  <div class="row justify-content-center">
    <div class="col-12">
      <div class="section-title text-center mb-4 pb-2">
        <h6 class="text-primary">{{ $t("servicesTitle") }}</h6>
        <h4 class="title mb-4">{{ $t("servicesHeading") }}</h4>
        <p class="text-muted para-desc mx-auto mb-0">
          <Description :text="$t('servicesDesc')" />
        </p>
      </div>
    </div>
    <!--end col-->
  </div>
  <!--end row-->

  <div class="row justify-content-center">
    <div v-for="item in datas" :key="item" class="col-lg-4 col-md-6 mt-4 pt-2">
      <div
        class="card features feature-primary rounded p-4 text-center border-0"
      >
        <div class="icon text-center mx-auto">
          <img
            :src="item.icon"
            alt="icon"
            class="h-16 w-16"
            style="object-fit: contain"
          />
        </div>
        <div class="card-body p-0 mt-4">
          <h5>{{ $t(item.nameKey) }}</h5>
          <p class="text-muted mb-0">{{ $t(item.descKey) }}</p>
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
    nameKey: "bulgariaClinics",
    descKey: "bulgariaClinicsDesc",
  },
  {
    icon: "/img/de.svg",
    nameKey: "germanyClinics",
    descKey: "germanyClinicsDesc",
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
