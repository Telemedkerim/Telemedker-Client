<template>
  <!-- Hero Start -->
  <section
    class="bg-home d-flex bg-light align-items-center"
    :style="{
      'background-image': 'url(' + image + ')',
      backgroundPosition: 'center',
    }"
  >
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-lg-5 col-md-8">
          <div class="card login-page bg-white shadow mt-4 rounded border-0">
            <div class="card-body">
              <h4 class="text-center">{{ $t("loginTitle") }}</h4>
              <form class="login-form mt-4">
                <div class="row">
                  <div class="col-lg-12">
                    <div class="mb-3 position-relative">
                      <label class="form-label">
                        {{ $t("loginEmail") }}
                        <span class="text-danger">*</span>
                      </label>
                      <input
                        type="email"
                        class="form-control"
                        :placeholder="$t('loginEmail')"
                        name="email"
                        required=""
                      />
                    </div>
                  </div>

                  <div class="col-lg-12">
                    <div class="mb-3 position-relative">
                      <label class="form-label">
                        {{ $t("loginPassword") }}
                        <span class="text-danger">*</span>
                      </label>
                      <input
                        type="password"
                        class="form-control"
                        :placeholder="$t('loginPassword')"
                        required=""
                      />
                    </div>
                  </div>

                  <div class="col-lg-12">
                    <div class="d-flex justify-content-between">
                      <div class="mb-3">
                        <div class="form-check">
                          <input
                            class="form-check-input"
                            type="checkbox"
                            value=""
                            id="flexCheckDefault"
                          />
                          <label
                            class="form-check-label"
                            for="flexCheckDefault"
                          >
                            {{ $t("loginRemember") }}
                          </label>
                        </div>
                      </div>
                      <p class="forgot-pass mb-0">
                        <NuxtLink
                          to="/forgot-password"
                          class="text-dark fw-bold"
                        >
                          {{ $t("loginForgot") }}
                        </NuxtLink>
                      </p>
                    </div>
                  </div>
                  <div class="col-lg-12 mb-0">
                    <div class="d-grid">
                      <button class="btn btn-primary">
                        {{ $t("loginButton") }}
                      </button>
                    </div>
                  </div>

                  <div class="col-12 text-center">
                    <p class="mb-0 mt-3">
                      <small class="text-dark me-2">{{
                        $t("loginNoAccount")
                      }}</small>
                      <NuxtLink to="/signup" class="text-dark fw-bold">
                        {{ $t("loginSignUp") }}
                      </NuxtLink>
                    </p>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
        <!--end col-->
      </div>
      <!--end row-->
    </div>
    <!--end container-->
  </section>
  <!--end section-->
  <!-- Hero End -->
</template>

<script setup>
import image from "../../assets/images/bg/bg-lines-one.png";
</script>

<style lang="scss" scoped></style>
