<template>
    <navbar />
    <!-- Home Start -->
    <section class="bg-half-130 d-table w-100 bg-light" :style="{ 'background-image': 'url(' + (image) + ')' }">
        <div class="container">
            <div class="row align-items-center mt-5 mt-lg-0">
                <div class="col-lg-8 col-md-7">
                    <div class="heading-title">
                        <h5 class="text-primary">Application</h5>
                        <h4 class="display-4 fw-bold">Classic landing <br> for your mobile app.</h4>
                        <p class="para-desc text-muted">
                            <description />
                        </p>
                        <div class="mt-3">
                            <a href="javascript:void(0)" class="btn btn-primary me-2 mt-2"><i class="uil uil-apple"></i>
                                App Store</a>
                            <a href="javascript:void(0)" class="btn btn-soft-primary mt-2"><i
                                    class="uil uil-google-play"></i> Play Store</a>
                        </div>
                    </div>
                </div><!--end col-->

                <div class="col-lg-4 col-md-5 mt-4 mt-sm-0 pt-2 pt-sm-0">
                    <img src="../../assets/images/apps/hero.png" class="img-fluid" alt="">
                </div><!--end col-->
            </div><!--end row-->
        </div><!--end container-->
    </section><!--end section-->
    <shape />

    <section class="pt-4">
        <div class="container">
            <div class="row justify-content-center">
                <logos />
            </div>
        </div>
    </section>

    <section class="section">
        <features />
        <div class="container mt-100 mt-60">
            <analytics />
        </div>
    </section>
    <keyfeature />

    <section class="section">
        <appanalytics />
        <div class="container mt-100 mt-60">
            <pricing />
        </div>
        <div class="container mt-100 mt-60">
            <appquestion />
            <getintouch />
        </div>
    </section>
    <download />
    <footers :footerbar="'footer-bar'" />
    <backtotop />
</template>

<script setup>
import navbar from '@/components/navbar/navbar.vue';
import shape from '@/components/shape-light.vue';
import image from '../../assets/images/bg/bg-lines-one.png';
import logos from '@/components/company-logos.vue';
import features from '@/components/app/app-feature.vue';
import analytics from '@/components/app/app-analytics.vue';
import keyfeature from '@/components/app/app-key-feature.vue';
import appanalytics from '@/components/app/analytics-app.vue';
import pricing from '@/components/app/app-pricing.vue';
import appquestion from '@/components/app/app-question.vue'
import getintouch from '@/components/get-in-touch.vue';
import download from '@/components/app/app-download.vue';
import footers from '@/components/footer/footer.vue';
import backtotop from '@/components/back-to-top.vue'

</script>

<style lang="scss" scoped></style>