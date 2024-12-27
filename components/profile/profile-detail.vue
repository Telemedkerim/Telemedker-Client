<template>
    <!-- Start -->
    <section class="section pt-0">
        <div class="container">
            <div class="row">
                <div class="col-lg-4 col-md-6">
                    <div class="rounded shadow p-4">
                        <div class="progress-box">
                            <h5 class="title">Complete your profile</h5>
                            <div class="progress">
                                <div class="progress-bar position-relative bg-primary" style="width:89%;">
                                    <div class="progress-value d-block text-muted h6">89%</div>
                                </div>
                            </div>
                        </div><!--end process box-->
                    </div>

                    <sidebar />
                </div><!--end col-->

                <div class="col-lg-8 col-md-6 mt-4 mt-sm-0 pt-2 pt-sm-0">
                    <h5>Calvin Carlo</h5>
                    <p class="text-muted mb-0">I have started my career as a trainee and prove my self and achieve all
                        the milestone with good guidance and reach up to the project manager. In this journey, I
                        understand all the procedure which make me a good developer, team leader, and a project manager.
                    </p>

                    <div class="row">
                        <div class="col-12 mt-4 pt-2">
                            <h6>Connections</h6>
                            <ul class="list-unstyled mt-3 mb-0">
                                <li v-for="item in datas" :key="item" class="list-inline-item text-center m-1 me-2">
                                    <a href="javascript:void(0)" class="d-block"><img :src="item.image"
                                            class="rounded-circle avatar avatar-small shadow" alt=""></a>
                                    <h6 class="text-muted mb-0 mt-2">{{ item.name }}</h6>
                                </li>
                            </ul>
                        </div><!--end col-->

                        <div class="col-lg-6 col-12 mt-4 pt-2">
                            <h6>Education</h6>

                            <div v-for="item in eductions" :key="item"
                                class="d-flex features align-items-center mt-4 p-3 rounded shadow" :class="item.class">
                                <div class="icon text-center rounded-md me-3">
                                    <h3 class="mb-0"><i :class="item.icon"></i></h3>
                                </div>
                                <div class="flex-1 ms-2">
                                    <h5 class="mb-0">{{ item.name }}</h5>
                                    <p class="text-muted mb-0">{{ item.year }}</p>
                                    <p class="text-muted mb-0">{{ item.city }}</p>
                                </div>
                            </div>

                        </div>

                        <div class="col-lg-6 col-12 mt-4 pt-2">
                            <h6>Experience</h6>

                            <div v-for="item in experiences" :key="item"
                                class="d-flex features align-items-center mt-4 p-3 rounded shadow" :class="item.class">
                                <div class="icon text-center rounded-md me-2">
                                    <img :src="item.image" class="avatar avatar-ex-sm" alt="">
                                </div>
                                <div class="flex-1 ms-3">
                                    <h5 class="title mb-0">{{ item.name }}</h5>
                                    <p class="text-muted mb-0">{{ item.year }}</p>
                                    <p class="text-muted mb-0"><a href="javascript:void(0)"
                                            class="link">{{ item.type }}</a>
                                        {{ item.city }}</p>
                                </div>
                            </div>
                        </div>

                        <div class="col-12 mt-4 pt-2">
                            <h6 class="mb-0">Projects</h6>

                            <div class="row">
                                <div v-for="item in projects" :key="item" class="col-lg-6 mt-4">
                                    <div
                                        class="card work-container work-primary bg-white border-0 rounded shadow overflow-hidden">
                                        <img :src="item.image" class="img-fluid" alt="">

                                        <div class="card-body content p-4">
                                            <NuxtLink :to="`/blog-detail/${item.id}`" class="title text-dark h5">{{ item.name }}</NuxtLink>

                                            <ul class="list-unstyled d-flex justify-content-between mb-0 mt-3">
                                                <li><i class="uil uil-tag-alt me-1"></i><a href="javascript:void(0)"
                                                        class="text-muted tag">{{item.type}}</a></li>
                                                <li><NuxtLink :to="`/blog-detail/${item.id}`" class="text-primary">Read More <i
                                                            data-feather="arrow-right" class="fea icon-sm"></i></NuxtLink></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div><!--end col-->
                            </div><!--end row-->
                        </div><!--end col-->
                    </div><!--end row-->
                </div><!--end col-->
            </div><!--end row-->
        </div><!--end container-->
    </section><!--end section-->
    <!-- End -->
</template>

<script setup>
import { ref } from 'vue'
import sidebar from '@/components/profile/profile-sidebar.vue';
import image from '../../assets/images/client/02.jpg';
import image2 from '../../assets/images/client/03.jpg';
import image3 from '../../assets/images/client/04.jpg';
import image4 from '../../assets/images/client/05.jpg';
import image5 from '../../assets/images/client/06.jpg';
import image6 from '../../assets/images/client/07.jpg';
import image7 from '../../assets/images/client/08.jpg';
import image8 from '../../assets/images/brand/airbnb.svg';
import image9 from '../../assets/images/brand/apple.svg';
import image10 from '../../assets/images/brand/swiggy.svg'
import image11 from '../../assets/images/work/1.jpg';
import image12 from '../../assets/images/work/2.jpg';
import image13 from '../../assets/images/work/3.jpg';
import image14 from '../../assets/images/work/4.jpg'

const datas = ref([
    { image: image, name: 'Garner' },
    { image: image2, name: 'Barbara' },
    { image: image3, name: 'Thomas' },
    { image: image4, name: 'Wanda' },
    { image: image5, name: 'Russell' },
    { image: image6, name: 'Douglas' },
    { image: image7, name: 'Emerson' },
]);

const eductions = ref([
    {
        icon: 'uil uil-graduation-cap',
        name: 'Studied At Cambridge Uni.',
        year: '2008 - 2012',
        city: 'London, UK',
        class: 'feature-primary'
    },
    {
        icon: 'uil uil-graduation-cap',
        name: 'Master In Computer Science',
        year: '2012 - 2014',
        city: 'Washington D.C, USA',
        class: 'feature-danger'
    },
    {
        icon: 'uil uil-graduation-cap',
        name: 'UI/UX Designer',
        year: '2014 - 2016',
        city: 'Perth, Australia',
        class: 'feature-secondary'
    },
]);

const experiences = ref([
    {
        image: image8,
        name: 'Senior Web Developer',
        year: '3 Years Experience',
        type: 'Airbnb',
        city: '@London, UK',
        class: 'feature-danger'
    },
    {
        image: image9,
        name: 'Web Designer',
        year: '2 Years Experience',
        type: 'Apple',
        city: '@Washington, USA',
        class: 'feature-secondary'
    },
    {
        image: image10,
        name: 'UI Designer',
        year: '2 Years Experience',
        type: 'Swiggy',
        city: '@Perth, Australia',
        class: 'feature-primary'
    },
]);

const projects = ref([
    {
        id: 11,
        image: image11,
        name: 'Creative and modern design',
        type: 'Creative'
    },
    {
        id: 12,
        image: image12,
        name: 'Creative and modern design',
        type: 'Creative'
    },
    {
        id: 13,
        image: image13,
        name: 'Creative and modern design',
        type: 'Creative'
    },
    {
        id: 14,
        image: image14,
        name: 'Creative and modern design',
        type: 'Creative'
    },
])
</script>

<style lang="scss" scoped></style>