<template>
    <navbar :navLight="'nav-light'" :logoLight=true :buttonLight=true />

    <!-- Hero Start -->
    <section class="home-slider position-relative">
        <div id="carouselExampleInterval" class="carousel slide carousel-fade" data-bs-ride="carousel">
            <div class="carousel-inner">
                <div v-for="(image, index) in images" :key="index" class="carousel-item"
                    :class="{ active: index === 0 }" data-bs-interval="3000">
                    <div class="bg-home bg-animation-left d-flex align-items-center"
                        :style="{ 'background-image': `url(${image})` }">
                        <div class="bg-overlay"></div>
                        <div class="container">
                            <div class="row justify-content-center mt-5">
                                <div class="col-12">
                                    <div class="title-heading text-center mt-4">
                                        <h1 class="display-4 text-white title-dark fw-bold mb-3" v-if="index === 0">Lead
                                            your business <br> success with landflow</h1>
                                        <h1 class="display-4 text-white title-dark fw-bold mb-3"
                                            v-else-if="index === 1">Start your successful <br> business with landflow
                                        </h1>
                                        <h1 class="display-4 text-white title-dark fw-bold mb-3" v-else>Join best
                                            enterprises <br> in france and europe</h1>
                                        <p class="para-desc text-white-50 mx-auto para-dark">
                                            <description />
                                        </p>
                                        <div class="mt-4">
                                            <a href="javascript:void(0)" class="btn btn-primary"
                                                v-if="index === 0">About Us</a>
                                            <a href="javascript:void(0)" class="btn btn-primary"
                                                v-else-if="index === 1">Contact Now</a>
                                            <a href="javascript:void(0)" class="btn btn-primary" v-else>Learn More</a>
                                        </div>
                                    </div>
                                </div><!--end col-->
                            </div><!--end row-->
                        </div><!--end container-->
                    </div>
                </div>
            </div>
            <a class="carousel-control-prev" href="#carouselExampleInterval" role="button" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </a>
            <a class="carousel-control-next" href="#carouselExampleInterval" role="button" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </a>
        </div>
    </section><!--end section-->
    <!-- Hero End -->

    <section class="section">
        <whoweare />
        <div class="container mt-100 mt-60">
            <services />
        </div>
        <div class="container-fluid mt-100 mt-60">
            <ClientOnly>
                <cta />
            </ClientOnly>
        </div>
        <div class="container mt-100 mt-60">
            <teams />
        </div>
    </section>

    <section class="section bg-light">
        <portfolio />
        <div class="container mt-100 mt-60">
            <blogs />
        </div>
    </section>
    <subscribe />
    <footers :footerbar="'footer-bar'" />
    <backtotop />
</template>

<script setup>
import { ref } from 'vue';
import navbar from '@/components/navbar/navbar.vue';
import image from '../../assets/images/business/bg1.jpg';
import image2 from '../../assets/images/business/bg2.jpg';
import image3 from '../../assets/images/business/bg3.jpg';
import whoweare from '@/components/business/who-we-are.vue';
import services from '@/components/business/business-services.vue';
import cta from '@/components/career-job/career-cta.vue';
import teams from '@/components/business/business-team.vue';
import portfolio from '@/components/business/business-portfolio.vue'
import blogs from '@/components/career-job/blog.vue';
import subscribe from '@/components/career-job/career-subscribe.vue';
import footers from '@/components/footer/footer.vue';
import backtotop from '@/components/back-to-top.vue';

const images = ref([image, image2, image3])
</script>

<style lang="scss" scoped></style>