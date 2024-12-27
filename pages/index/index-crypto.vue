<template>
    <navbar :logoLight=true :navLight="'nav-light'" :buttonLight=true />

    <!-- Start -->
    <section class="bg-home d-flex align-items-center" :style="{ 'background-image': 'url(' + (image) + ')' }">
        <div class="container">
            <div class="row mt-5">
                <div class="col-12">
                    <div class="heading-title">
                        <h4 class="display-3 text-white title-dark mb-3 fw-bold">Profitability <br> on the Rise</h4>
                        <p class="text-white-50 para-desc mb-0">
                            <description />
                        </p>

                        <div class="mt-4 pt-2 align-items-center">
                            <a href="javascript:void(0)" class="btn btn-lg btn-primary">Start Trading</a>
                            <p class="text-white-50 mb-0 mt-3"><i class="uil uil-exclamation-circle"></i> It's free to
                                use</p>
                        </div>
                    </div>
                </div><!--end col-->
                <div class="home-shape-arrow">
                    <a href="#roadmap" class="btn btn-icon btn-pills btn-lg btn-footer scroll-down"><i
                            data-feather="arrow-down" class="icons"></i></a>
                </div>
            </div><!--end row-->
        </div><!--end container-->
    </section><!--end section-->
    <!-- End -->
    <section class="section">
        <experience />
    </section>
    <section class="section bg-light" id="roadmap">
        <ClientOnly>
            <success />
        </ClientOnly>
    </section>

    <section class="section">
        <platformwork />
        <div class="container mt-4">
            <div class="row justify-content-center">
                <logos />
            </div>
        </div>
        <div class="container mt-100 mt-60">
            <account />
        </div>
    </section>
    <download />
    <footers :footerbar="'footer-bar'" />
    <backtotop />
</template>

<script setup>
import { onMounted } from 'vue';
import navbar from '@/components/navbar/navbar.vue';
import image from '../../assets/images/bg/bg-crypto.jpg';
import feather from 'feather-icons';
import experience from '@/components/crypto/smooth-experience.vue';
import success from '@/components/crypto/success-roadmap.vue';
import platformwork from '@/components/crypto/platform-work.vue';
import logos from '@/components/company-logos.vue';
import account from '@/components/crypto/account-registration.vue';
import download from '@/components/app/app-download.vue';
import footers from '@/components/footer/footer.vue';
import backtotop from '@/components/back-to-top.vue'

onMounted(() => {
    feather.replace()
})

</script>

<style lang="scss" scoped></style>