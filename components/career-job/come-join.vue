<template>
    <div class="row align-items-center">
        <div class="col-md-6">
            <img src="../../assets/images/job/1.jpg" class="img-fluid shadow rounded" alt="">
        </div><!--end col-->

        <div class="col-md-6 mt-4 pt-2 mt-sm-0 pt-sm-0">
            <div class="section-title ms-lg-5">
                <h6 class="text-primary">Come Join us</h6>
                <h4 class="title mb-4">Why Work Here</h4>
                <p class="text-muted para-desc">
                    <description />
                </p>

                <ul class="list-unstyled mb-0">
                    <li v-for="item in datas" :key="item" class="list-inline-item mt-4 me-lg-5 me-4">
                        <div class="d-flex">
                            <span class="text-primary h4 me-2"><i class="uil uil-check-circle align-middle"></i></span>
                            <div class="flex-1">
                                <h4 class="mb-0">{{ item.number }}</h4>
                                <h6 class="mb-0 text-muted">{{ item.name }}</h6>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </div><!--end col-->
    </div><!--end row-->
</template>

<script setup>
import { ref } from 'vue';

const datas = ref([
    { number: '3640', name: 'Visitor' },
    { number: '40', name: 'Startups' },
    { number: '56', name: 'Mentors' },
    { number: '12', name: 'Countries' },
    { number: '25', name: 'Stages' },
])

</script>

<style lang="scss" scoped></style>