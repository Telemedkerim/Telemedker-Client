<template>
    <navbar />

    <!-- Start -->
    <section class="bg-half-130 d-table bg-light w-100"
        :style="{ 'background-image': 'url(' + (image) + ')', backgroundPosition: 'center' }">
        <div class="container">
            <div class="row mt-5">
                <div class="col-12">
                    <div class="heading-title text-center">
                        <h3 class="title mb-2">Profile Settings</h3>
                        <h5 class="text-muted mb-0">@calvin_carlo</h5>
                    </div>
                </div><!--end col-->
            </div><!--end row-->
        </div><!--end container-->
    </section><!--end section-->
    <!-- End -->

    <section class="section">
        <settings />
    </section>
    <footers />
    <backtotop />
</template>

<script setup>
import navbar from '@/components/navbar/navbar.vue';
import image from '../../assets/images/bg/bg-lines-one.png';
import settings from '@/components/profile/profile-setting.vue';
import footers from '@/components/footer/footer.vue';
import backtotop from '@/components/back-to-top.vue'

</script>

<style lang="scss" scoped></style>