<template>
    <div class="row justify-content-center">
        <div class="col-12">
            <div class="section-title text-center mb-4 pb-2">
                <h4 class="title mb-4">Related Blogs or News</h4>
                <p class="text-muted para-desc mx-auto mb-0">Explore and learn more about everything from machine
                    learning and global payments to scaling your team.</p>
            </div>
        </div><!--end col-->
    </div><!--end row-->

    <div class="row">
        <div v-for="item in datas" :key="item" class="col-lg-4 col-md-6 mt-4 pt-2">
            <div class="card blog blog-primary border-0 shadow rounded overflow-hidden">
                <div class="position-relative overflow-hidden">
                    <img :src="item.image" class="img-fluid" alt="">
                    <a href="javascript:void(0)"
                        class="tag py-1 px-4 d-inline-block h6 mb-0 text-white rounded-lg">{{item.name}}</a>
                </div>
                <div class="card-body p-4">
                    <ul class="list-unstyled mb-2">
                        <li class="list-inline-item text-muted small me-3"><i
                                class="uil uil-calendar-alt text-dark h6 me-1"></i>20th September, 2020</li>
                        <li class="list-inline-item text-muted small"><i class="uil uil-clock text-dark h6 me-1"></i>5
                            min read</li>
                    </ul>
                    <a href="javascript:void(0)" class="text-dark title h5">{{ item.title }}</a>

                    <div class="mt-2">
                        <a href="javascript:void(0)" class="link">Read more <i data-feather="arrow-right"
                                class="fea icon-sm"></i></a>
                    </div>
                </div>
            </div>
        </div><!--end col-->
    </div><!--end row-->
</template>

<script setup>
import { ref } from 'vue'
import image from '../../assets/images/blog/4.jpg';
import image2 from '../../assets/images/blog/5.jpg';
import image3 from '../../assets/images/blog/6.jpg';

const datas = ref([
    {
        image: image,
        name: 'Software',
        title: 'A place where technology meets craftsmanship'
    },
    {
        image: image2,
        name: 'Designer',
        title: 'Talisker bay on the isle of skye in scotland'
    },
    {
        image: image3,
        name: 'Developer',
        title: 'A beginner’s guide to customer journey maps'
    },
])
</script>

<style lang="scss" scoped></style>