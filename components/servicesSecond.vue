<template>
  <div class="row justify-content-center">
    <div class="col-12">
      <div class="section-title text-center mb-4 pb-2">
        <h6 class="text-primary">Our Services</h6>
        <h4 class="title mb-4">
          In every country where we operate, we also have physical clinics where
          you can receive examinations and treatment
        </h4>
        <p class="text-muted para-desc mx-auto mb-0">
          <Description
            text="We are working on expanding the countries where we operate, with Turkey and Greece coming soon"
          />
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
          <h5>{{ item.name }}</h5>
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
    name: "Bulgaria",
    desc: "Physical clinic- Clinic Dr. Kerim in Plovdiv,Antonovo and Omurtag",
  },
  {
    icon: "/img/de.svg",
    name: "Germany",
    desc: "Physical clinic - Praxis Dr. Kerim in Offenbach am Main",
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
