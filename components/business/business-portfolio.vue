<template>
    <div class="container">
        <div class="row">
            <div class="col-12">
                <div class="section-title mb-4 pb-2">
                    <span class="badge rounded-pill bg-soft-primary h6">Portfolio</span>
                    <h4 class="title mt-2 mb-4">Latest Projects & Works</h4>
                    <p class="para-desc text-muted mb-0"><description /></p>
                </div>
            </div><!--end col-->
        </div><!--end row-->
    </div><!--end container-->

    <div class="container-fluid mt-4 pt-2" id="slider-container">
        <div class="row slider-row-width">
            <div class="col-12">
                <div class="swiper-container">
                    <swiper class="swiper-wrapper" :autoplay="true" :spaceBetween="10" :pagination="{
                        clickable: true,
                    }" :breakpoints="{
                        '320': {
                            slidesPerView: 1,
                            spaceBetween: 0,
                        },
                        '640': {
                            slidesPerView: 1,
                            spaceBetween: 0,
                        },
                        '768': {
                            slidesPerView: 2,
                            spaceBetween: 0,
                        },
                        '1024': {
                            slidesPerView: 3,
                            spaceBetween: 0,
                        },
                        '1440': {
                            slidesPerView: 5,
                            spaceBetween: 0,
                        },
                    }" :modules="modules">
                        <swiper-slide v-for="item in datas" :key="item" class="swiper-slide">
                            <div
                                class="card border-0 work-container m-3 work-primary work-border overflow-hidden rounded-md">
                                <div class="card-body p-0">
                                    <a href="javascript:void(0)"><img :src="item.image" class="img-fluid work-image"
                                            alt=""></a>
                                    <div class="content p-4">
                                        <h5 class="mb-0"><a href="javascript:void(0)" class="text-dark title">{{
                                            item.title }}</a></h5>
                                        <h6 class="text-muted tag mb-0">{{ item.tag }}</h6>
                                    </div>
                                </div>
                            </div>
                        </swiper-slide>
                    </swiper>
                </div>
            </div><!--end col-->
        </div><!--end row-->
    </div><!--end container-->
</template>

<script setup>
import { ref } from 'vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation, Autoplay } from 'swiper/modules';
import image from '../../assets/images/work/1.jpg';
import image2 from '../../assets/images/work/2.jpg';
import image3 from '../../assets/images/work/3.jpg';
import image4 from '../../assets/images/work/4.jpg';
import image5 from '../../assets/images/work/5.jpg';
import image6 from '../../assets/images/work/6.jpg';
import image7 from '../../assets/images/work/7.jpg';
import image8 from '../../assets/images/work/8.jpg';
import image9 from '../../assets/images/work/9.jpg';

const modules = [Navigation, Autoplay]

const datas = ref([
    {
        image: image,
        title: 'Iphone mockup',
        tag: 'Branding'
    },
    {
        image: image2,
        title: 'Iphone mockup',
        tag: 'Branding'
    },
    {
        image: image3,
        title: 'Iphone mockup',
        tag: 'Branding'
    },
    {
        image: image4,
        title: 'Iphone mockup',
        tag: 'Branding'
    },
    {
        image: image5,
        title: 'Iphone mockup',
        tag: 'Branding'
    },
    {
        image: image6,
        title: 'Iphone mockup',
        tag: 'Branding'
    },
    {
        image: image7,
        title: 'Iphone mockup',
        tag: 'Branding'
    },
    {
        image: image8,
        title: 'Iphone mockup',
        tag: 'Branding'
    },
    {
        image: image9,
        title: 'Iphone mockup',
        tag: 'Branding'
    },
])
</script>

<style lang="scss" scoped></style>