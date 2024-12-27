<template>
    <div class="container">
        <div class="row align-items-center">
            <div class="col-lg-5 col-md-6 col-12">
                <div class="position-relative">
                    <img src="../../assets/images/freelancer.jpg" class="img-fluid rounded shadow-md" alt="">
                    <div class="play-icon">
                        <a @click="toggle" data-type="youtube" data-id="yba7hPeTSjk" class="lightbox play-btn video-play-icon">
                            <i class="mdi mdi-play text-primary rounded-circle bg-white shadow"></i>
                        </a>
                    </div>
                </div>
            </div><!--end col-->

            <div class="col-lg-7 col-md-6 col-12 mt-4 pt-2 mt-sm-0 pt-sm-0">
                <div class="ms-lg-5">
                    <div class="section-title">
                        <span class="badge rounded-pill bg-soft-primary h6">About Me</span>
                        <h4 class="title fw-bold mt-2 mb-4">Better Design <br> Better Experience</h4>
                        <p class="para-desc text-muted"><description /></p>
                    </div>

                    <div v-for="(item, index) in datas" :key="index" :class="{'progress-box' : true, 'mt-4' : index > 0}">
                        <h6 class="title text-muted">{{item.name}}</h6>
                        <div class="progress">
                            <div class="progress-bar position-relative bg-primary" :style="{width: item.width}">
                                <div class="progress-value d-block text-muted h6">{{ item.width }}</div>
                            </div>
                        </div>
                    </div><!--end process box-->
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

const datas = ref([
    {
        name: 'WordPress',
        width: '84%'
    },
    {
        name: 'Angular / JavaScript',
        width: '79%'
    },
    {
        name: 'HTML',
        width: '95%'
    },
])

const toggle = () =>{
    isActive.value = !isActive.value;
}

</script>

<style lang="scss" scoped></style>