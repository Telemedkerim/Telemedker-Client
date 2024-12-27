<template>
    <div class="container">
        <div class="row">
            <div class="col-12">
                <div class="section-title mb-4 pb-2">
                    <span class="badge rounded-pill bg-soft-primary">Features</span>
                    <h4 class="title mt-3 mb-4">Landflow makes designing easy <br> and performance fast</h4>
                    <p class="para-desc text-muted mb-0"><description /></p>
                </div>
            </div><!--end col-->
        </div><!--end row-->

        <div class="row">
            <div v-for="item in datas" :key="item" class="col-lg-4 col-md-6 mt-4 pt-2">
                <div class="card border-0 features feature-primary">
                    <div class="icon text-center rounded-md">
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
    </div><!--end container-->
</template>

<script setup>
import { ref } from 'vue';

const datas = ref([
    {
        icon: 'uil uil-airplay',
        name: 'Responsive Layout',
        desc: 'Composed in a pseudo-Latin language which more or less pseudo-Latin language corresponds.'
    },
    {
        icon: 'uil uil-browser',
        name: 'Browser Compatibility',
        desc: 'Composed in a pseudo-Latin language which more or less pseudo-Latin language corresponds.'
    },
    {
        icon: 'uil uil-eye',
        name: 'Retina Ready',
        desc: 'Composed in a pseudo-Latin language which more or less pseudo-Latin language corresponds.'
    },
])

</script>

<style lang="scss" scoped></style>