<template>
  <div class="row align-items-center">
    <div class="col-lg-6 col-md-5 mainker mt-100">
      <img src="/img/efficientker.png" alt="" />
    </div>
    <!--end col-->

    <div class="col-lg-6 col-md-7">
      <div class="section-title">
        <h1 class="title mb-3">Cost efficiency</h1>
        <p class="para-desc text-muted">
          <Description
            text="Save yourself from overpriced treatments abroad and, most importantly, from wasting your valuable time"
          />
        </p>
        <digital-list />
        <div class="mt-4">
          <a href="javascript:void(0)" class="btn btn-primary">Pricelist</a>
        </div>
      </div>
    </div>
    <!--end col-->
  </div>
  <!--end row-->

  <div class="container mt-100">
    <div class="row align-items-center">
      <div class="col-md-5 order-1 order-md-2">
        <img src="../assets/images/digitalker.png" class="img-fluid" alt="" />
      </div>
      <!--end col-->

      <div class="col-md-7 mt-4 pt-2 mt-sm-0 pt-sm-0 order-2 order-md-1">
        <div class="section-title">
          <h1 class="title mb-3">
            Collaborate with your <br />
            team anytime, anywhere.
          </h1>
          <p class="para-desc text-muted">
            <description />
          </p>
          <digital-list />
          <div class="mt-4">
            <a href="javascript:void(0)" class="btn btn-primary">Pricelist</a>
          </div>
        </div>
      </div>
      <!--end col-->
    </div>
    <!--end row-->
  </div>
  <!--end container-->
</template>

<script setup></script>

<style lang="scss" scoped>
.mainker {
  img {
    max-width: 100%;
    height: auto;
  }
}
</style>
