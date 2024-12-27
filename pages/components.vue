<template>
    <navbar />

    <section class="bg-half-170 d-table bg-light w-100"
        :style="{ 'background-image': 'url(' + (image) + ')', backgroundPosition: 'center' }">
        <div class="container">
            <div class="row mt-5 justify-content-center">
                <div class="col-12">
                    <div class="heading-title text-center">
                        <h2 class="title mb-3">Components</h2>
                        <p class="para-desc mx-auto text-muted mb-0">Bootstrap is a free and open-source CSS framework
                            directed at responsive, mobile-first front-end web development.</p>
                    </div>
                </div><!--end col-->
            </div><!--end row-->
        </div><!--end container-->
    </section><!--end section-->
    <shape />

    <section class="section">
        <ClientOnly >
        <components />
        </ClientOnly>
    </section>
    <footers />
    <backtotop />
</template>

<script setup>
import navbar from '@/components/navbar/navbar.vue';
import image from '../assets/images/bg/bg-lines-one.png';
import shape from '@/components/shape-light.vue';
import components from '@/components/component.vue';
import footers from '@/components/footer/footer.vue';
import backtotop from '@/components/back-to-top.vue'

</script>

<style lang="scss" scoped></style>