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
                      Your Name
                      <span class="text-danger">*</span>
                    </label>
                    <input
                      name="name"
                      id="name"
                      type="text"
                      class="form-control"
                      placeholder="Name"
                      required
                    />
                  </div>
                </div>

                <div class="col-md-6">
                  <div class="mb-3">
                    <label class="form-label">
                      Your Email
                      <span class="text-danger">*</span>
                    </label>
                    <input
                      name="email"
                      id="email"
                      type="email"
                      class="form-control"
                      placeholder="Email"
                      required
                    />
                  </div>
                </div>

                <div class="col-md-12">
                  <div class="mb-3">
                    <label class="form-label">
                      Your Phone
                      <span class="text-danger">*</span>
                    </label>
                    <input
                      name="phone"
                      id="phone"
                      type="tel"
                      class="form-control"
                      placeholder="Phone"
                      required
                    />
                  </div>
                </div>

                <div class="col-12">
                  <div class="mb-3">
                    <label class="form-label">
                      Message
                      <span class="text-danger">*</span>
                    </label>
                    <textarea
                      name="message"
                      id="message"
                      rows="4"
                      class="form-control"
                      placeholder="Message"
                      required
                    ></textarea>
                  </div>
                </div>

                <div class="col-12">
                  <div class="mb-3">
                    <div class="form-check">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        id="privacy-policy"
                        required
                      />
                      <label class="form-check-label" for="privacy-policy">
                        I have read and accept the
                        <NuxtLink to="/privacy-policy" class="text-primary">
                          Privacy Policy
                        </NuxtLink>
                      </label>
                    </div>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-12">
                  <div class="d-grid">
                    <button type="submit" id="submit" name="send" class="btn btn-primary">
                      Send Message
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
  import { NuxtLink } from '#components';
</script>

<style lang="scss" scoped></style>
