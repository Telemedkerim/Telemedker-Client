<template>
  <!-- Start -->
  <footer class="bg-footer" :class="footerbar">
    <div class="container">
      <div class="row">
        <div class="col-lg-3 col-md-6 mb-0 mb-md-4 pb-0 pb-md-2">
          <a href="#" class="logo-footer">
            <img src="../../assets/images/logo-light.png" height="48" alt="" />
          </a>
          <p class="mt-4 text-foot">
            Professional removal services across Europe. Making your move stress-free and efficient.
          </p>
          <ul class="list-unstyled social-icon social mb-0 mt-4">
            <li class="list-inline-item">
              <a href="#" target="_blank" class="rounded">
                <i class="uil uil-facebook-f align-middle" title="facebook"></i>
              </a>
            </li>
          </ul>
        </div>

        <div class="col-lg-3 col-md-6">
          <h5 class="footer-head">Contact Info</h5>
          <ul class="list-unstyled footer-list mt-4">
            <li>
              <i class="uil uil-phone-alt fea icon-sm me-2"></i>
              <a href="tel:+447310881360" class="text-foot">+447310881360</a>
            </li>
            <li class="mt-2">
              <i class="uil uil-envelope fea icon-sm me-2"></i>
              <a href="mailto:office@space4timeltd.eu" class="text-foot">office@space4timeltd.eu</a>
            </li>
            <li class="mt-2">
              <i class="uil uil-map-marker fea icon-sm me-2"></i>
              <span class="text-foot">str. Pirin 10, Omurtag, 7900, Bulgaria</span>
            </li>
          </ul>
        </div>

        <div class="col-lg-3 col-md-6">
          <h5 class="footer-head">Our Services</h5>
          <ul class="list-unstyled footer-list mt-4">
            <li>
              <a href="/services" class="text-foot">
                <i class="mdi mdi-chevron-right me-1"></i>
                Services
              </a>
            </li>
            <li>
              <a href="/fleet" class="text-foot">
                <i class="mdi mdi-chevron-right me-1"></i>
                Our Fleet
              </a>
            </li>
            <li>
              <a href="/packing" class="text-foot">
                <i class="mdi mdi-chevron-right me-1"></i>
                Packing
              </a>
            </li>
            <li>
              <a href="/gallery" class="text-foot">
                <i class="mdi mdi-chevron-right me-1"></i>
                Gallery
              </a>
            </li>
          </ul>
        </div>

        <div class="col-lg-3 col-md-6">
          <h5 class="footer-head">Company</h5>
          <ul class="list-unstyled footer-list mt-4">
            <li>
              <a href="/" class="text-foot">
                <i class="mdi mdi-chevron-right me-1"></i>
                Home
              </a>
            </li>
            <li>
              <a href="/about" class="text-foot">
                <i class="mdi mdi-chevron-right me-1"></i>
                About Us
              </a>
            </li>
            <li>
              <a href="/contact" class="text-foot">
                <i class="mdi mdi-chevron-right me-1"></i>
                Contact
              </a>
            </li>
            <li>
              <a href="/faq" class="text-foot">
                <i class="mdi mdi-chevron-right me-1"></i>
                FAQ
              </a>
            </li>
            <li>
              <a href="/privacy-policy" class="text-foot">
                <i class="mdi mdi-chevron-right me-1"></i>
                Privacy Policy
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <div class="container mt-5">
      <div class="pt-4 footer-bar">
        <div class="row justify-content-center">
          <div class="col-12 text-center">
            <p class="mb-0">© {{ date }} Space 4 Time LTD. All rights reserved.</p>
          </div>
        </div>
      </div>
    </div>
  </footer>
  <!--end footer-->
  <!-- End -->
</template>

<script setup>
  import { ref } from 'vue';

  defineProps({
    footerbar: {
      type: String,
      required: true,
    },
  });

  const date = ref(new Date().getFullYear());
</script>

<style lang="scss" scoped>
  .footer-list {
    li {
      margin-bottom: 10px;

      a {
        transition: all 0.5s ease;
        &:hover {
          margin-left: 5px;
        }
      }
    }
  }

  .social-icon {
    li {
      a {
        color: #adb5bd;
        border: 1px solid #adb5bd;
        display: inline-block;
        height: 32px;
        width: 32px;
        line-height: 30px;
        text-align: center;
        transition: all 0.4s ease;
        overflow: hidden;
        position: relative;

        &:hover {
          background-color: #2f55d4;
          border-color: #2f55d4 !important;
          color: #ffffff !important;
        }
      }
    }
  }
</style>
