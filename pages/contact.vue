<template>
    <navbar :navLight="'nav-light'" :logoLight=true :buttonLight=true />

    <!-- Home Start -->
    <section class="bg-half-170 bg-primary d-table w-100"
        :style="{ 'background-image': 'url(' + (image) + ')', backgroundPosition: 'center' }">
        <div class="container">
            <div class="row mt-5 justify-content-center">
                <div class="col-12">
                    <div class="heading-title text-center">
                        <h2 class="text-white title-dark title mb-3">Contact us</h2>
                        <p class="para-desc mx-auto text-white-50">Explore and learn more about everything from machine
                            learning and global payments to scaling your team.</p>
                    </div>
                </div><!--end col-->
            </div><!--end row-->
        </div><!--end container-->
    </section><!--end section-->
    <shape />
    <section class="section pb-0">
        <forms />
        <div class="container mt-100 mt-60">
            <contactitem />
        </div>
        <maps />
    </section>
    <footers />
    <backtotop />
</template>

<script setup>
import navbar from '@/components/navbar/navbar.vue';
import image from '../assets/images/bg/bg-contact.png';
import shape from '@/components/shape-light.vue';
import forms from '@/components/contact/form.vue';
import contactitem from '@/components/contact/contact-item.vue';
import maps from '@/components/contact/map.vue';
import footers from '@/components/footer/footer.vue';
import backtotop from '@/components/back-to-top.vue';

</script>

<style lang="scss" scoped></style>