<template>
    <div class="container">
        <div class="row">
            <div class="col-md-6">
                <div class="section-title mb-4 pb-2 mb-sm-0 pb-sm-0 me-lg-5">
                    <h6 class="text-primary">Our Story</h6>
                    <h4 class="title mb-0 me-lg-5">Tools should adapt to the user, not the other way around.</h4>
                </div>
            </div><!--end col-->

            <div class="col-md-6">
                <div class="section-title">
                    <p class="text-muted para-desc"> It is said that song composers of the past used dummy texts as
                        lyrics when writing melodies in order to have a 'ready-made' text to sing with the melody. Dummy
                        texts have been in use by typesetters since the 16th century.</p>
                    <p class="text-muted para-desc mb-0">If the distribution of letters and 'words' is random, the
                        reader will not be distracted from making a neutral judgement on the visual impact and
                        readability.</p>
                </div>
            </div><!--end col-->
        </div><!--end row-->

        <div class="row mt-4 pt-2">
            <div v-for="item in datas" :key="item" class="col-lg-4 col-md-6 mt-4 pt-2">
                <div class="card border-0 text-center features feature-primary rounded">
                    <div class="icon text-center mx-auto rounded-md">
                        <h3 class="mb-0"><i :class="item.icon"></i></h3>
                    </div>

                    <div class="card-body p-0 mt-4">
                        <h5>{{ item.name }}</h5>
                        <p class="text-muted mb-0">{{ item.desc }}</p>
                        <div class="mt-2">
                            <a href="javascript:void(0)" class="link">Read More <i data-feather="arrow-right"
                                    class="fea icon-sm"></i></a>
                        </div>
                    </div>
                </div>
            </div><!--end col-->
        </div><!--end row-->
    </div><!--end container-->
</template>

<script setup>
import { ref } from 'vue';

const datas = ref([
    {
        icon: 'uil uil-chart-pie',
        name: 'Our Vision',
        desc: 'Composed in a pseudo-Latin language which more or less pseudo-Latin language corresponds.'
    },
    {
        icon: 'uil uil-crosshair',
        name: 'Our Goals',
        desc: 'Composed in a pseudo-Latin language which more or less pseudo-Latin language corresponds.'
    },
    {
        icon: 'uil uil-airplay',
        name: 'Our Mission',
        desc: 'Composed in a pseudo-Latin language which more or less pseudo-Latin language corresponds.'
    },
])

</script>

<style lang="scss" scoped></style>