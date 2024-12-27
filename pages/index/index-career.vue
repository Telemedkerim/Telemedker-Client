<template>
    <navbar :navLight="'nav-light'" :logoLight=true :buttonLight=true />

    <!-- Start Hero -->
    <section class="bg-half-260 d-table w-100" :style="{ 'background-image': 'url(' + (image) + ')' }">
        <div class="bg-overlay"></div>
        <div class="container">
            <div class="row justify-content-center mt-5">
                <div class="col-lg-10">
                    <div class="heading-title text-center">
                        <h4 class="heading text-light title-dark mb-3">Find Your Dream Job !</h4>
                        <p class="para-desc mx-auto text-white-50">
                            <description />
                        </p>
                    </div>
                </div><!--end col-->
            </div><!--end row-->
        </div><!--end container-->
    </section><!--end section-->
    <!-- End Hero -->
    <section class="section pb-0">
        <forms />
    </section>
    <section class="section pt-md-4">
        <categories />
        <features />
        <div class="container mt-100 mt-60">
            <comejoin />
        </div>
        <div class="container mt-100 mt-60">
            <vacancy />
        </div>
        <div class="container-fluid mt-100 mt-60">
            <ClientOnly>
                <cta />
            </ClientOnly>
        </div>
        <div class="container mt-100 mt-60">
            <pricing />
        </div>
        <div class="container mt-100 mt-60">
            <blog />
        </div>
    </section>
    <subscribe />
    <footers :footerbar="'footer-bar'" />
    <backtotop />
</template>

<script setup>
import navbar from '@/components/navbar/navbar.vue';
import image from '../../assets/images/bg/bg-career.jpg';
import forms from '@/components/career-job/job-form.vue';
import categories from '@/components/career-job/categories.vue';
import features from '@/components/career-job/career-feature.vue';
import comejoin from '@/components/career-job/come-join.vue';
import vacancy from '@/components/career-job/job-vacancy.vue';
import cta from '@/components/career-job/career-cta.vue';
import pricing from '@/components/career-job/career-pricing.vue';
import blog from '@/components/career-job/blog.vue';
import subscribe from '@/components/career-job/career-subscribe.vue';
import footers from '@/components/footer/footer.vue';
import backtotop from '@/components/back-to-top.vue'

</script>

<style lang="scss" scoped></style>