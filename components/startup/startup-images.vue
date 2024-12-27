<template>
    <div id="grid" class="column-4">
        <div v-for="item in images" :key="item" class="mb-3">
            <div class="card border-0 position-relative d-block shadow overflow-hidden rounded">
                <div class="card-body p-0">
                    <img :src="item" class="img-fluid" alt="work-image">
                </div>
            </div>
        </div><!--end col-->
    </div><!--end row-->
</template>

<script setup>
import { ref } from 'vue';
import image from '../../assets/images/about/1.jpg';
import image2 from '../../assets/images/about/2.jpg';
import image3 from '../../assets/images/about/3.jpg';
import image4 from '../../assets/images/about/4.jpg';
import image5 from '../../assets/images/about/8.jpg';
import image6 from '../../assets/images/about/6.jpg';
import image7 from '../../assets/images/about/5.jpg';
import image8 from '../../assets/images/about/7.jpg';

const images = ref([image, image5, image2, image7, image3, image6, image4, image8])

</script>

<style lang="scss" scoped></style>