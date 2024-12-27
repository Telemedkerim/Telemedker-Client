<template>
    <navbar />
    <hero />

    <section class="section">
        <masonryitem :containerclass="'container'" :masonrywidth="290" />
    </section>
    <footers />
    <backtotop />
</template>

<script setup>
import navbar from '@/components/navbar/navbar.vue';
import hero from '@/components/portfolio/portfolio-hero.vue';
import masonryitem from '@/components/portfolio/masonry-portfolio/masonry-item.vue';
import footers from '@/components/footer/footer.vue';
import backtotop from '@/components/back-to-top.vue'

</script>

<style lang="scss" scoped></style>