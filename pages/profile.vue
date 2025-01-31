<template>
  <div>
    <section class="mt-5 pt-5">
      <div class="container">
        <div
          class="bg-profile w-100 d-table rounded-md shadow"
          :style="{
            'background-image': 'url(' + image + ')',
            backgroundPosition: 'center center',
          }"
        >
          <div class="bg-overlay bg-soft-primary rounded-md"></div>
        </div>
        <!--end div-->
      </div>
      <!--end container-->

      <div class="container">
        <div class="row justify-content-center">
          <div class="col-12">
            <div class="text-center avatar-profile">
              <img
                src="../assets/images/client/01.jpg"
                class="rounded-circle shadow-md avatar avatar-medium"
                alt=""
              />
              <h4 class="mt-3">Calvin Carlo</h4>
              <ul class="list-unstyled mb-0">
                <li class="list-inline-item text-muted me-3">
                  <i class="uil uil-airplay text-dark h5"></i> Web Developer
                </li>
                <li class="list-inline-item text-muted">
                  <i class="uil uil-map-marker text-dark h5"></i> Sydney,
                  Australia
                </li>
              </ul>
            </div>
          </div>
          <!--end col-->
        </div>
        <!--end row-->
      </div>
      <!--end container-->
    </section>

    <!-- end section-->
    <ProfileDetail />
  </div>
</template>

<script setup>
import image from "../../assets/images/bg/bg-profile.jpg";
</script>

<style lang="scss" scoped></style>
