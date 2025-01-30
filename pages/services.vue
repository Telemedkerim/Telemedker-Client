<template>
  <div>
    <navbar :logo-light="true" :button-light="true" nav-light="nav-light" />
    <section
      class="bg-half-170 d-table w-100"
      :style="{ 'background-image': 'url(/img/services.jpg)' }"
    >
      <div class="bg-overlay"></div>
      <div class="container">
        <div class="row mt-5 justify-content-center">
          <div class="col-12">
            <div class="heading-title text-center">
              <h2 class="text-white title title-dark mb-3">Our Services</h2>
              <p class="para-desc mx-auto text-white-50">
                <Description
                  text="Comprehensive moving solutions tailored to your needs. From dedicated moves to professional packing services, we ensure a seamless relocation experience across Europe."
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
        <div class="row">
          <!-- Dedicated Move -->
          <div class="col-lg-6 col-md-6 mt-4 pt-2">
            <div class="card blog blog-primary rounded border-0 shadow service-card">
              <div class="card-body content">
                <div class="service-icon mb-4">
                  <i class="uil uil-truck text-orange h2"></i>
                </div>
                <h5 class="card-title title text-dark mb-3">Dedicated Move</h5>
                <p class="text-muted">
                  Experience premium door-to-door delivery service with our dedicated moves. Perfect
                  for loads above 15 cubic meters, this service offers maximum flexibility with your
                  choice of collection date. Your belongings travel exclusively, ensuring focused
                  attention and direct delivery to your destination.
                </p>
                <ul class="list-unstyled mb-0 mt-4">
                  <li class="mb-3">
                    <i class="uil uil-check-circle text-success h5 me-2"></i>
                    Exclusive vehicle use
                  </li>
                  <li class="mb-3">
                    <i class="uil uil-check-circle text-success h5 me-2"></i>
                    Flexible collection dates
                  </li>
                  <li class="mb-3">
                    <i class="uil uil-check-circle text-success h5 me-2"></i>
                    Direct delivery service
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <!-- Part Load Move -->
          <div class="col-lg-6 col-md-6 mt-4 pt-2">
            <div class="card blog blog-primary rounded border-0 shadow service-card">
              <div class="card-body content">
                <div class="service-icon mb-4">
                  <i class="uil uil-share-alt text-orange h2"></i>
                </div>
                <h5 class="card-title title text-dark mb-3">Part Load Move</h5>
                <p class="text-muted">
                  Smart and cost-effective solution for loads up to 15 cubic meters. Share vehicle
                  space with other customers to significantly reduce your moving costs while
                  maintaining the same high-quality service standards. Perfect for budget-conscious
                  moves without compromising on quality.
                </p>
                <ul class="list-unstyled mb-0 mt-4">
                  <li class="mb-3">
                    <i class="uil uil-check-circle text-success h5 me-2"></i>
                    Cost-effective solution
                  </li>
                  <li class="mb-3">
                    <i class="uil uil-check-circle text-success h5 me-2"></i>
                    Ideal for smaller loads
                  </li>
                  <li class="mb-3">
                    <i class="uil uil-check-circle text-success h5 me-2"></i>
                    Shared transport savings
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <!-- Professional Helpers -->
          <div class="col-lg-6 col-md-6 mt-4 pt-2">
            <div class="card blog blog-primary rounded border-0 shadow service-card">
              <div class="card-body content">
                <div class="service-icon mb-4">
                  <i class="uil uil-users-alt text-orange h2"></i>
                </div>
                <h5 class="card-title title text-dark mb-3">Professional Helpers</h5>
                <p class="text-muted">
                  Our experienced team is ready to assist with loading and unloading your
                  belongings. We provide strong, reliable, and professional helpers who understand
                  the importance of handling your items with care. Let us do the heavy lifting while
                  you focus on settling into your new space.
                </p>
                <ul class="list-unstyled mb-0 mt-4">
                  <li class="mb-3">
                    <i class="uil uil-check-circle text-success h5 me-2"></i>
                    Experienced moving crew
                  </li>
                  <li class="mb-3">
                    <i class="uil uil-check-circle text-success h5 me-2"></i>
                    Loading/unloading assistance
                  </li>
                  <li class="mb-3">
                    <i class="uil uil-check-circle text-success h5 me-2"></i>
                    Professional handling
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <!-- Dismantling Service -->
          <div class="col-lg-6 col-md-6 mt-4 pt-2">
            <div class="card blog blog-primary rounded border-0 shadow service-card">
              <div class="card-body content">
                <div class="service-icon mb-4">
                  <i class="uil uil-wrench text-orange h2"></i>
                </div>
                <h5 class="card-title title text-dark mb-3">Dismantling Service</h5>
                <p class="text-muted">
                  Save time and avoid stress with our professional furniture dismantling service.
                  Our skilled team efficiently disassembles your furniture, ensuring all parts are
                  properly labeled and packed for safe transport. We take care of the technical
                  details so you don't have to.
                </p>
                <ul class="list-unstyled mb-0 mt-4">
                  <li class="mb-3">
                    <i class="uil uil-check-circle text-success h5 me-2"></i>
                    Professional disassembly
                  </li>
                  <li class="mb-3">
                    <i class="uil uil-check-circle text-success h5 me-2"></i>
                    Organized part labeling
                  </li>
                  <li class="mb-3">
                    <i class="uil uil-check-circle text-success h5 me-2"></i>
                    Safe part storage
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <!-- House Removals -->
          <div class="col-lg-6 col-md-6 mt-4 pt-2">
            <div class="card blog blog-primary rounded border-0 shadow service-card">
              <div class="card-body content">
                <div class="service-icon mb-4">
                  <i class="uil uil-home text-orange h2"></i>
                </div>
                <h5 class="card-title title text-dark mb-3">House Removals</h5>
                <p class="text-muted">
                  Make your house move seamless with our comprehensive residential removal service.
                  From planning to execution, we handle every aspect of your home relocation with
                  precision and care. Our experienced team ensures your belongings arrive safely at
                  your new home.
                </p>
                <ul class="list-unstyled mb-0 mt-4">
                  <li class="mb-3">
                    <i class="uil uil-check-circle text-success h5 me-2"></i>
                    Complete moving solution
                  </li>
                  <li class="mb-3">
                    <i class="uil uil-check-circle text-success h5 me-2"></i>
                    Careful handling
                  </li>
                  <li class="mb-3">
                    <i class="uil uil-check-circle text-success h5 me-2"></i>
                    Professional coordination
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <!-- Office Removals -->
          <div class="col-lg-6 col-md-6 mt-4 pt-2">
            <div class="card blog blog-primary rounded border-0 shadow service-card">
              <div class="card-body content">
                <div class="service-icon mb-4">
                  <i class="uil uil-building text-orange h2"></i>
                </div>
                <h5 class="card-title title text-dark mb-3">Office Removals</h5>
                <p class="text-muted">
                  Specialized in commercial relocations, our office removal service minimizes
                  business disruption while ensuring a smooth transition to your new workspace. We
                  understand the importance of maintaining business continuity and handle your
                  office equipment with expert care.
                </p>
                <ul class="list-unstyled mb-0 mt-4">
                  <li class="mb-3">
                    <i class="uil uil-check-circle text-success h5 me-2"></i>
                    Minimal business disruption
                  </li>
                  <li class="mb-3">
                    <i class="uil uil-check-circle text-success h5 me-2"></i>
                    IT equipment handling
                  </li>
                  <li class="mb-3">
                    <i class="uil uil-check-circle text-success h5 me-2"></i>
                    Weekend moves available
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <!-- Packing Services -->
          <div class="col-lg-6 col-md-6 mt-4 pt-2">
            <div class="card blog blog-primary rounded border-0 shadow service-card">
              <div class="card-body content">
                <div class="service-icon mb-4">
                  <i class="uil uil-box text-orange h2"></i>
                </div>
                <h5 class="card-title title text-dark mb-3">Packing Services</h5>
                <p class="text-muted">
                  Our professional packing service ensures maximum protection for your belongings
                  during transit. Using high-quality materials and proven techniques, our expert
                  packers carefully prepare your items for safe transport, giving you peace of mind
                  throughout the moving process.
                </p>
                <ul class="list-unstyled mb-0 mt-4">
                  <li class="mb-3">
                    <i class="uil uil-check-circle text-success h5 me-2"></i>
                    Professional materials
                  </li>
                  <li class="mb-3">
                    <i class="uil uil-check-circle text-success h5 me-2"></i>
                    Expert packing techniques
                  </li>
                  <li class="mb-3">
                    <i class="uil uil-check-circle text-success h5 me-2"></i>
                    Fragile item protection
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <!-- Storage Solutions -->
          <div class="col-lg-6 col-md-6 mt-4 pt-2">
            <div class="card blog blog-primary rounded border-0 shadow service-card">
              <div class="card-body content">
                <div class="service-icon mb-4">
                  <i class="uil uil-store text-orange h2"></i>
                </div>
                <h5 class="card-title title text-dark mb-3">Storage Solutions</h5>
                <p class="text-muted">
                  Secure and flexible storage solutions for your short-term or long-term needs. Our
                  modern storage facilities provide a safe environment for your belongings, with
                  flexible access options and competitive rates. Perfect for those requiring
                  temporary storage during transitions.
                </p>
                <ul class="list-unstyled mb-0 mt-4">
                  <li class="mb-3">
                    <i class="uil uil-check-circle text-success h5 me-2"></i>
                    Secure facilities
                  </li>
                  <li class="mb-3">
                    <i class="uil uil-check-circle text-success h5 me-2"></i>
                    Flexible duration
                  </li>
                  <li class="mb-3">
                    <i class="uil uil-check-circle text-success h5 me-2"></i>
                    Easy access options
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div class="row justify-content-center mt-5">
          <div class="col-12 text-center">
            <div class="section-title">
              <h4 class="title mb-4">Ready to Start Your Move?</h4>
              <p class="text-muted para-desc mx-auto">
                Contact us today to discuss your moving needs and receive a personalized quote. Our
                team is ready to help make your relocation experience smooth and stress-free.
              </p>
              <div class="mt-4">
                <NuxtLink to="/quote" class="btn btn-primary mb-2">Get a quote</NuxtLink>
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
  .service-card {
    height: 100%;
    transition: all 0.3s ease;

    &:hover {
      transform: translateY(-5px);
    }

    .service-icon {
      width: 45px;
      height: 45px;
      line-height: 45px;
      text-align: center;
    }

    .card-body {
      padding: 2rem;
    }

    .card-title {
      font-size: 1.25rem;
    }

    li {
      font-size: 1rem;
      display: flex;
      align-items: center;

      i {
        margin-right: 10px;
      }
    }
  }

  .text-orange {
    color: #ff9800 !important;
  }
</style>
