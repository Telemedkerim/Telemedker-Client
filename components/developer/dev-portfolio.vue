<template>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-12">
                <div class="section-title text-center mb-4 pb-2">
                    <span class="badge rounded-pill bg-soft-primary">Portfolio</span>
                    <h4 class="title mt-3 mb-4">Beautiful collection of designer-made templates</h4>
                    <p class="para-desc mx-auto text-muted mb-0">
                        <description />
                    </p>
                </div>
            </div><!--end col-->
        </div><!--end row-->

        <div class="row">
            <div v-for="item in datas" :key="item" class="col-md-6 mt-4 pt-2">
                <div class="card work-container work-primary border-0 shadow rounded-md overflow-hidden">
                    <div class="p-2">
                        <a href="javascript:void(0)" class="text-danger"><i class="mdi mdi-circle"></i></a>
                        <a href="javascript:void(0)" class="text-warning"><i class="mdi mdi-circle"></i></a>
                        <a href="javascript:void(0)" class="text-success"><i class="mdi mdi-circle"></i></a>
                    </div>
                    <div class="card-body content p-0">
                        <img :src="item.image" alt="" class="img-fluid mx-auto d-block border-bottom">

                        <div class="content p-4">
                            <h6><i class="uil uil-tag-alt text-dark"></i><a href="javascript:void"
                                    class="text-muted ms-1 tag">{{ item.name }}</a></h6>
                            <a href="https://1.envato.market/landrick" target="_blank" class="title text-dark h5">{{
                                item.title }}</a>
                        </div>
                    </div>
                </div>
            </div><!--end col-->
        </div><!--end row-->

        <div class="row">
            <div class="col-12 text-center mt-4 pt-2">
                <a href="javascript:void(0)" class="btn btn-primary">See More <i data-feather="arrow-right"
                        class="fea icon-sm"></i></a>
            </div>
        </div>
    </div><!--end container-->
</template>

<script setup>
import { ref } from 'vue';
import image from '../../assets/images/work/landrick.png';
import image2 from '../../assets/images/work/doctris.png';
import image3 from '../../assets/images/work/cristino.png';
import image4 from '../../assets/images/work/appgen.png';

const datas = ref([
    {
        image: image,
        name: 'Tachnology',
        title: 'Landrick - Saas & Software Template'
    },
    {
        image: image2,
        name: 'Retail',
        title: 'Doctris - Appointment System'
    },
    {
        image: image3,
        name: 'Personal',
        title: 'Cristino - Personal Portfolio Template'
    },
    {
        image: image4,
        name: 'Tachnology',
        title: 'Appgen - Saas & Software Template'
    },
])

</script>

<style lang="scss" scoped></style>