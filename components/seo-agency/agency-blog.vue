<template>
    <div class="container mt-100 mt-60">
        <div class="row justify-content-center">
            <div class="col-12">
                <div class="section-title text-center mb-4 pb-2">
                    <span class="badge rounded-pill bg-soft-primary h6">Blog</span>
                    <h4 class="title mt-2 mb-4">Latest News & Blogs</h4>
                    <p class="para-desc mx-auto text-muted mb-0">
                        <description />
                    </p>
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
                                class="card border-0 work-container m-3 work-primary work-border shadow overflow-hidden rounded-md">
                                <div class="card-body p-0">
                                    <a href="javascript:void(0)"><img :src="item.image" class="img-fluid work-image"
                                            alt=""></a>
                                    <div class="content text-center p-4">
                                        <h5 class="mb-0"><a href="javascript:void(0)" class="text-dark title">{{
                                            item.name }}</a></h5>
                                        <h6 class="text-muted tag mb-0">{{ item.type }}</h6>
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
import image from '../../assets/images/seo/1.jpg';
import image2 from '../../assets/images/seo/2.jpg';
import image3 from '../../assets/images/seo/3.jpg';
import image4 from '../../assets/images/seo/4.jpg';
import image5 from '../../assets/images/seo/5.jpg';
import image6 from '../../assets/images/seo/6.jpg';
import image7 from '../../assets/images/seo/7.jpg';

const modules = [Navigation, Autoplay]

const datas = ref([
    {
        image: image,
        name: 'Email Marketing',
        type: 'Branding'
    },
    {
        image: image2,
        name: 'Content Marketing',
        type: 'Branding'
    },
    {
        image: image3,
        name: 'Growth Marketing',
        type: 'Branding'
    },
    {
        image: image4,
        name: 'SEO Marketing',
        type: 'Branding'
    },
    {
        image: image5,
        name: 'Search Engine',
        type: 'Branding'
    },
    {
        image: image6,
        name: 'SMO Marketing',
        type: 'Branding'
    },
    {
        image: image7,
        name: 'Digital Marketing',
        type: 'Branding'
    },
])
</script>

<style lang="scss" scoped></style>