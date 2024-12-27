<template>
    <div class="row">
        <div v-for="item in datas" :key="item" :class="item.class">
            <div class="card border-0 text-center features feature-primary">
                <div class="icon text-center mx-auto rounded-circle">
                    <h3 class="mb-0"><i :class="item.icon"></i></h3>
                </div>

                <div class="card-body p-0 mt-4">
                    <h5>{{ item.name }}</h5>
                    <p class="text-muted">{{ item.desc }}</p>
                    <div class="mt-2">
                        <a href="javascript:void(0)" class="link">Read More <i data-feather="arrow-right"
                                class="fea icon-sm"></i></a>
                    </div>
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
        name: 'Responsive Layout',
        desc: 'Composed in a pseudo-Latin language which more or less pseudo-Latin language corresponds.',
        class: 'col-lg-4 col-md-6'
    },
    {
        icon: 'uil uil-browser',
        name: 'Browser Compatibility',
        desc: 'Composed in a pseudo-Latin language which more or less pseudo-Latin language corresponds.',
        class: 'col-lg-4 col-md-6 mt-4 mt-sm-0 pt-2 pt-sm-0'
    },
    {
        icon: 'uil uil-eye',
        name: 'Retina Ready',
        desc: 'Composed in a pseudo-Latin language which more or less pseudo-Latin language corresponds.',
        class: 'col-lg-4 col-md-6 mt-4 mt-lg-0 pt-2 pt-lg-0'
    },
])

</script>

<style lang="scss" scoped></style>