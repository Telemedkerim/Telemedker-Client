<template>
    <div class="row justify-content-center">
        <div class="col-12">
            <div class="section-title text-center mb-4 pb-2">
                <h6 class="text-primary">Our Pricing</h6>
                <h4 class="title mb-4">Comfortable Plans & Rates</h4>
                <p class="text-muted para-desc mx-auto mb-0">
                    <description />
                </p>
            </div>
        </div><!--end col-->
    </div><!--end row-->

    <div class="row">
        <div v-for="(plan, index) in plans" :key="index" class="col-lg-4 col-md-6 mt-4 pt-2">
            <div class="card pricing border-0 p-4 rounded-md shadow">
                <div class="card-body p-0 py-3">
                    <span
                        :class="`py-2 px-4 d-inline-block bg-soft-${plan.type} h6 mb-0 text-${plan.type} rounded-lg`">{{
                            plan.name }}</span>
                    <h2 class="fw-bold mb-0 mt-3">${{ plan.price }}.00</h2>
                    <p class="text-muted">Per Month</p>

                    <ul class="list-unstyled">
                        <li v-for="(feature, featureIndex) in plan.features" :key="featureIndex"
                            class="h6 text-muted mb-0">
                            <span class="text-primary h5 me-2"><i
                                    class="uil uil-check-circle align-middle"></i></span>{{ feature }}
                        </li>
                    </ul>

                    <div class="mt-4">
                        <div class="d-grid">
                            <a href="javascript:void(0)" class="btn btn-primary">Buy Now</a>
                        </div>
                        <p class="text-muted mt-3 mb-0">*No credit card required</p>
                    </div>
                </div>
            </div>
        </div>
    </div><!--end row-->
</template>

<script setup>
import { ref } from 'vue';

const plans = ref([
    {
        name: 'Basic',
        type: 'primary',
        price: 9,
        features: ['Full Access', 'Enhanced Security', 'Source Files', '1 Domain Free', 'Enhanced Security']
    },
    {
        name: 'Business',
        type: 'primary',
        price: 39,
        features: ['Full Access', 'Enhanced Security', 'Source Files', '1 Domain Free', 'Enhanced Security']
    },
    {
        name: 'Standard',
        type: 'primary',
        price: 79,
        features: ['Full Access', 'Enhanced Security', 'Source Files', '1 Domain Free', 'Enhanced Security']
    },
])
</script>

<style lang="scss" scoped></style>