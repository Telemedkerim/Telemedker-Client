<template>
    <div class="container">
        <div class="row align-items-center">
            <div class="col-md-7">
                <div class="me-lg-5">
                    <div class="section-title">
                        <h6 class="text-primary">Analytics</h6>
                        <h4 class="title mb-4">Analyze your data with <br> our analysis tools.</h4>
                        <p class="text-muted para-desc mb-0">
                            <description />
                        </p>
                    </div>

                    <div class="row">
                        <div v-for="(feature, index) in features" :key="index" class="col-md-6 mt-4 pt-2">
                            <div class="card features feature-primary bg-transparent border-0">
                                <div class="icon text-center rounded-md">
                                    <h3 class="mb-0"><i :class="feature.icon"></i></h3>
                                </div>
                                <div class="card-body p-0 mt-4">
                                    <h5>{{ feature.title }}</h5>
                                    <p class="text-muted mb-0">{{ feature.desc }}</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="mt-4 pt-2">
                        <a href="javascript:void(0)" class="btn btn-soft-primary">Try for free <i
                                data-feather="arrow-right" class="fea icon-sm"></i></a>
                    </div>
                </div>
            </div><!--end col-->

            <div class="col-md-5 mt-4 mt-sm-0 pt-2 pt-sm-0">
                <img src="../../assets/images/saas/1.png" class="img-fluid" alt="">
            </div><!--end col-->
        </div><!--end row-->
    </div><!--end container-->
</template>

<script setup>
import { ref } from 'vue';

const features = ref([
    {
        icon: 'uil uil-bolt-alt',
        title: 'Unlimited Power',
        desc: 'Composed in a pseudo-Latin language which more or less corresponds.'
    },
    {
        icon: 'uil uil-pentagon',
        title: 'Professional Design',
        desc: 'Composed in a pseudo-Latin language which more or less corresponds.'
    }
])
</script>

<style lang="scss" scoped></style>