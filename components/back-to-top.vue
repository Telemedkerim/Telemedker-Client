<template>
    <!-- Back to home Start -->
    <div v-if="back" class="back-to-home rounded d-none d-sm-block">
        <NuxtLink to="/" class="btn btn-icon btn-primary"><i data-feather="home" class="icons"></i></NuxtLink>
    </div>
    <!-- Back to home End -->

    <!-- Back to top -->
    <a v-else href="#" @click="scrollToTop" v-show="showTopButton"
        class="btn btn-icon btn-pills btn-primary back-to-top"><i data-feather="arrow-up" class="icons"></i></a>
    <!-- Back to top -->
</template>

<script setup>
import { ref, onMounted, onUnmounted, defineProps } from 'vue';
import feather from 'feather-icons'

defineProps({
    back: {
        type: Boolean,
        required: true
    }
})

const showTopButton = ref(false);

onMounted(() => {
    window.addEventListener('scroll', handleScroll);
    feather.replace();
});

onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll);
});

function scrollToTop() {
    window.scrollTo(0, 0);
}

function handleScroll() {
    if (
        document.body.scrollTop >= 400 ||
        document.documentElement.scrollTop >= 400
    ) {
        showTopButton.value = true
    } else {
        showTopButton.value = false
    }
}
</script>

<style lang="scss" scoped></style>