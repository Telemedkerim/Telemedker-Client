<template>
    <div class="row align-items-center">
        <div class="col-lg-5 col-md-6">
            <img src="../../assets/images/saas/1.png" class="img-fluid" alt="">
        </div><!--end col-->

        <div class="col-lg-7 col-md-6 mt-4 pt-2 mt-sm-0 pt-sm-0">
            <div class="ms-lg-5">
                <div class="section-title">
                    <span class="badge rounded-pill bg-soft-primary">Components</span>
                    <h4 class="title mt-3 mb-4">Detailed block and <br> component library</h4>
                    <p class="text-muted para-desc mb-0">Whether you’re building a simple page or coming up with
                        concepts for a whole new web app, we’ve prepared the UI tools you need for an amazing
                        development experience.</p>
                </div>

                <ul class="list-unstyled text-muted mb-0 mt-4">
                    <li v-for="item in datas" :key="item" class="list-inline-item me-lg-5 me-4"><span class="text-primary h3 me-2"><i
                                :class="item.icon"></i></span>{{item.name}}</li>
                </ul>
            </div>
        </div><!--end col-->
    </div><!--end row-->
</template>

<script setup>
import { ref } from 'vue';

const datas = ref([
    { icon: 'uil uil-flip-h', name: 'Base Components' },
    { icon: 'uil uil-flip-h-alt', name: 'Application Components' },
    { icon: 'uil uil-ruler', name: 'Marketing Components' },
])
</script>

<style lang="scss" scoped></style>