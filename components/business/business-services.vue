<template>

    <div v-if="services" class="row justify-content-center">
        <div class="col-12">
            <div class="section-title text-center mb-4 pb-2">
                <h6 class="text-primary">Our Services</h6>
                <h4 class="title mb-4">Landflow makes designing easy <br> and performance fast</h4>
                <p class="text-muted para-desc mx-auto mb-0"><description /></p>
            </div>
        </div><!--end col-->
    </div><!--end row-->

    <div v-else class="row justify-content-center">
        <div class="col-12">
            <div class="section-title text-center mb-4 pb-2">
                <h4 class="title mb-4">Our Services</h4>
                <p class="text-muted para-desc mx-auto mb-0"><description /></p>
            </div>
        </div><!--end col-->
    </div><!--end row-->

    <div class="row">
        <div v-for="item in datas" :key="item" class="col-lg-4 col-md-6 mt-4 pt-2">
            <div class="card features feature-primary rounded p-4 text-center border-0">
                <div class="icon text-center rounded-md mx-auto">
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
</template>

<script setup>
import { ref, onMounted, defineProps } from 'vue';
import feather from 'feather-icons'

defineProps({
    services: {
        type: Boolean,
        required: true
    }
})

const datas = ref([
    {
        icon: 'uil uil-airplay',
        name: 'Responsive Design',
        desc: 'Composed in a pseudo-Latin language which more or less pseudo-Latin language corresponds.'
    },
    {
        icon: 'uil uil-browser',
        name: 'Browser Compatibility',
        desc: 'Composed in a pseudo-Latin language which more or less pseudo-Latin language corresponds.'
    },
    {
        icon: 'uil uil-eye',
        name: 'Retina Ready',
        desc: 'Composed in a pseudo-Latin language which more or less pseudo-Latin language corresponds.'
    },
    {
        icon: 'uil uil-heart',
        name: 'Free Icons',
        desc: 'Composed in a pseudo-Latin language which more or less pseudo-Latin language corresponds.'
    },
    {
        icon: 'uil uil-bolt-alt',
        name: 'Unlimited Power',
        desc: 'Composed in a pseudo-Latin language which more or less pseudo-Latin language corresponds.'
    },
    {
        icon: 'uil uil-pentagon',
        name: 'Professional Design',
        desc: 'Composed in a pseudo-Latin language which more or less pseudo-Latin language corresponds.'
    },
])

onMounted(() => {
    feather.replace()
})

</script>

<style lang="scss" scoped></style>