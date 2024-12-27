<template>
    <navbar />

    <!-- Home Start -->
    <section class="bg-half-170 d-table bg-light w-100"
        :style="{ 'background-image': 'url(' + (image) + ')', backgroundPosition: 'center' }">
        <div class="container">
            <div class="row mt-5 justify-content-center">
                <div class="col-12">
                    <div class="heading-title text-center">
                        <h2 class="title mb-3">Meet Our Team</h2>
                        <p class="para-desc mx-auto text-muted">Explore and learn more about everything from machine
                            learning and global payments to scaling your team.</p>
                        <div class="mt-4 pt-2">
                            <a href="javascript:void(0)" class="btn btn-soft-primary"><i
                                    class="uil uil-envelope align-middle h5"></i> Contact us</a>
                        </div>
                    </div>
                </div><!--end col-->
            </div><!--end row-->
        </div><!--end container-->
    </section><!--end section-->
    <shape />

    <section class="section">
        <teams />
        <div class="container-fluid mt-100 mt-60">
            <cta />
        </div>
        <div class="container mt-100 mt-60">
            <question />
        </div>
    </section>
    <footers />
    <backtotop />
</template>

<script setup>
import navbar from '@/components/navbar/navbar.vue';
import image from '../assets/images/bg/bg-lines-one.png';
import shape from '@/components/shape-light.vue';
import teams from '@/components/page-team/teams.vue';
import cta from '@/components/page-team/cta.vue';
import question from '@/components/page-team/team-question.vue';
import footers from '@/components/footer/footer.vue';
import backtotop from '@/components/back-to-top.vue'

</script>

<style lang="scss" scoped></style>