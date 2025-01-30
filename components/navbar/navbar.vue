<template>
  <!-- Navbar STart -->
  <header id="topnav" class="defaultscroll sticky">
    <div class="container">
      <!-- Logo container-->
      <div v-if="logoLight">
        <NuxtLink class="logo" to="/">
          <span class="logo-light-mode">
            <img src="/img/logo.png" class="l-dark" alt="" />
            <img src="/img/logo.png" class="l-light" alt="" />
          </span>
          <img
            src="~/assets/images/logo-light.png"
            class="logo-dark-mode"
            alt=""
          />
        </NuxtLink>
      </div>

      <div v-else>
        <NuxtLink class="logo" to="/">
          <img src="/img/logo.png" class="logo-light-mode" alt="" />
          <img
            src="~/assets/images/logo-light.png"
            class="logo-dark-mode"
            alt=""
          />
        </NuxtLink>
      </div>

      <div v-if="buttonLight" class="buy-button">
        <a href="javascript:void(0)">
          <div class="btn btn-primary login-btn-primary">Buy Now</div>
          <div class="btn btn-light login-btn-light">Buy Now</div>
        </a>
      </div>
      <!--end login button-->

      <div v-else class="buy-button">
        <a href="javascript:void(0)" class="btn btn-primary">Login</a>
      </div>
      <!--end login button-->

      <!-- End Logo container-->
      <div class="menu-extras" @click="handler">
        <div class="menu-item">
          <!-- Mobile menu toggle-->
          <a class="navbar-toggle" :class="toggle === false ? '' : 'open'">
            <div class="lines">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </a>
          <!-- End mobile menu toggle-->
        </div>
      </div>

      <div id="navigation" :class="toggle === false ? 'd-none' : 'd-block'">
        <!-- Navigation Menu-->
        <ul class="navigation-menu nav-left menu-right" :class="navLight">
          <li :class="activeIndex === '/' ? 'active' : ''">
            <NuxtLink to="/" class="sub-menu-item">Home</NuxtLink>
          </li>
          <!-- <li :class="activeIndex === '/page-about' ? 'active' : ''">
            <NuxtLink to="/page-about" class="sub-menu-item">About Us</NuxtLink>
          </li>
          <li :class="activeIndex === '/page-services' ? 'active' : ''">
            <NuxtLink to="/page-services" class="sub-menu-item"
              >Countries of Operation</NuxtLink
            >
          </li> -->
        </ul>

        <!--end navigation menu-->
        <div class="buy-menu-btn d-none">
          <a href="javascript:void(0)" class="btn btn-primary">Login</a>
        </div>
        <!-- end login button -->
      </div>
      <!--end navigation-->
    </div>
    <!--end container-->
  </header>
  <!--end header-->
  <!-- Navbar End -->
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted, defineProps } from "vue";
const route = useRoute();
const activeIndex = computed(() => route.path || "/");
const toggle = ref(false);

defineProps({
  logoLight: {
    type: Boolean,
    required: true,
  },
  buttonLight: {
    type: Boolean,
    required: true,
  },
  navLight: {
    type: String,
    required: true,
  },
});

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
  scrollToTop();
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});

const handler = () => {
  toggle.value = !toggle.value;
};

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

const handleScroll = () => {
  const navbar = document.getElementById("topnav");
  if (window.scrollY >= 50) {
    navbar.classList.add("nav-sticky");
  } else {
    navbar.classList.remove("nav-sticky");
  }
};
</script>

<style lang="scss" scoped>
.logo {
  img {
    height: 40px;
    width: auto;
    object-fit: contain;
  }
}

.menu-right {
  margin-left: 15rem;
}
</style>
