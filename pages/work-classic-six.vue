<template>
    <navbar />
    <hero />

    <section class="section">
        <classicitem :containerclass="'container-fluid'" :gridrow="'row row-cols-lg-6 row-cols-md-2'" />
    </section>
    <footers />
    <backtotop />
</template>

<script setup>
import navbar from '@/components/navbar/navbar.vue';
import hero from '@/components/portfolio/portfolio-hero.vue';
import classicitem from '@/components/portfolio/classic-portfolio/classic-item.vue';
import footers from '@/components/footer/footer.vue';
import backtotop from '@/components/back-to-top.vue'

</script>

<style lang="scss" scoped></style>