<template>
    <navbar />

    <!-- Hero Start -->
    <section class="bg-half-130 bg-light d-table w-100">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-lg-8">
                    <div class="row mt-5 align-items-center">
                        <div class="col-lg-5 col-md-5 col-12 d-none d-md-block">
                            <div class="rounded shadow text-center bg-white p-4">
                                <img src="../assets/images/brand/airbnb.svg" class="avatar avatar-medium" alt="">

                                <div class="mt-4">
                                    <h5 class="mb-0">Airbnb</h5>
                                    <ul class="list-unstyled mt-2 mb-0">
                                        <li class="text-muted"><i class="uil uil-map-marker h5"></i> San Francisco</li>
                                        <li class="text-muted"><i class="uil uil-globe h5"></i> airbnb.co.in</li>
                                    </ul>
                                </div>
                            </div>
                        </div><!--end col-->

                        <div class="col-lg-7 col-md-7 col-12">
                            <div class="section-title text-center text-md-start ms-md-4 ms-lg-5">
                                <h6 class="text-primary">Work From Home</h6>
                                <h4 class="title">Back-End Developer</h4>
                                <p class="text-muted">Posted 18 September by <a href="javascript:void(0)"
                                        class="text-primary">Airbnb, Inc.</a></p>
                                <ul class="list-unstyled">
                                    <li class="list-inline-item text-muted small me-3"><i
                                            class="uil uil-map-marker text-dark h6 me-1"></i> Bothell, WA, USA</li>
                                    <li class="list-inline-item text-muted small"><i
                                            class="uil uil-usd-circle text-dark h6 me-1"></i>$13.00 - $18.00 per hour
                                    </li>
                                </ul>
                            </div>
                        </div><!--end col-->
                    </div><!--end row-->
                </div>
            </div>
        </div><!--end container-->
    </section><!--end section-->
    <!-- Hero End -->

    <section class="section">
        <apply />
    </section>
    <footers />
    <backtotop />
</template>

<script setup>
import navbar from '@/components/navbar/navbar.vue';
import apply from '@/components/career/career-apply.vue';
import footers from '@/components/footer/footer.vue';
import backtotop from '@/components/back-to-top.vue'

</script>

<style lang="scss" scoped></style>