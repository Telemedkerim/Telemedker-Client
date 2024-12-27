<template>
    <navbar />
    <hero />
 
    <section class="section">
 
       <griditem :containerclass="'container'" :gridrow="'row row-cols-lg-2 row-cols-md-2 mb-4 pb-2'" :row="'row justify-content-center'" :col="'col-lg-10'" />
 
    </section>
    <footers />
    <backtotop />
 </template>
 
 <script setup>
 import navbar from '@/components/navbar/navbar.vue';
 import hero from '@/components/portfolio/portfolio-hero.vue';
 import griditem from '@/components/portfolio/grid-portfolio/grid-item.vue';
 import footers from '@/components/footer/footer.vue';
 import backtotop from '@/components/back-to-top.vue'
 
 </script>
 
 <style lang="scss" scoped></style>