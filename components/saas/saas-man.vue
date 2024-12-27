<template>
    <div class="row justify-content-center">
        <div class="col-lg-8 col-md-10">
            <div class="text-center">
                <h1 class="display-2"><i class="mdi mdi-format-quote-open text-primary"></i></h1>
                <p class="text-muted h5 fst-italic">{{ data }}</p>

                <div class="mt-4">
                    <img src="../../assets/images/client/01.jpg"
                        class="img-fluid avatar avatar-md-md rounded-circle shadow" alt="">
                    <h6 class="text-primary mt-3 mb-0">Thomas Israel</h6>
                    <small class="text-muted">C.E.O</small>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const data = ref(`" It seems that only fragments of the original text remain in the Lorem Ipsum texts used today. The most well-known dummy text is the 'Lorem Ipsum', which is said to have originated in the 16th century. "`)
</script>

<style lang="scss" scoped></style>