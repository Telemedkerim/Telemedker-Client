<template>
  <div>
    <navbar :logo-light="true" :button-light="true" nav-light="nav-light" />
    <section class="bg-half-170 d-table w-100" :style="{ 'background-image': 'url(/img/faq.jpg)' }">
      <div class="bg-overlay"></div>
      <div class="container">
        <div class="row mt-5 justify-content-center">
          <div class="col-12">
            <div class="heading-title text-center">
              <h2 class="text-white title title-dark mb-3">Frequently Asked Questions</h2>
              <p class="para-desc mx-auto text-white-50">
                <Description
                  text="Find answers to common questions about our removal services, pricing, and processes. If you can't find what you're looking for, our team is here to help."
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
        <!-- Quotes and Pricing -->
        <div class="row justify-content-center">
          <div class="col-12">
            <div class="section-title mb-4 pb-2 text-center">
              <h4 class="title mb-4">Quotes and Pricing</h4>
            </div>
            <div class="accordion" id="quotePricing">
              <div class="accordion-item rounded shadow mt-2">
                <h2 class="accordion-header">
                  <button
                    class="accordion-button border-0 bg-light"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseOne"
                  >
                    What does your quote include?
                  </button>
                </h2>
                <div
                  id="collapseOne"
                  class="accordion-collapse border-0 collapse show"
                  data-bs-parent="#quotePricing"
                >
                  <div class="accordion-body text-muted">
                    Our comprehensive quote includes:
                    <ul class="list-unstyled mt-3">
                      <li class="mb-2">
                        <i class="uil uil-check-circle text-success me-2"></i>
                        Driver assistance with loading/unloading to specified floor
                      </li>
                      <li class="mb-2">
                        <i class="uil uil-check-circle text-success me-2"></i>
                        Complete customs clearance service
                      </li>
                      <li class="mb-2">
                        <i class="uil uil-check-circle text-success me-2"></i>
                        Ferry crossings and transport
                      </li>
                      <li class="mb-2">
                        <i class="uil uil-check-circle text-success me-2"></i>
                        All applicable VAT charges
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div class="accordion-item rounded shadow mt-2">
                <h2 class="accordion-header">
                  <button
                    class="accordion-button border-0 bg-light collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseTwo"
                  >
                    Is the packing service included in the quote?
                  </button>
                </h2>
                <div
                  id="collapseTwo"
                  class="accordion-collapse border-0 collapse"
                  data-bs-parent="#quotePricing"
                >
                  <div class="accordion-body text-muted">
                    <p>
                      Packing services are available as an additional service. We offer flexible
                      options from packing individual items to full house packing. To provide an
                      accurate quote for packing services, we require:
                    </p>
                    <ul class="list-unstyled mt-3">
                      <li class="mb-2">
                        <i class="uil uil-check-circle text-success me-2"></i>
                        Detailed inventory list
                      </li>
                      <li class="mb-2">
                        <i class="uil uil-check-circle text-success me-2"></i>
                        Photos of items requiring packing
                      </li>
                      <li class="mb-2">
                        <i class="uil uil-check-circle text-success me-2"></i>
                        Videos of larger items or collections
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div class="accordion-item rounded shadow mt-2">
                <h2 class="accordion-header">
                  <button
                    class="accordion-button border-0 bg-light collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseThree"
                  >
                    What's your payment policy?
                  </button>
                </h2>
                <div
                  id="collapseThree"
                  class="accordion-collapse border-0 collapse"
                  data-bs-parent="#quotePricing"
                >
                  <div class="accordion-body text-muted">
                    Our payment structure is designed to be clear and convenient:
                    <ul class="list-unstyled mt-3">
                      <li class="mb-2">
                        <i class="uil uil-check-circle text-success me-2"></i>
                        First installment: Due 7 days before collection date
                      </li>
                      <li class="mb-2">
                        <i class="uil uil-check-circle text-success me-2"></i>
                        Second installment: Due upon delivery at the destination
                      </li>
                      <li class="mb-2">
                        <i class="uil uil-check-circle text-success me-2"></i>
                        Multiple payment methods accepted
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Moving Process -->
        <div class="row justify-content-center mt-5">
          <div class="col-12">
            <div class="section-title mb-4 pb-2 text-center">
              <h4 class="title mb-4">Moving Process</h4>
            </div>
            <div class="accordion" id="movingProcess">
              <div class="accordion-item rounded shadow mt-2">
                <h2 class="accordion-header">
                  <button
                    class="accordion-button border-0 bg-light"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseFour"
                  >
                    Do I need to assist with the loading/unloading?
                  </button>
                </h2>
                <div
                  id="collapseFour"
                  class="accordion-collapse border-0 collapse show"
                  data-bs-parent="#movingProcess"
                >
                  <div class="accordion-body text-muted">
                    <p>
                      Our standard service includes one driver who assists with loading and
                      unloading. You have two options:
                    </p>
                    <ul class="list-unstyled mt-3">
                      <li class="mb-2">
                        <i class="uil uil-check-circle text-success me-2"></i>
                        Arrange someone to help our driver (customer responsibility)
                      </li>
                      <li class="mb-2">
                        <i class="uil uil-check-circle text-success me-2"></i>
                        Book additional professional help for an extra charge
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div class="accordion-item rounded shadow mt-2">
                <h2 class="accordion-header">
                  <button
                    class="accordion-button border-0 bg-light collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseFive"
                  >
                    Is the date of the move flexible?
                  </button>
                </h2>
                <div
                  id="collapseFive"
                  class="accordion-collapse border-0 collapse"
                  data-bs-parent="#movingProcess"
                >
                  <div class="accordion-body text-muted">
                    <p>Yes, we offer flexible scheduling to accommodate your needs:</p>
                    <ul class="list-unstyled mt-3">
                      <li class="mb-2">
                        <i class="uil uil-check-circle text-success me-2"></i>
                        Last-minute moves available
                      </li>
                      <li class="mb-2">
                        <i class="uil uil-check-circle text-success me-2"></i>
                        Flexible collection dates
                      </li>
                      <li class="mb-2">
                        <i class="uil uil-check-circle text-success me-2"></i>
                        Weekend and holiday service available
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div class="accordion-item rounded shadow mt-2">
                <h2 class="accordion-header">
                  <button
                    class="accordion-button border-0 bg-light collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseSix"
                  >
                    How can I secure a booking with your company?
                  </button>
                </h2>
                <div
                  id="collapseSix"
                  class="accordion-collapse border-0 collapse"
                  data-bs-parent="#movingProcess"
                >
                  <div class="accordion-body text-muted">
                    <p>Securing your booking is simple:</p>
                    <ul class="list-unstyled mt-3">
                      <li class="mb-2">
                        <i class="uil uil-check-circle text-success me-2"></i>
                        Pay a £50/€50 fully refundable deposit
                      </li>
                      <li class="mb-2">
                        <i class="uil uil-check-circle text-success me-2"></i>
                        Sign the moving contract
                      </li>
                      <li class="mb-2">
                        <i class="uil uil-check-circle text-success me-2"></i>
                        We begin preparing customs documentation
                      </li>
                      <li class="mb-2">
                        <i class="uil uil-check-circle text-success me-2"></i>
                        Deposit is fully refundable for any cancellation reason
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Customs and Documentation -->
        <div class="row justify-content-center mt-5">
          <div class="col-12">
            <div class="section-title mb-4 pb-2 text-center">
              <h4 class="title mb-4">Customs and Documentation</h4>
            </div>
            <div class="accordion" id="customs">
              <div class="accordion-item rounded shadow mt-2">
                <h2 class="accordion-header">
                  <button
                    class="accordion-button border-0 bg-light"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseSeven"
                  >
                    Do you handle customs documentation?
                  </button>
                </h2>
                <div
                  id="collapseSeven"
                  class="accordion-collapse border-0 collapse show"
                  data-bs-parent="#customs"
                >
                  <div class="accordion-body text-muted">
                    <p>Yes, we provide comprehensive customs support:</p>
                    <ul class="list-unstyled mt-3">
                      <li class="mb-2">
                        <i class="uil uil-check-circle text-success me-2"></i>
                        Complete document preparation assistance
                      </li>
                      <li class="mb-2">
                        <i class="uil uil-check-circle text-success me-2"></i>
                        Detailed checklist of required documents
                      </li>
                      <li class="mb-2">
                        <i class="uil uil-check-circle text-success me-2"></i>
                        Expert guidance throughout the process
                      </li>
                      <li class="mb-2">
                        <i class="uil uil-check-circle text-success me-2"></i>
                        Post-Brexit requirements handled
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Contact Section -->
        <div class="row justify-content-center mt-5">
          <div class="col-12 text-center">
            <div class="section-title">
              <h4 class="title mb-4">Still Have Questions?</h4>
              <p class="text-muted para-desc mx-auto">
                Can't find the answer you're looking for? Our team is here to help with any
                questions about our removal services.
              </p>
              <div class="mt-4">
                <NuxtLink to="/contact" class="btn btn-primary mb-2">Contact us</NuxtLink>
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
  import backtotop from '@/components/back-to-top.vue';
  import navbar from '@/components/navbar/navbar.vue';
</script>

<style lang="scss" scoped>
  .accordion-item {
    overflow: hidden;

    .accordion-button {
      font-weight: 600;
      color: #3c4858;

      &:not(.collapsed) {
        color: #2f55d4;
        background-color: #f8f9fa;
        box-shadow: none;
      }

      &::after {
        background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%23333'%3e%3cpath fill-rule='evenodd' d='M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z'/%3e%3c/svg%3e");
      }

      &:focus {
        border-color: transparent;
        box-shadow: none;
      }
    }

    .accordion-body {
      li {
        display: flex;
        align-items: center;
      }
    }
  }

  .section-title {
    .title {
      letter-spacing: 0.5px;
      font-size: 24px;
    }
  }
</style>
