<template>
    <navbar />
    <hero />

    <section class="section">
        <modernitem :containerclass="'container'" :gridrow="'row row-cols-lg-3 row-cols-md-2 mb-4 pb-2'" />
    </section>
    <footers />
    <backtotop />
</template>

<script setup>
import navbar from '@/components/navbar/navbar.vue';
import hero from '@/components/portfolio/portfolio-hero.vue';
import modernitem from '@/components/portfolio/modern-portfolio/modern-item.vue';
import footers from '@/components/footer/footer.vue';
import backtotop from '@/components/back-to-top.vue'

</script>

<style lang="scss" scoped></style>