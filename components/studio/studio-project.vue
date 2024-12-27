<template>
    <div class="container">
        <div class="row">
            <div class="col-md-6 mb-4 pb-2">
                <div class="section-title">
                    <h5 class="text-primary">Projects</h5>
                    <h2 class="mb-4">Front makes designing easy and performance fast</h2>
                    <p class="text-muted para-desc mb-0">
                        <description />
                    </p>
                </div>
            </div><!--end col-->
        </div><!--end row-->

        <div id="grid" class="column-3 gap-4">
            <div v-for="item in datas" :key="item" class="mb-4">
                <div class="card work-container work-primary border-0">
                    <img :src="item.image" class="img-fluid rounded shadow-md" alt="">

                    <div class="card-body content mt-4 p-0">
                        <ul class="list-unstyled d-flex justify-content-between mb-2">
                            <li><i class="uil uil-tag-alt me-1"></i><a href="javascript:void(0)"
                                    class="text-muted tag">{{ item.type }}</a></li>
                            <li><i class="uil uil-user me-1"></i><a href="javascript:void(0)"
                                    class="text-muted author">{{ item.name }}</a></li>
                        </ul>
                        <a href="javascript:void(0)" class="title text-dark h5">{{ item.title }}</a>
                        <p v-if="item.show === true" class="text-muted mt-2 d-none d-md-block">{{ item.desc }}</p>
                        <div class="mt-2">
                            <a href="javascript:void(0)" class="text-dark link">Read More <i data-feather="arrow-right"
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
import image from '../../assets/images/work/13.jpg';
import image2 from '../../assets/images/work/1.jpg';
import image3 from '../../assets/images/work/2.jpg';
import image4 from '../../assets/images/work/3.jpg';
import image5 from '../../assets/images/work/4.jpg';

const datas = ref([
    {
        image: image,
        type: 'Creative',
        name: 'Calvin',
        title: 'Creative and modern design',
        desc: 'Composed in a pseudo-Latin language which more or less pseudo-Latin language corresponds.',
        show: true
    },
    {
        image: image2,
        type: 'Creative',
        name: 'Calvin',
        title: 'Creative and modern design',
        show: false
    },
    {
        image: image3,
        type: 'Creative',
        name: 'Calvin',
        title: 'Creative and modern design',
        show: false
    },
    {
        image: image4,
        type: 'Creative',
        name: 'Calvin',
        title: 'Creative and modern design',
        show: false
    },
    {
        image: image5,
        type: 'Creative',
        name: 'Calvin',
        title: 'Creative and modern design',
        show: false
    },
])

</script>

<style lang="scss" scoped></style>