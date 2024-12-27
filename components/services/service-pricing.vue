<template>
    <div class="row justify-content-center">
        <div class="col-12">
            <div class="section-title text-center mb-4 pb-2">
                <h6 class="text-primary">Pricing</h6>
                <h4 class="title mb-4">Flexible pricing for any services</h4>
                <p class="para-desc mx-auto text-muted mb-0"><description /></p>
            </div>
        </div><!--end col-->
    </div><!--end row-->

    <div class="row">
        <div v-for="(plan, index) in plans" :key="index" class="col-lg-4 col-md-6 mt-4 pt-2">
            <div class="card pricing text-center shadow rounded-md border-0">
                <div class="card-body p-4">
                    <span
                        :class="`py-2 px-4 d-inline-block bg-soft-${plan.type} h6 mb-0 text-${plan.type} rounded-lg`">{{
                        plan.name }}</span>

                    <div class="d-flex justify-content-center my-4">
                        <span class="h5 mb-0 mt-2">$</span>
                        <span class="price h1 mb-0">{{ plan.price }}</span>
                        <span class="h5 align-self-end mb-1"> / month</span>
                    </div>

                    <a href="javascript:void(0)" class="btn btn-primary">{{ plan.buttonText }}</a>
                    <div class="plan-features h6 mb-0 mt-4">
                        <p>Bandwidth : <span class="text-primary">{{ plan.bandwidth }}</span></p>
                        <p>Onlinespace : <span class="text-primary">{{ plan.onlinespace }}</span></p>
                        <p class="mb-0">Support : <span class="text-primary">{{ plan.support }}</span></p>
                    </div>
                </div>
            </div>
        </div><!--end col-->

        <div class="col-12 text-center">
            <p class="text-muted mt-4 mb-0">*No credit card required</p>
        </div><!--end col-->
    </div><!--end row-->
</template>

<script setup>
import { ref } from 'vue';

const plans = ref([
    {
        name: 'Basic',
        type: 'primary',
        price: 0,
        buttonText: 'Free Signup',
        bandwidth: '1GB',
        onlinespace: '50MB',
        support: 'No'
    },
    {
        name: 'Business',
        type: 'primary',
        price: 39,
        buttonText: 'Join now',
        bandwidth: '100GB',
        onlinespace: '500MB',
        support: 'Yes'
    },
    {
        name: 'Premium',
        type: 'primary',
        price: 59,
        buttonText: 'Buy Now',
        bandwidth: '500GB',
        onlinespace: '2GB',
        support: 'Yes'
    }
])
</script>

<style lang="scss" scoped></style>