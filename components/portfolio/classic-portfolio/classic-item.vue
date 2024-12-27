<template>
    <div class="container">
        <div class="row justify-content-center">
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

    <div v-if="fivecolumn" class="container">
        <div :class="row">
            <div :class="col">
                <div id="grid" :class="gridrow">
                    <div v-for="(item, index) in filterData.slice(0, 10)" :key="index" class="col-12 mt-4 pt-2 picture-item"
                        data-groups='["branding"]'>
                        <div
                            class="card work-container work-primary work-border position-relative overflow-hidden shadow rounded border-0">
                            <div class="card-body p-0">
                                <a @click="showLightbox(item.id - 1)" class="lightbox">
                                    <img :src="item.image" class="img-fluid" alt="work-image">
                                </a>
                                <div class="overlay-work bg-dark"></div>
                                <div class="content p-3">
                                    <h6 class="tag text-muted mb-1">{{ item.type }}</h6>
                                    <NuxtLink :to="`/work-detail/${item.id}`" class="title text-dark d-block h5 mb-0">{{ item.name
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

    <div v-else :class="containerclass">
        <div :class="row">
            <div :class="col">
                <div id="grid" :class="gridrow">
                    <div v-for="(item, index) in filterData" :key="index" class="col-12 mt-4 pt-2 picture-item"
                        data-groups='["branding"]'>
                        <div
                            class="card work-container work-primary work-border position-relative overflow-hidden shadow rounded border-0">
                            <div class="card-body p-0">
                                <a @click="showLightbox(item.id - 1)" class="lightbox">
                                    <img :src="item.image" class="img-fluid" alt="work-image">
                                </a>
                                <div class="overlay-work bg-dark"></div>
                                <div class="content p-3">
                                    <h6 class="tag text-muted mb-1">{{ item.type }}</h6>
                                    <NuxtLink :to="`/work-detail/${item.id}`" class="title text-dark d-block h5 mb-0">{{ item.name
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

    <vue-easy-lightbox :visible="visibleRef" :imgs="imgsRef" :index="indexRef" @hide="onHide"></vue-easy-lightbox>
</template>

<script setup>
import { ref, defineProps } from 'vue';
import VueEasyLightbox from 'vue-easy-lightbox';
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

const images = ref([image, image2, image3, image4, image5, image6, image7, image8, image9, image10, image11, image12]);


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