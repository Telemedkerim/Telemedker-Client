<template>
  <!-- Navbar STart -->
  <header id="topnav" class="defaultscroll sticky">
    <div class="container">
      <!-- Logo container-->
      <div v-if="logoLight">
        <NuxtLink class="logo" to="/">
          <span class="logo-light-mode">
            <img src="~/assets/images/logo-dark.png" class="l-dark" alt="" />
            <img src="~/assets/images/logo-light.png" class="l-light" alt="" />
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
          <img
            src="~/assets/images/logo-dark.png"
            class="logo-light-mode"
            alt=""
          />
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
        <a href="javascript:void(0)" class="btn btn-primary">Buy Now</a>
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
        <ul class="navigation-menu nav-left" :class="navLight">
          <li :class="activeIndex === '/' ? 'active' : ''">
            <NuxtLink to="/" class="sub-menu-item">Home</NuxtLink>
          </li>
          <li
            class="has-submenu parent-parent-menu-item"
            :class="
              [
                '/landing',
                '/index-app',
                '/index-saas',
                '/index-software',
                '/index-career',
                '/index-crypto',
                '/index-startup',
                '/index-business',
                '/index-seo-agency',
                '/index-freelancer',
                '/index-broker',
                '/index-developer',
                '/index-studio',
                '/index-hosting',
                '/index-service',
              ].includes(activeIndex)
                ? 'active'
                : ''
            "
          >
            <NuxtLink
              @click="submenu(openMenu === '/landing' ? '' : '/landing')"
              to="#"
              >Landing</NuxtLink
            ><span class="menu-arrow"></span>
            <ul
              class="submenu"
              :class="['/landing'].includes(openMenu) ? 'open' : ''"
            >
              <li :class="activeIndex === '/index-app' ? 'active' : ''">
                <NuxtLink to="/index-app" class="sub-menu-item">Apps </NuxtLink>
              </li>
              <li :class="activeIndex === '/index-saas' ? 'active' : ''">
                <NuxtLink to="/index-saas" class="sub-menu-item"
                  >Saas
                </NuxtLink>
              </li>
              <li :class="activeIndex === '/index-software' ? 'active' : ''">
                <NuxtLink to="/index-software" class="sub-menu-item">
                  Software</NuxtLink
                >
              </li>
              <li :class="activeIndex === '/index-career' ? 'active' : ''">
                <NuxtLink to="/index-career" class="sub-menu-item">
                  Career</NuxtLink
                >
              </li>
              <li :class="activeIndex === '/index-crypto' ? 'active' : ''">
                <NuxtLink to="/index-crypto" class="sub-menu-item">
                  Crypto</NuxtLink
                >
              </li>
              <li :class="activeIndex === '/index-startup' ? 'active' : ''">
                <NuxtLink to="/index-startup" class="sub-menu-item">
                  Startup</NuxtLink
                >
              </li>
              <li :class="activeIndex === '/index-business' ? 'active' : ''">
                <NuxtLink to="/index-business" class="sub-menu-item">
                  Business</NuxtLink
                >
              </li>
              <li :class="activeIndex === '/index-seo-agency' ? 'active' : ''">
                <NuxtLink to="/index-seo-agency" class="sub-menu-item">
                  SEO Agency</NuxtLink
                >
              </li>
              <li :class="activeIndex === '/index-freelancer' ? 'active' : ''">
                <NuxtLink to="/index-freelancer" class="sub-menu-item">
                  Freelancer</NuxtLink
                >
              </li>
              <li :class="activeIndex === '/index-broker' ? 'active' : ''">
                <NuxtLink to="/index-broker" class="sub-menu-item">
                  Broker</NuxtLink
                >
              </li>
              <li :class="activeIndex === '/index-developer' ? 'active' : ''">
                <NuxtLink to="/index-developer" class="sub-menu-item">
                  Developer</NuxtLink
                >
              </li>
              <li :class="activeIndex === '/index-studio' ? 'active' : ''">
                <NuxtLink to="/index-studio" class="sub-menu-item">
                  Studio</NuxtLink
                >
              </li>
              <li :class="activeIndex === '/index-hosting' ? 'active' : ''">
                <NuxtLink to="/index-hosting" class="sub-menu-item">
                  Hosting & Domain</NuxtLink
                >
              </li>
              <li :class="activeIndex === '/index-service' ? 'active' : ''">
                <NuxtLink to="/index-service" class="sub-menu-item">
                  Service</NuxtLink
                >
              </li>
            </ul>
          </li>

          <li
            class="has-submenu parent-parent-menu-item"
            :class="
              [
                '/pages',
                '/page-about',
                '/page-services',
                '/page-team',
                '/page-pricing',
                '/page-faqs',
                '/profile',
                '/profile-setting',
                '/profile-payment',
                '/billing-invoice',
                '/career-detail',
                '/career-apply',
                '/blogs',
                '/blog-detail',
                '/page-terms',
                '/page-privacy',
                '/page-comingsoon',
                '/page-maintenance',
                '/page-error',
                '/login',
                '/signup',
                '/forgot-password',
                '/thankyou',
                '/contact',
              ].includes(activeIndex)
                ? 'active'
                : ''
            "
          >
            <NuxtLink
              to="#"
              @click="submenu(openMenu === '/pages' ? '' : '/pages')"
            >
              Pages</NuxtLink
            ><span class="menu-arrow"></span>
            <ul
              class="submenu"
              :class="
                [
                  '/pages',
                  '/profiles',
                  '/career',
                  '/blog',
                  '/utility',
                  '/special',
                  '/authentication',
                ].includes(openMenu)
                  ? 'open'
                  : ''
              "
            >
              <li :class="activeIndex === '/page-about' ? 'active' : ''">
                <NuxtLink to="/page-about" class="sub-menu-item">
                  About Us</NuxtLink
                >
              </li>
              <li :class="activeIndex === '/page-services' ? 'active' : ''">
                <NuxtLink to="/page-services" class="sub-menu-item">
                  Services</NuxtLink
                >
              </li>
              <li :class="activeIndex === '/page-team' ? 'active' : ''">
                <NuxtLink to="/page-team" class="sub-menu-item"> Team</NuxtLink>
              </li>
              <li :class="activeIndex === '/page-pricing' ? 'active' : ''">
                <NuxtLink to="/page-pricing" class="sub-menu-item">
                  Pricing</NuxtLink
                >
              </li>
              <li :class="activeIndex === '/page-faqs' ? 'active' : ''">
                <NuxtLink to="/page-faqs" class="sub-menu-item">FAQs </NuxtLink>
              </li>

              <li
                class="has-submenu parent-menu-item"
                :class="
                  [
                    '/profiles',
                    '/profile',
                    '/profile-setting',
                    '/profile-payment',
                    '/billing-invoice',
                  ].includes(activeIndex)
                    ? 'active'
                    : ''
                "
              >
                <NuxtLink
                  to="#"
                  @click="submenu(openMenu === '/profiles' ? '' : '/profiles')"
                >
                  Profile </NuxtLink
                ><span class="submenu-arrow"></span>
                <ul
                  class="submenu"
                  :class="['/profiles'].includes(openMenu) ? 'open' : ''"
                >
                  <li :class="activeIndex === '/profile' ? 'active' : ''">
                    <NuxtLink to="/profile" class="sub-menu-item"
                      >Profile
                    </NuxtLink>
                  </li>
                  <li
                    :class="activeIndex === '/profile-setting' ? 'active' : ''"
                  >
                    <NuxtLink to="/profile-setting" class="sub-menu-item"
                      >Setting
                    </NuxtLink>
                  </li>
                  <li
                    :class="activeIndex === '/profile-payment' ? 'active' : ''"
                  >
                    <NuxtLink to="/profile-payment" class="sub-menu-item"
                      >Payment
                    </NuxtLink>
                  </li>
                  <li
                    :class="activeIndex === '/billing-invoice' ? 'active' : ''"
                  >
                    <NuxtLink to="/billing-invoice" class="sub-menu-item"
                      >Invoice
                    </NuxtLink>
                  </li>
                </ul>
              </li>

              <li
                class="has-submenu parent-menu-item"
                :class="
                  ['/career', '/career-detail', '/career-apply'].includes(
                    activeIndex
                  )
                    ? 'active'
                    : ''
                "
              >
                <NuxtLink
                  to="#"
                  @click="submenu(openMenu === '/career' ? '' : '/career')"
                >
                  Career </NuxtLink
                ><span class="submenu-arrow"></span>
                <ul
                  class="submenu"
                  :class="
                    ['/career', '/career-detail', '/career-apply'].includes(
                      openMenu
                    )
                      ? 'open'
                      : ''
                  "
                >
                  <li :class="activeIndex === '/career-detail' ? 'active' : ''">
                    <NuxtLink to="/career-detail" class="sub-menu-item"
                      >Career Detail</NuxtLink
                    >
                  </li>
                  <li :class="activeIndex === '/career-apply' ? 'active' : ''">
                    <NuxtLink to="/career-apply" class="sub-menu-item"
                      >Career Apply</NuxtLink
                    >
                  </li>
                </ul>
              </li>

              <li
                class="has-submenu parent-menu-item"
                :class="
                  ['/blog', '/blogs', '/blog-detail'].includes(activeIndex)
                    ? 'active'
                    : ''
                "
              >
                <NuxtLink
                  to="#"
                  @click="submenu(openMenu === '/blog' ? '' : '/blog')"
                >
                  Blog </NuxtLink
                ><span class="submenu-arrow"></span>
                <ul
                  class="submenu"
                  :class="['/blog'].includes(openMenu) ? 'open' : ''"
                >
                  <li :class="activeIndex === '/blogs' ? 'active' : ''">
                    <NuxtLink to="/blogs" class="sub-menu-item"
                      >Blogs & News</NuxtLink
                    >
                  </li>
                  <li :class="activeIndex === '/blog-detail' ? 'active' : ''">
                    <NuxtLink to="/blog-detail" class="sub-menu-item"
                      >Blog Detail</NuxtLink
                    >
                  </li>
                </ul>
              </li>

              <li
                class="has-submenu parent-menu-item"
                :class="
                  ['/utility', '/page-terms', '/page-privacy'].includes(
                    activeIndex
                  )
                    ? 'active'
                    : ''
                "
              >
                <NuxtLink
                  to="#"
                  @click="submenu(openMenu === '/utility' ? '' : '/utility')"
                >
                  Utility </NuxtLink
                ><span class="submenu-arrow"></span>
                <ul
                  class="submenu"
                  :class="['/utility'].includes(openMenu) ? 'open' : ''"
                >
                  <li :class="activeIndex === '/page-terms' ? 'active' : ''">
                    <NuxtLink to="/page-terms" class="sub-menu-item"
                      >Terms of Services</NuxtLink
                    >
                  </li>
                  <li :class="activeIndex === '/page-privacy' ? 'active' : ''">
                    <NuxtLink to="/page-privacy" class="sub-menu-item"
                      >Privacy Policy</NuxtLink
                    >
                  </li>
                </ul>
              </li>

              <li
                class="has-submenu parent-menu-item"
                :class="
                  [
                    '/special',
                    '/page-comingsoon',
                    '/page-maintenance',
                    '/page-error',
                  ].includes(activeIndex)
                    ? 'active'
                    : ''
                "
              >
                <NuxtLink
                  to="#"
                  @click="submenu(openMenu === '/special' ? '' : '/special')"
                >
                  Special </NuxtLink
                ><span class="submenu-arrow"></span>
                <ul
                  class="submenu"
                  :class="['/special'].includes(openMenu) ? 'open' : ''"
                >
                  <li
                    :class="activeIndex === '/page-comingsoon' ? 'active' : ''"
                  >
                    <NuxtLink to="/page-comingsoon" class="sub-menu-item"
                      >Coming Soon</NuxtLink
                    >
                  </li>
                  <li
                    :class="activeIndex === '/page-maintenance' ? 'active' : ''"
                  >
                    <NuxtLink to="/page-maintenance" class="sub-menu-item">
                      Maintenance</NuxtLink
                    >
                  </li>
                  <li :class="activeIndex === '/page-error' ? 'active' : ''">
                    <NuxtLink to="/page-error" class="sub-menu-item"
                      >Error
                    </NuxtLink>
                  </li>
                </ul>
              </li>

              <li
                class="has-submenu parent-menu-item"
                :class="
                  [
                    '/authentication',
                    '/login',
                    '/signup',
                    '/forgot-password',
                    '/thankyou',
                  ].includes(activeIndex)
                    ? 'active'
                    : ''
                "
              >
                <NuxtLink
                  to="#"
                  @click="
                    submenu(
                      openMenu === '/authentication' ? '' : '/authentication'
                    )
                  "
                >
                  Authentication </NuxtLink
                ><span class="submenu-arrow"></span>
                <ul
                  class="submenu"
                  :class="['/authentication'].includes(openMenu) ? 'open' : ''"
                >
                  <li :class="activeIndex === '/login' ? 'active' : ''">
                    <NuxtLink to="/login" class="sub-menu-item"
                      >Login
                    </NuxtLink>
                  </li>
                  <li :class="activeIndex === '/signup' ? 'active' : ''">
                    <NuxtLink to="/signup" class="sub-menu-item"
                      >signup
                    </NuxtLink>
                  </li>
                  <li
                    :class="activeIndex === '/forgot-password' ? 'active' : ''"
                  >
                    <NuxtLink to="/forgot-password" class="sub-menu-item"
                      >Forgot Password</NuxtLink
                    >
                  </li>
                  <li :class="activeIndex === '/thankyou' ? 'active' : ''">
                    <NuxtLink to="/thankyou" class="sub-menu-item"
                      >Thank you</NuxtLink
                    >
                  </li>
                </ul>
              </li>
              <li :class="activeIndex === '/contact' ? 'active' : ''">
                <NuxtLink to="/contact" class="sub-menu-item"
                  >Contact
                </NuxtLink>
              </li>
            </ul>
          </li>

          <li
            class="has-submenu parent-parent-menu-item"
            :class="
              [
                '/classic',
                '/work-classic-two',
                '/work-classic-three',
                '/work-classic-four',
                '/work-classic-five',
                '/work-classic-six',
                '/work-grid-two',
                '/work-grid-three',
                '/work-grid-four',
                '/work-grid-five',
                '/work-grid-six',
                '/work-modern-two',
                '/work-modern-three',
                '/work-modern-four',
                '/work-modern-five',
                '/work-modern-six',
                '/work-masonry-two',
                '/work-masonry-three',
                '/work-masonry-four',
                '/work-masonry-five',
                '/work-masonry-six',
                '/work-detail',
              ].includes(activeIndex)
                ? 'active'
                : ''
            "
          >
            <NuxtLink
              to="#"
              @click="submenu(openMenu === '/classic' ? '' : '/classic')"
            >
              Portfolio</NuxtLink
            ><span class="menu-arrow"></span>
            <ul
              class="submenu megamenu"
              :class="['/classic'].includes(openMenu) ? 'open' : ''"
            >
              <li>
                <ul>
                  <li class="megamenu-head">Classic Portfolio</li>
                  <li
                    :class="activeIndex === '/work-classic-two' ? 'active' : ''"
                  >
                    <NuxtLink to="/work-classic-two" class="sub-menu-item"
                      >Two Column</NuxtLink
                    >
                  </li>
                  <li
                    :class="
                      activeIndex === '/work-classic-three' ? 'active' : ''
                    "
                  >
                    <NuxtLink to="/work-classic-three" class="sub-menu-item"
                      >Three Column</NuxtLink
                    >
                  </li>
                  <li
                    :class="
                      activeIndex === '/work-classic-four' ? 'active' : ''
                    "
                  >
                    <NuxtLink to="/work-classic-four" class="sub-menu-item"
                      >Four Column</NuxtLink
                    >
                  </li>
                  <li
                    :class="
                      activeIndex === '/work-classic-five' ? 'active' : ''
                    "
                  >
                    <NuxtLink to="/work-classic-five" class="sub-menu-item"
                      >Five Column</NuxtLink
                    >
                  </li>
                  <li
                    :class="activeIndex === '/work-classic-six' ? 'active' : ''"
                  >
                    <NuxtLink to="/work-classic-six" class="sub-menu-item"
                      >Six Column</NuxtLink
                    >
                  </li>
                </ul>
              </li>

              <li>
                <ul>
                  <li class="megamenu-head">Grid Portfolio</li>
                  <li :class="activeIndex === '/work-grid-two' ? 'active' : ''">
                    <NuxtLink to="/work-grid-two" class="sub-menu-item"
                      >Two Column</NuxtLink
                    >
                  </li>
                  <li
                    :class="activeIndex === '/work-grid-three' ? 'active' : ''"
                  >
                    <NuxtLink to="/work-grid-three" class="sub-menu-item"
                      >Three Column</NuxtLink
                    >
                  </li>
                  <li
                    :class="activeIndex === '/work-grid-four' ? 'active' : ''"
                  >
                    <NuxtLink to="/work-grid-four" class="sub-menu-item"
                      >Four Column</NuxtLink
                    >
                  </li>
                  <li
                    :class="activeIndex === '/work-grid-five' ? 'active' : ''"
                  >
                    <NuxtLink to="/work-grid-five" class="sub-menu-item"
                      >Five Column</NuxtLink
                    >
                  </li>
                  <li :class="activeIndex === '/work-grid-six' ? 'active' : ''">
                    <NuxtLink to="/work-grid-six" class="sub-menu-item"
                      >Six Column</NuxtLink
                    >
                  </li>
                </ul>
              </li>

              <li>
                <ul>
                  <li class="megamenu-head">Modern Portfolio</li>
                  <li
                    :class="activeIndex === '/work-modern-two' ? 'active' : ''"
                  >
                    <NuxtLink to="/work-modern-two" class="sub-menu-item"
                      >Two Column</NuxtLink
                    >
                  </li>
                  <li
                    :class="
                      activeIndex === '/work-modern-three' ? 'active' : ''
                    "
                  >
                    <NuxtLink to="/work-modern-three" class="sub-menu-item"
                      >Three Column</NuxtLink
                    >
                  </li>
                  <li
                    :class="activeIndex === '/work-modern-four' ? 'active' : ''"
                  >
                    <NuxtLink to="/work-modern-four" class="sub-menu-item"
                      >Four Column</NuxtLink
                    >
                  </li>
                  <li
                    :class="activeIndex === '/work-modern-five' ? 'active' : ''"
                  >
                    <NuxtLink to="/work-modern-five" class="sub-menu-item"
                      >Five Column</NuxtLink
                    >
                  </li>
                  <li
                    :class="activeIndex === '/work-modern-six' ? 'active' : ''"
                  >
                    <NuxtLink to="/work-modern-six" class="sub-menu-item"
                      >Six Column</NuxtLink
                    >
                  </li>
                </ul>
              </li>

              <li>
                <ul>
                  <li class="megamenu-head">Masonry Portfolio</li>
                  <li
                    :class="activeIndex === '/work-masonry-two' ? 'active' : ''"
                  >
                    <NuxtLink to="/work-masonry-two" class="sub-menu-item"
                      >Two Column</NuxtLink
                    >
                  </li>
                  <li
                    :class="
                      activeIndex === '/work-masonry-three' ? 'active' : ''
                    "
                  >
                    <NuxtLink to="/work-masonry-three" class="sub-menu-item"
                      >Three Column</NuxtLink
                    >
                  </li>
                  <li
                    :class="
                      activeIndex === '/work-masonry-four' ? 'active' : ''
                    "
                  >
                    <NuxtLink to="/work-masonry-four" class="sub-menu-item"
                      >Four Column</NuxtLink
                    >
                  </li>
                  <li
                    :class="
                      activeIndex === '/work-masonry-five' ? 'active' : ''
                    "
                  >
                    <NuxtLink to="/work-masonry-five" class="sub-menu-item"
                      >Five Column</NuxtLink
                    >
                  </li>
                  <li
                    :class="activeIndex === '/work-masonry-six' ? 'active' : ''"
                  >
                    <NuxtLink to="/work-masonry-six" class="sub-menu-item"
                      >Six Column</NuxtLink
                    >
                  </li>
                </ul>
              </li>

              <li>
                <ul>
                  <li class="megamenu-head">Portfolio Detail</li>
                  <li :class="activeIndex === '/work-detail' ? 'active' : ''">
                    <NuxtLink to="/work-detail" class="sub-menu-item"
                      >Work Detail</NuxtLink
                    >
                  </li>
                </ul>
              </li>
            </ul>
          </li>
          <li :class="activeIndex === '/components' ? 'active' : ''">
            <NuxtLink to="/components" class="sub-menu-item"
              >Components</NuxtLink
            >
          </li>
        </ul>
        <!--end navigation menu-->
        <div class="buy-menu-btn d-none">
          <a href="javascript:void(0)" class="btn btn-primary">Buy Now</a>
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
const menu = ref("");
const openMenu = ref("");
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

const submenu = (item) => {
  menu.value = !menu.value;
  openMenu.value = item;
};

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

<style lang="scss" scoped></style>
