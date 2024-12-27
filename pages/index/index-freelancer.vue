<template>
    <navbar />

    <!-- Start -->
    <section class="bg-hero pb-0 bg-light home-wrapper d-table w-100 overflow-hidden">
        <div class="container">
            <div class="row mt-5 align-items-center">
                <div class="col-md-6">
                    <div class="heading-title">
                        <h4>Product Designer</h4>
                        <h4 class="display-3 fw-bold mb-4">Andrea George</h4>
                        <p class="text-muted para-desc mb-0">
                            <description />
                        </p>

                        <div class="mt-4 align-items-center">
                            <a href="javascript:void(0)" class="btn btn-primary">View Portfolio</a>
                        </div>
                    </div>
                </div><!--end col-->

                <div class="col-md-6 mt-4 mt-sm-0 pt-2 pt-sm-0">
                    <img src="../../assets/images/freelancer.png" class="img-fluid" alt="">
                </div><!--end col-->

            </div><!--end row-->
        </div><!--end container-->
    </section><!--end section-->
    <shape />
    <section class="section" id="about">
        <about />
        <div class="container mt-100 mt-60">
            <offers />
        </div>
    </section>
    <section class="section bg-light">
        <portfolio />
    </section>
    <ClientOnly>
        <counter />
    </ClientOnly>
    <section class="section">
        <ClientOnly>
            <client />
        </ClientOnly>
        <div class="container mt-100 mt-60">
            <blogs />
        </div>
    </section>
    <footers />
    <backtotop />
</template>

<script setup>
import navbar from '@/components/navbar/navbar.vue';
import shape from '@/components/shape-light.vue';
import about from '@/components/freelancer/freelancer-about.vue';
import offers from '@/components/freelancer/freelancer-offers.vue';
import portfolio from '@/components/business/business-portfolio.vue';
import counter from '@/components/freelancer/freelancer-counter.vue';
import client from '@/components/client-review.vue';
import blogs from '@/components/career-job/blog.vue';
import footers from '@/components/footer/footer.vue';
import backtotop from '@/components/back-to-top.vue'

</script>

<style lang="scss" scoped></style>