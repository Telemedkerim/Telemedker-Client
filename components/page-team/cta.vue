<template>
    <div class="rounded py-5 bg-primary shadow"
        :style="{ 'background-image': 'url(' + (image) + ')', backgroundPosition: 'center center' }">
        <div class="container py-md-4">
            <div class="row align-items-center">
                <div class="col-lg-4 col-md-5">
                    <img src="../../assets/images/client/ceo.jpg" class="img-fluid rounded shadow" alt="">
                </div><!--end col-->

                <div class="col-lg-8 col-md-7 mt-4 mt-sm-0 pt-2 pt-sm-0">
                    <div class="section-title ms-lg-4">
                        <h4 class="title fw-bold text-white title-dark mb-4">Our Director’s Message</h4>
                        <p class="text-white-50 para-desc">With a great variety of layouts and sections to build a
                            complete website. Inertia offers a modern design that feels fresh and professional. Code
                            examples for core and new components. Class utilities with new functionality.</p>
                        <h5 class="text-light title-dark mt-4">- Cristina Murphy <span
                                class="text-white-50 h6 ms-2">C.E.O</span></h5>
                        <img src="../../assets/images/client/sign.png" height="36" alt="">
                    </div>
                </div><!--end col-->
            </div><!--end row-->
        </div><!--end container-->
    </div>
</template>

<script setup>
import image from '../../assets/images/bg/bg-lines-two.png'

</script>

<style lang="scss" scoped></style>