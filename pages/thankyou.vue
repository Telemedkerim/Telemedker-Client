<template>
    <section class="bg-home d-flex bg-light align-items-center"
        :style="{ 'background-image': 'url(' + (image) + ')', backgroundPosition: 'center center' }">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-lg-6 col-md-10 text-center">
                    <div class="features feature-primary text-center">
                        <div class="icon text-center rounded-circle mx-auto" style="height: 90px; width:90px;">
                            <h1 class="mb-0"><i class="uil uil-thumbs-up" style="line-height: 90px;"></i></h1>
                        </div>
                    </div>
                    <h1 class="my-4 fw-bold">Thank You</h1>
                    <p class="text-muted para-desc mx-auto">Explore and learn more about everything from machine
                        learning and global payments to scaling your team.</p>
                    <NuxtLink to="/" class="btn btn-soft-primary mt-3">Go To Home</NuxtLink>
                </div><!--end col-->
            </div><!--end row-->
        </div><!--end container-->
    </section><!--end section-->
</template>

<script setup>
import image from '../../assets/images/bg/bg-lines-one.png'

</script>

<style lang="scss" scoped></style>