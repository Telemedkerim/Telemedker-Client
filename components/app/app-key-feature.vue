<template>
    <section class="section bg-primary" :style="{ 'background-image': 'url(' + (image) + ')' }">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-12">
                    <div class="section-title text-center mb-4 pb-2">
                        <h6 class="text-white title-dark">Features</h6>
                        <h4 class="title text-white title-dark mb-4">Application Key Features</h4>
                        <p class="text-white-50 para-desc mx-auto mb-0">
                            <description />
                        </p>
                    </div>
                </div><!--end col-->
            </div><!--end row-->

            <div class="row align-items-center">
                <div class="col-lg-4 col-md-6">
                    <div class="row text-md-end text-center">
                        <div v-for="item in datas" :key="item" class="col-12 mt-4 pt-2">
                            <div class="card features feature-light bg-transparent border-0 bg-transparent">
                                <div
                                    class="icon text-center ms-md-auto me-md-0 mx-auto bg-soft-light text-light rounded-circle">
                                    <h3 class="mb-0"><i :class="item.icon"></i></h3>
                                </div>
                                <div class="card-body p-0 mt-3">
                                    <h5 class="text-white title-dark">{{ item.name }}</h5>
                                    <p class="text-white-50 mb-0">{{ item.desc }}</p>
                                </div>
                            </div>
                        </div><!--end col-->
                    </div><!--end row-->
                </div><!--end col-->

                <div class="col-lg-4 d-none d-lg-block mt-4 pt-2">
                    <img src="../../assets/images/apps/1.png" class="img-fluid" alt="">
                </div><!--end col-->

                <div class="col-lg-4 col-md-6">
                    <div class="row text-md-start text-center">
                        <div v-for="item in datastwo" :key="item" class="col-12 mt-4 pt-2">
                            <div class="card features feature-light bg-transparent border-0 bg-transparent">
                                <div
                                    class="icon text-center me-md-auto ms-md-0 mx-auto bg-soft-light text-light rounded-circle">
                                    <h3 class="mb-0"><i :class="item.icon"></i></h3>
                                </div>
                                <div class="card-body p-0 mt-3">
                                    <h5 class="text-white title-dark">{{ item.name }}</h5>
                                    <p class="text-white-50 mb-0">{{ item.desc }}</p>
                                </div>
                            </div>
                        </div><!--end col-->
                    </div><!--end row-->
                </div><!--end col-->
            </div>
        </div><!--end container-->
    </section><!--end section-->
</template>

<script setup>
import { ref } from 'vue';
import image from '../../assets/images/bg/bg-lines-two.png';

const datas = ref([
    {
        icon: 'uil uil-lock-access',
        name: 'Easy access',
        desc: 'Composed in a pseudo-Latin language which more or less pseudo-Latin language corresponds.'
    },
    {
        icon: 'uil uil-clock',
        name: 'Track your spending',
        desc: 'Composed in a pseudo-Latin language which more or less pseudo-Latin language corresponds.'
    },
    {
        icon: 'uil uil-chart-line',
        name: 'Activity statistics',
        desc: 'Composed in a pseudo-Latin language which more or less pseudo-Latin language corresponds.'
    },
])

const datastwo = ref([
    {
        icon: 'uil uil-shield-check',
        name: 'Secure transfer',
        desc: 'Composed in a pseudo-Latin language which more or less pseudo-Latin language corresponds.'
    },
    {
        icon: 'uil uil-bolt-alt',
        name: 'Budget that works',
        desc: 'Composed in a pseudo-Latin language which more or less pseudo-Latin language corresponds.'
    },
    {
        icon: 'uil uil-stop-circle',
        name: 'Total control',
        desc: 'Composed in a pseudo-Latin language which more or less pseudo-Latin language corresponds.'
    },
])

</script>

<style lang="scss" scoped></style>