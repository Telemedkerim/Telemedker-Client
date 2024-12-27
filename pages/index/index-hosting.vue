<template>
    <navbar :navLight="'nav-light'" :logoLight=true :buttonLight=true />

    <!-- Start -->
    <section class="bg-half-260 d-table w-100 bg-primary" :style="{ 'background-image': 'url(' + (image) + ')' }">
        <div class="container">
            <div class="row mt-5 justify-content-center">
                <div class="col-12">
                    <div class="heading-title text-center">
                        <h6 class="text-white-50">Easy installation and affordable price</h6>
                        <h2 class="heading text-white title-dark mb-3">Powerful web hosting service</h2>
                        <p class="para-desc mx-auto text-white-50">
                            <description />
                        </p>
                        <div class="mt-4">
                            <h5 class="text-light title-dark">Start from <span class="text-warning">$3.99/month</span>
                            </h5>
                        </div>
                        <div class="mt-4">
                            <a href="javascript:void(0)" class="btn btn-icon btn-pills btn-lg btn-light"><i
                                    data-feather="arrow-down" class="icons"></i></a>
                        </div>
                    </div>
                </div><!--end col-->
            </div><!--end row-->
        </div><!--end container-->
    </section><!--end section-->
    <!-- End -->
    <section class="section">
        <features />
    </section>
    <!-- Search Hosting Start -->
    <section class="section bg-primary">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-12">
                    <div class="section-title text-center mb-4 pb-2">
                        <h4 class="title text-white title-dark mb-3">Find a personal or professional domain</h4>
                        <p class="text-white-50 para-desc mx-auto mb-0">Create, collaborate, and turn your ideas into
                            incredible products with the definitive platform for digital design.</p>
                    </div>
                </div><!--end col-->
            </div><!--end row-->
        </div><!--end container-->
    </section><!--end section-->
    <section class="section">
        <domain />
        <div class="container mt-100 mt-60">
            <pricing />
        </div>
        <div class="container mt-100 mt-60">
            <questions />
            <getintouch />
        </div>
    </section>
    <footers />
    <backtotop />
</template>

<script setup>
import { onMounted } from 'vue';
import navbar from '@/components/navbar/navbar.vue';
import image from '../../assets/images/bg/bg-hosting.png';
import feather from 'feather-icons';
import features from '@/components/hosting/hosting-feature.vue';
import domain from '@/components/hosting/domain-purchase.vue';
import pricing from '@/components/hosting/domain-pricing.vue';
import questions from '@/components/hosting/hosting-questions.vue';
import getintouch from '@/components/get-in-touch.vue';
import footers from '@/components/footer/footer.vue';
import backtotop from '@/components/back-to-top.vue'


onMounted(() => {
    feather.replace()
})
</script>

<style lang="scss" scoped></style>