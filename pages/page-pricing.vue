<template>
    <navbar :navLight="'nav-light'" :logoLight=true :buttonLight=true />

    <!-- Home Start -->
    <section class="bg-half-170 bg-primary d-table w-100"
        :style="{ 'background-image': 'url(' + (image) + ')', backgroundPosition: 'center' }">
        <div class="container">
            <div class="row mt-5 justify-content-center">
                <div class="col-12">
                    <div class="heading-title text-center">
                        <h2 class="text-white title title-dark mb-3">Our Pricing Plans & Rates</h2>
                        <p class="para-desc mx-auto text-white-50"><description /></p>
                    </div>
                </div><!--end col-->
            </div><!--end row-->
        </div><!--end container-->
    </section><!--end section-->
    <shape />
    <section class="section">
        <pricing />
        <div class="container mt-100 mt-60">
            <questions />
            <getintouch />
        </div>
    </section>
    <footers />
    <backtotop />
</template>

<script setup>
import navbar from '@/components/navbar/navbar.vue';
import image from '../assets/images/bg/bg-lines-two.png';
import shape from '@/components/shape-light.vue';
import pricing from '@/components/page-pricing/pricing.vue';
import questions from '@/components/hosting/hosting-questions.vue';
import getintouch from '@/components/get-in-touch.vue';
import footers from '@/components/footer/footer.vue';
import backtotop from '@/components/back-to-top.vue'

</script>

<style lang="scss" scoped></style>