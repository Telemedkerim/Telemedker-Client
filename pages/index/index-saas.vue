<template>
    <navbar />
    <!-- Hero Start -->
    <section class="bg-half-130 d-table w-100">
        <div class="container">
            <div class="row mt-5 justify-content-center">
                <div class="col-12">
                    <div class="heading-title text-center">
                        <h4 class="heading fw-bold mb-4">Digital experiences <br> crafted with dedication.</h4>
                        <p class="para-desc mx-auto text-muted">
                            <description />
                        </p>
                        <div class="mt-4 pt-2">
                            <a href="javascript:void(0)" class="btn btn-primary m-1">Documentation</a>
                            <a href="javascript:void(0)" class="btn btn-soft-primary m-1">Get Started <i
                                    data-feather="arrow-right" class="fea icon-sm"></i></a>
                        </div>
                    </div>
                </div><!--end col-->
            </div><!--end row-->
        </div><!--end container-->

        <div class="container mt-100 mt-60">
            <div class="row justify-content-center">
                <div class="col-lg-10">
                    <img src="../../assets/images/saas/dashboard.png" class="img-fluid rounded-md shadow-md" alt="">
                </div><!--end col-->
            </div><!--end row-->
        </div><!--end container-->

        <div class="container mt-100 mt-60">
            <sassitem />
        </div><!--end container-->
    </section><!--end section-->
    <shapeup />
    <section class="section bg-light">
        <analytics />
    </section>
    <shape />
    <section class="section">
        <collaborate />
        <div class="container mt-100 mt-60">
            <saasman />
        </div>
    </section>
    <shapeup />
    <section class="section bg-light">
        <div class="container">
            <pricing />
        </div>
        <div class="container mt-100 mt-60">
            <question />
            <getintouch />
        </div>
    </section>
    <footers />
    <backtotop />
</template>

<script setup>
import navbar from '@/components/navbar/navbar.vue';
import sassitem from '@/components/saas/saas-item.vue';
import shapeup from '@/components/shape-light-up.vue';
import analytics from '@/components/app/analytics-app.vue';
import shape from '@/components/shape-light.vue';
import collaborate from '@/components/saas/saas-collaborate.vue';
import saasman from '@/components/saas/saas-man.vue';
import pricing from '@/components/app/app-pricing.vue';
import question from '@/components/app/app-question.vue';
import getintouch from '@/components/get-in-touch.vue';
import footers from '@/components/footer/footer.vue';
import backtotop from '@/components/back-to-top.vue'

</script>

<style lang="scss" scoped></style>