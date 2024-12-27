<template>
    <div class="container">
        <div class="row justify-content-center mb-4">
            <div class="col-12 filters-group-wrap">
                <div class="filters-group">
                    <ul class="container-filter categories-filter list-inline mb-0 filter-options text-center">
                        <li class="list-inline-item position-relative categories categories-name text-dark rounded px-1 mx-1"
                            :class="selectedcategory == null ? 'active' : ''" @click="matchCategory(null)"
                            data-group="all">All</li>
                        <li class="list-inline-item position-relative categories categories-name text-dark rounded px-1 mx-1"
                            :class="selectedcategory == 'branding' ? 'active' : ''" @click="matchCategory('branding')">
                            Branding</li>
                        <li class="list-inline-item position-relative categories categories-name text-dark rounded px-1 mx-1"
                            :class="selectedcategory == 'designing' ? 'active' : ''"
                            @click="matchCategory('designing')">Designing</li>
                        <li class="list-inline-item position-relative categories categories-name text-dark rounded px-1 mx-1"
                            :class="selectedcategory == 'photography' ? 'active' : ''"
                            @click="matchCategory('photography')">Photography</li>
                        <li class="list-inline-item position-relative categories categories-name text-dark rounded px-1 mx-1"
                            :class="selectedcategory == 'development' ? 'active' : 'development'"
                            @click="matchCategory('development')">Development</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>

    <div v-if="fivecolumn" class="container">

        <div id="grid" :class="gridrow">
            <div v-for="item in filterData.slice(0, 10)" :key="item" class="col-12 spacing picture-item"
                data-groups='["branding"]'>
                <div class="card portfolio portfolio-grid d-grid border-0">
                    <div class="portfolio-box position-relative rounded-2 shadow overflow-hidden">
                        <img :src="item.image" class="img-fluid port-img" alt="">
                        <div class="overlay-work"></div>
                        <div class="content bottom-0 p-4 position-absolute">
                            <h6 class="tag mb-1">{{ item.type }}</h6>
                            <NuxtLink :to="`/work-detail/${item.id}`"
                                class="title fw-bold d-block mb-0 text-decoration-none h5">{{ item.name
                                }}</NuxtLink>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!--end row-->
        <div class="row mt-4 pt-2">
            <pagination />
        </div>
        <!-- end-pagination -->
    </div>

    <div v-else :class="containerclass">
        <div :class="row">
            <div :class="col">
                <div id="grid" :class="gridrow">
                    <div v-for="item in filterData" :key="item" class="col-12 spacing picture-item"
                        data-groups='["branding"]'>
                        <div class="card portfolio portfolio-grid d-grid border-0">
                            <div class="portfolio-box position-relative rounded-2 shadow overflow-hidden">
                                <img :src="item.image" class="img-fluid port-img" alt="">
                                <div class="overlay-work"></div>
                                <div class="content bottom-0 p-4 position-absolute">
                                    <h6 class="tag mb-1">{{ item.type }}</h6>
                                    <NuxtLink :to="`/work-detail/${item.id}`"
                                        class="title fw-bold d-block mb-0 text-decoration-none h5">{{ item.name
                                        }}</NuxtLink>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                <!--end row-->
                <div class="row mt-4 pt-2">
                    <pagination />
                </div>
                <!-- end-pagination -->
            </div>
        </div>
    </div>

</template>

<script setup>
import { ref, defineProps } from 'vue';
import pagination from '@/components/pagination.vue';
import image from '../../../assets/images/work/1.jpg';
import image2 from '../../../assets/images/work/2.jpg';
import image3 from '../../../assets/images/work/3.jpg';
import image4 from '../../../assets/images/work/4.jpg';
import image5 from '../../../assets/images/work/5.jpg';
import image6 from '../../../assets/images/work/6.jpg';
import image7 from '../../../assets/images/work/7.jpg';
import image8 from '../../../assets/images/work/8.jpg';
import image9 from '../../../assets/images/work/9.jpg';
import image10 from '../../../assets/images/work/10.jpg';
import image11 from '../../../assets/images/work/11.jpg';
import image12 from '../../../assets/images/work/12.jpg';

defineProps({
    gridrow: {
        type: String,
        required: true
    },
    row: {
        type: String,
        required: true
    },
    col: {
        type: String,
        required: true
    },
    containerclass: {
        type: String,
        required: true
    },
    fivecolumn: {
        type: Boolean,
        required: true
    },
})


const datas = ref([
    {
        id: 1,
        image: image,
        type: 'Web',
        name: 'Web Developing',
        category: 'branding'
    },
    {
        id: 2,
        image: image2,
        type: 'Web',
        name: 'Web Developing',
        category: 'designing'
    },
    {
        id: 3,
        image: image3,
        type: 'Web',
        name: 'Web Developing',
        category: 'photography'
    },
    {
        id: 4,
        image: image4,
        type: 'Web',
        name: 'Web Developing',
        category: 'development'
    },
    {
        id: 5,
        image: image5,
        type: 'Web',
        name: 'Web Developing',
        category: 'branding'
    },
    {
        id: 6,
        image: image6,
        type: 'Web',
        name: 'Web Developing',
        category: 'photography'
    },
    {
        id: 7,
        image: image7,
        type: 'Web',
        name: 'Web Developing',
        category: 'development'
    },
    {
        id: 8,
        image: image8,
        type: 'Web',
        name: 'Web Developing',
        category: 'branding'
    },
    {
        id: 9,
        image: image9,
        type: 'Web',
        name: 'Web Developing',
        category: 'designing'
    },
    {
        id: 10,
        image: image10,
        type: 'Web',
        name: 'Web Developing',
        category: 'photography'
    },
    {
        id: 11,
        image: image11,
        type: 'Web',
        name: 'Web Developing',
        category: 'development'
    },
    {
        id: 12,
        image: image12,
        type: 'Web',
        name: 'Web Developing',
        category: 'branding'
    },
])

const selectedcategory = ref(null)
const filterData = ref(datas.value)


const matchCategory = (category) => {
    selectedcategory.value = category
    filterData.value = selectedcategory.value ? datas.value.filter((item) => item.category === selectedcategory.value) : datas.value
}
</script>

<style lang="scss" scoped></style>