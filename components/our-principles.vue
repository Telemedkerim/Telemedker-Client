<template>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-12">
                <div class="section-title text-center mb-4 pb-2">
                    <h6 class="text-primary">Our Principles</h6>
                    <h4 class="title mb-4">Explore our awesome features</h4>
                    <p class="text-muted para-desc mx-auto mb-0">
                        <description />
                    </p>
                </div>
            </div><!--end col-->
        </div><!--end row-->

        <div class="row justify-content-center">
            <div class="col-lg-10">
                <div class="row">
                    <div v-for="item in datas" :key="item" class="col-md-6 mt-4 pt-2">
                        <div class="d-flex features feature-primary core-feature rounded p-4">
                            <div class="icon text-center rounded-circle me-3 mt-2">
                                <h3 class="mb-0"><i :class="item.icon"></i></h3>
                            </div>
                            <div class="flex-1">
                                <h5>{{ item.name }}</h5>
                                <p class="text-muted mb-0">{{ item.desc }}</p>
                                <div class="mt-2">
                                    <a href="javascript:void(0)" class="link">Read More <i data-feather="arrow-right"
                                            class="fea icon-sm"></i></a>
                                </div>
                            </div>
                        </div>
                    </div><!--end col-->
                </div><!--end row-->
            </div><!--end col-->

            <div class="col-12 mt-4 pt-2 text-center">
                <a href="javascript:void(0)" class="text-primary h6 mb-0">Explore all features <i
                        data-feather="arrow-right" class="fea icon-sm"></i></a>
            </div><!--end col-->
        </div><!--end row-->
    </div><!--end container-->
</template>

<script setup>
import { ref, onMounted } from 'vue';
import feather from 'feather-icons'


const datas = ref([
    {
        icon: 'uil uil-airplay',
        name: 'Responsive Design',
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
    {
        icon: 'uil uil-heart',
        name: 'Free Icons',
        desc: 'Composed in a pseudo-Latin language which more or less pseudo-Latin language corresponds.'
    },
])

onMounted(() => {
    feather.replace()
})

</script>

<style lang="scss" scoped></style>