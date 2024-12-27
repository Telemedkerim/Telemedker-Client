<template>
    <navbar />

    <!-- Start -->
    <section class="bg-half-170 d-table w-100">
        <div class="container">
            <div class="row mt-5">
                <div class="col-12">
                    <div class="heading-title">
                        <h4 class="display-4 fw-bold mb-3">We are
                            <vue-typewriter-effect class="typewrite text-primary position-relative text-type-element"
                                data-period="2000" :strings='["Creative", "Modern", "Studio", "Brand"]' /> <span
                                class="wrap">
                            </span><br>Work Smart. Not Hard.
                        </h4>
                        <p class="para-desc text-muted mb-0">
                            <description />
                        </p>
                    </div>
                </div><!--end col-->
            </div><!--end row-->
        </div><!--end container-->
    </section><!--end section-->
    <!-- End -->
    <ClientOnly>
        <cta />
    </ClientOnly>

    <section class="pt-md-0 cta-section">
        <div class="container">
            <div class="row">
                <div class="col-lg-8 col-md-6">
                    <div class="row mt-4">
                        <logos :logo=true />
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section class="section">
        <project />
        <div class="container mt-100 mt-60">
            <teams />
        </div>
    </section>
    <section class="section p-0">
        <subscribe />
    </section>
    <footers :footerbar="'footer-bar'" />
    <backtotop />
</template>

<script setup>
import navbar from '@/components/navbar/navbar.vue';
import VueTypewriterEffect from "vue-typewriter-effect";
import cta from '@/components/studio/studio-cta.vue';
import logos from '@/components/company-logos.vue';
import project from '@/components/studio/studio-project.vue';
import teams from '@/components/studio/studio-team.vue';
import subscribe from '@/components/studio/studio-subscribe.vue';
import backtotop from '@/components/back-to-top.vue';
import footers from '@/components/footer/footer.vue'
</script>

<style lang="scss" scoped></style>