<template>
    <div class="row align-items-center">
        <div class="col-md-7">
            <div class="me-lg-5">
                <div class="section-title">
                    <h6 class="text-primary">Collaborate</h6>
                    <h4 class="title mb-4">Collaborate with your <br> team anytime, anywhere.</h4>
                    <p class="text-muted para-desc mb-0">
                        <description />
                    </p>
                </div>

                <ul class="list-unstyled text-muted mb-0 mt-4">
                    <li v-for="item in datas" :key="item" class="list-inline-item me-lg-5 me-4"><span class="text-primary h5 me-2"><i
                                class="uil uil-check-circle align-middle"></i></span>{{item}}</li>
                </ul>
            </div>
        </div><!--end col-->

        <div class="col-md-5 mt-4 mt-sm-0 pt-2 pt-sm-0">
            <img src="../../assets/images/saas/1.png" class="img-fluid" alt="">
        </div><!--end col-->
    </div><!--end row-->
</template>

<script setup>
import { ref } from 'vue';

const datas = ref(['Organize your data', 'Work with any team', 'Business analytics', 'Always in sync', 'Embedded analytics'])

</script>

<style lang="scss" scoped></style>