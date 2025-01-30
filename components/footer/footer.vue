<template>
  <!-- Start -->
  <footer class="bg-footer" :class="footerbar">
    <!--end container-->

    <div class="container mt-5">
      <div class="pt-1">
        <div class="row align-items-center">
          <div class="col-sm-6">
            <div class="text-sm-start text-center">
              <ul class="list-unstyled social-icon social mb-0 mt-4 mt-sm-0">
                <li
                  v-for="item in social"
                  :key="item"
                  class="list-inline-item me-1"
                >
                  <a :href="item.link" target="_blank" class="rounded"
                    ><i :class="item.icon" title="dribbble"></i
                  ></a>
                </li>
              </ul>
              <!--end icon-->
            </div>
          </div>

          <div class="col-sm-6 mt-4 mt-sm-0">
            <ul class="list-unstyled footer-list text-sm-end text-center mb-0">
              <li v-for="item in datas.slice(14, 18)" class="list-inline-item">
                <a href="javascript:void(0)" class="text-foot me-2">{{
                  item
                }}</a>
              </li>
            </ul>
          </div>
        </div>

        <div class="row justify-content-center mt-4">
          <div class="col-12 text-center">
            <p class="mb-0">
              © {{ date }} Landflow. Design & Develop with
              <i class="mdi mdi-heart text-danger"></i> by
              <a
                href="https://shreethemes.in"
                target="_blank"
                class="text-reset"
                >Shreethemes</a
              >.
            </p>
          </div>
        </div>
      </div>
    </div>
  </footer>
  <!--end footer-->
  <!-- End -->
</template>

<script setup>
import { ref, onMounted, defineProps } from "vue";
import feather from "feather-icons";

defineProps({
  footerbar: {
    type: String,
    required: true,
  },
});

const date = ref(new Date().getFullYear());

const datas = ref([
  "About us",
  "Services",
  "Team",
  "Project",
  "Blog",
  "Login",
  "Release Notes",
  "Invoice",
  "Integrations",
  "APIs",
  "Support",
  "Docs",
  "Changelog",
  "Components",
  "Terms",
  "Privacy",
  "About",
  "Contact",
]);

const contacts = ref([
  { icon: "map-pin", href: "#", text: "Londan, England" },
  {
    icon: "mail",
    href: "mailto:test@yourdomain.com",
    text: "test@yourdomain.com",
  },
  { icon: "phone", href: "tel:+152534-468-854", text: "+ (125) 1254-5487" },
]);

const social = ref([
  {
    link: "https://dribbble.com/shreethemes",
    icon: "uil uil-dribbble align-middle",
  },
  {
    link: "https://www.behance.net/shreethemes",
    icon: "uil uil-behance",
  },
  {
    link: "http://linkedin.com/company/shreethemes",
    icon: "uil uil-linkedin",
  },
  {
    link: "https://www.facebook.com/shreethemes",
    icon: "uil uil-facebook-f align-middle",
  },
  {
    link: "https://www.instagram.com/shreethemes/",
    icon: "uil uil-instagram align-middle",
  },
  {
    link: "https://twitter.com/shreethemes",
    icon: "uil uil-twitter align-middle",
  },
  {
    link: "mailto:support@shreethemes.in",
    icon: "uil uil-envelope align-middle",
  },
  {
    link: "https://forms.gle/QkTueCikDGqJnbky9",
    icon: "uil uil-file align-middle",
  },
]);

onMounted(() => {
  feather.replace();
});
</script>

<style lang="scss" scoped></style>
