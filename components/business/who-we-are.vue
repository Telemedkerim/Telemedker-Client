<template>
    <div class="container">
        <div class="row align-items-center">
            <div class="col-md-6">
                <div class="position-relative me-lg-5">
                    <img src="../../assets/images/business/about.png" class="img-fluid" alt="">
                    <div class="play-icon">
                        <a @click="toggle" data-type="youtube" data-id="yba7hPeTSjk" class="lightbox play-btn video-play-icon">
                            <i class="mdi mdi-play text-primary rounded-circle bg-white shadow"></i>
                        </a>
                    </div>
                </div>
            </div><!--end col-->

            <div class="col-md-6 mt-4 mt-sm-0 pt-4 pt-sm-0">
                <div class="section-title">
                    <span class="badge rounded-pill bg-soft-primary">Who we are ?</span>
                    <h4 class="title mt-3 mb-4">Professional Investment & <br> strategy company</h4>
                    <p class="text-muted para-desc mb-0">Dummy text is also used to demonstrate the appearance of
                        different typefaces and layouts, and in general the content of dummy text is nonsensical.</p>
                    <ul class="list-unstyled text-muted mb-0 mt-4">
                        <li v-for="item in datas" :key="item" class="list-inline-item me-lg-5 me-4"><span class="text-primary h5 me-2"><i
                                    class="uil uil-check-circle align-middle"></i></span>{{ item }}</li>
                       
                    </ul>
                    <div class="mt-4">
                        <a href="javascript:void(0)" class="btn btn-primary">See More <i data-feather="arrow-right"
                                class="fea icon-sm"></i></a>
                    </div>
                </div>
            </div><!--end col-->
        </div><!--end row-->
    </div><!--end container-->

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
</template>

<script setup>
import { ref } from 'vue';

const isActive = ref(true);
const youtubeId = ref('yba7hPeTSjk');

const datas = ref(['Organize your data', 'Work with any team', 'Business analytics'])

const toggle = () => {
    isActive.value = !isActive.value;
}

</script>

<style lang="scss" scoped></style>