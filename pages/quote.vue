<template>
  <div>
    <navbar :logo-light="true" :button-light="true" nav-light="nav-light" />
    <section
      class="bg-half-170 d-table w-100"
      :style="{ 'background-image': 'url(/img/quote-bg.jpg)' }"
    >
      <div class="bg-overlay"></div>
      <div class="container">
        <div class="row mt-5 justify-content-center">
          <div class="col-12">
            <div class="heading-title text-center">
              <h2 class="text-white title title-dark mb-3">Get a Quote</h2>
              <p class="para-desc mx-auto text-white-50">
                <Description
                  text="Get an instant quote for your move across Europe. Fill out the form below with your moving details and we'll help you plan your perfect relocation."
                />
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <Shape />

    <section class="section">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-9">
            <div class="card custom-form rounded shadow border-0">
              <div class="card-body">
                <form class="row g-3">
                  <div class="col-12">
                    <h5 class="mb-4">Moving Details</h5>
                  </div>

                  <div class="col-md-6">
                    <label class="form-label">
                      Collection Country
                      <span class="text-danger">*</span>
                    </label>
                    <input type="text" class="form-control" required />
                  </div>

                  <div class="col-md-6">
                    <label class="form-label">
                      Collection City
                      <span class="text-danger">*</span>
                    </label>
                    <input type="text" class="form-control" required />
                  </div>

                  <div class="col-md-6">
                    <label class="form-label">
                      Delivery Country
                      <span class="text-danger">*</span>
                    </label>
                    <input type="text" class="form-control" required />
                  </div>

                  <div class="col-md-6">
                    <label class="form-label">
                      Delivery City
                      <span class="text-danger">*</span>
                    </label>
                    <input type="text" class="form-control" required />
                  </div>

                  <div class="col-md-6">
                    <label class="form-label">Collection Date</label>
                    <input type="date" class="form-control" />
                  </div>

                  <div class="col-md-6">
                    <label class="form-label">Delivery Date</label>
                    <input type="date" class="form-control" />
                  </div>

                  <div class="col-md-6">
                    <h6 class="mb-3">Extra Services on Collection</h6>
                    <div class="form-check mb-2">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        id="external-lift-collection"
                      />
                      <label class="form-check-label" for="external-lift-collection">
                        External Lift
                      </label>
                    </div>
                    <div class="form-check mb-2">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        id="extra-helpers-collection"
                      />
                      <label class="form-check-label" for="extra-helpers-collection">
                        Extra Helpers
                      </label>
                    </div>
                    <div class="form-check mb-2">
                      <input class="form-check-input" type="checkbox" id="packing" />
                      <label class="form-check-label" for="packing">Packing</label>
                    </div>
                    <div class="form-check mb-2">
                      <input class="form-check-input" type="checkbox" id="tail-lift-collection" />
                      <label class="form-check-label" for="tail-lift-collection">
                        Tail Lift (Reduces payload)
                      </label>
                    </div>
                    <div class="form-check mb-2">
                      <input class="form-check-input" type="checkbox" id="hold-van-collection" />
                      <label class="form-check-label" for="hold-van-collection">
                        Hold the Van 1 day
                      </label>
                    </div>
                  </div>

                  <div class="col-md-6">
                    <h6 class="mb-3">Extra Services on Delivery</h6>
                    <div class="form-check mb-2">
                      <input class="form-check-input" type="checkbox" id="external-lift-delivery" />
                      <label class="form-check-label" for="external-lift-delivery">
                        External Lift
                      </label>
                    </div>
                    <div class="form-check mb-2">
                      <input class="form-check-input" type="checkbox" id="extra-helpers-delivery" />
                      <label class="form-check-label" for="extra-helpers-delivery">
                        Extra Helpers
                      </label>
                    </div>
                    <div class="form-check mb-2">
                      <input class="form-check-input" type="checkbox" id="unpacking" />
                      <label class="form-check-label" for="unpacking">Unpacking</label>
                    </div>
                    <div class="form-check mb-2">
                      <input class="form-check-input" type="checkbox" id="tail-lift-delivery" />
                      <label class="form-check-label" for="tail-lift-delivery">
                        Tail Lift (Reduces payload)
                      </label>
                    </div>
                    <div class="form-check mb-2">
                      <input class="form-check-input" type="checkbox" id="hold-van-delivery" />
                      <label class="form-check-label" for="hold-van-delivery">
                        Hold the Van 1 day
                      </label>
                    </div>
                  </div>

                  <div class="col-12">
                    <label class="form-label">Notes</label>
                    <textarea
                      class="form-control"
                      rows="4"
                      placeholder="Here you can type additional information about your move...."
                    ></textarea>
                  </div>

                  <div class="col-12">
                    <h5 class="mb-4 mt-4">Personal Information</h5>
                  </div>

                  <div class="col-md-6">
                    <label class="form-label">
                      First Name
                      <span class="text-danger">*</span>
                    </label>
                    <input type="text" class="form-control" required />
                  </div>

                  <div class="col-md-6">
                    <label class="form-label">
                      Last Name
                      <span class="text-danger">*</span>
                    </label>
                    <input type="text" class="form-control" required />
                  </div>

                  <div class="col-md-6">
                    <label class="form-label">
                      Phone
                      <span class="text-danger">*</span>
                    </label>
                    <input type="tel" class="form-control" required />
                  </div>

                  <div class="col-md-6">
                    <label class="form-label">
                      Email
                      <span class="text-danger">*</span>
                    </label>
                    <input type="email" class="form-control" required />
                  </div>

                  <div class="col-12">
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
                        <span class="text-danger">*</span>
                      </label>
                    </div>
                  </div>

                  <div class="col-12">
                    <button type="submit" class="btn btn-primary">Get Quote</button>
                  </div>
                </form>
              </div>
            </div>

            <div class="row justify-content-center mt-5">
              <div class="col-12 text-center">
                <h4>Need Assistance?</h4>
                <p class="text-muted mb-4">
                  Our moving experts are here to help you with any questions
                </p>
                <NuxtLink to="/contact" class="btn btn-outline-primary">Contact Us</NuxtLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <backtotop />
  </div>
</template>

<script setup>
  import { NuxtLink } from '#components';
  import backtotop from '@/components/back-to-top.vue';
  import navbar from '@/components/navbar/navbar.vue';
  import Shape from '@/components/Shape/index.vue';
</script>

<style lang="scss" scoped>
  .custom-form {
    .form-check {
      margin-bottom: 0.5rem;
    }
  }
</style>
