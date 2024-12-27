<template>
    <div class="row justify-content-center">
        <div class="col-12">
            <div class="section-title text-center mb-4 pb-2">
                <h6 class="text-primary">Our Team</h6>
                <h4 class="title mb-4">Creative Team Members</h4>
                <p class="text-muted para-desc mx-auto mb-0"><description /></p>
            </div>
        </div><!--end col-->
    </div><!--end row-->

    <div class="row justify-content-center">
        <div class="col-lg-9 mt-4">
            <ul class="list-unstyled text-center mb-0">
                <li v-for="item in datas" :key="item" class="list-inline-item m-2">
                    <a href="javascript:void(0)"><img :src="item"
                            class="rounded-circle avatar avatar-medium shadow-md" alt=""></a>
                </li>
            </ul>
        </div><!--end col-->
    </div><!--end row-->
</template>

<script setup>
import { ref } from 'vue';
import image from '../../assets/images/client/01.jpg';
import image2 from '../../assets/images/client/02.jpg';
import image3 from '../../assets/images/client/03.jpg';
import image4 from '../../assets/images/client/04.jpg';
import image5 from '../../assets/images/client/05.jpg';
import image6 from '../../assets/images/client/06.jpg';
import image7 from '../../assets/images/client/07.jpg';
import image8 from '../../assets/images/client/08.jpg';

const datas = ref([image, image2, image3, image4, image5, image6, image7, image8])

</script>

<style lang="scss" scoped></style>