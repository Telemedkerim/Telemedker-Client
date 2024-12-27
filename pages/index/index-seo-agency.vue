<template>
    <navbar :navLight="'nav-light'" :logoLight=true :buttonLight=true />

    <!-- Hero Start -->
    <section class="bg-home bg-primary d-flex align-items-center" style="height: auto;"
        :style="{ 'background-image': 'url(' + (image) + ')', backgroundPosition: 'center center' }" id="home">
        <div class="container">
            <div class="row mt-5 justify-content-center">
                <div class="col-lg-12 text-center mt-0 mt-md-5 pt-0 pt-md-5">
                    <div class="heading-title margin-top-100">
                        <i class="uil uil-rocket h1 text-white-50"></i>
                        <h1 class="display-4 fw-bold text-white title-dark my-3">We are full service SEO agency</h1>
                        <p class="para-desc mx-auto text-white-50">
                            <description />
                        </p>
                        <div class="subcribe-form mt-4 pt-2">
                            <form>
                                <div class="mb-3">
                                    <input type="url" id="url" class="border bg-white rounded-lg" style="opacity: 0.85;"
                                        required placeholder="http://shreethemes.in">
                                    <button type="submit" class="btn btn-pills btn-primary">Get Started</button>
                                </div>
                            </form>
                        </div>
                    </div>

                    <div class="row justify-content-center">
                        <div class="col-lg-8 col-md-10">
                            <div class="home-dashboard">
                                <img src="../../assets/images/seo/hero.png" alt="" style="top: 0;" class="img-fluid">
                            </div>
                        </div>
                    </div>
                </div><!--end col-->
            </div><!--end row-->
        </div><!--end container-->
    </section><!--end section-->
    <div class="position-relative">
        <div class="shape seo-hero overflow-hidden text-light"></div>
    </div>
    <!-- Hero End -->

    <!-- Partners start -->
    <section class="pt-4">
        <div class="container">
            <div class="row justify-content-center">
                <logos />
            </div>
        </div>
    </section>

    <section class="section">
        <features />
    </section>
    <cta />
    <section class="section">
        <services />
        <blogs />
    </section>
    <subscribe />
    <footers :footerbar="'footer-bar'" />
    <backtotop />
</template>

<script setup>
import navbar from '@/components/navbar/navbar.vue';
import image from '../../assets/images/seo/bg.png';
import logos from '@/components/company-logos.vue';
import features from '@/components/seo-agency/agency-features.vue';
import cta from '@/components/seo-agency/agency-cta.vue';
import services from '@/components/seo-agency/agency-services.vue';
import blogs from '@/components/seo-agency/agency-blog.vue';
import subscribe from '@/components/career-job/career-subscribe.vue';
import footers from '@/components/footer/footer.vue';
import backtotop from '@/components/back-to-top.vue'
</script>

<style lang="scss" scoped></style>