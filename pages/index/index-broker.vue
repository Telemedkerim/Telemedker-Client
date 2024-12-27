<template>
    <navbar :navLight="'nav-light'" :logoLight=true :buttonLight=true />

    <!-- Start -->
    <section class="bg-half-170 d-table w-100 bg-primary"
        :style="{ 'background-image': 'url(' + (image) + ')', backgroundPosition: 'bottom' }">
        <div class="container">
            <div class="row mt-5">
                <div class="col-12">
                    <div class="heading-title">
                        <h5 class="text-white-50">Landflow Broker</h5>
                        <h4 class="display-4 fw-bold text-white title-dark">Find the best online <br> broker for you
                        </h4>
                        <p class="text-white-50 para-desc mb-0">
                            <description />
                        </p>
                    </div>
                </div><!--end col-->
            </div><!--end row-->
        </div><!--end container-->
    </section><!--end section-->
    <shape />
    <section class="section">
        <features />
        <services />
        <div class="container mt-100 mt-60">
            <ClientOnly>
                <calculator />
            </ClientOnly>
        </div>
    </section>
    <section class="section bg-light">
        <ClientOnly>
            <client />
        </ClientOnly>
        <div class="container mt-5">
            <div class="row justify-content-center">
                <logos />
            </div>
        </div>
    </section>
    <footers />
    <backtotop />
</template>

<script setup>
import navbar from '@/components/navbar/navbar.vue';
import image from '../../assets/images/bg/bg-broker.png';
import shape from '@/components/shape-light.vue';
import features from '@/components/broker/broker-feature.vue';
import services from '@/components/broker/broker-services.vue';
import calculator from '@/components/broker/broker-calculator.vue';
import client from '@/components/client-review.vue';
import logos from '@/components/company-logos.vue';
import footers from '@/components/footer/footer.vue';
import backtotop from '@/components/back-to-top.vue'

</script>

<style lang="scss" scoped></style>