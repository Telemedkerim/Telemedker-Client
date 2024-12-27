<template>
    <div class="container">
        <div class="row mt-lg-4 align-items-center">
            <div class="col-lg-5 col-md-12 text-center text-lg-start">
                <div class="section-title mb-4 mb-lg-0 pb-2 pb-lg-0">
                    <h6 class="text-primary">Our Pricing</h6>
                    <h4 class="title mb-4">Comfortable Rates</h4>
                    <p class="text-muted para-desc mx-auto mb-0">
                        <description />
                    </p>
                </div>
            </div><!--end col-->

            <div class="col-lg-7 col-md-12 mt-4 mt-lg-0 pt-2 pt-lg-0">
                <div class="row align-items-center">
                    <div v-for="(plan, index) in pricingPlans" :key="index"
                        :class="`col-md-6 col-12 ${index > 0 ? 'mt-4 mt-sm-0 pt-2 pt-sm-0' : ''}`">
                        <div class="card pricing border-0 p-4 rounded-md shadow" :class="plan.bgClass">
                            <div class="card-body p-0">
                                <span
                                    :class="`py-2 px-4 d-inline-block ${plan.badgeBgClass} h6 mb-0 ${plan.badgeTextColor} rounded-lg`">{{
                                    plan.name }}</span>
                                <h1 class="fw-bold mb-0 mt-3" :class="plan.titleColorClass" v-text="plan.price"></h1>
                                <p :class="plan.textColorClass" v-text="plan.description"></p>

                                <ul class="list-unstyled">
                                    <li v-for="(feature, featureIndex) in plan.features" :key="featureIndex"
                                        :class="plan.textColorClass">
                                        <span :class="`text-${plan.badgeTextColor} h5 me-2`"><i
                                                :class="feature.icon"></i></span>{{ feature.text }}
                                    </li>
                                </ul>

                                <div class="mt-4">
                                    <div class="d-grid">
                                        <a href="javascript:void(0)" :class="`btn ${plan.buttonClass}`">Create your
                                            account</a>
                                    </div>
                                    <p :class="plan.textColorClass" v-text="plan.footerText"></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div><!--end col-->
        </div><!--end row-->
    </div><!--end container-->
</template>

<script setup>
import { ref } from 'vue';

const pricingPlans = ref([
        {
          name: 'Basic',
          price: '$16.00',
          description: 'For personal projects',
          badgeBgClass: 'bg-soft-primary',
          badgeTextColor: 'primary',
          titleColorClass: '',
          textColorClass: 'text-muted',
          features: [
            { icon: 'uil uil-user-check', text: 'Full Access' },
            { icon: 'uil uil-file', text: 'Source Files' },
            { icon: 'uil uil-server', text: '1 Domain Free' },
          ],
          buttonClass: 'btn-primary',
          footerText: '*No credit card required',
          bgClass: ''
        },
        {
          name: 'Business',
          price: '$45.00',
          description: '30-Day free trial',
          badgeBgClass: 'bg-soft-success',
          badgeTextColor: 'success',
          titleColorClass: 'text-white title-dark',
          textColorClass: 'text-white-50',
          features: [
            { icon: 'uil uil-user-check', text: 'Full Access' },
            { icon: 'uil uil-file', text: 'Source Files' },
            { icon: 'uil uil-server', text: '1 Domain Free' },
            { icon: 'uil uil-shield-plus', text: 'Enhanced Security' },
          ],
          buttonClass: 'btn-soft-success',
          footerText: '*No credit card required',
          bgClass: 'bg-dark bg-white-dark'
        },
      ])

</script>

<style lang="scss" scoped></style>