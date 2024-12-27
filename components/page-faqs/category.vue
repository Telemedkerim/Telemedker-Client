<template>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-12">
                <div class="section-title text-center mb-4 pb-2">
                    <h4 class="title mb-4">Choose a category to quickly find</h4>
                    <p class="text-muted para-desc mx-auto mb-0"><description /></p>
                </div>
            </div><!--end col-->
        </div><!--end row-->

        <div class="row">
            <div v-for="item in datas" :key="item" class="col-lg-4 col-md-6 mt-4 pt-2">
                <div class="card border-0 text-center features feature-primary rounded p-4 shadow">
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
    </div><!--end container-->
</template>

<script setup>
import { ref } from 'vue';

const datas = ref([
    {
        icon: 'uil uil-book-open',
        name: 'Get started',
        desc: 'Composed in a pseudo-Latin language which more or less pseudo-Latin language corresponds.'
    },
    {
        icon: 'uil uil-bill',
        name: 'Pricing plan',
        desc: 'Composed in a pseudo-Latin language which more or less pseudo-Latin language corresponds.'
    },
    {
        icon: 'uil uil-thumbs-up',
        name: 'Sales questions',
        desc: 'Composed in a pseudo-Latin language which more or less pseudo-Latin language corresponds.'
    },
])
</script>

<style lang="scss" scoped></style>