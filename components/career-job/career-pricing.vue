<template>
    <div class="row mt-lg-4 align-items-center">
        <div class="col-lg-5 col-md-12 text-center text-lg-start">
            <div class="section-title mb-4 mb-lg-0 pb-2 pb-lg-0">
                <h6 class="text-primary">Our Pricing</h6>
                <h4 class="title mb-4">Choose a package</h4>
                <p class="text-muted para-desc mx-auto mb-0">
                    <description />
                </p>
            </div>
        </div><!--end col-->

        <div class="col-lg-7 col-md-12 mt-4 mt-lg-0 pt-2 pt-lg-0">
            <div class="row align-items-center">
                <div v-for="(plan, index) in plans" :key="index"
                    :class="`col-md-6 col-12 ${index > 0 ? 'mt-4 mt-sm-0 pt-2 pt-sm-0' : ''}`">
                    <div class="card pricing border-0 p-4 rounded-md shadow" :class="plan.bgClass">
                        <div class="card-body p-0">
                            <span
                                :class="`py-2 px-4 d-inline-block ${plan.bgSoftClass} h6 mb-0 ${plan.textColor} rounded-lg`">{{
                                    plan.name }}</span>
                            <h1 class="fw-bold mb-0 mt-3" :class="plan.textClass" v-text="plan.price"></h1>
                            <p :class="plan.textClass2" v-text="plan.description"></p>

                            <ul class="list-unstyled">
                                <li v-for="(feature, featureIndex) in plan.features" :key="featureIndex"
                                    :class="plan.textClass">
                                    <span :class="`text-${plan.textColor} h5 me-2`">
                                        <i :class="feature.icon"></i>
                                    </span>
                                    {{ feature.text }}
                                </li>
                            </ul>

                            <div class="mt-4">
                                <div class="d-grid">
                                    <a href="javascript:void(0)" :class="`btn ${plan.btnClass}`">Buy Now</a>
                                </div>
                                <p class="mt-3 mb-0" :class="plan.textClass2" v-text="plan.note"></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div><!--end col-->
    </div><!--end row-->
</template>

<script setup>
import { ref } from 'vue';

const plans = ref([
    {
        name: 'Basic',
        price: '$16.00',
        description: 'For personal projects',
        bgClass: '',
        bgSoftClass: 'bg-soft-primary',
        textColor: 'primary',
        textClass: '',
        textClass2: 'text-muted',
        features: [
            { icon: 'uil uil-user-check', text: '10 Listings' },
            { icon: 'uil uil-file', text: 'Visible for 30 days' },
            { icon: 'uil uil-server', text: '24/7 Support' },
        ],
        btnClass: 'btn-primary',
        note: '*No credit card required',
    },
    {
        name: 'Premium',
        price: '$45.00',
        description: '30-Day free trial',
        bgClass: 'bg-primary',
        bgSoftClass: 'bg-soft-success',
        textColor: 'success',
        textClass: 'text-light title-dark',
        textClass2: 'text-muted',
        features: [
            { icon: 'uil uil-user-check', text: '30 Listings' },
            { icon: 'uil uil-file', text: 'Visible for 90 days' },
            { icon: 'uil uil-server', text: '1 Featured Job' },
            { icon: 'uil uil-shield-plus', text: '24/7 Premium Support' },
        ],
        btnClass: 'btn-soft-success',
        note: '*No credit card required',
    },
])

</script>

<style lang="scss" scoped></style>