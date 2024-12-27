<template>
    <navbar :logoLight=true :navLight="'nav-light'" :buttonLight=true />

    <!-- Start Hero -->
    <section class="bg-half-170 d-table w-100 bg-primary"
        style="background: url('images/bg/bg-software.png') center center;">
        <div class="container">
            <div class="row mt-5 justify-content-center">
                <div class="col-12">
                    <div class="heading-title text-center">
                        <h4 class="heading fw-bold text-white title-dark">Powerfull & Modern <br> landing for your
                            software</h4>
                        <p class="para-desc mx-auto text-white-50"><description /></p>
                        <div class="mt-4 pt-2">
                            <a href="javascript:void(0)" class="btn btn-light m-1">Documentation</a>
                            <a href="javascript:void(0)" class="btn btn-outline-light-alt m-1">Get Started <i
                                    data-feather="arrow-right" class="fea icon-sm"></i></a>
                        </div>
                    </div>
                </div><!--end col-->
            </div><!--end row-->
        </div><!--end container-->
    </section><!--end section-->
    <shape />
    <!-- end Hero -->
    <section class="section pb-0">
        <services />
    </section>
    <section class="section">
        <quickstart />
        <div class="container mt-100 mt-60">
            <analytics />
        </div>
        <div class="container mt-100 mt-60">
            <features />
        </div>
    </section>
    <section class="section bg-light">
        <pricing />
        <div class="container mt-100 mt-60">
            <getapp />
        </div>
    </section>
    <footers />
    <backtotop />

</template>

<script setup>
import navbar from '@/components/navbar/navbar.vue';
import shape from '@/components/shape-light.vue';
import services from '@/components/software/software-services.vue';
import quickstart from '@/components/software/quickstart.vue';
import analytics from '@/components/software/software-analytics.vue';
import features from '@/components/software/software-features.vue';
import pricing from '@/components/software/software-pricing.vue';
import getapp from '@/components/software/get-app.vue';
import footers from '@/components/footer/footer.vue';
import backtotop from '@/components/back-to-top.vue'

</script>

<style lang="scss" scoped></style>