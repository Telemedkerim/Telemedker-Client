<template>
    <!-- Start Counter -->
    <section class="py-5 bg-primary" style="background: url('images/bg/bg-lines-two.png') center center;">
        <div class="container">
            <div class="row" id="counter">
                <div class="col-lg-3 col-6">
                    <div class="counter-box rounded py-3 text-center">
                        <div class="counter-icon">
                            <i data-feather="smile" class="fea icon-md text-white-50"></i>
                        </div>
                        <h3 class="counter-value mt-3 text-white title-dark" data-target="1251"><count-up
                                :end-val="1251"></count-up></h3>
                        <h6 class="counter-head fw-normal mb-0 text-white-50 title-dark">Happy Client</h6>
                    </div><!--end counter box-->
                </div><!--end col-->

                <div class="col-lg-3 col-6">
                    <div class="counter-box rounded py-3 text-center">
                        <div class="counter-icon">
                            <i data-feather="award" class="fea icon-md text-white-50"></i>
                        </div>
                        <h3 class="counter-value mt-3 text-white title-dark" data-target="15"><count-up
                                :end-val="15"></count-up></h3>
                        <h6 class="counter-head fw-normal mb-0 text-white-50 title-dark">Award Won</h6>
                    </div><!--end counter box-->
                </div><!--end col-->

                <div class="col-lg-3 col-6">
                    <div class="counter-box rounded py-3 text-center">
                        <div class="counter-icon">
                            <i data-feather="coffee" class="fea icon-md text-white-50"></i>
                        </div>
                        <h3 class="counter-value mt-3 text-white title-dark" data-target="3261"><count-up
                                :end-val="3261"></count-up></h3>
                        <h6 class="counter-head fw-normal mb-0 text-white-50 title-dark">Cup of Coffee</h6>
                    </div><!--end counter box-->
                </div><!--end col-->

                <div class="col-lg-3 col-6">
                    <div class="counter-box rounded py-3 text-center">
                        <div class="counter-icon">
                            <i data-feather="thumbs-up" class="fea icon-md text-white-50"></i>
                        </div>
                        <h3 class="counter-value mt-3 text-white title-dark" data-target="36"><count-up
                                :end-val="36"></count-up></h3>
                        <h6 class="counter-head fw-normal mb-0 text-white-50 title-dark">Project Complete</h6>
                    </div><!--end counter box-->
                </div><!--end col-->
            </div><!--end row-->
        </div><!--end container-->
    </section><!--end section-->
    <!-- End Counter -->

</template>

<script setup>
import { onMounted } from 'vue';
import CountUp from 'vue-countup-v3';
import feather from 'feather-icons'

onMounted(() => {
    feather.replace()
})
</script>

<style lang="scss" scoped></style>