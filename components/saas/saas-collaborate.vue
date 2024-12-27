<template>
    <div class="container">
        <div class="row align-items-center">
            <div class="col-md-7 order-1 order-md-2">
                <div class="ms-lg-5">
                    <div class="section-title">
                        <h6 class="text-primary">Collaborate</h6>
                        <h4 class="title mb-4">Collaborate with your <br> team anytime, anywhere.</h4>
                        <p class="text-muted para-desc mb-0">
                            <description />
                        </p>
                    </div>

                    <ul class="list-unstyled text-muted mb-0 mt-4">
                        <li v-for="(item, index) in features" :key="index" class="list-inline-item me-lg-5 me-4">
                            <span class="text-primary h5 me-2">
                                <i class="uil uil-check-circle align-middle"></i>
                            </span>
                            {{ item }}
                        </li>
                    </ul>
                </div>
            </div><!--end col-->

            <div class="col-md-5 order-2 order-md-1 mt-4 mt-sm-0 pt-2 pt-sm-0">
                <div class="row align-items-center">
                    <div v-for="(image, index) in imagesLeft" :key="index" :class="{'col-lg-6 col-md-6 col-6' : true, 'mt-4 pt-2' : index > 0}">
                            <div class="card rounded border-0 shadow overflow-hidden">
                                <img :src="image" class="img-fluid" alt="image">
                            </div>
                    </div>

                    <div v-for="(image, index) in imagesRight" :key="index" :class="{'col-lg-6 col-md-6 col-6' : true, 'mt-4 pt-2' : index > 0}">
                            <div class="card rounded border-0 shadow overflow-hidden">
                                <img :src="image" class="img-fluid" alt="image">
                            </div>
                    </div>
                </div>
            </div><!--end col-->
        </div><!--end row-->
    </div><!--end container-->
</template>

<script setup>
import { ref } from 'vue';
import image from '../../assets/images/about/1.jpg';
import image2 from '../../assets/images/about/2.jpg';
import image3 from '../../assets/images/about/4.jpg';
import image4 from '../../assets/images/about/6.jpg';


const features = ref(["Organize your data", "Work with any team", "Business analytics", "Always in sync", "Embedded analytics"])


const imagesLeft = ref([image, image2])
const imagesRight = ref([image3, image4])
</script>

<style lang="scss" scoped></style>