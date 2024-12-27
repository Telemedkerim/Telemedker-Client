<template>
    <div class="row justify-content-center">
        <div class="col-12">
            <div class="section-title text-center mb-4 pb-2">
                <h4 class="title mt-3 mb-4">What i offer ?</h4>
                <p class="para-desc mx-auto text-muted mb-0">
                    <description />
                </p>
            </div>
        </div><!--end col-->
    </div><!--end row-->

    <div class="row">
        <div v-for="item in datas" :key="item" class="col-lg-4 col-md-6 mt-4 pt-3">
            <div class="card border-0 text-center features feature-primary">
                <div class="icon text-center mx-auto rounded-md">
                    <h3 class="mb-0"><i :class="item.icon"></i></h3>
                </div>

                <div class="card-body p-0 mt-4">
                    <h5>{{ item.name }}</h5>
                    <p class="text-muted mb-0">{{ item.desc }}</p>
                </div>
            </div>
        </div><!--end col-->
    </div><!--end row-->
</template>

<script setup>
import { ref } from 'vue';

const datas = ref([
    {
        icon: 'uil uil-airplay',
        name: 'UX / UI Design',
        desc: 'Composed in a pseudo-Latin language which more or less pseudo-Latin language corresponds.'
    },
    {
        icon: 'uil uil-mobile-android',
        name: 'Ios App Designer',
        desc: 'Composed in a pseudo-Latin language which more or less pseudo-Latin language corresponds.'
    },
    {
        icon: 'uil uil-shutter',
        name: 'Photography',
        desc: 'Composed in a pseudo-Latin language which more or less pseudo-Latin language corresponds.'
    },
    {
        icon: 'uil uil-image-resize-square',
        name: 'Graphic Designer',
        desc: 'Composed in a pseudo-Latin language which more or less pseudo-Latin language corresponds.'
    },
    {
        icon: 'uil uil-user',
        name: 'Customer Care',
        desc: 'Composed in a pseudo-Latin language which more or less pseudo-Latin language corresponds.'
    },
    {
        icon: 'uil uil-shield-check',
        name: 'Web Security',
        desc: 'Composed in a pseudo-Latin language which more or less pseudo-Latin language corresponds.'
    },
])

</script>

<style lang="scss" scoped></style>