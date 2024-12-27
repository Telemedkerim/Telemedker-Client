<template>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-12">
                <div class="section-title text-center mb-4 pb-2">
                    <h4 class="title mb-4">A Platform that Works for You</h4>
                    <p class="text-muted mx-auto para-desc mb-0">
                        <description />
                    </p>
                </div>
            </div><!--end col-->
        </div><!--end row-->

        <div class="row">
            <div v-for="item in datas" :key="item" class="col-lg-4 col-md-6 mt-4 pt-2">
                <div class="card features feature-primary core-feature shadow rounded p-4 text-center border-0">
                    <div class="icon text-center rounded-circle mx-auto">
                        <h3 class="mb-0"><i :class="item.icon"></i></h3>
                    </div>
                    <div class="card-body p-0 mt-4">
                        <a href="javascript:void(0)" class="title text-dark h5">{{ item.name }}</a>
                        <p class="text-muted mt-2 mb-0">{{ item.desc }}</p>
                    </div>
                </div>
            </div><!--end col-->
        </div><!--end row-->
    </div><!--end container-->
</template>

<script setup>
import { ref } from 'vue';

const datas = ref([
    {
        icon: 'uil uil-bitcoin',
        name: 'Risk-Free Trade',
        desc: 'Composed in a pseudo-Latin language which more or less pseudo- Latin language corresponds.'
    },
    {
        icon: 'uil uil-card-atm',
        name: 'Demo Account',
        desc: 'Composed in a pseudo-Latin language which more or less pseudo - Latin language corresponds.'
    },
    {
        icon: 'uil uil-credit-card-search',
        name: 'Market',
        desc: 'Composed in a pseudo-Latin language which more or less pseudo - Latin language corresponds.'
    },
    {
        icon: 'uil uil-user',
        name: 'Personal Manager',
        desc: 'Composed in a pseudo-Latin language which more or less pseudo - Latin language corresponds.'
    },
    {
        icon: 'uil uil-clock',
        name: 'No Delays',
        desc: 'Composed in a pseudo-Latin language which more or less pseudo - Latin language corresponds.'
    },
    {
        icon: 'uil uil-money-bill-slash',
        name: 'No Commission',
        desc: 'Composed in a pseudo-Latin language which more or less pseudo - Latin language corresponds.'
    },
])

</script>

<style lang="scss" scoped></style>