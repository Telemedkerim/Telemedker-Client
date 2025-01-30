<template>
  <div>
    <navbar :logo-light="true" :button-light="true" nav-light="nav-light" />
    <section
      class="bg-half-170 d-table w-100"
      :style="{ 'background-image': 'url(/img/packing.jpg)' }"
    >
      <div class="bg-overlay"></div>
      <div class="container">
        <div class="row mt-5 justify-content-center">
          <div class="col-12">
            <div class="heading-title text-center">
              <h2 class="text-white title title-dark mb-3">Professional Packing Services</h2>
              <p class="para-desc mx-auto text-white-50">
                <Description
                  text="We ensure the safe transport of your belongings with our professional packing service. Our expert team uses high-quality materials and proven techniques to protect your items throughout the entire moving process."
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
        <!-- Bubble Wrap Images -->
        <div class="row mb-5">
          <div class="col-12">
            <h4 class="title mb-4">Premium Bubble Wrap</h4>
          </div>
          <div class="col-md-4">
            <div class="card border-0 shadow rounded">
              <img src="/img/bubble1.jpeg" class="img-fluid rounded" alt="Bubble Wrap 1" />
            </div>
          </div>
          <div class="col-md-4">
            <div class="card border-0 shadow rounded">
              <img src="/img/buble2.jpeg" class="img-fluid rounded" alt="Bubble Wrap 2" />
            </div>
          </div>
          <div class="col-md-4">
            <div class="card border-0 shadow rounded">
              <img src="/img/bubble3.jpeg" class="img-fluid rounded" alt="Bubble Wrap 3" />
            </div>
          </div>
          <div class="col-12 mt-4">
            <div class="card p-4 rounded shadow">
              <ul class="list-unstyled mb-0">
                <li class="mb-3">
                  <i class="uil uil-check-circle text-success h5 me-2"></i>
                  50mm small bubble design for optimal protection
                </li>
                <li class="mb-3">
                  <i class="uil uil-check-circle text-success h5 me-2"></i>
                  100-meter rolls for comprehensive coverage
                </li>
                <li class="mb-3">
                  <i class="uil uil-check-circle text-success h5 me-2"></i>
                  Perfect for fragile items and electronics
                </li>
              </ul>
            </div>
          </div>
        </div>

        <!-- Cardboard Boxes Images -->
        <div class="row mb-5">
          <div class="col-12">
            <h4 class="title mb-4">Professional Moving Boxes</h4>
          </div>
          <div class="col-md-4">
            <div class="card border-0 shadow rounded">
              <img src="/img/cardboard1.jpeg" class="img-fluid rounded" alt="Cardboard Box 1" />
            </div>
          </div>
          <div class="col-md-4">
            <div class="card border-0 shadow rounded">
              <img src="/img/cardboard2.jpeg" class="img-fluid rounded" alt="Cardboard Box 2" />
            </div>
          </div>
          <div class="col-md-4">
            <div class="card border-0 shadow rounded">
              <img src="/img/cardboard3.jpeg" class="img-fluid rounded" alt="Cardboard Box 3" />
            </div>
          </div>
          <div class="col-12 mt-4">
            <div class="card p-4 rounded shadow">
              <ul class="list-unstyled mb-0">
                <li class="mb-3">
                  <i class="uil uil-check-circle text-success h5 me-2"></i>
                  500x500x500 mm sturdy cardboard construction
                </li>
                <li class="mb-3">
                  <i class="uil uil-check-circle text-success h5 me-2"></i>
                  Available in packs of 20
                </li>
                <li class="mb-3">
                  <i class="uil uil-check-circle text-success h5 me-2"></i>
                  Double-wall strength for heavy items
                </li>
              </ul>
            </div>
          </div>
        </div>

        <!-- Stretch Folio Images -->
        <div class="row mb-5">
          <div class="col-12">
            <h4 class="title mb-4">Industrial Stretch Folioo</h4>
          </div>
          <div class="col-md-4">
            <div class="card border-0 shadow rounded">
              <img src="/img/stretchfolio2.jpeg" class="img-fluid rounded" alt="Stretch Folio 1" />
            </div>
          </div>
          <div class="col-md-4">
            <div class="card border-0 shadow rounded">
              <img src="/img/stretchfolio2.jpeg" class="img-fluid rounded" alt="Stretch Folio 2" />
            </div>
          </div>
          <div class="col-md-4">
            <div class="card border-0 shadow rounded">
              <img src="/img/stretchfolio3.jpeg" class="img-fluid rounded" alt="Stretch Folio 3" />
            </div>
          </div>
          <div class="col-12 mt-4">
            <div class="card p-4 rounded shadow">
              <ul class="list-unstyled mb-0">
                <li class="mb-3">
                  <i class="uil uil-check-circle text-success h5 me-2"></i>
                  50cm width for versatile coverage
                </li>
                <li class="mb-3">
                  <i class="uil uil-check-circle text-success h5 me-2"></i>
                  3.3 Kg professional-grade rolls
                </li>
                <li class="mb-3">
                  <i class="uil uil-check-circle text-success h5 me-2"></i>
                  Superior protection against moisture and dust
                </li>
              </ul>
            </div>
          </div>
        </div>

        <!-- Duck Tape Images -->
        <div class="row mb-5">
          <div class="col-12">
            <h4 class="title mb-4">Professional Duck Tape</h4>
          </div>
          <div class="col-md-4">
            <div class="card border-0 shadow rounded">
              <img src="/img/ducktape1.jpeg" class="img-fluid rounded" alt="Duck Tape 1" />
            </div>
          </div>
          <div class="col-md-4">
            <div class="card border-0 shadow rounded">
              <img src="/img/ducktape2.jpeg" class="img-fluid rounded" alt="Duck Tape 2" />
            </div>
          </div>
          <div class="col-md-4">
            <div class="card border-0 shadow rounded">
              <img src="/img/ducktape3.jpeg" class="img-fluid rounded" alt="Duck Tape 3" />
            </div>
          </div>
          <div class="col-12 mt-4">
            <div class="card p-4 rounded shadow">
              <ul class="list-unstyled mb-0">
                <li class="mb-3">
                  <i class="uil uil-check-circle text-success h5 me-2"></i>
                  50x50 mm hot melt adhesive
                </li>
                <li class="mb-3">
                  <i class="uil uil-check-circle text-success h5 me-2"></i>
                  Strong and durable sealing
                </li>
                <li class="mb-3">
                  <i class="uil uil-check-circle text-success h5 me-2"></i>
                  Weather-resistant properties
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div class="row justify-content-center mt-5">
          <div class="col-12 text-center">
            <div class="section-title">
              <h4 class="title mb-4">Why Choose Our Packing Service?</h4>
              <p class="text-muted para-desc mx-auto">
                Our professional packing service ensures the safety of your belongings throughout
                the entire moving process. We use only the highest quality materials and proven
                packing techniques to protect your items. Let our experienced team handle the
                packing while you focus on other aspects of your move.
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
  .card {
    transition: all 0.3s ease;
    margin-bottom: 20px;
    background: #f8f9fa;

    &:hover {
      transform: translateY(-5px);
    }

    img {
      width: 100%;
      height: 300px;
      object-fit: contain;
      padding: 10px;
      background: white;
    }
  }

  .title {
    color: #3c4858;
  }

  li {
    font-size: 1.1rem;
    display: flex;
    align-items: center;

    i {
      margin-right: 10px;
    }
  }
</style>
