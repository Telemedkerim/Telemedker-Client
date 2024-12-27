<template>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-12">
                <div class="section-title mb-4 pb-2 text-center">
                    <h4 class="title mb-4">Smooth Experience on Any Device</h4>
                    <p class="text-muted mx-auto para-desc mb-0">
                        <description />
                    </p>
                </div>
            </div><!--end col-->
        </div><!--end row-->

        <div class="row align-items-center">
            <div class="col-lg-8 col-md-7 mt-4 pt-2">
                <img src="../../assets/images/crypto.png" class="img-fluid" alt="">
            </div><!--end col-->

            <div class="col-lg-4 col-md-5 mt-4 pt-2">
                <div class="section-title">
                    <h4>The custom-built platform has been adapted for any device you may choose and switching is 100%
                        seamless.</h4>

                    <div class="d-flex align-items-center rounded-md bg-light mt-4 shadow p-4">
                        <h2 class="display-4 fw-bold mb-0">4.9</h2>
                        <div class="flex-1 ms-3">
                            <ul class="list-unstyled mb-0 h5">
                                <li v-for="item in stars" :key="item" class="list-inline-item me-1"><i
                                        :class="item"></i></li>

                            </ul>

                            <h6 class="mb-0">Customer Rating</h6>
                        </div>
                    </div>

                    <div class="mt-4 text-center">
                        <a href="javascript:void(0)" class="btn btn-primary m-1"><i class="uil uil-apple"></i> App
                            Store</a>
                        <a href="javascript:void(0)" class="btn btn-soft-primary m-1"><i
                                class="uil uil-google-play"></i> Play Store</a>
                    </div>
                </div>
            </div><!--end col-->
        </div><!--end row-->
    </div><!--end container-->

    <div class="container mt-100 mt-60">
        <div class="row align-items-center">
            <div class="col-md-5 order-1 order-md-2 mt-4 pt-2">
                <img src="../../assets/images/crypto-cell.png" class="img-fluid" alt="">
            </div><!--end col-->

            <div class="col-md-7 order-2 order-md-1 mt-4 pt-2">
                <div class="section-title">
                    <h2 class="mb-4">Take control of your <br> credit and identity.</h2>
                    <p class="text-muted para-desc"><description /></p>
                    <digital-list />
                    <div class="mt-4">
                        <a href="javascript:void(0)" class="btn btn-primary">Learn more</a>
                    </div>
                </div>
            </div><!--end col-->
        </div><!--end row-->
    </div><!--end container-->
</template>

<script setup>
import { ref } from 'vue';

const stars = ref(['mdi mdi-star text-warning', 'mdi mdi-star text-warning', 'mdi mdi-star text-warning', 'mdi mdi-star text-warning', 'mdi mdi-star text-warning'])
</script>

<style lang="scss" scoped></style>