<template>
    <div class="container">
        <div class="row">
            <div class="col-12">
                <div class="section-title text-center mb-4 pb-2">
                    <h4 class="title mb-4">Success Roadmap</h4>
                    <p class="text-muted mx-auto para-desc mb-0"><description /></p>
                </div>
            </div><!--end col-->
        </div><!--end row-->

        <div class="row">
            <div class="col-12 mt-4 pt-2">
                <div class="col-md-12">
                    <div class="slider-range-four tiny-timeline">
                        <div v-for="item in datas" :key="item" class="tiny-slide text-center">
                            <div class="card border-0 p-4 item-box shadow rounded">
                                <i :class="item.icon"></i>
                                <p class="text-muted mb-0">{{ item.date }}</p>
                                <h5 class="mb-0 mt-1">{{ item.name }}</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div><!--end col-->
        </div><!--end row-->
    </div><!--end container-->
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { tns } from 'tiny-slider/src/tiny-slider';

const datas = ref([
    {icon: 'uil uil-pen h4 text-primary', date: 'January, 2019',  name: 'Planning'},
    {icon: 'uil uil-bitcoin h4 text-primary', date: 'February, 2019', name: 'Blockchain Starts'},
    {icon: 'uil uil-clipboard-blank h4 text-primary', date: 'March, 2019', name: 'Expanded Licensing'},
    {icon: 'uil uil-money-insert h4 text-primary', date: 'April, 2019', name: 'Token Sale'},
    {icon: 'uil uil-airplay h4 text-primary', date: 'May, 2019', name: 'Project Launch'},
    {icon: 'uil uil-euro-circle h4 text-primary', date: 'June, 2019', name: 'Tier 5 sold'},
    {icon: 'uil uil-desktop h4 text-primary', date: 'December, 2019', name: 'Project Live'}
])

onMounted(() => {
    tns({
        container: '.slider-range-four',
        items: 4,
        controls: false,
        mouseDrag: true,
        loop: true,
        rewind: true,
        autoplay: true,
        autoplayButtonOutput: false,
        autoplayTimeout: 3000,
        navPosition: "bottom",
        speed: 400,
        gutter: 24,
        responsive: {
            992: {
                items: 4
            },

            767: {
                items: 2
            },


            320: {
                items: 1
            },
        },
    });
});

</script>

<style lang="scss" scoped></style>