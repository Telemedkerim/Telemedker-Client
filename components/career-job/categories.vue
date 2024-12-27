<template>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-12">
                <div class="section-title text-center mb-4 pb-2">
                    <h6 class="text-primary">New Openings</h6>
                    <h4 class="title mb-4">Popular Categories</h4>
                    <p class="text-muted para-desc mx-auto mb-0"><description /></p>
                </div>
            </div><!--end col-->
        </div><!--end row-->

        <div class="row">
            <div v-for="item in datas" :key="item" class="col-lg-3 col-md-4 col-12 mt-4 pt-2">
                <a href="javascript:void(0)"
                    class="job-catagories bg-catagory-primary position-relative overflow-hidden rounded d-block shadow p-4">
                    <h5 class="mb-0 title text-dark">{{ item.name }}</h5>
                    <small class="text-muted sub-title">{{ item.opening }}</small>
                    <div class="icons text-dark h2 mb-0">
                        <i :class="item.icon"></i>
                    </div>
                </a>
            </div>
        </div>
    </div><!--end container-->
</template>

<script setup>
import { ref } from 'vue';

const datas = ref([
    {
        name: 'Design & Art',
        opening: '7 Opening',
        icon: 'uil uil-pen'
    },
    {
        name: 'IT Engineer',
        opening: '1 Opening',
        icon: 'uil uil-airplay'
    },
    {
        name: 'Health Care',
        opening: '4 Opening',
        icon: 'uil uil-hospital'
    },
    {
        name: 'Teaching',
        opening: '2 Opening',
        icon: 'uil uil-book-reader'
    },
    {
        name: 'Management',
        opening: '8 Opening',
        icon: 'uil uil-analytics'
    },
    {
        name: 'Marketing',
        opening: '5 Opening',
        icon: 'uil uil-bill'
    },
    {
        name: 'Sales',
        opening: '2 Opening',
        icon: 'uil uil-usd-circle'
    },
    {
        name: 'Banking',
        opening: '6 Opening',
        icon: 'uil uil-chart-growth'
    },
])
</script>

<style lang="scss" scoped></style>