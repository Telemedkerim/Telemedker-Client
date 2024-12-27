<template>
    <div class="container mt-100 mt-60">
        <div class="row justify-content-center">
            <div class="col-12">
                <div class="section-title text-center mb-4 pb-2">
                    <h6 class="text-primary">Brands</h6>
                    <h4 class="title mb-4">Featured Companies</h4>
                    <p class="text-muted para-desc mx-auto mb-0">
                        <description />
                    </p>
                </div>
            </div><!--end col-->
        </div><!--end row-->
    </div><!--end container-->

    <div class="container-fluid">
        <div class="row">
            <div v-for="item in datas" :key="item" class="col-lg-2 col-md-4 col-12 mt-4 pt-2">
                <a href="javascript:void(0)" class="feature-company rounded d-block text-center shadow p-4">
                    <img :src="item.image" class="avatar avatar-md-md" alt="">
                    <div class="content mt-4">
                        <h5 class="company-name text-dark mb-0">{{ item.name }}</h5>
                        <p class="text-muted mb-0"><i class="uil uil-map-marker me-1"></i>{{ item.city }}</p>
                        <small class="text-muted sub-title">{{ item.vacancy }}</small>
                    </div>
                </a>
            </div><!--end col-->
        </div><!--end row-->

        <div class="row mt-4 pt-2">
            <div class="col-12 text-center">
                <a href="javascript:void(0)" class="btn btn-primary">See All Companies <i data-feather="arrow-right"
                        class="fea icon-sm"></i></a>
            </div>
        </div>
    </div><!--end container-->
</template>

<script setup>
import { ref } from 'vue';
import image from '../../assets/images/brand/apple.svg';
import image2 from '../../assets/images/brand/black-berry.svg';
import image3 from '../../assets/images/brand/boomerang.svg';
import image4 from '../../assets/images/brand/pingdom.svg';
import image5 from '../../assets/images/brand/swiggy.svg';
import image6 from '../../assets/images/brand/volkswagen.svg';

const datas = ref([
    {
        image: image,
        name: 'Apple',
        city: 'New Mexico, USA',
        vacancy: '2 Vacancy'
    },
    {
        image: image2,
        name: 'Black Berry',
        city: 'New Mexico, USA',
        vacancy: '4 Vacancy'
    },
    {
        image: image3,
        name: 'Boomerang',
        city: 'New Mexico, USA',
        vacancy: '1 Vacancy'
    },
    {
        image: image4,
        name: 'Pingdom',
        city: 'New Mexico, USA',
        vacancy: '7 Vacancy'
    },
    {
        image: image5,
        name: 'Swiggy',
        city: 'New Mexico, USA',
        vacancy: '4 Vacancy'
    },
    {
        image: image6,
        name: 'Valkswagon',
        city: 'New Mexico, USA',
        vacancy: '3 Vacancy'
    },
])
</script>

<style lang="scss" scoped></style>