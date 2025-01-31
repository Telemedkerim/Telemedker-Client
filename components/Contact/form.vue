<template>
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-lg-8">
        <div class="features-absolute bg-white p-4 p-md-5 rounded shadow">
          <div class="custom-form">
            <form>
              <p id="error-msg"></p>
              <div id="simple-msg"></div>
              <div class="row">
                <div class="col-md-6">
                  <div class="mb-3">
                    <label class="form-label">
                      {{ $t("contactName") }} <span class="text-danger">*</span>
                    </label>
                    <input
                      name="name"
                      id="name"
                      type="text"
                      class="form-control"
                      :placeholder="$t('contactNamePlaceholder')"
                    />
                  </div>
                </div>

                <div class="col-md-6">
                  <div class="mb-3">
                    <label class="form-label">
                      {{ $t("contactEmail") }}
                      <span class="text-danger">*</span>
                    </label>
                    <input
                      name="email"
                      id="email"
                      type="email"
                      class="form-control"
                      :placeholder="$t('contactEmailPlaceholder')"
                    />
                  </div>
                </div>
                <!--end col-->

                <div class="col-12">
                  <div class="mb-3">
                    <label class="form-label">{{ $t("contactSubject") }}</label>
                    <input
                      name="subject"
                      id="subject"
                      class="form-control"
                      :placeholder="$t('contactSubjectPlaceholder')"
                    />
                  </div>
                </div>
                <!--end col-->

                <div class="col-12">
                  <div class="mb-3">
                    <label class="form-label">
                      {{ $t("contactMessage") }}
                      <span class="text-danger">*</span>
                    </label>
                    <textarea
                      name="comments"
                      id="comments"
                      rows="4"
                      class="form-control"
                      :placeholder="$t('contactMessagePlaceholder')"
                    ></textarea>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-12">
                  <div class="d-grid">
                    <button
                      type="submit"
                      id="submit"
                      name="send"
                      class="btn btn-primary"
                    >
                      {{ $t("contactSend") }}
                    </button>
                  </div>
                </div>
                <!--end col-->
              </div>
              <!--end row-->
            </form>
          </div>
          <!--end custom-form-->
        </div>
      </div>
      <!--end col-->
    </div>
    <!--end row-->
  </div>
  <!--end container-->
</template>

<script setup></script>

<style lang="scss" scoped></style>
