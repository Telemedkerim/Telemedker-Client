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
                            :class="selectedcategory == 'development' ? 'active' : ''"
                            @click="matchCategory('development')">Development</li>
                    </ul>
                </div>
            </div><!--end col-->
        </div>
        <!--end row-->
    </div>
    <!--end container-->


    <div :class="containerclass">
        <div :class="row">
            <div :class="col">
                <div id="grid" class="row">
                    <MasonryWall :items="filterData" :ssr-columns="1" :column-width="masonrywidth" :gap="14">
                        <template #default="{ item }">
                            <div :style="{ height: `${item.height}px` }">
                                <div class="card portfolio portfolio-masonry d-grid border-0">
                                    <div class="portfolio-box position-relative rounded-2 shadow overflow-hidden">
                                        <img :src="item.image" class="img-fluid" alt="">
                                        <div class="overlay-work"></div>
                                        <div class="content bottom-0 p-3 position-absolute">
                                            <h6 class="tag mb-1">{{ item.type }}</h6>
                                            <NuxtLink :to="`/work-detail/${item.id}`"
                                                class="title fw-bold d-block mb-0 text-decoration-none h5">{{ item.name
                                                }}</NuxtLink>
                                        </div>
                                        <div class="masonry-icon top-0 end-0 p-3 position-absolute">
                                            <a @click="showLightbox(item.id - 1)"
                                                class="work-icon rounded-pill d-inline-flex lightbox">
                                                <i class="uil uil-camera"></i>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </template>
                    </MasonryWall>
                </div>
            </div>
        </div>
        <!--end row-->

        <!-- end-pagination -->
    </div>

    <div class="row mt-4 pt-2">
        <pagination />
    </div>

    <vue-easy-lightbox :visible="visibleRef" :imgs="imgsRef" :index="indexRef" @hide="onHide"></vue-easy-lightbox>
</template>

<script setup>
import { ref, defineProps } from 'vue';
import VueEasyLightbox from 'vue-easy-lightbox';
import pagination from '@/components/pagination.vue';
import image from '../../../assets/images/work/1.jpg';
import image2 from '../../../assets/images/work/Untitled-1.jpg';
import image3 from '../../../assets/images/work/2.jpg';
import image4 from '../../../assets/images/work/Untitled-2.jpg';
import image5 from '../../../assets/images/work/3.jpg';
import image6 from '../../../assets/images/work/Untitled-3.jpg';
import image7 from '../../../assets/images/work/4.jpg';
import image8 from '../../../assets/images/work/Untitled-4.jpg';
import image9 from '../../../assets/images/work/5.jpg';
import image10 from '../../../assets/images/work/Untitled-5.jpg';
import image11 from '../../../assets/images/work/6.jpg';
import image12 from '../../../assets/images/work/7.jpg';
import image13 from '../../../assets/images/work/8.jpg';
import image14 from '../../../assets/images/work/9.jpg';
import image15 from '../../../assets/images/work/10.jpg';
import image16 from '../../../assets/images/work/11.jpg';
import MasonryWall from '@yeger/vue-masonry-wall'

defineProps({
    masonrywidth: {
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

const images = ref([image, image3, image5, image7, image9, image11, image12, image13, image14, image15, image16, image10, image2, image4, image6, image8, image10]);


const datas = ref([
    {
        id: 1,
        image: image,
        type: 'Web',
        name: 'Web Developing',
        category: 'branding'
    },
    {
        id: 13,
        image: image2,
        type: 'Web',
        name: 'Web Developing',
        category: 'photography'
    },
    {
        id: 2,
        image: image3,
        type: 'Web',
        name: 'Web Developing',
        category: 'development'
    },
    {
        id: 14,
        image: image4,
        type: 'Web',
        name: 'Web Developing',
        category: 'photography',
    },
    {
        id: 3,
        image: image5,
        type: 'Web',
        name: 'Web Developing',
        category: 'designing'
    },
    {
        id: 15,
        image: image6,
        type: 'Web',
        name: 'Web Developing',
        category: 'branding',
    },
    {
        id: 4,
        image: image7,
        type: 'Web',
        name: 'Web Developing',
        category: 'designing'
    },
    {
        id: 16,
        image: image8,
        type: 'Web',
        name: 'Web Developing',
        category: 'photography'
    },
    {
        id: 5,
        image: image9,
        type: 'Web',
        name: 'Web Developing',
        category: 'development',
    },
    {
        id: 17,
        image: image10,
        type: 'Web',
        name: 'Web Developing',
        category: 'branding',
    },
    {
        id: 6,
        image: image11,
        type: 'Web',
        name: 'Web Developing',
        category: 'designing'
    },
    {
        id: 7,
        image: image12,
        type: 'Web',
        name: 'Web Developing',
        category: 'photography',
    },
    {
        id: 8,
        image: image13,
        type: 'Web',
        name: 'Web Developing',
        category: 'development'
    },
    {
        id: 9,
        image: image14,
        type: 'Web',
        name: 'Web Developing',
        category: 'branding'
    },
    {
        id: 10,
        image: image15,
        type: 'Web',
        name: 'Web Developing',
        category: 'designing'
    },
    {
        id: 11,
        image: image16,
        type: 'Web',
        name: 'Web Developing',
        category: 'photography'
    },
])

const selectedcategory = ref(null)
const filterData = ref(datas.value)

const visibleRef = ref(false)
const imgsRef = ref([])
const indexRef = ref(0)

const showLightbox = (index) => {
    imgsRef.value = images.value
    indexRef.value = index
    visibleRef.value = true
}

const onHide = () => {
    visibleRef.value = false
}

const matchCategory = (category) => {
    selectedcategory.value = category
    filterData.value = selectedcategory.value ? datas.value.filter((item) => item.category === selectedcategory.value) : datas.value
}
</script>

<style lang="scss" scoped></style>