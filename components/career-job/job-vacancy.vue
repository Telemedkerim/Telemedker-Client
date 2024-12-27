<template>
    <div class="row justify-content-center">
        <div class="col-lg-10">
            <div class="row align-items-center mb-4 pb-2">
                <div class="col-lg-9 col-md-8">
                    <div class="section-title">
                        <h6 class="text-primary">Vacancy</h6>
                        <h4 class="title mb-4">Latest Job or Vacancy list</h4>
                        <p class="text-muted para-desc mb-0">Explore and learn more about everything from machine
                            learning and global payments to scaling your team.</p>
                    </div>
                </div><!--end col-->

                <div class="col-lg-3 col-md-4 mt-4 mt-sm-0 pt-2 pt-sm-0">
                    <div class="form custom-form">
                        <div class="mb-0">
                            <label class="form-label">Types of jobs :</label>
                            <select class="form-control form-select" id="Sortbylist-job">
                                <option>All Jobs</option>
                                <option>Full Time</option>
                                <option>Part Time</option>
                                <option>Remote</option>
                                <option>Work From Home</option>
                            </select>
                        </div>
                    </div>
                </div><!--end col-->
            </div><!--end row-->
        </div>
    </div>

    <div class="row justify-content-center">
        <div class="col-lg-10 mt-4 pt-2">
            <ul class="list-unstyled mb-0">
                <li v-for="(item, index) in datas" :key="index" :class="{ 'mt-3': index > 0 }">
                    <NuxtLink :to="`/career-detail/${item.id}`"
                        class="d-flex job-vacancy job-primary align-items-center justify-content-between p-4 shadow rounded">
                        <div class="content">
                            <h5 class="text-dark job-caragory">{{ item.job }}</h5>
                            <p class="text-muted mb-0">{{ item.city }}</p>
                        </div>
                        <i data-feather="arrow-right" class="fea icon-ex-md text-dark icon"></i>
                    </NuxtLink>
                </li>
            </ul>
        </div><!--end col-->
    </div><!--end row-->
</template>

<script setup>
import { ref, onMounted } from 'vue';
import feather from 'feather-icons';

const datas = ref([
    {
        id: 1,
        job: 'UX Designer',
        city: 'New York'
    },
    {
        id: 2,
        job: 'Web Developer',
        city: 'New York'
    },
    {
        id: 3,
        job: 'UI Designer',
        city: 'New York'
    },
    {
        id: 4,
        job: 'Web Designer',
        city: 'New York'
    },
    {
        id: 5,
        job: 'Android Developer',
        city: 'New York'
    },
    {
        id: 6,
        job: 'Senior Back-end Developer',
        city: 'New York'
    },
    {
        id: 7,
        job: 'Front-end Developer',
        city: 'New York'
    }
])

onMounted(() => {
    feather.replace()
})
</script>

<style lang="scss" scoped></style>