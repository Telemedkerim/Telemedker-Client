<template>
  <div class="counter-section">
    <div class="row justify-content-center">
      <div class="col-lg-9">
        <div class="row" id="counter">
          <div class="col-md-4 col-6">
            <div class="counter-box text-center">
              <h1 class="mb-0">
                <span class="counter-value" data-target="15">
                  <count-up :end-val="4"></count-up>
                </span>
                <span class="counter-suffix">+</span>
              </h1>
              <h6 class="counter-head">Years of Experience</h6>
            </div>
          </div>

          <div class="col-md-4 col-6">
            <div class="counter-box text-center">
              <h1 class="mb-0">
                <span class="counter-value" data-target="4000">
                  <count-up :end-val="4000"></count-up>
                </span>
                <span class="counter-suffix">+</span>
              </h1>
              <h6 class="counter-head">Successful Moves</h6>
            </div>
          </div>

          <div class="col-md-4 mt-4 pt-2 mt-sm-0 pt-sm-0">
            <div class="counter-box text-center">
              <h1 class="mb-0">
                <span class="counter-value" data-target="98">
                  <count-up :end-val="98"></count-up>
                </span>
                <span class="counter-suffix">%</span>
              </h1>
              <h6 class="counter-head">Customer Satisfaction</h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import CountUp from "vue-countup-v3";
</script>

<style lang="scss" scoped>
.counter-section {
  background: linear-gradient(
      rgba(255, 255, 255, 0.9),
      rgba(255, 255, 255, 0.9)
    ),
    url("/images/pattern.png");
  padding: 4rem 0;
  border-radius: 1rem;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  margin: 2rem 0;
}

.counter-box {
  padding: 1.5rem;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }

  h1 {
    font-size: 2.5rem;
    font-weight: 700;
    color: #2c3e50;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.25rem;
  }

  .counter-suffix {
    font-size: 1.5rem;
    color: #3498db;
  }

  .counter-head {
    margin-top: 1rem;
    font-size: 1.1rem;
    font-weight: 600;
    color: #7f8c8d;
    text-transform: uppercase;
    letter-spacing: 1px;
  }
}

@media (max-width: 768px) {
  .counter-box h1 {
    font-size: 2rem;
  }

  .counter-box .counter-head {
    font-size: 0.9rem;
  }
}
</style>
