<template>
  <!-- Navbar STart -->
  <header id="topnav" class="defaultscroll sticky">
    <div class="container">
      <!-- Logo container-->
      <div v-if="logoLight">
        <NuxtLink class="logo" to="/">
          <span class="logo-light-mode">
            <img src="../../assets/images/logo-dark.png" class="l-dark custom-logo" alt="" />
            <img src="../../assets/images/logo-light.png" class="l-light custom-logo" alt="" />
          </span>
          <img src="../../assets/images/logo-light.png" class="logo-dark-mode custom-logo" alt="" />
        </NuxtLink>
      </div>

      <div v-else>
        <NuxtLink class="logo" to="/">
          <img src="../../assets/images/logo-dark.png" class="logo-light-mode custom-logo" alt="" />
          <img src="../../assets/images/logo-light.png" class="logo-dark-mode custom-logo" alt="" />
        </NuxtLink>
      </div>

      <div id="navigation" :class="toggle === false ? 'd-none' : 'd-block'">
        <!-- Navigation Menu-->
        <ul class="navigation-menu nav-left" :class="navLight">
          <li :class="activeIndex === '/' ? 'active' : ''">
            <NuxtLink to="/" class="sub-menu-item">Home</NuxtLink>
          </li>
          <li :class="activeIndex === '/about' ? 'active' : ''">
            <NuxtLink to="/about" class="sub-menu-item">About Us</NuxtLink>
          </li>
          <li :class="activeIndex === '/services' ? 'active' : ''">
            <NuxtLink to="/services" class="sub-menu-item">Services</NuxtLink>
          </li>
          <li :class="activeIndex === '/fleet' ? 'active' : ''">
            <NuxtLink to="/fleet" class="sub-menu-item">Our Fleet</NuxtLink>
          </li>
          <li :class="activeIndex === '/packing' ? 'active' : ''">
            <NuxtLink to="/packing" class="sub-menu-item">Packing</NuxtLink>
          </li>
          <li :class="activeIndex === '/contact' ? 'active' : ''">
            <NuxtLink to="/contact" class="sub-menu-item">Contact</NuxtLink>
          </li>
        </ul>
        <!--end navigation menu-->
      </div>

      <div class="buy-button">
        <NuxtLink to="/quote" class="btn btn-primary">Get a Quote</NuxtLink>
      </div>

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
    </div>
    <!--end container-->
  </header>
  <!--end header-->
  <!-- Navbar End -->
</template>

<script setup>
  import { ref, computed, onMounted, onUnmounted, defineProps } from 'vue';

  const activeIndex = computed(() => (import.meta.client ? window.location.pathname : '/'));
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
    window.addEventListener('scroll', handleScroll);
    scrollToTop();
  });

  onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll);
  });

  const handler = () => {
    toggle.value = !toggle.value;
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleScroll = () => {
    const navbar = document.getElementById('topnav');
    if (window.scrollY >= 50) {
      navbar.classList.add('nav-sticky');
    } else {
      navbar.classList.remove('nav-sticky');
    }
  };
</script>

<style lang="scss" scoped>
  .custom-logo {
    max-height: 50px;
    width: auto;
  }

  .navigation-menu > li {
    margin: 0 10px;
  }

  .navigation-menu > li > a {
    padding: 25px 0;
  }

  .container {
    display: flex;
    align-items: center;
  }

  #navigation {
    margin-left: auto;
  }

  .buy-button {
    margin-left: 20px;
  }

  @media (max-width: 991px) {
    .container {
      justify-content: space-between;
    }

    #navigation {
      margin-left: 0;
      position: absolute;
      top: 74px;
      left: 0;
      right: 0;
      background-color: var(--bs-body-bg);
      padding: 0;
      z-index: 1000;
    }

    .custom-logo {
      max-height: 40px;
    }

    .buy-button {
      margin-left: 0;
      .btn {
        padding: 8px 15px;
        font-size: 14px;
      }
    }

    .menu-extras {
      order: 3;
      margin-left: 10px;
    }
  }
</style>
