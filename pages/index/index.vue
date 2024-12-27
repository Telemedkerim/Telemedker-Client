<template>
    <navbar />

    <!-- Hero Start -->
    <section class="bg-half-130 d-table w-100 overflow-hidden"
        :style="{ 'background-image': 'url(' + (image) + ')', backgroundPosition: 'top' }">
        <div class="container">
            <div class="row mt-5 align-items-center pt-5">
                <div class="col-lg-6 col-md-7">
                    <div class="heading-title">
                        <h1 class="heading fw-bold mb-3">Build clean apps <br> with your web skills</h1>
                        <p class="para-desc text-muted">
                            <description />
                        </p>
                        <div class="watch-video mt-4 pt-2">
                            <a href="javascript:void(0)" class="btn btn-primary mb-2">Get Started</a>
                            <a @click="toggle" data-type="youtube" data-id="yba7hPeTSjk"
                                class="lightbox video-play-icon watch text-dark mb-2 ms-2"><i
                                    class="mdi mdi-play play-icon-circle text-center d-inline-block me-2 rounded-circle text-white title-dark position-relative play play-iconbar"></i>
                                Watch Now !</a>
                        </div>
                    </div>
                </div><!--end col-->

                <div class="col-lg-6 col-md-5 mt-4 pt-2 mt-sm-0 pt-sm-0">
                    <div class="bg-saas-shape position-relative">
                        <img src="../../assets/images/home1.png" class="mx-auto d-block" alt="">
                    </div>
                </div><!--end col-->
            </div><!--end row-->
        </div><!--end container-->
    </section><!--end section-->
    <!-- Hero End -->

    <div v-if="!isActive" class="modal-video" tabindex="-1" role="dialog" aria-modal="true"
        aria-label="You just opened the modal video">
        <div class="modal-video-body">
            <div class="modal-video-inner">
                <div class="modal-video-movie-wrap">
                    <iframe width="460" height="230" :src="`https://www.youtube.com/embed/${youtubeId}?feature=oembed`"
                        frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                        allowfullscreen="" tabindex="-1">
                    </iframe>
                    <a @click="toggle" class="mdi mdi-close m-3 h4 position-class title-icon"> </a>
                </div>
            </div>
        </div>
    </div>

    <div class="container py-4">
        <div class="row justify-content-center">
            <logos />
        </div>
    </div>

    <section class="section">
        <principle />
        <div class="container mt-100 mt-60">
            <services />
        </div>
        <div class="container mt-100 mt-60">
            <subscribe />
        </div>
        <div class="container mt-100 mt-60">
            <pricing />
        </div>
    </section>
    <footers />
    <backtotop />
</template>

<script setup>
import { ref } from 'vue';
import navbar from '@/components/navbar/navbar.vue';
import image from '../../assets/images/bg/bg-index.png';
import logos from '@/components/company-logos.vue';
import principle from '@/components/our-principles.vue';
import services from '@/components/principel-services.vue';
import subscribe from '@/components/subscribe.vue';
import pricing from '@/components/pricing.vue';
import footers from '@/components/footer/footer.vue';
import backtotop from '@/components/back-to-top.vue'

const isActive = ref(true);
const youtubeId = ref('yba7hPeTSjk');

const toggle = () => {
    isActive.value = !isActive.value;
}

</script>

<style lang="scss" scoped></style>