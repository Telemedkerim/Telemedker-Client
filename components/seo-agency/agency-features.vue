<template>
    <div class="container">
        <div class="row">
            <div class="col-12">
                <div class="section-title mb-4 pb-2">
                    <h4 class="title mb-4">Discover our expertise <br> that you need</h4>
                    <p class="para-desc text-muted mb-0"><description /></p>
                </div>
            </div><!--end col-->
        </div><!--end row-->

        <div class="row justify-content-center">
            <div v-for="item in datas" :key="item" class="col-lg-4 col-md-6 mt-4 pt-2">
                <div class="card border-0 features feature-primary rounded">
                    <div class="icon text-center rounded-md">
                        <h3 class="mb-0"><i :class="item.icon"></i></h3>
                    </div>

                    <div class="card-body p-0 mt-4">
                        <h5>{{item.name}}</h5>
                        <p class="text-muted mb-0">{{ item.desc }}</p>
                    </div>
                </div>
            </div><!--end col-->

            <div class="col-12 mt-5 pt-2">
                <a href="javascript:void(0)" class="text-primary h6 mb-0">Explore all features <i
                        data-feather="arrow-right" class="fea icon-sm"></i></a>
            </div><!--end col-->
        </div><!--end row-->
    </div><!--end container-->
</template>

<script setup>
import { ref } from 'vue';

const datas = ref([
    {
        icon: 'uil uil-globe',
        name: 'Website Optimization',
        desc: 'Composed in a pseudo-Latin language which more or less pseudo-Latin language corresponds.'
    },
    {
        icon: 'uil uil-social-distancing',
        name: 'Social Media Marketing',
        desc: 'Composed in a pseudo-Latin language which more or less pseudo-Latin language corresponds.'
    },
    {
        icon: 'uil uil-link',
        name: 'Link Building Service',
        desc: 'Composed in a pseudo-Latin language which more or less pseudo-Latin language corresponds.'
    },
    {
        icon: 'uil uil-transaction',
        name: 'Pay Per Click Advertising',
        desc: 'Composed in a pseudo-Latin language which more or less pseudo-Latin language corresponds.'
    },
    {
        icon: 'uil uil-search',
        name: 'Search Engine Marketing',
        desc: 'Composed in a pseudo-Latin language which more or less pseudo-Latin language corresponds.'
    },
    {
        icon: 'uil uil-clipboard-alt',
        name: 'Content Marketing',
        desc: 'Composed in a pseudo-Latin language which more or less pseudo-Latin language corresponds.'
    },
])
</script>

<style lang="scss" scoped></style>