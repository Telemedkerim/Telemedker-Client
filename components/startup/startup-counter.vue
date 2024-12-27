<template>
    <div class="row justify-content-center">
        <div class="col-lg-9">
            <div class="row" id="counter">
                <div class="col-md-4 col-6">
                    <div class="counter-box text-center">
                        <h1 class="mb-0"><span class="counter-value" data-target="9"><count-up
                                    :end-val="9"></count-up></span></h1>
                        <h6 class="counter-head text-muted">Year of business</h6>
                    </div><!--end counter box-->
                </div>

                <div class="col-md-4 col-6">
                    <div class="counter-box text-center">
                        <h1 class="mb-0 d-flex justify-content-center"><span class="counter-value"
                                data-target="106"><count-up :end-val="106"></count-up></span>k+</h1>
                        <h6 class="counter-head text-muted">Number of Sales</h6>
                    </div><!--end counter box-->
                </div>

                <div class="col-md-4 mt-4 pt-2 mt-sm-0 pt-sm-0">
                    <div class="counter-box text-center">
                        <h1 class="mb-0 d-flex justify-content-center"><span class="counter-value"
                                data-target="93"><count-up :end-val="93"></count-up></span>%</h1>
                        <h6 class="counter-head text-muted">Happy Customers</h6>
                    </div><!--end counter box-->
                </div>
            </div><!--end row-->
        </div>
    </div>
</template>

<script setup>
import CountUp from 'vue-countup-v3'
</script>

<style lang="scss" scoped></style>