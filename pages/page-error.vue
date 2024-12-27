<template>
    <!-- ERROR PAGE -->
    <section class="bg-home d-flex bg-light align-items-center"
        :style="{'background-image' : 'url('+(image)+')', backgroundPosition: 'center'}">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-lg-6 col-md-10 text-center">
                    <img src="../assets/images/error.png" class="img-fluid" alt="">
                    <h1 class="mt-5 mb-4">Page Not Found</h1>
                    <p class="text-muted para-desc mx-auto">Explore and learn more about everything from machine
                        learning and global payments to scaling your team.</p>
                    <NuxtLink to="/" class="btn btn-primary mt-2">Go To Home</NuxtLink>
                </div><!--end col-->
            </div><!--end row-->
        </div><!--end container-->
    </section><!--end section-->
    <!-- ERROR PAGE -->
     <backto :back=true />
</template>

<script setup>
import image from '../../assets/images/bg/bg-lines-one.png';
import backto from '@/components/back-to-top.vue'

</script>

<style lang="scss" scoped></style>