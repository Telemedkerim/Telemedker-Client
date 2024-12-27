<template>
    <div class="px-4 py-5 bg-dark bg-white-dark rounded shadow" :style="{ 'background-image': 'url(' + (image) + ')' }">
        <div class="row align-items-center">
            <div class="col-md-8">
                <div class="section-title">
                    <div class="d-flex">
                        <i class="uil uil-envelope-star display-4 text-white title-dark"></i>
                        <div class="flex-1 ms-md-4 ms-3">
                            <h4 class="fw-bold text-light title-dark mb-1">Subscribe to our newsletters</h4>
                            <p class="text-white-50 mb-0">Sign up and receive the latest tips via email.</p>
                        </div>
                    </div>
                </div>
            </div><!--end col-->

            <div class="col-md-4 mt-4 mt-sm-0">
                <div class="text-md-end ms-5 ms-sm-0">
                    <a href="javascript:void(0)" class="btn btn-primary">Subscribe Now</a>
                </div>
            </div><!--end col-->
        </div><!--end row-->
    </div>
</template>

<script setup>
import image from '../../assets/images/bg/bg-lines-two.png'
</script>

<style lang="scss" scoped></style>