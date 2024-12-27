<template>
    <div class="row justify-content-center">
        <div class="col-12">
            <div class="section-title text-center mb-4 pb-2">
                <h6 class="text-primary">Services</h6>
                <h4 class="title mb-4">Explore about our awesome features</h4>
                <p class="para-desc mx-auto text-muted mb-0">
                    <description />
                </p>
            </div>
        </div><!--end col-->
    </div><!--end row-->

    <div class="row justify-content-center">
        <div class="col-lg-10 mt-4">
            <ul class="list-unstyled text-center mb-0">
                <li v-for="item in datas" :key="item" class="list-inline-item m-2">
                    <div class="d-flex key-feature feature-primary align-items-center rounded-lg shadow py-2 px-3">
                        <div class="icon text-center rounded-circle me-3">
                            <i :data-feather="item.icon" class="fea icon-ex-md"></i>
                        </div>
                        <h5 class="mb-0 title">{{ item.name }}</h5>
                    </div>
                </li>
            </ul>
        </div><!--end col-->
    </div><!--end row-->
</template>

<script setup>
import { ref, onMounted } from 'vue';
import feather from 'feather-icons'

const datas = ref([
    {icon: 'monitor', name: 'Fully Responsive'},
    {icon: 'heart', name: 'Browser Compatibility'},
    {icon: 'eye', name: 'Retina Ready'},
    {icon: 'code', name: 'Built With SASS'},
    {icon: 'bold', name: 'Latest Bootstrap'},
    {icon: 'settings', name: 'Easy to customize'},
    {icon: 'user-check', name: 'W3c Valid Code'},
    {icon: 'feather', name: 'Feather Icons'},
])

onMounted(() => {
    feather.replace()
})

</script>

<style lang="scss" scoped></style>