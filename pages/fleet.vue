<template>
  <div>
    <navbar :logo-light="true" :button-light="true" nav-light="nav-light" />
    <section
      class="bg-half-170 d-table w-100"
      :style="{ 'background-image': 'url(/img/fleet.jpg)' }"
    >
      <div class="bg-overlay"></div>
      <div class="container">
        <div class="row mt-5 justify-content-center">
          <div class="col-12">
            <div class="heading-title text-center">
              <h2 class="text-white title title-dark mb-3">Our Fleet</h2>
              <p class="para-desc mx-auto text-white-50">
                <Description
                  text="Discover our modern and well-maintained fleet of removal vehicles. Our versatile trucks are equipped to handle all your moving needs with care and efficiency."
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
          <!-- Mercedes Sprinter -->
          <div class="col-lg-6 col-md-6 mt-4 pt-2">
            <div class="card blog blog-primary rounded border-0 shadow vehicle-card">
              <div class="position-relative card-image-container">
                <img
                  src="/img/mercedes.jpg"
                  class="card-img-top rounded-top"
                  alt="Mercedes Sprinter"
                />
              </div>
              <div class="card-body content">
                <h5 class="card-title title text-dark mb-4">Mercedes Sprinter</h5>
                <div class="post-meta">
                  <ul class="list-unstyled mb-0">
                    <li class="mb-3">
                      <i class="uil uil-check-circle text-success h5 me-2"></i>
                      Dimensions: 420 x 210 x 230 cm (L/W/H)
                    </li>
                    <li class="mb-3">
                      <i class="uil uil-check-circle text-success h5 me-2"></i>
                      Curtain side design
                    </li>
                    <li class="mb-3">
                      <i class="uil uil-check-circle text-success h5 me-2"></i>
                      Side and back loading access
                    </li>
                    <li class="mb-3">
                      <i class="uil uil-check-circle text-success h5 me-2"></i>
                      1000kg loading capacity
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <!-- Renault Master -->
          <div class="col-lg-6 col-md-6 mt-4 pt-2">
            <div class="card blog blog-primary rounded border-0 shadow vehicle-card">
              <div class="position-relative card-image-container">
                <img
                  src="/img/renault.jpeg"
                  class="card-img-top rounded-top"
                  alt="Renault Master"
                />
              </div>
              <div class="card-body content">
                <h5 class="card-title title text-dark mb-4">Renault Master</h5>
                <div class="post-meta">
                  <ul class="list-unstyled mb-0">
                    <li class="mb-3">
                      <i class="uil uil-check-circle text-success h5 me-2"></i>
                      Dimensions: 480 x 210 x 230 cm (L/W/H)
                    </li>
                    <li class="mb-3">
                      <i class="uil uil-check-circle text-success h5 me-2"></i>
                      Curtain side design
                    </li>
                    <li class="mb-3">
                      <i class="uil uil-check-circle text-success h5 me-2"></i>
                      Side and back loading access
                    </li>
                    <li class="mb-3">
                      <i class="uil uil-check-circle text-success h5 me-2"></i>
                      1000kg loading capacity
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="row justify-content-center mt-5">
          <div class="col-12 text-center">
            <div class="section-title">
              <h4 class="title mb-4">Why Choose Our Fleet?</h4>
              <p class="text-muted para-desc mx-auto">
                Our modern fleet is regularly maintained and equipped with all necessary tools for
                safe and efficient moves. Whether you're moving a small apartment or a large office,
                our vehicles are designed to handle your belongings with care.
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
  .card {
    transition: all 0.3s ease;
    &:hover {
      transform: translateY(-5px);
    }
  }

  .vehicle-card {
    height: 100%;
    min-height: 700px;

    .card-image-container {
      height: 400px;
      overflow: hidden;

      img {
        width: 100%;
        height: 100%;
        object-fit: contain;
        padding: 10px;
      }
    }

    .card-body {
      padding: 2rem;
    }

    .card-title {
      font-size: 1.5rem;
    }

    li {
      font-size: 1.1rem;
      display: flex;
      align-items: center;

      i {
        margin-right: 10px;
      }
    }
  }
</style>
