<template>
    <section class="section bg-primary" :style="{ 'background-image': 'url(' + (image) + ')' }">
        <div class="container">
            <div class="row align-items-center">
                <div class="col-lg-6 col-md-6 col-12">
                    <div class="section-title">
                        <h4 class="title text-white title-dark mb-4">Everything you need</h4>
                        <p class="text-white-50 para-desc mb-0">Create, collaborate, and turn your ideas into incredible
                            products with the definitive platform for digital design.</p>
                    </div>

                    <div v-for="item in datas" :key="item" class="mt-4 pt-2">
                        <h6 class="text-white title-dark">{{item.title}}</h6>
                        <p class="text-white-50 para-desc mb-0">{{ item.desc }}</p>
                    </div>
                </div><!--end col-->

                <div class="col-lg-6 col-md-6 col-12 mt-4 mt-sm-0 pt-2 pt-sm-0">
                    <img src="../../assets/images/seo/seo.png" class="img-fluid" alt="">
                </div><!--end col-->
            </div><!--end row-->
        </div><!--end container-->
    </section><!--end section-->
</template>

<script setup>
import { ref } from 'vue';
import image from '../../assets/images/bg/bg-lines-two.png'

const datas = ref([
    {
        title: 'Ability to customize Title Tags',
        desc: 'Create, collaborate, and turn your ideas into incredible products with the definitive platform for digital design.'
    },
    {
        title: 'A well-optimized URL structure',
        desc: 'Create, collaborate, and turn your ideas into incredible products with the definitive platform for digital design.'
    },
    {
        title: 'Good customer support system.',
        desc: 'Create, collaborate, and turn your ideas into incredible products with the definitive platform for digital design.'
    },
])

</script>

<style lang="scss" scoped></style>