<template>
    <navbar />

    <!-- Hero Start -->
    <section class="bg-half-170 d-table w-100 overflow-hidden" id="home">
        <div class="container">
            <div class="row justify-content-center pt-5">
                <div class="col-12">
                    <div class="heading-title text-center">
                        <h2 class="title mb-3">Our Services</h2>
                        <p class="para-desc mx-auto text-muted">Specify can be plugged to several services from design
                            to development. Allowing you to shape it to your own workflow.</p>
                    </div>
                </div><!--end col-->
            </div><!--end row-->
        </div><!--end container-->
        <div class="container mt-5">
            <div class="bg-half-260 d-table w-100 rounded-md shadow-lg"
                :style="{ 'background-image': 'url(' + (image) + ')', backgroundPosition: 'center center' }">
                <div class="play-icon">
                    <a @click="toggle" data-type="youtube" data-id="yba7hPeTSjk"
                        class="lightbox play-btn video-play-icon">
                        <i class="mdi mdi-play text-primary rounded-circle bg-white shadow-lg"></i>
                    </a>
                </div>
            </div><!--end-->
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
    <section class="section pt-0">
        <div class="container">
            <features :services=true />
        </div>
        <div class="container-fluid mt-100 mt-60">
            <ClientOnly>
                <cta />
            </ClientOnly>
        </div>
        <div class="container mt-100 mt-60">
            <sponsors />
        </div>
    </section>
    <footers />
    <backtotop />
</template>

<script setup>
import { ref } from 'vue';
import navbar from '@/components/navbar/navbar.vue';
import image from '../assets/images/bg/bg-services.jpg';
import features from '@/components/business/business-services.vue';
import cta from '@/components/career-job/career-cta.vue';
import sponsors from '@/components/page-services/sponsors.vue';
import footers from '@/components/footer/footer.vue';
import backtotop from '@/components/back-to-top.vue'

const isActive = ref(true);
const youtubeId = ref('yba7hPeTSjk');

const toggle = () => {
    isActive.value = !isActive.value;
}
</script>

<style lang="scss" scoped></style>