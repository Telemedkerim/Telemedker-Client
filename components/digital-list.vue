<template>
    <ul class="list-unstyled text-muted mt-3">
        <li v-for="item in datas" :key="item" class="mb-0"><span class="text-primary h5 me-2"><i
                    class="uil uil-check-circle align-middle"></i></span>{{ item }}</li>
    </ul>
</template>

<script setup>

import { ref } from 'vue';

const datas = ref(['Digital Marketing Solutions for Tomorrow', 'Our Talented & Experienced Marketing Agency', 'Create your own skin to match your brand'])

</script>

<style lang="scss" scoped></style>