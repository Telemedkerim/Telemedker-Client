<template>
    <div class="row justify-content-center">
        <div class="col-12">
            <div class="section-title text-center mb-4 pb-2">
                <h6 class="text-primary">Sponsors</h6>
                <h4 class="title mb-4">Less work, More flow.</h4>
                <p class="text-muted para-desc mx-auto mb-0"><description /></p>
            </div>
        </div><!--end col-->
    </div><!--end row-->

    <div class="row justify-content-center">
        <div class="col-lg-8 mt-4">
            <ul class="list-unstyled text-center mb-0">
                <li v-for="item in datas" :key="item" class="list-inline-item m-2">
                    <div class="d-flex align-items-center rounded-lg shadow py-3 px-4">
                        <img :src="item.image" class="avatar avatar-ex-sm" alt="">
                        <h6 class="mb-0 ms-2">{{ item.name }}</h6>
                    </div>
                </li>
            </ul>
        </div>
    </div><!--end row-->
</template>

<script setup>
import { ref } from 'vue';
import image from '../../assets/images/brand/airbnb.svg';
import image2 from '../../assets/images/brand/apple.svg';
import image3 from '../../assets/images/brand/bayer.svg';
import image4 from '../../assets/images/brand/black-berry.svg';
import image5 from '../../assets/images/brand/boomerang.svg';
import image6 from '../../assets/images/brand/volkswagen.svg';
import image7 from '../../assets/images/brand/box.svg';
import image8 from '../../assets/images/brand/layout.svg';
import image9 from '../../assets/images/brand/pingdom.svg';
import image10 from '../../assets/images/brand/swiggy.svg';

const datas = ref([
    { image: image, name: 'Airbnb' },
    { image: image2, name: 'Apple' },
    { image: image3, name: 'Bayer' },
    { image: image4, name: 'Black Berry' },
    { image: image5, name: 'Boomerang' },
    { image: image6, name: 'Volkswagen' },
    { image: image7, name: 'Box' },
    { image: image8, name: 'Layout' },
    { image: image9, name: 'Pingdom' },
    { image: image10, name: 'Swiggy' },
])
</script>

<style lang="scss" scoped></style>