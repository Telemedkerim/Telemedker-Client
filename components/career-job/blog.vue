<template>
    <div class="row justify-content-center">
        <div class="col-12">
            <div class="section-title text-center mb-4 pb-2">
                <h6 class="text-primary">News</h6>
                <h4 class="title mb-4">Latest News or Blogs</h4>
                <p class="text-muted para-desc mx-auto mb-0">
                    <description />
                </p>
            </div>
        </div><!--end col-->
    </div><!--end row-->

    <div class="row">
        <div v-for="item in datas" :key="item" class="col-lg-4 col-md-6 mt-4 pt-2">
            <div class="card blog blog-primary border-0 shadow rounded overflow-hidden">
                <div class="position-relative overflow-hidden">
                    <img :src="item.image" class="img-fluid" alt="">
                    <a href="javascript:void(0)" class="tag py-1 px-4 d-inline-block h6 mb-0 text-white rounded-lg">{{
                        item.name }}</a>
                </div>
                <div class="card-body p-4">
                    <ul class="list-unstyled mb-2">
                        <li class="list-inline-item text-muted small me-3"><i
                                class="uil uil-calendar-alt text-dark h6 me-1"></i>20th September, 2020</li>
                        <li class="list-inline-item text-muted small"><i class="uil uil-clock text-dark h6 me-1"></i>5
                            min read</li>
                    </ul>
                    <NuxtLink :to="`/blog-detail/${item.id}`" class="text-dark title h5">{{
                        item.title }}</NuxtLink>

                    <div class="mt-2">
                        <NuxtLink :to="`/blog-detail/${item.id}`" class="link">Read more <i
                                data-feather="arrow-right" class="fea icon-sm"></i></NuxtLink>
                    </div>
                </div>
            </div>
        </div><!--end col-->
    </div><!--end row-->
</template>

<script setup>
import { ref, onMounted } from 'vue';
import image from '../../assets/images/blog/1.jpg';
import image2 from '../../assets/images/blog/2.jpg';
import image3 from '../../assets/images/blog/3.jpg';
import feather from 'feather-icons'

const datas = ref([
    {
        id: 1,
        image: image,
        name: 'Software',
        title: 'A place where technology meets craftsmanship'
    },
    {
        id: 2,
        image: image2,
        name: 'Designer',
        title: 'Talisker bay on the isle of skye in scotland'
    },
    {
        id: 3,
        image: image3,
        name: 'Developer',
        title: 'A beginner’s guide to customer journey maps'
    },
])

onMounted(() => {
    feather.replace()
})
</script>

<style lang="scss" scoped></style>