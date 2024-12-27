<template>
    <template v-if="logo">
        <div v-for="item in images" :key="item" class="col-lg-3 col-md-4 col-6 text-center py-4">
            <img :src="item" class="avatar avatar-client" alt="">
        </div><!--end col-->
    </template>
    <template v-else>
        <div v-for="image in images.slice(0, 6)" :key="image" class="col-lg-2 col-md-2 col-6 text-center py-4">
            <img :src="image" class="avatar avatar-client" alt="">
        </div><!--end col-->
    </template>

</template>

<script setup>
import { ref, defineProps } from 'vue'
import image from '../assets/images/client/amazon.svg';
import image2 from '../assets/images/client/google.svg';
import image3 from '../assets/images/client/lenovo.svg';
import image4 from '../assets/images/client/paypal.svg';
import image5 from '../assets/images/client/shopify.svg';
import image6 from '../assets/images/client/spotify.svg';
import image7 from '../assets/images/client/facebook.svg';
import image8 from '../assets/images/client/instagram.svg';

defineProps({
    logo: {
        type: Boolean,
        required: true
    }
})

const images = ref([image, image2, image3, image4, image5, image6, image7, image8])
</script>

<style lang="scss" scoped></style>