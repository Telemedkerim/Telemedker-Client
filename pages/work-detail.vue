<template>
    <navbar />

    <!-- Start -->
    <section class="bg-half-170 d-table w-100 pb-0">
        <div class="container">
            <div class="row mt-5">
                <div class="col-12">
                    <div class="heading-title">
                        <ul class="list-unstyled mb-3">
                            <li class="list-inline-item text-muted me-3"><i
                                    class="uil uil-tag-alt text-dark h6 me-1"></i><a href="javascript:void(0)"
                                    class="text-muted">Productivity</a>, <a href="javascript:void(0)"
                                    class="text-muted">Brand</a></li>
                            <li class="list-inline-item text-muted"><i
                                    class="uil uil-calendar-alt text-dark h6 me-1"></i>20th September, 2020</li>
                        </ul>
                        <h4 class="heading">{{ data?.name ? data?.name : 'Unica Bowls From the South Pacific.' }}</h4>
                        <p class="para-desc text-muted">
                            <description />
                        </p>
                    </div>
                </div><!--end col-->
            </div><!--end row-->

            <div class="row mt-5">
                <div v-if="data?.image" class="col-md-6">
                    <img :src="data?.image" class="img-fluid rounded shadow" alt="">
                    <img src="../assets/images/work/10.jpg" class="img-fluid rounded shadow mt-4" alt="">
                </div><!--end col-->
                <div v-else class="col-md-6">
                    <img v-for="(image, index) in images" :key="index" :src="image"
                        :class="{ 'img-fluid rounded shadow': true, 'mt-4': index > 0 }" alt="">
                </div><!--end col-->

                <div class="col-md-6">
                    <div class="section-title py-md-5 pt-5 ms-lg-4 sticky-bar">
                        <p class="para-desc text-muted">If the distribution of letters and 'words' is random, the reader
                            will not be distracted from making a neutral judgement on the visual impact and readability
                            of the typefaces (typography), or the distribution of text on the page (layout or type
                            area).</p>

                        <h5>Task :</h5>

                        <p class="para-desc text-muted">There is now an abundance of readable dummy texts. These are
                            usually used when a text is required purely to fill a space.</p>

                        <div class="work-details rounded shadow p-4 mt-4">
                            <ul class="list-unstyled mb-0">
                                <li v-for="(item, index) in info" :key="index"
                                    :class="{ 'mb-0': true, 'mt-3': index > 0 }">
                                    <h6 class="d-inline-block mb-0"> {{ item.type }}</h6>
                                    <span v-if="item.link === true" class="text-muted"><a href="javascript:void(0)"
                                            class="text-primary">{{ item.name }}</a></span>
                                    <span v-else class="text-muted">{{ item.name }}</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div><!--end col-->
            </div><!--row-->
        </div><!--end container-->

        <div class="container-fluid mt-100 mt-60 px-0">
            <div class="py-5 bg-light">
                <div class="container">
                    <div class="row align-items-center">
                        <div class="col-12">
                            <div class="d-flex align-items-center justify-content-between">
                                <NuxtLink to="/work-detail" class="text-dark align-items-center">
                                    <span class="pro-icons"><i data-feather="arrow-left" class="fea icon-sm"></i></span>
                                    <span class="text-muted d-none d-md-inline-block mx-2">Web Development</span>
                                    <img src="../assets/images/work/6.jpg"
                                        class="avatar avatar-small rounded shadow ms-2" style="height:auto;" alt="">
                                </NuxtLink>

                                <NuxtLink to="/" class="btn btn-lg btn-pills btn-icon btn-soft-primary"><i
                                        data-feather="home" class="icons"></i></NuxtLink>

                                <NuxtLink to="/work-detail" class="text-dark align-items-center">
                                    <img src="../assets/images/work/7.jpg"
                                        class="avatar avatar-small rounded shadow me-2" style="height:auto;" alt="">
                                    <span class="text-muted d-none d-md-inline-block mx-2">Web Designer</span>
                                    <span class="pro-icons"><i data-feather="arrow-right"
                                            class="fea icon-sm"></i></span>
                                </NuxtLink>
                            </div>
                        </div><!--end col-->
                    </div><!--end row-->
                </div><!--end container-->
            </div><!--end div-->
        </div><!--end container-->
    </section><!--end section-->
    <!-- End -->

    <footers />
    <backtotop />
</template>

<script setup>
import { ref, onMounted } from 'vue';
import navbar from '@/components/navbar/navbar.vue';
import work from '../assets/images/work/1.jpg';
import work2 from '../assets/images/work/2.jpg';
import work3 from '../assets/images/work/3.jpg';
import work4 from '../assets/images/work/4.jpg';
import feather from 'feather-icons';
import footers from '@/components/footer/footer.vue';
import backtotop from '@/components/back-to-top.vue'
import image from '..//assets/images/work/1.jpg';
import image2 from '..//assets/images/work/2.jpg';
import image3 from '..//assets/images/work/3.jpg';
import image4 from '..//assets/images/work/4.jpg';
import image5 from '..//assets/images/work/5.jpg';
import image6 from '..//assets/images/work/6.jpg';
import image7 from '..//assets/images/work/7.jpg';
import image8 from '..//assets/images/work/8.jpg';
import image9 from '..//assets/images/work/9.jpg';
import image10 from '..//assets/images/work/10.jpg';
import image11 from '..//assets/images/work/11.jpg';
import image12 from '..//assets/images/work/12.jpg';
import image13 from '..//assets/images/work/Untitled-1.jpg';
import image14 from '..//assets/images/work/Untitled-2.jpg';
import image15 from '..//assets/images/work/Untitled-3.jpg';
import image16 from '..//assets/images/work/Untitled-4.jpg';
import image17 from '..//assets/images/work/Untitled-5.jpg';

import { useRoute } from 'vue-router';

const data = ref('');
const id = ref('');
const route = useRoute();

const images = ref([work, work2, work3, work4])

const info = ref([
    { type: 'Client :', name: ' Alita Margarate' },
    { type: 'Category :', name: ' Web Design' },
    { type: 'Subject :', name: ' Web Design' },
    { type: 'Date :', name: ' 28th April, 2020' },
    { type: 'Website :', name: ' www.yourdomain.com' },
    { type: 'Location :', name: ' 3/2/64 Mongus Street, UK' },
    { type: 'Demo :', name: ' Demo link', link: true },
])

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
    {
        id: 13,
        image: image13,
        type: 'Web',
        name: 'Web Developing',
        category: 'branding'
    },
    {
        id: 14,
        image: image14,
        type: 'Web',
        name: 'Web Developing',
        category: 'branding'
    },
    {
        id: 15,
        image: image15,
        type: 'Web',
        name: 'Web Developing',
        category: 'branding'
    },
    {
        id: 16,
        image: image16,
        type: 'Web',
        name: 'Web Developing',
        category: 'branding'
    },
    {
        id: 17,
        image: image17,
        type: 'Web',
        name: 'Web Developing',
        category: 'branding'
    },
])


onMounted(() => {
    feather.replace()
    id.value = route.params.id;
    data.value = datas.value.find((item) => item.id === parseInt(id.value))
})
</script>

<style lang="scss" scoped></style>