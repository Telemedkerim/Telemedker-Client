<template>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-lg-10">
                <div class="features-absolute">
                    <div class="row">
                        <div v-for="item in datas" :key="item" class="col-lg-4 col-md-6 mt-4 pt-2">
                            <div
                                class="card border-0 text-center features feature-primary core-feature shadow rounded p-4">
                                <div class="icon text-center mx-auto rounded-md">
                                    <h3 class="mb-0"><i :class="item.icon"></i></h3>
                                </div>
                                <div class="card-body p-0 mt-4">
                                    <h5>{{ item.name }}</h5>
                                    <p class="text-muted mb-0">{{ item.desc }}</p>
                                </div>
                            </div>
                        </div><!--end col-->

                        <div class="col-12 mt-4 pt-2 text-center">
                            <a href="javascript:void(0)" class="text-primary h6">Explore features <i
                                    data-feather="arrow-right" class="fea icon-sm"></i></a>
                        </div><!--end col-->
                    </div><!--end row-->
                </div><!--end div-->
            </div><!--end col-->
        </div><!--end row-->
    </div><!--end container-->
</template>

<script setup>
import { ref } from 'vue';

const datas = ref([
    {
        icon: 'uil uil-airplay',
        name: 'Responsive Design',
        desc: 'Composed in a pseudo-Latin language which more or less corresponds.'
    },
    {
        icon: 'uil uil-bolt-alt',
        name: 'Unlimited Power',
        desc: 'Composed in a pseudo-Latin language which more or less corresponds.'
    },
    {
        icon: 'uil uil-pentagon',
        name: 'Professional Design',
        desc: 'Composed in a pseudo-Latin language which more or less corresponds'
    },
])
</script>

<style lang="scss" scoped></style>