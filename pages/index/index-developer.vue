<template>
    <navbar />

    <!-- Start -->
    <section class="bg-half-170 d-table w-100" :style="{ 'background-image': 'url(' + (image) + ')' }">
        <div class="container">
            <div class="row align-items-center mt-5 mt-lg-0">
                <div class="col-lg-5 col-md-6">
                    <div class="heading-title">
                        <h4 class="heading fw-bold">Creative & modern UI component for <br><span class="wrap">
                                <vue-typewriter-effect
                                    class="typewrite text-primary position-relative text-type-element"
                                    data-period="2000" :strings='["developer", "designer", "freelancer"]' />
                            </span></h4>
                        <p class="text-muted para-desc mb-0"><description /></p>
                        <div class="watch-video mt-4 pt-2">
                            <a href="javascript:void(0)" class="btn btn-primary">Learn More <i
                                    class="mdi mdi-chevron-right"></i></a>
                            <a @click="toggle" data-type="youtube" data-id="yba7hPeTSjk"
                                class="lightbox video-play-icon watch text-dark ms-2"><i
                                    class="mdi mdi-play play-icon-circle text-center d-inline-block me-2 rounded-circle text-white position-relative play play-iconbar"></i>
                                Watch now!</a>
                        </div>
                    </div>
                </div><!--end col-->

                <div class="col-lg-7 col-md-6">
                    <img src="../../assets/images/svg/pixeltrue-web-development-1.svg" class="img-fluid" alt="">
                </div><!--end col-->
            </div><!--end row-->
        </div><!--end container-->
    </section><!--end section-->
    <!-- End -->

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

    <section class="py-4 bg-light">
        <div class="container">
            <div class="row justify-content-center">
                <logos />
            </div>
        </div>
    </section>

    <section class="section">
        <features />
        <div class="container mt-100 mt-60">
            <detail />
        </div>
    </section>
    <section class="section bg-light">
        <portfolio />
    </section>
    <section class="section">
        <subscribe />
    </section>
    <footers />
    <backtotop />
</template>

<script setup>
import { ref } from 'vue'
import navbar from '@/components/navbar/navbar.vue';
import image from '../../assets/images/bg/bg-developer.png';
import logos from '@/components/company-logos.vue';
import features from '@/components/developer/dev-feature.vue';
import detail from '@/components/developer/dev-detail.vue';
import portfolio from '@/components/developer/dev-portfolio.vue';
import subscribe from '@/components/developer/dev-subsctibe.vue';
import footers from '@/components/footer/footer.vue';
import backtotop from '@/components/back-to-top.vue'
import VueTypewriterEffect from "vue-typewriter-effect";

const isActive = ref(true);
const youtubeId = ref('yba7hPeTSjk');

const toggle = () => {
    isActive.value = !isActive.value;
}

</script>

<style lang="scss" scoped></style>