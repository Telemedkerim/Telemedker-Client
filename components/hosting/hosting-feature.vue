<template>
    <div class="container">
        <div class="row justify-content-center align-items-center">
            <div v-for="item in datas" :key="item" :class="item.class">
                <div class="card features feature-primary bg-light rounded-md p-4 border-0">
                    <div class="icon text-center rounded-md">
                        <h3 class="mb-0"><i :class="item.icon"></i></h3>
                    </div>
                    <div class="card-body p-0 mt-3">
                        <h5>{{ item.title }}</h5>
                        <p class="para text-muted mb-0">{{ item.desc }}
                        </p>
                    </div>
                </div>
            </div><!--end col-->
            <div class="col-lg-3 col-md-4 col-12 mt-4 pt-2">
                <div class="text-center">
                    <a href="javascript:void(0)" class="btn btn-primary">See More <i data-feather="arrow-right"
                            class="fea icon-sm"></i></a>
                </div>
            </div><!--end col-->
        </div><!--end row-->
    </div><!--end container-->
</template>

<script setup>
import { ref } from 'vue';

const datas = ref([
    {
        icon: 'uil uil-server',
        title: 'Web Hosting',
        desc: 'There are many variations of passages of Lorem Ipsum available',
        class: 'col-lg-3 col-md-4 col-12'
    },
    {
        icon: 'uil uil-cloud-heart',
        title: 'Domains',
        desc: 'There are many variations of passages of Lorem Ipsum available',
        class: 'col-lg-3 col-md-4 col-12 mt-4 mt-sm-0 pt-2 pt-sm-0'
    },
    {
        icon: 'uil uil-envelope-check',
        title: 'Emails',
        desc: 'There are many variations of passages of Lorem Ipsum available',
        class: 'col-lg-3 col-md-4 col-12 mt-4 mt-sm-0 pt-2 pt-sm-0'
    },
    {
        icon: 'uil uil-users-alt',
        title: 'Support',
        desc: 'There are many variations of passages of Lorem Ipsum available',
        class: 'col-lg-3 col-md-4 col-12 mt-4 mt-lg-0 pt-2 pt-lg-0'
    },
    {
        icon: 'uil uil-tachometer-fast-alt',
        title: 'Speedy',
        desc: 'There are many variations of passages of Lorem Ipsum available',
        class: 'col-lg-3 col-md-4 col-12 mt-4 pt-2'
    },
    {
        icon: 'uil uil-compact-disc',
        title: 'Reliable',
        desc: 'There are many variations of passages of Lorem Ipsum available',
        class: 'col-lg-3 col-md-4 col-12 mt-4 pt-2'
    },
    {
        icon: 'uil uil-weight',
        title: 'Scalable',
        desc: 'There are many variations of passages of Lorem Ipsum available',
        class: 'col-lg-3 col-md-4 col-12 mt-4 pt-2'
    },
    {
        icon: 'uil uil-invoice',
        title: 'Easy Upgrade',
        desc: 'There are many variations of passages of Lorem Ipsum available',
        class: 'col-lg-3 col-md-4 col-12 mt-4 pt-2'
    },
])

</script>

<style lang="scss" scoped></style>